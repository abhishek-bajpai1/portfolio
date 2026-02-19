'use client';

import styles from './TechExpertise.module.css';

const techGroups = [
    {
        category: 'Frontend',
        icon: '🎨',
        color: '#38BDF8',
        techs: [
            { name: 'React', level: 95 },
            { name: 'Next.js', level: 92 },
            { name: 'TypeScript', level: 88 },
            { name: 'Webflow', level: 80 },
        ],
    },
    {
        category: 'Backend',
        icon: '⚙️',
        color: '#6C63FF',
        techs: [
            { name: 'Node.js', level: 90 },
            { name: 'REST APIs', level: 95 },
            { name: 'GraphQL', level: 78 },
            { name: 'Auth & Security', level: 85 },
        ],
    },
    {
        category: 'Database',
        icon: '🗄️',
        color: '#34D399',
        techs: [
            { name: 'PostgreSQL', level: 88 },
            { name: 'MongoDB', level: 85 },
            { name: 'DynamoDB', level: 80 },
            { name: 'Redis', level: 75 },
        ],
    },
    {
        category: 'Cloud & DevOps',
        icon: '☁️',
        color: '#FB923C',
        techs: [
            { name: 'AWS (Lambda, S3, EC2)', level: 88 },
            { name: 'CI/CD Pipelines', level: 82 },
            { name: 'Docker / Kubernetes', level: 76 },
            { name: 'Monitoring & Alerts', level: 80 },
        ],
    },
    {
        category: 'Mobile',
        icon: '📱',
        color: '#F472B6',
        techs: [
            { name: 'React Native', level: 84 },
            { name: 'Expo', level: 80 },
            { name: 'iOS & Android', level: 75 },
        ],
    },
    {
        category: 'Product & Analytics',
        icon: '📊',
        color: '#A78BFA',
        techs: [
            { name: 'Mixpanel / Amplitude', level: 85 },
            { name: 'Google Analytics', level: 90 },
            { name: 'Figma & UX', level: 82 },
            { name: 'A/B Testing', level: 78 },
            { name: 'CMS (WordPress / Contentful)', level: 85 },
            { name: 'Product Analytics', level: 88 },
        ],
    },
    {
        category: 'AI & ML',
        icon: '🤖',
        color: '#F59E0B',
        techs: [
            { name: 'Machine Learning', level: 80 },
            { name: 'Deep Learning', level: 75 },
        ],
    },
];

export default function TechExpertise() {
    return (
        <section id="expertise" className={styles.section}>
            <div className={styles.bgAccent} />
            <div className="container">
                <div className={styles.header}>
                    <div className="section-tag">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-11l5 3-5 3V9z" />
                        </svg>
                        Tech Depth
                    </div>
                    <h2 className="section-title">
                        The Technology Side <span className="gradient-text">of My Expertise</span>
                    </h2>
                    <p className="section-subtitle">
                        Not a list of buzzwords — a structured view of what I can evaluate, recommend,
                        and architect for your specific context.
                    </p>
                </div>

                <div className={styles.grid}>
                    {techGroups.map((group) => (
                        <div key={group.category} className={`${styles.card} card`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.catIcon} style={{ '--c': group.color } as React.CSSProperties}>
                                    {group.icon}
                                </div>
                                <h3 className={styles.category}>{group.category}</h3>
                            </div>
                            <div className={styles.techList}>
                                {group.techs.map((tech) => (
                                    <div key={tech.name} className={styles.techItem}>
                                        <div className={styles.techNameRow}>
                                            <span className={styles.techName}>{tech.name}</span>
                                            <span className={styles.techLevel} style={{ color: group.color }}>{tech.level}%</span>
                                        </div>
                                        <div className={styles.bar}>
                                            <div
                                                className={styles.barFill}
                                                style={{
                                                    width: `${tech.level}%`,
                                                    background: `linear-gradient(90deg, ${group.color}, ${group.color}88)`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Philosophy callout */}
                <div className={styles.philosophy}>
                    <div className={styles.philosophyIcon}>💡</div>
                    <div>
                        <h4 className={styles.philosophyTitle}>My Tech Philosophy</h4>
                        <p className={styles.philosophyText}>
                            I don&apos;t recommend technologies because they&apos;re trendy. I choose them because
                            they&apos;re <strong>right for your stage, team, and goals</strong>. The best stack is the one
                            your team can actually ship with — not the one that looks best on a resume.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
