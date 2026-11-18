'use client';

import React, { useEffect, useRef } from 'react';

export default function Portfolio({ onOpenDiscuss }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const isMobile = () => window.matchMedia('(max-width: 991px)').matches;
    const slides = Array.from(document.querySelectorAll('.swiper-slide.cases'));
    if (!slides.length) return;

    let G = [...slides];
    let K = [];

    const updateZIndex = () => {
      G.forEach((el, idx) => {
        el.style.zIndex = String(G.length - idx);
      });
      K.forEach((el, idx) => {
        el.style.zIndex = String(idx + 1);
      });
    };

    const updateVisibility = (slide, deg) => {
      if (isMobile()) {
        slide.querySelectorAll('.cases-slide-front-wrapper, .cases-slide-back-wrapper').forEach((w) => {
          w.style.visibility = '';
        });
        return;
      }
      const isTurned = Math.abs(deg) >= 90;
      const front = slide.querySelector('.cases-slide-front-wrapper');
      const back = slide.querySelector('.cases-slide-back-wrapper');
      if (front) front.style.visibility = isTurned ? 'hidden' : 'visible';
      if (back) back.style.visibility = isTurned ? 'visible' : 'hidden';
    };

    const flipCard = (slide, targetDeg) => {
      slide.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
      slide.style.transform = `translate(50%) rotateY(${targetDeg}deg)`;
      setTimeout(() => {
        updateVisibility(slide, targetDeg);
      }, 150);

      if (targetDeg === -180) {
        if (!K.includes(slide)) {
          const idx = G.indexOf(slide);
          if (idx !== -1) G.splice(idx, 1);
          K.push(slide);
        }
      } else {
        if (!G.includes(slide)) {
          const idx = K.indexOf(slide);
          if (idx !== -1) K.splice(idx, 1);
          G.unshift(slide);
        }
      }
      updateZIndex();
    };

    // Initialize spread 03/04 open by default on desktop (matching reference screenshot media_1794766754705_dbf9f254.jpg)
    if (!isMobile()) {
      if (slides[0]) {
        slides[0].style.transform = 'translate(50%) rotateY(-180deg)';
        updateVisibility(slides[0], -180);
        K.push(slides[0]);
        G = G.filter((s) => s !== slides[0]);
      }
      if (slides[1]) {
        slides[1].style.transform = 'translate(50%) rotateY(-180deg)';
        updateVisibility(slides[1], -180);
        K.push(slides[1]);
        G = G.filter((s) => s !== slides[1]);
      }
      if (slides[2]) {
        slides[2].style.transform = 'translate(50%) rotateY(0deg)';
        updateVisibility(slides[2], 0);
      }
      updateZIndex();
    }

    // Attach click and pointer handlers to turn pages
    const cleanupFns = [];
    slides.forEach((slide) => {
      const front = slide.querySelector('.cases-slide-front-wrapper');
      const back = slide.querySelector('.cases-slide-back-wrapper');

      if (front) {
        const handleFrontClick = (e) => {
          if (e.target.closest('a, button')) return;
          if (!isMobile()) flipCard(slide, -180);
        };
        front.addEventListener('click', handleFrontClick);
        cleanupFns.push(() => front.removeEventListener('click', handleFrontClick));
      }

      if (back) {
        const handleBackClick = (e) => {
          if (e.target.closest('a, button')) return;
          if (!isMobile()) flipCard(slide, 0);
        };
        back.addEventListener('click', handleBackClick);
        cleanupFns.push(() => back.removeEventListener('click', handleBackClick));
      }
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <div id="cases" className="cases-overflow-wrapper">
      <section data-w-id="0c154e53-b68c-3aaf-6b44-4d5609c794c2" className="section cases">
                <div className="w-layout-blockcontainer container cases w-container">
                    <div className="case-swiper-star-bg w-embed"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1372 1373" fill="none">
                            <path
                                d="M758.09 930.425L1372 1372.01L930.414 758.09L1372 686L930.424 613.899L1372 0.0108643L758.09 441.586L686 0L613.899 441.586L0 0.0108643L441.575 613.899L0 686L441.586 758.09L0 1372.01L613.91 930.425L686 1372L758.09 930.425Z"
                                fill="#104EFF"></path>
                        </svg></div>
                    <h2 className="hidden">Cases</h2>
                    <div className="case-swiper">
                        <div className="swiper-bg-wrapper"><a href="/cases/trdelnik" className="swiper-bg-block _1 left"><img
                                    src="/wf/cases/trdelnik-portrait.webp" loading="lazy" width="411" height="556"
                                    alt="" draggable="false" className="cases-img-dec" />
                                <p className="case-spine">Trdelnik</p>
                            </a><a href="/cases/utah-leather-repair" className="swiper-bg-block _2 left"><img
                                    src="/wf/cases/utah-leather-repair-portrait.webp" loading="lazy" width="411"
                                    height="556" alt="" draggable="false" className="cases-img-dec" />
                                <p className="case-spine">Utah Leather Repair</p>
                            </a><a href="/cases/umbrella" className="swiper-bg-block _3 left"><img
                                    src="/wf/cases/umbrella-portrait.webp" loading="lazy" width="411" height="556"
                                    alt="" draggable="false" className="cases-img-dec" />
                                <p className="case-spine">Umbrella</p>
                            </a><a href="/cases/flix-auto-transport" className="swiper-bg-block _4 left"><img
                                    src="/wf/cases/flix-auto-transport-portrait.webp" loading="lazy" width="411"
                                    height="556" alt="" draggable="false" className="cases-img-dec" />
                                <p className="case-spine">Flix Auto Transport</p>
                            </a><a href="/cases/zero" className="swiper-bg-block _5 left"><img
                                    src="/wf/cases/zero-portrait.webp" loading="lazy" width="411" height="556" alt=""
                                    draggable="false" className="cases-img-dec" />
                                <p className="case-spine">Zero</p>
                            </a><a href="/cases/tesla-roadster-concept" className="swiper-bg-block _5 right"><img
                                    src="/wf/cases/tesla-roadster-concept-portrait.webp" loading="lazy" width="411"
                                    height="556" alt="" draggable="false" className="cases-img-dec" />
                                <p className="case-spine">Tesla Roadster (Concept)</p>
                            </a><a href="/cases/bmw-m-concept" className="swiper-bg-block _4 right"><img
                                    src="/wf/cases/bmw-m-concept-portrait.webp" loading="lazy" width="411" height="556"
                                    alt="" draggable="false" className="cases-img-dec" />
                                <p className="case-spine">BMW M Wind Tunnel (Concept)</p>
                            </a><a href="/cases/yps" className="swiper-bg-block _3 right"><img
                                    src="/wf/cases/yps-portrait.webp" loading="lazy" width="411" height="556" alt=""
                                    draggable="false" className="cases-img-dec" />
                                <p className="case-spine">YPS</p>
                            </a><a href="/cases/dein-sitz" className="swiper-bg-block _2 right"><img
                                    src="/wf/cases/dein-sitz-portrait.webp" loading="lazy" width="411" height="556"
                                    alt="" draggable="false" className="cases-img-dec" />
                                <p className="case-spine">Dein Sitz</p>
                            </a><a href="/cases/house-drafters" className="swiper-bg-block _1 right"><img
                                    src="/wf/cases/house-drafters-portrait.webp" loading="lazy" width="411" height="556"
                                    alt="" draggable="false" className="cases-img-dec" />
                                <p className="case-spine">House Drafters</p>
                            </a></div>
                        <ol role="list" className="swiper-wrapper w-list-unstyled">
                            <li className="swiper-cover">
                                <div className="cases-slide-front-wrapper">
                                    <p className="cases-slide-counter">04 / 04</p>
                                    <div className="cases-slide-content">
                                        <blockquote className="cases-slide-comment">“A very modern style with real technical
                                            depth, and a CMS our team can actually edit.”<a href="/cases/hikemind"
                                                className="cases-link btn-bubble">view case<span className="btn-bubble__circle"
                                                    aria-hidden="true"></span></a></blockquote>
                                        <div className="author-block"><span className="author-rating"
                                                aria-label="Rated 5.0 out of 5">5.0</span>
                                            <p className="author-name">HikeMind</p>
                                        </div>
                                        <p className="cases-label">Development</p>
                                    </div>
                                </div>
                                <div className="cases-slide-back-wrapper">
                                    <picture>
                                        <source media="(max-width: 991px)" srcSet="/wf/cases/givtrade.webp" /><img
                                            src="/wf/cases/givtrade-portrait.webp" loading="lazy" width="411"
                                            height="556"
                                            alt="GivTrade homepage: a MetaTrader 5 trading screen in a deep green field under the headline “Forget Following. You Were Built to Lead”."
                                            draggable="false" className="cases-img" />
                                    </picture>
                                </div>
                            </li>
                            <li className="swiper-slide cases">
                                <div className="cases-slide-front-wrapper">
                                    <p className="cases-slide-counter">01 / 04</p>
                                    <div className="cases-slide-content">
                                        <blockquote className="cases-slide-comment">“They made a regulated broker feel fast
                                            and safe at once, in English and Arabic.”<a href="/cases/givtrade"
                                                className="cases-link btn-bubble">view case<span className="btn-bubble__circle"
                                                    aria-hidden="true"></span></a></blockquote>
                                        <div className="author-block">
                                            <p className="author-name">GivTrade</p>
                                        </div>
                                        <p className="cases-label">Development</p>
                                    </div>
                                </div>
                                <div className="cases-slide-back-wrapper">
                                    <picture>
                                        <source media="(max-width: 991px)"
                                            srcSet="/wf/cases/imperium-completions.webp" /><img
                                            src="/wf/cases/imperium-completions-portrait.webp" loading="lazy"
                                            width="411" height="556"
                                            alt="Imperium Completions homepage: a metallic 3D emblem lit against a deep-space nebula, under the line “from sleek landing pages to complex web &amp; applications”."
                                            draggable="false" className="cases-img" />
                                    </picture>
                                </div>
                            </li>
                            <li className="swiper-slide cases">
                                <div className="cases-slide-front-wrapper">
                                    <p className="cases-slide-counter">02 / 04</p>
                                    <div className="cases-slide-content">
                                        <blockquote className="cases-slide-comment">“They got that our homepage had to be
                                            the portfolio piece itself, and the 3D emblem they modelled in-house does
                                            exactly that.”<a href="/cases/imperium-completions"
                                                className="cases-link btn-bubble">view case<span className="btn-bubble__circle"
                                                    aria-hidden="true"></span></a></blockquote>
                                        <div className="author-block"><span className="author-rating"
                                                aria-label="Rated 4.9 out of 5">4.9</span>
                                            <p className="author-name">Imperium Completions</p>
                                        </div>
                                        <p className="cases-label">Development</p>
                                    </div>
                                </div>
                                <div className="cases-slide-back-wrapper">
                                    <picture>
                                        <source media="(max-width: 991px)" srcSet="/wf/cases/i4b.webp" /><img
                                            src="/wf/cases/i4b-portrait.webp" loading="lazy" width="411" height="556"
                                            alt="i4B homepage: an electric car seen from above with a dotted circuit outline, under the headline “Built for mobility. Engineered to lead.”"
                                            draggable="false" className="cases-img" />
                                    </picture>
                                </div>
                            </li>
                            <li className="swiper-slide cases">
                                <div className="cases-slide-front-wrapper">
                                    <p className="cases-slide-counter">03 / 04</p>
                                    <div className="cases-slide-content">
                                        <blockquote className="cases-slide-comment">“Engineering software is hard to show.
                                            The site finally looks as precise as the product.”<a href="/cases/i4b"
                                                className="cases-link btn-bubble">view case<span className="btn-bubble__circle"
                                                    aria-hidden="true"></span></a></blockquote>
                                        <div className="author-block">
                                            <p className="author-name">i4B</p>
                                        </div>
                                        <p className="cases-label">Development</p>
                                    </div>
                                </div>
                                <div className="cases-slide-back-wrapper">
                                    <picture>
                                        <source media="(max-width: 991px)" srcSet="/wf/cases/hikemind.webp" /><img
                                            src="/wf/cases/hikemind-portrait.webp" loading="lazy" width="411"
                                            height="556"
                                            alt="HikeMind homepage: a wireframe mountain range in the dark under the headline “Brand. Data. AI. Integrated.”"
                                            draggable="false" className="cases-img" />
                                    </picture>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
  );
}
