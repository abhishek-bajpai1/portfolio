import React from 'react';

interface LogoProps {
    size?: number;
    showText?: boolean;
}

export default function ProdTechLogo({ size = 38, showText = true }: LogoProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Icon Mark */}
            <svg
                width={size}
                height={size}
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="ptl-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6C63FF" />
                        <stop offset="100%" stopColor="#38BDF8" />
                    </linearGradient>
                    <linearGradient id="ptl-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38BDF8" />
                        <stop offset="100%" stopColor="#6C63FF" />
                    </linearGradient>
                    <filter id="ptl-glow">
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Hexagon background */}
                <polygon
                    points="22,2 40,12 40,32 22,42 4,32 4,12"
                    fill="url(#ptl-grad1)"
                    opacity="0.15"
                />
                <polygon
                    points="22,2 40,12 40,32 22,42 4,32 4,12"
                    fill="none"
                    stroke="url(#ptl-grad1)"
                    strokeWidth="1.5"
                />

                {/* P letter stylized */}
                <rect x="14" y="13" width="3" height="18" rx="1.5" fill="url(#ptl-grad1)" filter="url(#ptl-glow)" />
                {/* P curve top */}
                <path
                    d="M17 13 Q28 13 28 19 Q28 25 17 25"
                    stroke="url(#ptl-grad1)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    filter="url(#ptl-glow)"
                />

                {/* Circuit dot accents */}
                <circle cx="30" cy="30" r="2" fill="#38BDF8" opacity="0.8" />
                <line x1="27" y1="30" x2="23" y2="30" stroke="#38BDF8" strokeWidth="1.2" opacity="0.6" />
                <circle cx="22" cy="30" r="1.2" fill="#6C63FF" opacity="0.8" />
            </svg>

            {/* Wordmark */}
            {showText && (
                <svg
                    width="120"
                    height={size * 0.8}
                    viewBox="0 0 120 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="ptl-text-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#F1F5F9" />
                            <stop offset="100%" stopColor="#CBD5E1" />
                        </linearGradient>
                        <linearGradient id="ptl-labs-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6C63FF" />
                            <stop offset="100%" stopColor="#38BDF8" />
                        </linearGradient>
                    </defs>
                    <text
                        x="0"
                        y="19"
                        fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif"
                        fontSize="15"
                        fontWeight="800"
                        fill="url(#ptl-text-grad)"
                        letterSpacing="-0.3"
                    >
                        ProdTech
                    </text>
                    <text
                        x="72"
                        y="19"
                        fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif"
                        fontSize="15"
                        fontWeight="800"
                        fill="url(#ptl-labs-grad)"
                        letterSpacing="-0.3"
                    >
                        {' '}Labs
                    </text>
                </svg>
            )}
        </div>
    );
}
