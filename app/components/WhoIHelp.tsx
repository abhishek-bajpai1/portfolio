'use client';

import styles from './WhoIHelp.module.css';

const clients = [
    {
        emoji: '🚀',
        title: 'Early-Stage Founders',
        description: 'You have a validated idea and need help deciding what to build first, which tech stack to use, and how to structure your product for growth.',
        tags: ['Idea → MVP', 'Tech Stack Advice', 'Product Strategy'],
        color: '#6C63FF',
        fit: 'Perfect Fit',
    },
    {
        emoji: '💡',
        title: 'Non-Tech Founders',
        description: 'You understand the problem deeply but don\'t know how to evaluate engineering decisions. I\'m your technical layer — without the jargon.',
        tags: ['Tech Translation', 'Vendor Evaluation', 'Hiring Guidance'],
        color: '#38BDF8',
        fit: 'Perfect Fit',
    },
    {
        emoji: '📈',
        title: 'MVPs Scaling to Growth',
        description: 'Your MVP worked — congrats. Now the original architecture is showing cracks under load. Time to prepare your stack for 10x users without a complete rewrite.',
        tags: ['Architecture Review', 'Scaling Plan', 'Cost Optimization'],
        color: '#34D399',
        fit: 'Great Fit',
    },
    {
        emoji: '🏢',
        title: 'Businesses Modernizing Tech',
        description: 'Legacy systems slowing you down? I help SMEs and established businesses modernize their tech stack incrementally — with zero disruption to ongoing operations.',
        tags: ['Legacy Migration', 'Tech Audit', 'Modernization Roadmap'],
        color: '#FB923C',
        fit: 'Great Fit',
    },
];

const notFit = [
    'Agencies looking for staff augmentation',
    'Clients needing full-time employees',
    'Projects without a clear business problem',
    'Teams with no willingness to act on advice',
];

export default function WhoIHelp() {
    return (
        <section id="who" className={styles.section}>
            <div className="container">
                <div className={styles.layout}>
                    <div className={styles.leftCol}>
                        <div className="section-tag">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M9 7a4 4 0 100 8 4 4 0 000-8z" />
                            </svg>
                            Who I Help
                        </div>
                        <h2 className="section-title">
                            Is This <span className="gradient-text">You?</span>
                        </h2>
                        <p className="section-subtitle">
                            I work best with founders and teams who are at an inflection point —
                            where the right product or tech decision can save months and hundreds of thousands.
                        </p>

                        {/* Not a fit */}
                        <div className={styles.notFit}>
                            <h4 className={styles.notFitTitle}>Not the right fit if…</h4>
                            <ul className={styles.notFitList}>
                                {notFit.map((item) => (
                                    <li key={item} className={styles.notFitItem}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5">
                                            <path d="M18 6L6 18M6 6l12 12" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.rightCol}>
                        {clients.map((client, i) => (
                            <div key={client.title} className={`${styles.clientCard} card`} id={`client-${i}`}>
                                <div className={styles.clientTop}>
                                    <div className={styles.clientIcon} style={{ '--c': client.color } as React.CSSProperties}>
                                        {client.emoji}
                                    </div>
                                    <div>
                                        <div className={styles.fitBadge} style={{ color: client.color, borderColor: client.color + '44', background: client.color + '11' }}>
                                            ✓ {client.fit}
                                        </div>
                                        <h3 className={styles.clientTitle}>{client.title}</h3>
                                    </div>
                                </div>
                                <p className={styles.clientDesc}>{client.description}</p>
                                <div className={styles.tags}>
                                    {client.tags.map((t) => (
                                        <span key={t} className={styles.tag} style={{ '--c': client.color } as React.CSSProperties}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
