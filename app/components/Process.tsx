'use client';

import styles from './Process.module.css';

const frameworks = [
    {
        icon: '🎯',
        title: 'MVP vs Scale — How I Think',
        description: 'The goal of an MVP is to learn, not to impress. I help founders define the minimum surface area to get real data, then plan the scale-up only after product-market fit signals appear.',
        items: [
            { label: 'MVP', note: 'Fastest path to real user feedback' },
            { label: 'PMF Stage', note: 'Optimize for retention & activation' },
            { label: 'Scale', note: 'Now invest in infra & performance' },
        ],
        color: '#6C63FF',
    },
    {
        icon: '⚖️',
        title: 'Feature Prioritization Framework',
        description: 'Every team has more ideas than bandwidth. I introduce RICE scoring and impact/effort matrices to create agreement without politics — so the right things get built first.',
        items: [
            { label: 'Reach', note: 'How many users does it affect?' },
            { label: 'Impact', note: 'How much does it move the metric?' },
            { label: 'Confidence', note: 'How well-validated is it?' },
            { label: 'Effort', note: 'How long will it actually take?' },
        ],
        color: '#38BDF8',
    },
    {
        icon: '🔀',
        title: 'Trade-offs: Speed vs Cost vs Scale',
        description: 'Every technical decision involves trade-offs. I make these visible and explicit — so founders understand what they\'re optimizing for and what they\'re accepting as a consequence.',
        items: [
            { label: 'Build Fast', note: 'Accept tech debt, get to market' },
            { label: 'Build Cheap', note: 'Use managed services, avoid custom' },
            { label: 'Build to Scale', note: 'Invest now in architecture' },
        ],
        color: '#34D399',
    },
    {
        icon: '🏗️',
        title: 'Build vs Buy vs Borrow',
        description: 'Most startups waste time building what already exists. I map every feature to a build/buy/open-source decision — saving months of engineering time.',
        items: [
            { label: 'Build', note: 'Only for core competitive advantages' },
            { label: 'Buy', note: 'Auth, payments, email, CRM' },
            { label: 'Open Source', note: 'Analytics, queuing, file storage' },
        ],
        color: '#FB923C',
    },
];

export default function Process() {
    return (
        <section id="process" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <div className="section-tag">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        Product Thinking
                    </div>
                    <h2 className="section-title">
                        Beyond Code — <span className="gradient-text">Strategic Thinking</span>
                    </h2>
                    <p className="section-subtitle">
                        Anyone can write code. What makes a great consultant is knowing &ldquo;what to build&rdquo;,
                        &ldquo;when to build it&rdquo;, and &ldquo;how much to invest&rdquo;. This is how I think.
                    </p>
                </div>

                <div className={styles.grid}>
                    {frameworks.map((fw, i) => (
                        <div key={fw.title} className={`${styles.card} card`} id={`process-${i}`}>
                            <div className={styles.cardTop}>
                                <div className={styles.fwIcon} style={{ '--c': fw.color } as React.CSSProperties}>
                                    {fw.icon}
                                </div>
                                <h3 className={styles.fwTitle}>{fw.title}</h3>
                            </div>
                            <p className={styles.fwDesc}>{fw.description}</p>
                            <div className={styles.fwItems}>
                                {fw.items.map((item, j) => (
                                    <div key={item.label} className={styles.fwItem} style={{ '--c': fw.color } as React.CSSProperties}>
                                        <div className={styles.fwItemNum}>{j + 1}</div>
                                        <div>
                                            <span className={styles.fwItemLabel}>{item.label}</span>
                                            <span className={styles.fwItemNote}>{item.note}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
