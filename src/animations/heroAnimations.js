import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(CustomEase, MotionPathPlugin);

export function initHeroAnimations() {
  const isMobile = window.innerWidth <= 991;

  CustomEase.create('softEnd', 'M0,0 C0.903,1 0.818,1.001 1,1 ');

  const drawPath = document.querySelector('#draw-path');
  const penPath = document.querySelector('#pen-path');
  const linePen = document.querySelector('#line-pen');

  const heroDecs = [...document.querySelectorAll('[data-hero-dec]')].map((el) => ({
    el,
    progress: parseFloat(el.dataset.heroDec || '0'),
    shown: false,
  }));

  const lineCircles = [...document.querySelectorAll('.line-circle')].map((el) => ({
    el,
    progress: parseFloat(el.dataset.lineCircle || '0'),
    shown: false,
  }));

  const sausagePaths = document.querySelectorAll('.hero-dec-sausage svg path');

  if (!isMobile && drawPath && penPath && linePen) {
    const maxDecProgress = heroDecs.length ? Math.max(...heroDecs.map((e) => e.progress)) : 0.8;
    let dockReadyTriggered = false;
    const progressOffset = 0.15 * Math.min(1, Math.max(0, 1 - (window.innerWidth - 1920) / 2880));
    // Fast, responsive pen drawing duration (~3.8s) per user request
    const duration = 3.8 + ((0.15 - progressOffset) / 0.15) * 0.4;
    const pathLength = drawPath.getTotalLength ? drawPath.getTotalLength() : 3100;

    const tl = gsap.timeline({ paused: true });

    tl.set(drawPath, { strokeDasharray: pathLength, strokeDashoffset: pathLength, opacity: 1 })
      .to(drawPath, { strokeDashoffset: 0, duration, ease: 'softEnd' }, 0)
      .to(
        linePen,
        {
          motionPath: {
            path: penPath,
            align: drawPath,
            autoRotate: 90,
            alignOrigin: [0, 1],
          },
          transformOrigin: '0% 100%',
          duration,
          ease: 'softEnd',
        },
        0
      );

    tl.progress(progressOffset);

    // Initial states: hide decs and scale circles to 0
    gsap.set(heroDecs.map((e) => e.el), { opacity: 0, scale: 0.5 });
    gsap.set(lineCircles.map((e) => e.el), { scale: 0, transformOrigin: '50% 50%' });

    tl.eventCallback('onUpdate', () => {
      const p = tl.progress();
      heroDecs.forEach((item) => {
        if (!item.shown && p >= item.progress) {
          item.shown = true;
          gsap.to(item.el, { opacity: 1, scale: 1, duration: 0.45, ease: 'power2.out' });
        }
      });
      lineCircles.forEach((item) => {
        if (!item.shown && p >= item.progress) {
          item.shown = true;
          gsap.to(item.el, { scale: 1, duration: 0.4, ease: 'back.out(4)' });
        }
      });
      if (!dockReadyTriggered && p >= maxDecProgress) {
        dockReadyTriggered = true;
        gsap.delayedCall(0.45, () => document.documentElement.classList.add('dock-ready'));
      }
    });

    // Tween to 95% of duration
    tl.tweenTo(0.95 * tl.duration(), {
      onComplete: () => {
        document.documentElement.classList.add('dock-ready');
      },
    });

    // Sausage heartbeat loop
    if (sausagePaths.length) {
      gsap.set(sausagePaths, { scale: 1, transformOrigin: '50% 50%', transformBox: 'fill-box' });
      gsap
        .timeline({ repeat: -1 })
        .to(sausagePaths, { scale: 0.95, duration: 0.6, ease: 'power2.inOut', stagger: 0.2 })
        .to(sausagePaths, { scale: 1, duration: 0.6, ease: 'power2.inOut', stagger: 0.2 }, '-=0.4');
    }
  } else {
    // Fallback or mobile: reveal stickers directly
    gsap.fromTo(
      heroDecs.map((e) => e.el),
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(2)', stagger: 0.12, delay: 0.55 }
    );
    document.documentElement.classList.add('dock-ready');
  }

  // Floating continuous organic drift
  gsap.to('[data-space-float]', {
    x: () => gsap.utils.random(-20, 20),
    y: () => gsap.utils.random(-20, 20),
    duration: () => gsap.utils.random(6, 12),
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });

  // Continuous rotations
  document.querySelectorAll('[data-rotation]').forEach((el) => {
    const dir = Number(el.dataset.rotationDirection || 1);
    const speed = Number(el.dataset.rotationSpeed || 40);
    gsap.to(el, { rotation: 360 * dir, duration: speed, ease: 'none', repeat: -1 });
  });

  // Rotational sway
  document.querySelectorAll('[data-rotation-sway]').forEach((el) => {
    const swayFrom = Number(el.dataset.swayFrom || 10);
    const swayTo = Number(el.dataset.swayTo || 20);
    const swayDur = Number(el.dataset.swayDuration || 3);
    gsap
      .timeline({ repeat: -1 })
      .fromTo(el, { rotation: swayFrom }, { rotation: swayTo, duration: swayDur, ease: 'sine.inOut', yoyo: true, repeat: 1 });
  });

  // Mouse parallax on [data-cursor]
  const cursorElements = [...document.querySelectorAll('[data-cursor]')];
  if (cursorElements.length && window.innerWidth >= 992) {
    const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const items = cursorElements.map((el) => ({
      strength: Number(el.dataset.cursor) || gsap.utils.random(0.02, 0.1),
      xTo: gsap.quickTo(el, 'x', { duration: gsap.utils.random(0.2, 0.8), ease: 'power3.out' }),
      yTo: gsap.quickTo(el, 'y', { duration: gsap.utils.random(0.2, 0.8), ease: 'power3.out' }),
    }));

    const onMouseMove = (e) => {
      const dx = e.clientX - center.x;
      const dy = e.clientY - center.y;
      items.forEach((item) => {
        item.xTo(dx * item.strength);
        item.yTo(dy * item.strength);
      });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }

  return () => {};
}
