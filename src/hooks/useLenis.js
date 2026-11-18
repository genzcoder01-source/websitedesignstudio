'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.4,
      gestureOrientation: 'vertical',
      infinite: false,
      autoRaf: true,
    });

    lenisRef.current = lenis;

    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Listen to modal open/close events to lock/unlock scroll
    const handleModalOpen = () => {
      lenis.stop();
      document.documentElement.classList.add('lenis-stopped');
    };

    const handleModalClose = () => {
      lenis.start();
      document.documentElement.classList.remove('lenis-stopped');
    };

    window.addEventListener('modal:open', handleModalOpen);
    window.addEventListener('modal:close', handleModalClose);

    return () => {
      window.removeEventListener('modal:open', handleModalOpen);
      window.removeEventListener('modal:close', handleModalClose);
      lenis.destroy();
    };
  }, []);

  return lenisRef;
}
