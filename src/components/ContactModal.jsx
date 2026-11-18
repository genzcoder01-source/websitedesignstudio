'use client';

import React, { useState, useEffect } from 'react';

export default function ContactModal({ isOpen, onClose, initialIntent = 'website' }) {
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const budgetOptions = [
    '$1k – $3k',
    '$3k – $7k',
    '$7k – $15k',
    '$15k+',
    'Not sure yet',
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }, 800);
  };

  return (
    <div
      id="discuss"
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-label="Let’s discuss"
      data-modal-duration="420"
      data-lenis-prevent=""
      className={`discuss-wrapper ${isOpen ? 'is-open' : ''}`}
    >
      <div
        className="modal-backdrop discuss-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="discuss-card">
        {/* Layer: White */}
        <div aria-hidden="true" className="discuss-layer discuss-layer--white">
          <svg
            viewBox="0 0 1758 919"
            fill="none"
            className="discuss-layer-face discuss-layer-face--wide"
          >
            <path d="M 0 142 Q 0 94 48 94 L 194 94 Q 220 94 239.77 77.11 L 304.15 22.09 Q 330 0 364 0 L 867 0 Q 901 0 928.7 19.72 L 1011.82 78.92 Q 1033 94 1059 94 L 1710 94 Q 1758 94 1758 142 L 1758 775 Q 1758 823 1710 823 L 1564 823 Q 1538 823 1518.41 840.1 L 1453.62 896.64 Q 1428 919 1394 919 L 891 919 Q 857 919 829.5 899 L 746.03 838.29 Q 725 823 699 823 L 48 823 Q 0 823 0 775 Z" />
          </svg>
          <svg
            viewBox="0 0 919 1758"
            preserveAspectRatio="none"
            fill="none"
            className="discuss-layer-face discuss-layer-face--tall"
          >
            <path d="M 777 0 Q 825 0 825 48 L 825 194 Q 825 220 841.89 239.77 L 896.91 304.15 Q 919 330 919 364 L 919 867 Q 919 901 899.28 928.7 L 840.08 1011.82 Q 825 1033 825 1059 L 825 1710 Q 825 1758 777 1758 L 144 1758 Q 96 1758 96 1710 L 96 1564 Q 96 1538 78.9 1518.41 L 22.36 1453.62 Q 0 1428 0 1394 L 0 891 Q 0 857 20 829.5 L 80.71 746.03 Q 96 725 96 699 L 96 48 Q 96 0 144 0 Z" />
          </svg>
        </div>

        {/* Layer: Lime */}
        <div aria-hidden="true" className="discuss-layer discuss-layer--lime">
          <svg
            viewBox="0 0 1758 919"
            fill="none"
            className="discuss-layer-face discuss-layer-face--wide"
          >
            <path d="M 0 142 Q 0 94 48 94 L 194 94 Q 220 94 239.77 77.11 L 304.15 22.09 Q 330 0 364 0 L 867 0 Q 901 0 928.7 19.72 L 1011.82 78.92 Q 1033 94 1059 94 L 1710 94 Q 1758 94 1758 142 L 1758 775 Q 1758 823 1710 823 L 1564 823 Q 1538 823 1518.41 840.1 L 1453.62 896.64 Q 1428 919 1394 919 L 891 919 Q 857 919 829.5 899 L 746.03 838.29 Q 725 823 699 823 L 48 823 Q 0 823 0 775 Z" />
          </svg>
          <svg
            viewBox="0 0 919 1758"
            preserveAspectRatio="none"
            fill="none"
            className="discuss-layer-face discuss-layer-face--tall"
          >
            <path d="M 777 0 Q 825 0 825 48 L 825 194 Q 825 220 841.89 239.77 L 896.91 304.15 Q 919 330 919 364 L 919 867 Q 919 901 899.28 928.7 L 840.08 1011.82 Q 825 1033 825 1059 L 825 1710 Q 825 1758 777 1758 L 144 1758 Q 96 1758 96 1710 L 96 1564 Q 96 1538 78.9 1518.41 L 22.36 1453.62 Q 0 1428 0 1394 L 0 891 Q 0 857 20 829.5 L 80.71 746.03 Q 96 725 96 699 L 96 48 Q 96 0 144 0 Z" />
          </svg>
        </div>

        {/* Layer: Pink */}
        <div aria-hidden="true" className="discuss-layer discuss-layer--pink">
          <svg
            viewBox="0 0 1758 919"
            fill="none"
            className="discuss-layer-face discuss-layer-face--wide"
          >
            <path d="M 0 142 Q 0 94 48 94 L 194 94 Q 220 94 239.77 77.11 L 304.15 22.09 Q 330 0 364 0 L 867 0 Q 901 0 928.7 19.72 L 1011.82 78.92 Q 1033 94 1059 94 L 1710 94 Q 1758 94 1758 142 L 1758 775 Q 1758 823 1710 823 L 1564 823 Q 1538 823 1518.41 840.1 L 1453.62 896.64 Q 1428 919 1394 919 L 891 919 Q 857 919 829.5 899 L 746.03 838.29 Q 725 823 699 823 L 48 823 Q 0 823 0 775 Z" />
          </svg>
          <svg
            viewBox="0 0 919 1758"
            preserveAspectRatio="none"
            fill="none"
            className="discuss-layer-face discuss-layer-face--tall"
          >
            <path d="M 777 0 Q 825 0 825 48 L 825 194 Q 825 220 841.89 239.77 L 896.91 304.15 Q 919 330 919 364 L 919 867 Q 919 901 899.28 928.7 L 840.08 1011.82 Q 825 1033 825 1059 L 825 1710 Q 825 1758 777 1758 L 144 1758 Q 96 1758 96 1710 L 96 1564 Q 96 1538 78.9 1518.41 L 22.36 1453.62 Q 0 1428 0 1394 L 0 891 Q 0 857 20 829.5 L 80.71 746.03 Q 96 725 96 699 L 96 48 Q 96 0 144 0 Z" />
          </svg>
        </div>

        <div className="discuss-inner">
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="discuss-close"
          >
            <svg
              viewBox="0 0 44 44"
              fill="none"
              aria-hidden="true"
              className="discuss-close-x"
            >
              <path
                d="M13 13L31 31M31 13L13 31"
                stroke="#C2EC40"
                strokeWidth="4.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <h2 className="discuss-title">
            L<span className="additional-font">e</span>t’s discuss
          </h2>

          {submitted ? (
            <div style={{ padding: '60px 20px', textAlign: 'center', color: '#150734' }}>
              <h3 style={{ fontSize: '32px', marginBottom: '12px' }}>Thank you!</h3>
              <p style={{ fontSize: '18px' }}>We received your message. Our CEO will reply within 1 hour.</p>
            </div>
          ) : (
            <form className="discuss-form" noValidate onSubmit={handleSubmit}>
              <input
                type="text"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
                className="discuss-honeypot"
                name="subject_ref"
              />

              <div className="discuss-row">
                <label className="discuss-field">
                  <input
                    type="email"
                    required
                    maxLength={200}
                    placeholder="Your email"
                    autoComplete="email"
                    aria-label="Your email"
                    className="discuss-input"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>

                <div className="discuss-dd">
                  <button
                    type="button"
                    onClick={() => setBudgetOpen(!budgetOpen)}
                    className={`discuss-input discuss-dd-btn ${!budget ? 'is-placeholder' : ''}`}
                    aria-haspopup="listbox"
                    aria-expanded={budgetOpen}
                    aria-label="Budget (optional)"
                  >
                    <span className="discuss-dd-label">
                      {budget || 'Budget (optional)'}
                    </span>
                    <svg
                      viewBox="0 0 19 11"
                      fill="none"
                      aria-hidden="true"
                      className="discuss-chevron"
                      style={{
                        transform: budgetOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      <path d="M9.5 10.5L0.7 0.5H18.3L9.5 10.5Z" fill="#150734" />
                    </svg>
                  </button>

                  <div
                    className="discuss-dd-menu"
                    aria-hidden={!budgetOpen}
                    style={{
                      display: budgetOpen ? 'block' : 'none',
                    }}
                  >
                    <ul
                      className="discuss-dd-list"
                      role="listbox"
                      aria-label="Budget (optional)"
                    >
                      {budgetOptions.map((opt) => (
                        <li
                          key={opt}
                          role="option"
                          aria-selected={budget === opt}
                          onClick={() => {
                            setBudget(opt);
                            setBudgetOpen(false);
                          }}
                          className={`discuss-dd-opt ${budget === opt ? 'is-active' : ''}`}
                          style={{ cursor: 'pointer' }}
                        >
                          {opt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="discuss-grid">
                <label className="discuss-field discuss-field--message">
                  <textarea
                    name="message"
                    maxLength={4000}
                    placeholder="A few words about your project (optional)"
                    aria-label="A few words about your project (optional)"
                    className="discuss-input discuss-textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </label>

                <div className="submit-wrap btn-bubble">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="form-submit w-button"
                    style={{ border: 'none', width: '100%', height: '100%', cursor: 'pointer' }}
                  >
                    {isSubmitting ? 'sending…' : 'get my quote'}
                  </button>
                  <span className="btn-bubble__circle" aria-hidden="true" />
                </div>
              </div>

              <ul className="discuss-trust">
                <li className="discuss-trust-item">
                  <span className="discuss-trust-ic" aria-hidden="true">
                    <i className="discuss-trust-dot" />
                  </span>
                  Our CEO replies within 1 hour
                </li>
                <li className="discuss-trust-item">
                  <span className="discuss-trust-ic" aria-hidden="true">
                    <svg viewBox="0 0 20 20">
                      <path d="M10 1.6l2.5 5.3 5.8.7-4.3 4 1.1 5.7L10 14.5l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7z" />
                    </svg>
                  </span>
                  4.9/5 from 647 reviews
                </li>
                <li className="discuss-trust-item">
                  <span className="discuss-trust-ic" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M6 2.5h12v1.8h3.3v2.6a4.6 4.6 0 0 1-4.1 4.6 6.2 6.2 0 0 1-3.9 3.6V18h3.2v3.5H7.5V18h3.2v-2.9a6.2 6.2 0 0 1-3.9-3.6 4.6 4.6 0 0 1-4.1-4.6V4.3H6zm12 3.6v3.2a2.6 2.6 0 0 0 1.5-2.4v-.8zM6 6.1H4.5v.8A2.6 2.6 0 0 0 6 9.3z" />
                    </svg>
                  </span>
                  Awwwards Honorable Mention
                </li>
              </ul>
              <p className="discuss-error" role="alert" />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
