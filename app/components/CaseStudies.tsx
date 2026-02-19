'use client';

import { useState } from 'react';
import styles from './CaseStudies.module.css';

const cases = [
    {
        tag: 'E-Commerce · SaaS',
        emoji: '🛍️',
        title: 'Reduced Infra Costs by 35% for an E-Commerce Platform',
        problem: 'A fast-growing e-commerce startup was spending $18K/month on AWS with no cost visibility. Their monolithic Node.js backend was causing 8–12s page load times and 3x unnecessary compute costs.',
        thinking: 'I started by auditing their entire AWS bill and mapped each cost to a product feature. Found that 60% of spend was on always-on EC2 instances for features used at peak hours only.',
        solution: 'Migrated batch processing jobs to AWS Lambda (serverless), introduced CloudFront CDN for static assets, switched to Aurora Serverless for variable DB load, and set up cost budgets with automated alerts.',
        result: '$6,300 saved monthly. Page loads dropped from 9s → 1.8s. Zero downtime during migration.',
        metrics: [
            { label: 'Cost Reduction', value: '35%' },
            { label: 'Load Time', value: '9s → 1.8s' },
            { label: 'Monthly Savings', value: '$6.3K' },
        ],
        color: '#6C63FF',
    },
    {
        tag: 'HealthTech · Mobile',
        emoji: '🏥',
        title: 'Took a HealthTech MVP from Idea to Launch in 9 Weeks',
        problem: 'A non-tech founder had a validated idea for a patient appointment scheduling app, but no technical co-founder. They had limited budget and needed to launch before a competitor.',
        thinking: 'MVP had to be ruthlessly scoped. Mapped every feature request to user value and eliminated anything that wasn\'t critical for first 100 users. Built a decision matrix: launch-critical vs nice-to-have.',
        solution: 'Chose React Native (one codebase for iOS + Android), Supabase as backend (zero ops overhead), and Stripe for payments. Built a scrappy but clean UI using community component libraries.',
        result: '9-week launch. 300+ users in month 1. $45K seed funding secured using the MVP as demonstration.',
        metrics: [
            { label: 'Time to Launch', value: '9 Weeks' },
            { label: 'Month 1 Users', value: '300+' },
            { label: 'Funding Raised', value: '$45K' },
        ],
        color: '#34D399',
    },
    {
        tag: 'SaaS · B2B',
        emoji: '📦',
        title: 'Rebuilt a Failing B2B SaaS Architecture for Scale',
        problem: 'A B2B SaaS company with 50+ enterprise clients was losing accounts due to system downtime and bugs caused by tightly coupled monolithic code. Every new feature broke 3 existing ones.',
        thinking: 'The problem wasn\'t the team — it was the architecture. They\'d outgrown their original design. I proposed a strangler-fig migration: gradually replace monolith modules with microservices, without a full rewrite.',
        solution: 'Identified 4 bounded contexts and carved out Auth, Billing, Notifications as independent services. Set up proper API gateways, introduced contract testing between services, and automated deployments via GitHub Actions.',
        result: 'System uptime went from 94% → 99.7%. Feature deployment cycle from 3 weeks → 4 days. 0 churn in the next quarter.',
        metrics: [
            { label: 'Uptime', value: '94% → 99.7%' },
            { label: 'Deploy Speed', value: '3wk → 4d' },
            { label: 'Churn', value: '0 accounts' },
        ],
        color: '#38BDF8',
    },
];

export default function CaseStudies() {
    const [active, setActive] = useState(0);
    const current = cases[active];

    return (
        <section id="case-studies" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <div className="section-tag">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        Case Studies
                    </div>
                    <h2 className="section-title">
                        Real Problems. <span className="gradient-text">Real Results.</span>
                    </h2>
                    <p className="section-subtitle">
                        Not theoretical advice — here are the actual decisions, trade-offs,
                        and outcomes from my consulting work.
                    </p>
                </div>

                {/* Tab selectors */}
                <div className={styles.tabs}>
                    {cases.map((c, i) => (
                        <button
                            key={i}
                            className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
                            onClick={() => setActive(i)}
                            style={{ '--c': c.color } as React.CSSProperties}
                            id={`case-tab-${i}`}
                        >
                            <span className={styles.tabEmoji}>{c.emoji}</span>
                            <span className={styles.tabTag}>{c.tag}</span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className={styles.caseCard} key={active}>
                    <div className={styles.caseLeft}>
                        <div className={styles.caseEmoji}>{current.emoji}</div>
                        <h3 className={styles.caseTitle}>{current.title}</h3>
                        <div className={styles.caseTag} style={{ color: current.color, borderColor: current.color + '44', background: current.color + '11' }}>
                            {current.tag}
                        </div>

                        {/* Metrics */}
                        <div className={styles.metrics}>
                            {current.metrics.map((m) => (
                                <div key={m.label} className={styles.metric} style={{ '--c': current.color } as React.CSSProperties}>
                                    <span className={styles.metricValue}>{m.value}</span>
                                    <span className={styles.metricLabel}>{m.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.caseRight}>
                        {[
                            { label: '❓ The Problem', text: current.problem },
                            { label: '🧠 My Thinking', text: current.thinking },
                            { label: '🛠 Solution & Decisions', text: current.solution },
                            { label: '📈 Result', text: current.result },
                        ].map((block) => (
                            <div key={block.label} className={styles.block}>
                                <h4 className={styles.blockLabel}>{block.label}</h4>
                                <p className={styles.blockText}>{block.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
