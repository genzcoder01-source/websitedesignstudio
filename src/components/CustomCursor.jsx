'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const wrapperRef = useRef(null);
  const blockRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const block = blockRef.current;
    if (!wrapper || !block) return;

    // Smooth dampening mouse follow
    const xTo = gsap.quickTo(block, 'x', { duration: 0.12, ease: 'power2.out' });
    const yTo = gsap.quickTo(block, 'y', { duration: 0.12, ease: 'power2.out' });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isPointer = !!target.closest('a, button, [role="button"], input, textarea, select, label, .w-button, .btn-bubble, .fixed-menu-button');
      const isDrag = !isPointer && !!target.closest('.case-swiper');

      wrapper.classList.toggle('pointer', isPointer);
      wrapper.classList.toggle('drag', isDrag);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="cursor-wrapper" aria-hidden="true">
      <div ref={blockRef} className="cursor-block">
        {/* Default lime green cursor arrow + "You" badge */}
        <div className="cursor-default">
          <div className="cursor-icon w-embed">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 41" fill="none">
              <g clipPath="url(#clip0_2401_1183)">
                <path
                  d="M0.828212 1.91819C0.707818 1.35129 1.3344 0.922307 1.81936 1.23963L33.6616 22.0966C34.2115 22.4568 33.9394 23.3124 33.2824 23.2888L16.8083 22.6944C16.1813 22.6718 15.6128 23.061 15.407 23.6538L10.0026 39.2266C9.78693 39.8476 8.89091 39.7918 8.75398 39.1488L0.828212 1.91819Z"
                  fill="#C2EC40"
                  stroke="#150734"
                  strokeWidth="0.779287"
                />
              </g>
              <defs>
                <clipPath id="clip0_2401_1183">
                  <rect width="35" height="41" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="cursor-text-block">
            <p>You</p>
          </div>
        </div>

        {/* Hover pointer: pink hand + "Click" */}
        <div className="cursor-pointer">
          <div className="cursor-icon w-embed">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" fill="none">
              <path
                d="M3.45898 1.46277C4.46575 0.954876 5.60162 0.873822 6.65332 1.17566L6.86328 1.24109L6.90137 1.25574C7.99776 1.67806 8.9307 2.44968 9.46484 3.53601L13.6631 12.0751C14.0569 11.5666 14.5675 11.1345 15.1807 10.8251C16.7795 10.0185 18.647 10.2915 19.9629 11.3514C20.3808 10.6728 20.986 10.0968 21.751 9.71082C23.3501 8.90411 25.2173 9.17683 26.5332 10.2372C26.951 9.55842 27.5553 8.98162 28.3203 8.59558C30.5102 7.49069 33.2052 8.40923 34.2949 10.6044L38.6768 19.1483C38.6793 19.1533 38.6821 19.1589 38.6846 19.1639C40.1722 22.1897 40.4033 25.5925 39.3506 28.7753C38.2977 31.9583 36.0879 34.5375 33.0947 36.0477L28.2129 38.5106C24.4638 40.4022 20.0901 40.5008 16.2432 38.7567L3.69531 33.1112C3.68784 33.1078 3.68024 33.104 3.67285 33.1005C2.58614 32.5786 1.62423 31.5907 1.24414 30.3329C0.887279 29.1516 0.96497 27.7878 1.60059 26.6649H1.60156C2.63386 24.8114 4.89385 23.9052 6.94824 24.6024L10.458 25.7938L1.45898 7.49109C0.377708 5.29195 1.27142 2.56649 3.45898 1.46277Z"
                fill="#F04C8A"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="cursor-text-block pointer">
            <p>Click</p>
          </div>
        </div>

        {/* Drag: blue grab hand + "Drag" */}
        <div className="cursor-drag">
          <div className="cursor-icon w-embed">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="9.5 5.5 24 28" fill="none">
              <path
                d="M11.5 21 C11.5 18 11.4 12.6 11.5 11.2 C11.7 8.9 15.1 8.9 15.2 11.2 L15.3 9.2 C15.5 7 18.7 7 18.8 9.2 L18.9 8.6 C19.1 6.4 22.3 6.4 22.4 8.6 L22.5 10.2 C22.8 8.1 25.8 8.2 26 10.4 L26.1 15.2 C26.6 13.8 27.9 13.1 29.3 13.6 C30.8 14.2 31.3 15.3 31.3 16.9 C31.2 20.9 30.8 24.9 28.9 27.9 C27.2 30.5 24.4 31.9 21 31.9 C17.1 31.9 14.3 30.2 13 27.4 C12.4 26.1 11.5 23.6 11.5 21 Z"
                fill="#3D71FF"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="cursor-text-block drag">
            <p>Drag</p>
          </div>
        </div>
      </div>
    </div>
  );
}
