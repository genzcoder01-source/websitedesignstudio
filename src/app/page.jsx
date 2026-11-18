'use client';

import React, { useState, useEffect } from 'react';
import useLenis from '../hooks/useLenis';
import Navigation from '../components/Navigation';
import MenuModal from '../components/MenuModal';
import ContactModal from '../components/ContactModal';
import Hero from '../components/Hero';
import About from '../components/About';
import Trust from '../components/Trust';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import ViewAll from '../components/ViewAll';
import Audit from '../components/Audit';
import VibeSelector from '../components/VibeSelector';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import BottomDock from '../components/BottomDock';
import { initHeroAnimations } from '../animations/heroAnimations';
import { initScrollAnimations } from '../animations/scrollAnimations';

export default function Home() {
  useLenis();

  const [menuOpen, setMenuOpen] = useState(false);
  const [discussOpen, setDiscussOpen] = useState(false);
  const [discussIntent, setDiscussIntent] = useState('website');

  const openDiscuss = (intent = 'website') => {
    setDiscussIntent(intent);
    setDiscussOpen(true);
    window.dispatchEvent(new CustomEvent('modal:open'));
  };

  const closeDiscuss = () => {
    setDiscussOpen(false);
    window.dispatchEvent(new CustomEvent('modal:close'));
  };

  const openMenu = () => {
    setMenuOpen(true);
    window.dispatchEvent(new CustomEvent('modal:open'));
  };

  const closeMenu = () => {
    setMenuOpen(false);
    window.dispatchEvent(new CustomEvent('modal:close'));
  };

  useEffect(() => {
    // Set dynamic viewport height variable --vhx
    const updateVh = () => {
      document.documentElement.style.setProperty('--vhx', `${window.innerHeight}px`);
    };
    updateVh();
    window.addEventListener('resize', updateVh, { passive: true });

    // Mark as ready
    document.documentElement.classList.add('dock-ready', 'is-ready');

    // Initialize animations
    const cleanupHero = initHeroAnimations();
    const cleanupScroll = initScrollAnimations();

    return () => {
      window.removeEventListener('resize', updateVh);
      if (cleanupHero) cleanupHero();
      if (cleanupScroll) cleanupScroll();
    };
  }, []);

  return (
    <>
      <CustomCursor />

      <Navigation
        onOpenMenu={openMenu}
        onOpenDiscuss={() => openDiscuss('website')}
      />

      <MenuModal
        isOpen={menuOpen}
        onClose={closeMenu}
      />

      <ContactModal
        isOpen={discussOpen}
        onClose={closeDiscuss}
        initialIntent={discussIntent}
      />

      <main className="main">
        <Hero />
        
        {/* Organic wavy SVG separator between Hero and About */}
        <div className="hero-wave" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2315 160" fill="none">
            <path
              d="M-6 6 L311 47 C499 75 918 131 1092 121 C1309 108 1770 18 1987 6 C2205 -7 2373 6 2418 6 L2315 160 L0 160 Z"
              fill="#D3C5F6"
            />
          </svg>
        </div>

        <About />
        <Trust onOpenDiscuss={openDiscuss} />
        <Services onOpenDiscuss={openDiscuss} />
        <Portfolio onOpenDiscuss={openDiscuss} />
        <ViewAll />
        <Audit onOpenDiscuss={openDiscuss} />
        <VibeSelector onOpenDiscuss={openDiscuss} />
      </main>

      <Footer onOpenDiscuss={openDiscuss} />

      {/* Fixed bottom dock control bar */}
      <BottomDock
        onOpenMenu={openMenu}
        onOpenDiscuss={openDiscuss}
      />
    </>
  );
}
