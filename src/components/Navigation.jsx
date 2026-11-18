'use client';

import React from 'react';

export default function Navigation({ onOpenMenu, onOpenDiscuss }) {
  return (
    <header data-wf--header--variant="home-page" className="section header">
      <div className="w-layout-blockcontainer container header w-container">
        <nav data-hero-dec="0.5" className="header-nav">
          <ul role="list" className="header-nav-block w-list-unstyled">
            <li className="nav-link-block">
              <a href="#about" className="nav-link w-inline-block">
                <span className="menu-roll">
                  <span className="menu-roll-stack">
                    <span className="menu-roll-line">
                      <p className="paragraph">about us</p>
                    </span>
                    <span className="menu-roll-line">
                      <p className="paragraph">about us</p>
                    </span>
                  </span>
                </span>
              </a>
            </li>
            <li className="nav-link-block">
              <a href="#cases" className="nav-link w-inline-block">
                <span className="menu-roll">
                  <span className="menu-roll-stack">
                    <span className="menu-roll-line">
                      <p>cases</p>
                    </span>
                    <span className="menu-roll-line">
                      <p>cases</p>
                    </span>
                  </span>
                </span>
              </a>
            </li>
            <li className="nav-link-block">
              <a href="#services" className="nav-link w-inline-block">
                <span className="menu-roll">
                  <span className="menu-roll-stack">
                    <span className="menu-roll-line">
                      <p>services</p>
                    </span>
                    <span className="menu-roll-line">
                      <p>services</p>
                    </span>
                  </span>
                </span>
              </a>
            </li>
            <li className="nav-link-block">
              <a href="/blog" className="nav-link w-inline-block">
                <span className="menu-roll">
                  <span className="menu-roll-stack">
                    <span className="menu-roll-line">
                      <p>blog</p>
                    </span>
                    <span className="menu-roll-line">
                      <p>blog</p>
                    </span>
                  </span>
                </span>
              </a>
            </li>
          </ul>

          <div className="header-bg w-embed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 538 52"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0.728516 7.54645C0.728516 3.78087 5.08731 0.728271 10.4642 0.728271H499.927C502.439 0.728271 504.855 1.40821 506.667 2.62599L533.732 20.8078C537.727 23.4916 537.727 27.965 533.732 30.6487L506.667 48.8305C504.855 50.0483 502.439 50.7283 499.927 50.7283H10.4642C5.08733 50.7283 0.728516 47.6757 0.728516 43.9101V7.54645Z"
                fill="#D3C5F6"
                fillOpacity="0.12"
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="1.45654"
              />
            </svg>
          </div>

          <button
            type="button"
            onClick={onOpenMenu}
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Open menu"
            className="header-menu-button"
          >
            <i />
            <i />
            <i />
            <i />
          </button>
        </nav>

        <button
          type="button"
          data-hero-dec="0.5"
          onClick={onOpenDiscuss}
          className="contact-us-button btn-bubble w-inline-block"
          style={{ cursor: 'pointer', border: 'none', font: 'inherit' }}
        >
          <p>let&apos;s talk</p>
          <span className="btn-bubble__circle" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
