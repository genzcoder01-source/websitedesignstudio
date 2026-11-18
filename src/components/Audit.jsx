'use client';

import React from 'react';

export default function Audit({ onOpenDiscuss }) {
  return (
    <section id="audit-section" className="section cta">
      <div className="w-layout-blockcontainer container cta w-container">
        <div className="ta-title-wrapper">
          <h2 className="cta-title">
            <span className="additional-font">G</span>et a free <br />
            audit of your <br />
            websit<span className="additional-font">e</span>
          </h2>
          <div className="cta-titile-dec-wrapper">
            <div data-cursor="" data-percent="99" className="metric-card blue">
              <p className="metric-card-text">Speed</p>
              <div className="perogress-bar">
                <div className="active-progress" />
              </div>
            </div>
            <div data-cursor="" data-percent="100" className="metric-card pink">
              <p className="metric-card-text">SEO</p>
              <div className="perogress-bar">
                <div className="active-progress" />
              </div>
            </div>
            <div data-cursor="" data-percent="89" className="metric-card yellow">
              <p className="metric-card-text">Animation</p>
              <div className="perogress-bar">
                <div className="active-progress" />
              </div>
            </div>
            <div data-cursor="" data-percent="76" className="metric-card green">
              <p className="metric-card-text">Design</p>
              <div className="perogress-bar">
                <div className="active-progress" />
              </div>
            </div>
            <div data-cursor="" data-percent="82" className="metric-card orange">
              <p className="metric-card-text">Conversion</p>
              <div className="perogress-bar">
                <div className="active-progress" />
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onOpenDiscuss('free-audit')}
          aria-haspopup="dialog"
          aria-controls="discuss"
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
          <span className="cta-button-text">get my free audit</span>
          <svg viewBox="0 0 82 82" data-desk-height="70" className="arrow-icon cta">
            <path
              d="M54.6798 49.8355L25.2726 20.4283L20.4414 25.2594L49.8452 54.6667H23.9298V61.5H61.5131V23.9167H54.6798V49.8355Z"
              transform="rotate(-90 41 41)"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
