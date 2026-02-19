'use client';

import { useEffect, useRef } from 'react';
import styles from './Services.module.css';

const services = [
    {
        icon: '🧭',
        title: 'Product Discovery & Roadmap',
        description: 'Define what to build, when, and why. I help you map user problems to product solutions and create a prioritized roadmap that keeps your team focused.',
        outcomes: ['Feature prioritization frameworks', 'OKR-aligned roadmaps', 'User research synthesis'],
        color: '#6C63FF',
    },
    {
        icon: '🚀',
        title: 'MVP Strategy & Launch',
        description: 'Launch the right MVP in the shortest time possible. I help you cut scope without sacrificing value — so you get real market feedback fast.',
        outcomes: ['Lean MVP scoping', 'Go-to-market planning', '12-week launch plans'],
        color: '#38BDF8',
    },
    {
        icon: '🏗️',
        title: 'Tech Stack Selection',
        description: 'Choosing the wrong stack is expensive. I evaluate your product goals, team skills, and scale ambitions to recommend the right technology — not the trendiest.',
        outcomes: ['Architecture trade-off analysis', 'Cloud & infra planning', 'Build vs buy decisions'],
        color: '#A78BFA',
    },
    {
        icon: '📈',
        title: 'Scalability & Architecture',
        description: 'Is your product ready for 10x growth? I audit your current stack and design architectures that scale — without the expensive rewrites later.',
        outcomes: ['System design reviews', 'Performance audits', 'Microservices strategy'],
        color: '#34D399',
    },
    {
        icon: '💰',
        title: 'Cost Optimization & Tech Audits',
        description: 'Overpaying for cloud? Slow systems eating into margins? I identify and fix inefficiencies that are draining your budget and slowing your team.',
        outcomes: ['Cloud cost reduction', 'Tech debt mapping', 'Team & process audits'],
        color: '#FB923C',
    },
    {
        icon: '👥',
        title: 'Team & Hiring Guidance',
        description: 'Hire engineers who actually move the needle. I help you define roles, structure interviews, and build technical teams that match your product stage.',
        outcomes: ['Engineering hiring frameworks', 'Role definitions', 'Culture & process setup'],
        color: '#F472B6',
    },
];

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll(`.${styles.card}`).forEach((card, i) => {
                            (card as HTMLElement).style.animationDelay = `${i * 0.1}s`;
                            card.classList.add(styles.cardVisible);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" className={styles.section} ref={sectionRef}>
            <div className="container">
                <div className={styles.header}>
                    <div className="section-tag">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                        What I Do
                    </div>
                    <h2 className="section-title">
                        Outcomes, Not Just <span className="gradient-text">Services</span>
                    </h2>
                    <p className="section-subtitle">
                        I don&apos;t sell hours — I deliver results. Here&apos;s how I help startups reduce risk,
                        move faster, and build products people actually want.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, i) => (
                        <div key={service.title} className={`${styles.card} card`} id={`service-${i}`}>
                            <div className={styles.cardTop}>
                                <div className={styles.iconWrap} style={{ '--c': service.color } as React.CSSProperties}>
                                    <span className={styles.icon}>{service.icon}</span>
                                </div>
                                <div className={styles.cardGlow} style={{ background: service.color }} />
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.description}</p>
                            <ul className={styles.outcomes}>
                                {service.outcomes.map((o) => (
                                    <li key={o} className={styles.outcome}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5">
                                            <path d="M5 13l4 4L19 7" />
                                        </svg>
                                        {o}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
