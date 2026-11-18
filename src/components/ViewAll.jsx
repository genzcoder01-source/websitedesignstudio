'use client';

import React from 'react';

export default function ViewAll() {
  return (
    <section data-w-id="11316523-debb-db5b-ea30-287e319ef56a" className="section view-all">
            <div className="left-part">
                <div className="part-bg left"></div><a
                    style={{ transform: "translate3d(0, 50%, 0)", transformStyle: "preserve-3d" }}
                    href="/blog" className="view-all-arrow left w-inline-block">
                    <div className="triangle left" aria-hidden="true"></div>
                    <p className="view-all-arrow-text">view all blogs</p>
                    <div className="square left"></div>
                </a>
            </div>
            <div className="right-part"><a
                    style={{ transform: "translate3d(0, -50%, 0)", transformStyle: "preserve-3d" }}
                    href="/cases" className="view-all-arrow right w-inline-block">
                    <div className="triangle right" aria-hidden="true"></div>
                    <p className="view-all-arrow-text">view all ca<span className="additional-font">s</span>es</p>
                    <div className="square right"></div>
                </a>
                <div className="star w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33" fill="none">
                        <path
                            d="M18.2343 22.3795L33.0007 33.001L22.3792 18.2343L33.0007 16.5004L22.3795 14.7661L33.0007 0.000263214L18.2343 10.6215L16.5004 0L14.7661 10.6215L0 0.000263214L10.6212 14.7661L0 16.5004L10.6215 18.2343L0 33.001L14.7664 22.3795L16.5004 33.0007L18.2343 22.3795Z"
                            fill="#FBD402"></path>
                    </svg></div>
                <div className="part-bg right"></div>
            </div>
            <h2 className="hidden">View all</h2>
        </section>
  );
}
