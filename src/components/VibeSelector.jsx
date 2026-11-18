'use client';

import React, { useState } from 'react';

export default function VibeSelector({ onOpenDiscuss }) {
  const [selectedVibe, setSelectedVibe] = useState('website');

  const vibeOptions = [
    {
      id: 'later',
      value: 'later',
      img: '/wf/696b97b4bf6a9722f125346c_zloy.svg',
      alt: 'I want it, but not now',
      buttonText: 'keep me updated',
    },
    {
      id: 'website',
      value: 'website',
      img: '/wf/696b97b416c84c4cf45dc338_glad.svg',
      alt: 'I want a website',
      buttonText: 'get my quote',
    },
    {
      id: 'audit',
      value: 'free-audit',
      img: '/wf/696b97b44f8134e661cea034_happy.svg',
      alt: 'I want a free audit',
      buttonText: 'get my audit',
    },
  ];

  const currentOption = vibeOptions.find(o => o.value === selectedVibe) || vibeOptions[1];

  return (
    <section id="vibe" className="section feedback-form">
      {/* Background SVG wave */}
      <div className="bg-block feedback w-embed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2315 160"
          fill="none"
        >
          <path
            d="M-6 6 L311 47 C499 75 918 131 1092 121 C1309 108 1770 18 1987 6 C2205 -7 2373 6 2418 6 L2315 160 L0 160 Z"
            fill="#D3C5F6"
          />
        </svg>
      </div>

      <div className="w-layout-blockcontainer container feedback-form w-container">
        <h2 className="feedback-form-title">
          So… how <span className="additional-font">d</span>o <br />
          we make you feel?
        </h2>
        <p className="feedback-text">Choose your vibe, we’re listening.</p>

        <form className="trust-form" onSubmit={(e) => { e.preventDefault(); onOpenDiscuss(selectedVibe); }}>
          <fieldset className="trust-form-options">
            <legend className="trust-form-legend">What do you want to do?</legend>
            <ul role="list" className="trust-form-list w-list-unstyled">
              {vibeOptions.map((opt) => {
                const isChecked = selectedVibe === opt.value;
                return (
                  <li
                    key={opt.id}
                    className="trust-form-item"
                    onClick={() => setSelectedVibe(opt.value)}
                    style={{ cursor: 'pointer' }}
                  >
                    <input
                      type="radio"
                      id={opt.id}
                      className="hidden"
                      name="trust-goal"
                      value={opt.value}
                      checked={isChecked}
                      onChange={() => setSelectedVibe(opt.value)}
                    />
                    <label
                      htmlFor={opt.id}
                      className={`trust-option ${isChecked ? 'is-selected' : ''}`}
                    >
                      <img
                        src={opt.img}
                        loading="lazy"
                        width="244"
                        height="244"
                        alt={opt.alt}
                        className="trust-option-img"
                        style={{
                          transform: isChecked ? 'scale(1.08)' : 'scale(1)',
                          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                      />
                      <span className="trust-check-box">&nbsp;</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </fieldset>

          <button
            type="button"
            onClick={() => onOpenDiscuss(selectedVibe)}
            aria-haspopup="dialog"
            aria-controls="discuss"
            aria-expanded="false"
            data-button-arrow=""
            className="cta-button"
            style={{ cursor: 'pointer', border: 'none', font: 'inherit', background: 'none' }}
          >
            <svg viewBox="0 0 82 82" data-desk-height="70" className="arrow-icon cta">
              <path
                d="M54.6798 49.8355L25.2726 20.4283L20.4414 25.2594L49.8452 54.6667H23.9298V61.5H61.5131V23.9167H54.6798V49.8355Z"
                transform="rotate(-45 41 41)"
              />
            </svg>
            <span
              className="cta-button-text"
              style={{
                transition: 'all 0.25s ease',
              }}
            >
              {currentOption.buttonText}
            </span>
            <svg viewBox="0 0 82 82" data-desk-height="70" className="arrow-icon cta">
              <path
                d="M54.6798 49.8355L25.2726 20.4283L20.4414 25.2594L49.8452 54.6667H23.9298V61.5H61.5131V23.9167H54.6798V49.8355Z"
                transform="rotate(-90 41 41)"
              />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
