'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import ProdTechLogo from './ProdTechLogo';
import { useAuth } from '../../context/AuthContext';

declare global {
    interface Window {
        Calendly?: {
            initPopupWidget: (opts: { url: string }) => void;
        };
    }
}

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
    const { user, logout } = useAuth();

    const openCalendly = () => {
        window.Calendly?.initPopupWidget({
            url: 'https://calendly.com/abhishekbajpai680/30min',
        });
    };

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
                    <ProdTechLogo size={36} showText={true} />
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
                    <li>
                        <Link href="/clients" className={styles.navLink} style={{ textDecoration: 'none' }}>
                            Clients
                        </Link>
                    </li>
                </ul>

                {/* Auth / CTA */}
                <div className={styles.navRight}>
                    {user ? (
                        <>
                            <div className={styles.userAvatar} title={user.email || ''}>
                                {(user.displayName || user.email || 'U')[0].toUpperCase()}
                            </div>
                            <button onClick={logout} className={styles.logoutBtn}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className={styles.loginLink}>Login</Link>
                            <Link href="/signup" className={styles.navCta}>
                                <span>Sign Up</span>
                            </Link>
                        </>
                    )}
                    <button
                        onClick={openCalendly}
                        className={styles.navCta}
                        id="navbar-cta"
                        style={{ marginLeft: '4px' }}
                    >
                        <span>Book a Call</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

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
                <button onClick={openCalendly} className={`btn-primary ${styles.mobileCta}`}>
                    Book a Call
                </button>
            </div>
        </nav>
    );
}
