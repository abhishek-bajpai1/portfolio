'use client';

import styles from './Testimonials.module.css';

const testimonials = [
    {
        quote: "Abhishek saved us from a catastrophic tech decision. We were about to build our entire platform on a monolith that would have needed a rewrite in 18 months. His architecture advice paid for itself 10x over.",
        name: "Rahul Sharma",
        role: "Co-Founder & CEO",
        company: "NexaHealth",
        avatar: "RS",
        color: "#6C63FF",
        industry: "HealthTech",
    },
    {
        quote: "As a non-tech founder, I was drowning in vendor pitches and technical decisions I didn't understand. Abhishek translated everything into business terms and helped me make confident decisions. Absolute game-changer.",
        name: "Priya Mehta",
        role: "Founder",
        company: "StyleStack",
        avatar: "PM",
        color: "#38BDF8",
        industry: "E-Commerce",
    },
    {
        quote: "We brought Abhishek in for a 2-week tech audit and he found $4K/month in wasted cloud spend in the first 3 days. His product thinking is razor sharp — he doesn't just see code, he sees business impact.",
        name: "Arjun Kapoor",
        role: "CTO",
        company: "LearnLoop",
        avatar: "AK",
        color: "#34D399",
        industry: "EdTech",
    },
    {
        quote: "The roadmap Abhishek built for us became our funding pitch deck backbone. Investors were impressed by the level of strategic thinking behind our product decisions. We closed our seed round in 6 weeks.",
        name: "Sneha Joshi",
        role: "Founder & CPO",
        company: "FlowFinance",
        avatar: "SJ",
        color: "#FB923C",
        industry: "FinTech",
    },
];

const socialProof = [
    { value: '30+', label: 'Startups Consulted' },
    { value: '5+', label: 'Years in Product & Tech' },
    { value: '4', label: 'Industries Served' },
    { value: '$2M+', label: 'Client Value Created' },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className={styles.section}>
            <div className={styles.bgGlow} />
            <div className="container">
                <div className={styles.header}>
                    <div className="section-tag">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        Social Proof
                    </div>
                    <h2 className="section-title">
                        What Founders <span className="gradient-text">Say About Me</span>
                    </h2>
                    <p className="section-subtitle">
                        Don&apos;t take my word for it. Here&apos;s what founders, CTOs and PMs say after working with me.
                    </p>
                </div>

                {/* Social proof numbers */}
                <div className={styles.proofRow}>
                    {socialProof.map((p) => (
                        <div key={p.label} className={styles.proofItem}>
                            <span className={styles.proofValue}>{p.value}</span>
                            <span className={styles.proofLabel}>{p.label}</span>
                        </div>
                    ))}
                </div>

                {/* Testimonials grid */}
                <div className={styles.grid}>
                    {testimonials.map((t, i) => (
                        <div key={i} className={`${styles.card} card`} id={`testimonial-${i}`}>
                            {/* Quote marks */}
                            <div className={styles.quoteIcon} style={{ color: t.color }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                            <div className={styles.author}>
                                <div className={styles.avatar} style={{ '--c': t.color } as React.CSSProperties}>
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className={styles.authorName}>{t.name}</div>
                                    <div className={styles.authorRole}>{t.role} · {t.company}</div>
                                </div>
                                <div className={styles.industryPill} style={{ color: t.color, background: t.color + '14', borderColor: t.color + '33' }}>
                                    {t.industry}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No testimonials disclaimer */}
                <div className={styles.disclaimer}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6C63FF" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" />
                    </svg>
                    Results may vary. Names and companies are representative of client archetypes. Reach out for references.
                </div>
            </div>
        </section>
    );
}
