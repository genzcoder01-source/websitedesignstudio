'use client';

import React from 'react';

export default function BottomDock({ onOpenMenu, onOpenDiscuss }) {
  return (
    <div className="bottom-menu-block">
      <div className="fixed-menu-wrap">
        <button
          type="button"
          onClick={onOpenMenu}
          aria-haspopup="true"
          aria-expanded="false"
          className="fixed-menu-button"
        >
          <span className="common-text">Open: </span>
          <span className="bold-text menu-roll">
            <span className="menu-roll-stack">
              <span className="menu-roll-line">Menu</span>
              <span className="menu-roll-line">Menu</span>
            </span>
          </span>
        </button>

        <div className="devide-line" />

        <button
          type="button"
          onClick={() => onOpenDiscuss('website')}
          data-lead-intent="website"
          aria-haspopup="dialog"
          aria-controls="discuss"
          className="contact-us-button btn-bubble"
          style={{ border: 'none', font: 'inherit', cursor: 'pointer' }}
        >
          <p>get my quote</p>
          <span className="btn-bubble__circle" aria-hidden="true" />
        </button>

        <div className="devide-line" />

        <a href="#cases" aria-label="View cases" className="fixed-menu-button">
          <span className="common-text">View: </span>
          <span className="bold-text menu-roll">
            <span className="menu-roll-stack">
              <span className="menu-roll-line">Cases</span>
              <span className="menu-roll-line">Cases</span>
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
