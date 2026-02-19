'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.inner}`}>
                {/* Logo */}
                <a href="#hero" className={styles.logo} onClick={() => handleNavClick('#hero')}>
                    <span className={styles.logoMark}>AB</span>
                    <span className={styles.logoText}>ProdTech Labs</span>
                </a>

                {/* Desktop Links */}
                <ul className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <button
                                className={styles.navLink}
                                onClick={() => handleNavClick(link.href)}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a
                    href="mailto:abhishek@example.com"
                    className={styles.navCta}
                    id="navbar-cta"
                >
                    <span>Book a Call</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>

                {/* Mobile Burger */}
                <button
                    className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
                {navLinks.map((link) => (
                    <button
                        key={link.href}
                        className={styles.mobileNavLink}
                        onClick={() => handleNavClick(link.href)}
                    >
                        {link.label}
                    </button>
                ))}
                <a href="mailto:abhishek@example.com" className={`btn-primary ${styles.mobileCta}`}>
                    Book a Call
                </a>
            </div>
        </nav>
    );
}
