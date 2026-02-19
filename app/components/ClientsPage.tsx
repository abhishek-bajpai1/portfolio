'use client';

import Link from 'next/link';
import styles from './ClientsPage.module.css';

const clients = [
    {
        name: 'BasketHunt',
        url: 'https://www.baskethunt.com/',
        description: 'Smart product discovery & price comparison platform helping shoppers find the best deals online.',
        tag: 'E-Commerce',
        emoji: '🛒',
        color: '#F97316',
    },
    {
        name: 'TechSnap',
        url: 'https://techsnap.in/',
        description: 'Tech news & reviews platform keeping readers up to date with the latest in the tech world.',
        tag: 'Media & Tech',
        emoji: '⚡',
        color: '#38BDF8',
    },
    {
        name: 'Affrise Media',
        url: 'https://www.affrisemedia.com/',
        description: 'Performance-driven digital marketing agency specialising in affiliate marketing & brand growth.',
        tag: 'Digital Marketing',
        emoji: '📈',
        color: '#A78BFA',
    },
];

// Duplicate for infinite marquee
const marqueeClients = [...clients, ...clients, ...clients];

export default function ClientsPage() {
    return (
        <div className={styles.page}>
            {/* Navbar */}
            <nav className={styles.nav}>
                <Link href="/" className={styles.navLogo}>
                    <span className={styles.navMark}>AB</span>
                    <span className={styles.navName}>ProdTech Labs</span>
                </Link>
                <Link href="/" className={styles.navBack}>
                    ← Back to Portfolio
                </Link>
            </nav>

            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroBg} />
                <div className={styles.heroGlow} />
                <div className="container">
                    <div className={styles.heroInner}>
                        <div className="section-tag" style={{ margin: '0 auto 24px' }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Our Clients
                        </div>
                        <h1 className={styles.heroTitle}>
                            Trusted by <span className="gradient-text">Innovative</span> Businesses
                        </h1>
                        <p className={styles.heroSubtitle}>
                            We partner with ambitious founders and growing teams to build products that scale.
                            Here are some of the brands we&apos;ve been proud to work with.
                        </p>

                        {/* Stats */}
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <div className={styles.statNum}>10+</div>
                                <div className={styles.statLabel}>Happy Clients</div>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.stat}>
                                <div className={styles.statNum}>95%</div>
                                <div className={styles.statLabel}>Retention Rate</div>
                            </div>
                            <div className={styles.statDivider} />
                            <div className={styles.stat}>
                                <div className={styles.statNum}>20+</div>
                                <div className={styles.statLabel}>Projects Shipped</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marquee section */}
            <section className={styles.marqueeSection}>
                <div className={styles.marqueeFade} />
                <div className={styles.marqueeTrack}>
                    {marqueeClients.map((client, i) => (
                        <a
                            key={i}
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.marqueeItem}
                            style={{ '--c': client.color } as React.CSSProperties}
                        >
                            <span className={styles.marqueeEmoji}>{client.emoji}</span>
                            <span className={styles.marqueeName}>{client.name}</span>
                            <span className={styles.marqueeTag}>{client.tag}</span>
                        </a>
                    ))}
                </div>
                <div className={`${styles.marqueeFade} ${styles.marqueeFadeRight}`} />
            </section>

            {/* Client Cards */}
            <section className={styles.cardsSection}>
                <div className="container">
                    <div className={styles.cardsGrid}>
                        {clients.map((client) => (
                            <a
                                key={client.name}
                                href={client.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.card}
                                style={{ '--c': client.color } as React.CSSProperties}
                            >
                                <div className={styles.cardGlow} />
                                <div className={styles.cardTop}>
                                    <div className={styles.cardEmoji}>{client.emoji}</div>
                                    <span className={styles.cardTag}>{client.tag}</span>
                                </div>
                                <h3 className={styles.cardName}>{client.name}</h3>
                                <p className={styles.cardDesc}>{client.description}</p>
                                <div className={styles.cardUrl}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                    </svg>
                                    {client.url.replace(/https?:\/\//, '').replace(/\/$/, '')}
                                </div>
                                <div className={styles.cardCta}>
                                    Visit Website
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaBox}>
                        <div className={styles.ctaGlow} />
                        <div className={styles.ctaEmoji}>🚀</div>
                        <h2 className={styles.ctaTitle}>Want to be our next success story?</h2>
                        <p className={styles.ctaSubtitle}>Let&apos;s talk about your product and how we can help you scale.</p>
                        <div className={styles.ctaBtns}>
                            <a
                                href="https://calendly.com/abhishekbajpai680/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                Book a Free Call
                            </a>
                            <Link href="/" className={styles.ctaSecondary}>
                                View Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
