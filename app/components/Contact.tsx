'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

declare global {
    interface Window {
        Calendly?: {
            initPopupWidget: (opts: { url: string }) => void;
        };
    }
}

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText('abhishekbajpai680@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const openCalendly = () => {
        window.Calendly?.initPopupWidget({
            url: 'https://calendly.com/abhishekbajpai680/30min',
        });
    };

    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.bgGlow} />

                    {/* Header */}
                    <div className={styles.header}>
                        <div className="section-tag">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Work With Me
                        </div>
                        <h2 className={styles.title}>
                            Ready to Build Something <span className="gradient-text">That Scales?</span>
                        </h2>
                        <p className={styles.subtitle}>
                            Let&apos;s discuss your product and tech challenges. First call is free.
                            No pitches. No fluff. Just clear, actionable direction.
                        </p>
                    </div>

                    {/* CTA Cards */}
                    <div className={styles.ctaGrid}>
                        <button
                            onClick={openCalendly}
                            className={styles.ctaCard}
                            id="contact-calendly"
                        >
                            <div className={styles.ctaIcon} style={{ background: 'rgba(108,99,255,0.15)', borderColor: 'rgba(108,99,255,0.3)' }}>
                                📅
                            </div>
                            <div>
                                <div className={styles.ctaTitle}>Book a Free Call</div>
                                <div className={styles.ctaDesc}>30-min strategy session via Calendly</div>
                            </div>
                            <svg className={styles.ctaArrow} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>

                        <button onClick={copyEmail} className={styles.ctaCard} id="contact-email">
                            <div className={styles.ctaIcon} style={{ background: 'rgba(56,189,248,0.15)', borderColor: 'rgba(56,189,248,0.3)' }}>
                                📧
                            </div>
                            <div>
                                <div className={styles.ctaTitle}>Email Me</div>
                                <div className={styles.ctaDesc}>{copied ? '✅ Copied!' : 'abhishekbajpai680@gmail.com'}</div>
                            </div>
                            <svg className={styles.ctaArrow} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </button>

                        <a
                            href="https://wa.me/919696042209"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaCard}
                            id="contact-whatsapp"
                        >
                            <div className={styles.ctaIcon} style={{ background: 'rgba(52,211,153,0.15)', borderColor: 'rgba(52,211,153,0.3)' }}>
                                💬
                            </div>
                            <div>
                                <div className={styles.ctaTitle}>WhatsApp</div>
                                <div className={styles.ctaDesc}>Quick message, quick reply</div>
                            </div>
                            <svg className={styles.ctaArrow} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </a>

                        <a
                            href="https://linkedin.com/in/abhishek-bajpai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaCard}
                            id="contact-linkedin"
                        >
                            <div className={styles.ctaIcon} style={{ background: 'rgba(167,139,250,0.15)', borderColor: 'rgba(167,139,250,0.3)' }}>
                                💼
                            </div>
                            <div>
                                <div className={styles.ctaTitle}>LinkedIn</div>
                                <div className={styles.ctaDesc}>Connect & see my full background</div>
                            </div>
                            <svg className={styles.ctaArrow} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </a>
                    </div>

                    {/* Bottom message */}
                    <div className={styles.bottomMsg}>
                        <div className={styles.avatar}>AB</div>
                        <div className={styles.msgBubble}>
                            <p>Hey 👋 — I typically respond within 4 hours. Looking forward to hearing about your project!</p>
                            <div className={styles.msgTime}>Usually responds in a few hours</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
