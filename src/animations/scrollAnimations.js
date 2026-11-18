import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    // 1. Navigation Header Show/Hide
    ScrollTrigger.create({
      trigger: '.section.header',
      start: 'bottom top',
      onEnter: () => document.body.classList.add('header-hidden'),
      onLeaveBack: () => document.body.classList.remove('header-hidden'),
    });

    let lastScroll = 0;
    ScrollTrigger.create({
      onUpdate: (self) => {
        const current = self.scroll();
        if (current > 300) {
          if (self.direction === 1) {
            document.body.classList.add('header-hidden');
          } else {
            document.body.classList.remove('header-hidden');
          }
        } else {
          document.body.classList.remove('header-hidden');
        }
        lastScroll = current;
      },
    });

    // 2. Section 02 -> About Us Sticky Section Pinned Timeline (Tiles Morph into Sentence)
    const ed = document.querySelector('.sticky-section-wrapper.about-redesign');
    const eu = ed ? ed.querySelector('.section.about-us') : null;
    const ep = ed ? ed.querySelector('.about-final') : null;

    if (ed && eu && ep) {
      const tiles = gsap.utils.toArray('.about-tile');
      const aboutBaseTexts = [
        ed.querySelector('.about-base .subtitle'),
        ed.querySelector('.about-base .section-title'),
        ed.querySelector('.about-base .about-base-desc'),
      ].filter(Boolean);
      const asLines = gsap.utils.toArray('.as-line');
      const slotMap = {
        clapper: '.as-slot.slot-clapper',
        tshirt: '.as-slot.slot-tshirt',
        bag: '.as-slot.slot-bag',
        ghost: '.as-slot.slot-ghost',
        music: '.as-slot.slot-music',
      };
      const getSlot = (tile) => (slotMap[tile.dataset.tile || ''] ? ep.querySelector(slotMap[tile.dataset.tile || '']) : null);
      const getRem = () => parseFloat(getComputedStyle(document.documentElement).fontSize) || 1;
      const getCenter = (el) => {
        const rect = el.getBoundingClientRect();
        return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      };
      const getOriginalCenter = (el) => {
        const c = getCenter(el);
        return {
          x: c.x - (Number(gsap.getProperty(el, 'x')) || 0),
          y: c.y - (Number(gsap.getProperty(el, 'y')) || 0),
        };
      };
      const getViewportCenter = () => {
        const r = eu.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + window.innerHeight / 2 };
      };

      gsap.set(ep.querySelectorAll('.as-word'), { opacity: 0 });

      // Base headline slight upward travel
      const baseEl = ed.querySelector('.about-base');
      if (baseEl) {
        gsap.fromTo(
          baseEl,
          {
            y: () => {
              const rem = getRem();
              return Math.min(151 * rem, 0.1258 * window.innerHeight) - Math.min(60 * rem, 0.05 * window.innerHeight);
            },
          },
          {
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: ed,
              start: 'top 35%',
              end: 'top top',
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      }

      // Tile dual-icon gentle flip idle loop
      const flipTweens = [];
      tiles.forEach((tile, idx) => {
        const icons = tile.querySelectorAll('.tile-icon');
        if (icons.length < 2) return;
        const [iconA, iconB] = icons;
        gsap.set(iconA, { scale: 1, transformOrigin: '50% 50%' });
        gsap.set(iconB, { scale: 0, transformOrigin: '50% 50%' });
        const flipTl = gsap.timeline({ delay: 0.4 * idx, repeat: -1, yoyo: true, repeatDelay: 1 });
        flipTl
          .to({}, { duration: 0.5 })
          .to(iconA, { scale: 0, duration: 0.5, ease: 'power2.in' })
          .to(iconB, { scale: 1, duration: 0.5, ease: 'power2.out' })
          .to({}, { duration: 0.5 });
        flipTweens.push(flipTl);
      });

      // Main scrub pinned timeline
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: ed,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      let morphTweens = [];
      let state = 'resting';

      mainTl.eventCallback('onUpdate', () => {
        const p = mainTl.progress();
        if (state === 'resting' && p > 0.03) {
          state = 'morphing';
          flipTweens.forEach((t) => t.pause());
          tiles.forEach((tile) => {
            const icons = tile.querySelectorAll('.tile-icon');
            if (icons.length < 2) return;
            const r = gsap.timeline();
            r.to(icons[1], { scale: 0, duration: 0.5, ease: 'power2.in' }).to(icons[0], {
              scale: 1,
              duration: 0.5,
              ease: 'power2.out',
            });
            morphTweens.push(r);
          });
        } else if (state === 'morphing' && p < 0.02) {
          state = 'resting';
          morphTweens.forEach((t) => t.kill());
          morphTweens = [];
          flipTweens.forEach((t) => t.restart(true));
          gsap.set(tiles, { clearProps: 'transform' });
          gsap.set(ep.querySelectorAll('.as-word'), { opacity: 0 });
          mainTl.invalidate();
        }
      });

      // Step 1: Text translates out up
      mainTl.to(aboutBaseTexts, { y: -60, opacity: 0, duration: 0.3, stagger: 0.05, ease: 'power1.in' }, 0);

      // Step 2: Tiles glide into horizontal line in viewport center
      tiles.forEach((tile, idx) => {
        const slot = getSlot(tile);
        mainTl.to(
          tile,
          {
            x: () => getViewportCenter().x + (idx - 2) * 125 * getRem() - getOriginalCenter(tile).x,
            y: () => getViewportCenter().y - getOriginalCenter(tile).y,
            scale: () => (slot ? slot.offsetWidth : 97 * getRem()) / tile.offsetWidth,
            transformOrigin: '50% 50%',
            duration: 0.45,
            ease: 'power2.inOut',
          },
          0.12 + 0.05 * idx
        );
      });

      // Step 3: Sentence container fades in
      mainTl.to(ep, { opacity: 1, duration: 0.001 }, 0.7);

      // Step 4: Each tile flies into its target slot in the sentence
      [
        { name: 'ghost', xAt: 0.3, yAt: 0, yDur: 0.28, yEase: 'power2.out' },
        { name: 'bag', xAt: 0.5, yAt: 0.12, yDur: 0.34, yEase: 'back.out(1.4)' },
        { name: 'music', xAt: 0.7, yAt: 0.05, yDur: 0.45, yEase: 'power3.out' },
        { name: 'tshirt', xAt: 0.9, yAt: 0.2, yDur: 0.4, yEase: 'back.out(1.6)' },
        { name: 'clapper', xAt: 0.9, yAt: 0.3, yDur: 0.45, yEase: 'power2.inOut' },
      ].forEach((step) => {
        const tile = tiles.find((t) => t.dataset.tile === step.name);
        const slot = tile && getSlot(tile);
        if (tile && slot) {
          mainTl.to(
            tile,
            {
              y: () => getCenter(slot).y - getOriginalCenter(tile).y,
              duration: step.yDur,
              ease: step.yEase,
            },
            0.7 + step.yAt
          );
          mainTl.to(
            tile,
            {
              x: () => getCenter(slot).x - getOriginalCenter(tile).x,
              duration: 0.5,
              ease: 'power1.inOut',
            },
            0.7 + step.xAt
          );
        }
      });

      // Step 5: Words slide in from behind slots
      const lineDelays = [0.65, 0.85, 1.05, 1.25];
      asLines.forEach((line, lineIdx) => {
        const children = Array.from(line.children);
        const slotIdx = children.findIndex((c) => c.classList.contains('as-slot'));
        const startTime = 0.7 + lineDelays[lineIdx];
        children
          .filter((c) => c.classList.contains('as-word'))
          .forEach((word) => {
            const offsetX = slotIdx >= 0 && children.indexOf(word) > slotIdx ? 50 : -50;
            mainTl.fromTo(word, { x: offsetX }, { x: 0, duration: 0.35, ease: 'power1.out' }, startTime);
            mainTl.set(word, { opacity: 1 }, startTime + 0.07);
          });
      });

      mainTl.to({}, { duration: 0.3 });
    }

    // 3. Trust Section
    const trustTrigger = document.querySelector('.sticky-section-wrapper.trust');
    const trustIcon = document.querySelector('.trust-icon-wrapper');
    const trustTitle = document.querySelector('.trust-title');
    const trustBtn = document.querySelector('.trust-button');

    if (trustTrigger) {
      const trustTl = gsap.timeline({
        scrollTrigger: {
          trigger: trustTrigger,
          start: 'top 50%',
          end: 'top top',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      if (trustIcon) {
        trustTl.fromTo(trustIcon, { scale: 0.6, opacity: 0.3 }, { scale: 1, opacity: 1, ease: 'none' }, 0);
      }
      if (trustTitle) {
        trustTl.fromTo(trustTitle, { xPercent: 30, opacity: 0.5 }, { xPercent: 0, opacity: 1, ease: 'none' }, 0);
      }
      if (trustBtn) {
        trustTl.fromTo(trustBtn, { xPercent: -30, opacity: 0.5 }, { xPercent: 0, opacity: 1, ease: 'none' }, 0);
      }
    }

    // 4. Services Parallax
    const cardList = document.querySelector('.services-card-list');
    const greenCard = document.querySelector('.services-card.green');
    const orangeCard = document.querySelector('.services-card.orange');
    const pinkCard = document.querySelector('.services-card.pink');

    if (cardList) {
      if (greenCard) {
        gsap.fromTo(
          greenCard,
          { yPercent: 40 },
          {
            yPercent: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: cardList,
              start: 'top bottom',
              end: 'top 46%',
              scrub: 1.2,
              invalidateOnRefresh: true,
            },
          }
        );
      }
      if (orangeCard) {
        gsap.fromTo(
          orangeCard,
          { yPercent: 60 },
          {
            yPercent: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: cardList,
              start: 'top bottom',
              end: 'top 35%',
              scrub: 1.2,
              invalidateOnRefresh: true,
            },
          }
        );
      }
      if (pinkCard) {
        const getPerspective = () => 1600 * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);
        gsap.fromTo(
          pinkCard,
          { yPercent: 50, rotationY: 0, transformPerspective: getPerspective },
          {
            yPercent: 0,
            rotationY: 360,
            transformPerspective: getPerspective,
            ease: 'none',
            scrollTrigger: {
              trigger: cardList,
              start: 'top bottom',
              end: 'top 46%',
              scrub: 1.2,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    }

    // 5. Cases rotating star
    const caseStar = document.querySelector('.case-swiper-star-bg');
    if (caseStar) {
      gsap.to(caseStar, {
        rotation: 180,
        ease: 'none',
        scrollTrigger: {
          trigger: '.section.cases',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }

    // 6. View all 3D doors
    const leftArrow = document.querySelector('.view-all-arrow.left');
    const rightArrow = document.querySelector('.view-all-arrow.right');
    if (leftArrow && rightArrow) {
      gsap.set(leftArrow, { transformOrigin: '100% 100%', yPercent: 50, y: 0 });
      gsap.set(rightArrow, { transformOrigin: '0% 50%', yPercent: -50, y: 0 });
      ScrollTrigger.create({
        trigger: '.section.view-all',
        start: 'top 75%',
        end: 'bottom 25%',
        onEnter: () => {
          gsap.to(leftArrow, { rotationY: -45, duration: 1, ease: 'back.out(1.7)', overwrite: 'auto' });
          gsap.to(rightArrow, { rotationY: 45, duration: 1, ease: 'back.out(1.7)', delay: 0.1, overwrite: 'auto' });
        },
        onLeave: () => {
          gsap.to([leftArrow, rightArrow], { rotationY: 0, duration: 0.6, ease: 'power2.out', overwrite: 'auto' });
        },
        onEnterBack: () => {
          gsap.to(leftArrow, { rotationY: -45, duration: 1, ease: 'back.out(1.7)', overwrite: 'auto' });
          gsap.to(rightArrow, { rotationY: 45, duration: 1, ease: 'back.out(1.7)', delay: 0.1, overwrite: 'auto' });
        },
        onLeaveBack: () => {
          gsap.to([leftArrow, rightArrow], { rotationY: 0, duration: 0.6, ease: 'power2.out', overwrite: 'auto' });
        },
      });
    }

    // 7. Audit counters and progress bars
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach((card) => {
      const targetPercent = parseInt(card.dataset.percent || '80', 10);
      const numberEl = card.querySelector('.metric-number');
      const barEl = card.querySelector('.metric-bar-active');

      ScrollTrigger.create({
        trigger: card,
        start: 'top 85%',
        onEnter: () => {
          if (barEl) {
            gsap.to(barEl, { width: `${targetPercent}%`, duration: 1, ease: 'power2.out' });
          }
          if (numberEl) {
            const counter = { val: 0 };
            gsap.to(counter, {
              val: targetPercent,
              duration: 1.2,
              ease: 'power1.out',
              onUpdate: () => {
                numberEl.textContent = `${Math.round(counter.val)}%`;
              },
            });
          }
        },
      });
    });
  });

  return () => ctx.revert();
}
