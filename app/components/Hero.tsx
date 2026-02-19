'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.1 }
        );
        const elements = document.querySelectorAll(`.${styles.animateIn}`);
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="hero" className={styles.hero}>
            {/* Background glows */}
            <div className={styles.glowPurple} />
            <div className={styles.glowBlue} />
            <div className={styles.grid} />

            <div className={`container ${styles.inner}`}>
                {/* Badge */}
                <div className={`${styles.animateIn} ${styles.badge}`}>
                    <span className={styles.badgeDot} />
                    Available for new projects
                </div>

                {/* Headline */}
                <h1 ref={titleRef} className={`${styles.animateIn} ${styles.headline}`} style={{ animationDelay: '0.1s' }}>
                    Product & Tech Consulting
                    <br />
                    <span className="gradient-text">That Drives Growth</span>
                </h1>

                {/* Sub */}
                <p className={`${styles.animateIn} ${styles.subheadline}`} style={{ animationDelay: '0.2s' }}>
                    I help early-stage startups design the right product and choose the right
                    technology to scale faster — without burning budget on wrong decisions.
                </p>

                {/* CTA buttons */}
                <div className={`${styles.animateIn} ${styles.ctaRow}`} style={{ animationDelay: '0.3s' }}>
                    <a href="mailto:abhishek@example.com" className="btn-primary" id="hero-cta-primary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Book a Free Consultation
                    </a>
                    <button
                        className="btn-secondary"
                        id="hero-cta-secondary"
                        onClick={() => document.querySelector('#case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        See My Work
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Stats */}
                <div className={`${styles.animateIn} ${styles.stats}`} style={{ animationDelay: '0.4s' }}>
                    {[
                        { value: '30+', label: 'Startups Advised' },
                        { value: '5+', label: 'Years Experience' },
                        { value: '95%', label: 'Client Retention' },
                        { value: '$2M+', label: 'Cost Saved' },
                    ].map((stat) => (
                        <div key={stat.label} className={styles.stat}>
                            <span className={styles.statValue}>{stat.value}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Scrolling logos */}
                <div className={`${styles.animateIn} ${styles.trustedBy}`} style={{ animationDelay: '0.5s' }}>
                    <span className={styles.trustedLabel}>Worked with startups in</span>
                    <div className={styles.industryTags}>
                        {['SaaS', 'E-Commerce', 'FinTech', 'HealthTech', 'EdTech', 'Mobile Apps'].map((tag) => (
                            <span key={tag} className={styles.industryTag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating orbs */}
            <div className={styles.orb1} />
            <div className={styles.orb2} />
        </section>
    );
}
