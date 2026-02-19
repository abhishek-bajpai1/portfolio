'use client';

import { useState } from 'react';
import styles from './Footer.module.css';

const team = [
    { role: 'Team Lead Developer', name: 'Abhishek Bajpai' },
    { role: 'ML Engineer', name: 'Aman Joshi' },
    { role: 'DevOps', name: 'Suryam Sourya' },
    { role: 'App Developer', name: 'Arpit Pandey' },
    { role: 'Cloud Engineer', name: 'Aditya Upadhya' },
    { role: 'Bugs Solver', name: 'Ark Arya' },
];

export default function Footer() {
    const [teamOpen, setTeamOpen] = useState(false);

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.brand}>
                        <div className={styles.logoMark}>AB</div>
                        <div>
                            <div className={styles.name}>ProdTech Labs</div>
                            <div className={styles.title}>Product & Technology Consultant</div>
                        </div>
                    </div>

                    <div className={styles.links}>
                        {['Services', 'Expertise', 'Case Studies', 'Process', 'Testimonials'].map((link) => (
                            <button
                                key={link}
                                className={styles.link}
                                onClick={() => {
                                    const id = link.toLowerCase().replace(' ', '-');
                                    document.getElementById(id === 'services' ? 'services' : id === 'expertise' ? 'expertise' : id === 'case-studies' ? 'case-studies' : id === 'process' ? 'process' : 'testimonials')
                                        ?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {link}
                            </button>
                        ))}
                    </div>

                    <div className={styles.social}>
                        <a href="https://topmate.io/abhishek_bajpai11" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Topmate">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                            </svg>
                            <span style={{ fontSize: '12px', marginLeft: '4px' }}>Topmate</span>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href="mailto:abhishekbajpai680@gmail.com" className={styles.socialLink} aria-label="Email">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className={styles.divider} />

                {/* Team Toggle */}
                <div className={styles.teamSection}>
                    <button
                        className={styles.teamToggle}
                        onClick={() => setTeamOpen(!teamOpen)}
                        aria-expanded={teamOpen}
                    >
                        <span className={styles.teamToggleLabel}>
                            👥 Our Team
                        </span>
                        <span className={`${styles.teamChevron} ${teamOpen ? styles.teamChevronOpen : ''}`}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </span>
                    </button>

                    <div className={`${styles.teamGrid} ${teamOpen ? styles.teamGridOpen : ''}`}>
                        {team.map((member) => (
                            <div key={member.name} className={styles.teamMember}>
                                <div className={styles.memberAvatar}>
                                    {member.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                                </div>
                                <div>
                                    <div className={styles.memberName}>{member.name}</div>
                                    <div className={styles.memberRole}>{member.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.bottom}>
                    <span>© {new Date().getFullYear()} ProdTech Labs. All rights reserved.</span>
                    <span className={styles.madeWith}>
                        Built with Next.js &amp; ❤️ — Helping founders build better.
                    </span>
                </div>
            </div>
        </footer>
    );
}
