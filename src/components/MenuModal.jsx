'use client';

import React, { useEffect } from 'react';

export default function MenuModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      id="menu"
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      data-modal-duration="1400"
      className={`menu-wrapper ${isOpen ? 'is-open' : ''}`}
    >
      <div className="menu-container">
        <div
          className="modal-backdrop"
          onClick={onClose}
          aria-hidden="true"
        />

        <div aria-hidden="true" className="decoration-circle-wrapper">
          <div className="white-circle" />
          <div className="white-circle" />
          <div className="white-circle" />
        </div>
        <div aria-hidden="true" className="decoration-circle-wrapper">
          <div className="pink-circle" />
          <div className="green-circle" />
          <div className="blue-circle" />
        </div>

        <div className="content-block" data-lenis-prevent="">
          {/* Badge Left */}
          <a
            href="#audit"
            onClick={onClose}
            aria-label="View Free Audit"
            className="menu-link-block badge-left w-inline-block"
          >
            <svg
              viewBox="0 0 296 296"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="menu-link-icon"
            >
              <rect
                x="296"
                y="296"
                width="296"
                height="296"
                rx="148"
                transform="rotate(180 296 296)"
                fill="#150734"
              />
              <text className="menu-badge-label" fill="white">
                <textPath
                  href="#badge-arc-l"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  Free Audit
                </textPath>
              </text>
              <g clipPath="url(#badge-clip-l)">
                <g className="badge-arrow-stack">
                  <path
                    d="M113.379 125.036L184.147 195.805L195.773 184.179L125.013 113.41H187.379V96.9655H96.9342V187.41H113.379V125.036Z"
                    fill="#F04C8A"
                  />
                  <path
                    d="M113.379 125.036L184.147 195.805L195.773 184.179L125.013 113.41H187.379V96.9655H96.9342V187.41H113.379V125.036Z"
                    fill="#F04C8A"
                    transform="translate(104 104)"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="badge-clip-l">
                  <rect x="94" y="94" width="105" height="105" />
                </clipPath>
                <path
                  id="badge-arc-l"
                  d="M 36 148 A 112 112 0 0 0 260 148"
                  fill="none"
                />
              </defs>
            </svg>
          </a>

          {/* Nav List */}
          <nav aria-label="Main menu" className="menu-nav-wrapper">
            <h2 className="hidden">Main menu</h2>
            <ul role="list" className="menu-nav-list w-list-unstyled">
              <li className="menu-nav-item">
                <a
                  href="/"
                  onClick={onClose}
                  className="menu-nav-link btn-bubble w-inline-block"
                >
                  <p>Main page</p>
                  <span className="btn-bubble__circle" aria-hidden="true" />
                </a>
              </li>
              <li className="menu-nav-item">
                <a
                  href="#about"
                  onClick={onClose}
                  className="menu-nav-link btn-bubble w-inline-block"
                >
                  <p>About us</p>
                  <span className="btn-bubble__circle" aria-hidden="true" />
                </a>
              </li>
              <li className="menu-nav-item" data-menu-only="band">
                <a
                  href="#cases"
                  onClick={onClose}
                  className="menu-nav-link btn-bubble w-inline-block"
                >
                  <p>Cases</p>
                  <span className="btn-bubble__circle" aria-hidden="true" />
                </a>
              </li>
              <li className="menu-nav-item">
                <a
                  href="#services"
                  onClick={onClose}
                  className="menu-nav-link btn-bubble w-inline-block"
                >
                  <p>Services</p>
                  <span className="btn-bubble__circle" aria-hidden="true" />
                </a>
              </li>
              <li className="menu-nav-item" data-menu-only="band">
                <a
                  href="#vibe"
                  onClick={onClose}
                  className="menu-nav-link btn-bubble w-inline-block"
                >
                  <p>Vibe Selector</p>
                  <span className="btn-bubble__circle" aria-hidden="true" />
                </a>
              </li>
              <li className="menu-nav-item">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="menu-nav-link btn-bubble w-inline-block"
                >
                  <p>Contact us</p>
                  <span className="btn-bubble__circle" aria-hidden="true" />
                </a>
              </li>
            </ul>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              data-button-arrow=""
              className="close-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 76 76"
                data-desk-height="76"
                className="cross-icon arrow-icon"
              >
                <path d="M47.7686 26.6439C48.1534 26.644 48.5228 26.7966 48.7949 27.0687C49.0671 27.3409 49.2197 27.7102 49.2197 28.0951C49.2197 28.48 49.067 28.8493 48.7949 29.1215L29.124 48.7924C28.9894 48.9272 28.8294 49.0339 28.6533 49.1068C28.5212 49.1615 28.382 49.1965 28.2402 49.2103L28.0977 49.2172C27.8106 49.2172 27.5297 49.1325 27.291 48.973C27.0523 48.8135 26.8667 48.5859 26.7568 48.3207C26.6471 48.0556 26.6179 47.7641 26.6738 47.4828C26.7298 47.2013 26.8684 46.9426 27.0713 46.7396L46.7422 27.0687C47.0144 26.7966 47.3837 26.6439 47.7686 26.6439Z" />
                <path d="M28.0977 26.6439C28.4826 26.6439 28.8518 26.7966 29.124 27.0687L48.7949 46.7396C48.9977 46.9426 49.1364 47.2014 49.1924 47.4828C49.2483 47.7641 49.2191 48.0557 49.1094 48.3207C48.9995 48.5859 48.813 48.8135 48.5742 48.973C48.3653 49.1124 48.1243 49.1949 47.875 49.2133L47.7686 49.2172C47.5779 49.2174 47.3891 49.1797 47.2129 49.1068C47.0369 49.0339 46.8768 48.9271 46.7422 48.7924L27.0713 29.1215C26.7991 28.8492 26.6465 28.48 26.6465 28.0951C26.6465 27.7101 26.7991 27.3409 27.0713 27.0687C27.3435 26.7965 27.7127 26.6439 28.0977 26.6439Z" />
              </svg>
              <span>Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 76 76"
                data-desk-height="76"
                className="cross-icon arrow-icon"
              >
                <path d="M47.7686 26.6439C48.1534 26.644 48.5228 26.7966 48.7949 27.0687C49.0671 27.3409 49.2197 27.7102 49.2197 28.0951C49.2197 28.48 49.067 28.8493 48.7949 29.1215L29.124 48.7924C28.9894 48.9272 28.8294 49.0339 28.6533 49.1068C28.5212 49.1615 28.382 49.1965 28.2402 49.2103L28.0977 49.2172C27.8106 49.2172 27.5297 49.1325 27.291 48.973C27.0523 48.8135 26.8667 48.5859 26.7568 48.3207C26.6471 48.0556 26.6179 47.7641 26.6738 47.4828C26.7298 47.2013 26.8684 46.9426 27.0713 46.7396L46.7422 27.0687C47.0144 26.7966 47.3837 26.6439 47.7686 26.6439Z" />
                <path d="M28.0977 26.6439C28.4826 26.6439 28.8518 26.7966 29.124 27.0687L48.7949 46.7396C48.9977 46.9426 49.1364 47.2014 49.1924 47.4828C49.2483 47.7641 49.2191 48.0557 49.1094 48.3207C48.9995 48.5859 48.813 48.8135 48.5742 48.973C48.3653 49.1124 48.1243 49.1949 47.875 49.2133L47.7686 49.2172C47.5779 49.2174 47.3891 49.1797 47.2129 49.1068C47.0369 49.0339 46.8768 48.9271 46.7422 48.7924L27.0713 29.1215C26.7991 28.8492 26.6465 28.48 26.6465 28.0951C26.6465 27.7101 26.7991 27.3409 27.0713 27.0687C27.3435 26.7965 27.7127 26.6439 28.0977 26.6439Z" />
              </svg>
            </button>
          </nav>

          {/* Badge Right */}
          <a
            href="#cases"
            onClick={onClose}
            aria-label="View cases"
            className="menu-link-block badge-right w-inline-block"
          >
            <svg
              viewBox="0 0 296 296"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="menu-link-icon"
            >
              <rect
                x="296"
                y="296"
                width="296"
                height="296"
                rx="148"
                transform="rotate(180 296 296)"
                fill="white"
              />
              <text className="menu-badge-label" fill="#4E00FF">
                <textPath
                  href="#badge-arc-r"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  View Cases
                </textPath>
              </text>
              <g clipPath="url(#badge-clip-r)">
                <g className="badge-arrow-stack">
                  <path
                    d="M179.217 167.562L108.448 96.793L96.8223 108.419L167.583 179.188H105.217V195.632H195.662V105.188H179.217V167.562Z"
                    fill="#4E00FF"
                  />
                  <path
                    d="M179.217 167.562L108.448 96.793L96.8223 108.419L167.583 179.188H105.217V195.632H195.662V105.188H179.217V167.562Z"
                    fill="#4E00FF"
                    transform="translate(-104 -104)"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="badge-clip-r">
                  <rect x="94" y="94" width="105" height="105" />
                </clipPath>
                <path
                  id="badge-arc-r"
                  d="M 36 148 A 112 112 0 0 0 260 148"
                  fill="none"
                />
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
