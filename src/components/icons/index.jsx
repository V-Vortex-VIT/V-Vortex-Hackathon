// Custom SVG Icons for V-Vortex
// Unique brand icons with consistent styling

export const VortexIcon = ({ size = 24, className = '' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <linearGradient id="vortexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
        </defs>
        <path
            d="M50 10C72 10 90 28 90 50C90 72 72 90 50 90C28 90 10 72 10 50C10 28 28 10 50 10Z"
            stroke="url(#vortexGrad)"
            strokeWidth="3"
            fill="none"
        />
        <path
            d="M50 25C63.8 25 75 36.2 75 50C75 63.8 63.8 75 50 75C36.2 75 25 63.8 25 50C25 36.2 36.2 25 50 25Z"
            stroke="url(#vortexGrad)"
            strokeWidth="2.5"
            fill="none"
            opacity="0.8"
        />
        <path
            d="M50 38C56.6 38 62 43.4 62 50C62 56.6 56.6 62 50 62C43.4 62 38 56.6 38 50C38 43.4 43.4 38 50 38Z"
            fill="url(#vortexGrad)"
        />
    </svg>
);

export const RocketIcon = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 16.5C3 18 3 20.5 3 20.5C3 20.5 5.5 20.5 7 19C8.5 17.5 8 15 8 15C8 15 6 14.5 4.5 16.5Z" fill="currentColor" opacity="0.6" />
        <path d="M12 2C12 2 9 8 9 13C9 16 10.5 18.5 12 20C13.5 18.5 15 16 15 13C15 8 12 2 12 2Z" fill="currentColor" />
        <path d="M6 12C6 12 7 9 9 7L12 13H6V12Z" fill="currentColor" opacity="0.8" />
        <path d="M18 12C18 12 17 9 15 7L12 13H18V12Z" fill="currentColor" opacity="0.8" />
    </svg>
);

export const AIIcon = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <path d="M12 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M3 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M5.64 5.64L7.76 7.76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16.24 16.24L18.36 18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M5.64 18.36L7.76 16.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16.24 7.76L18.36 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const ShieldIcon = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 7V12C3 17.5 7.5 21 12 22C16.5 21 21 17.5 21 12V7L12 2Z" fill="currentColor" opacity="0.2" />
        <path d="M12 2L3 7V12C3 17.5 7.5 21 12 22C16.5 21 21 17.5 21 12V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const HeartPulseIcon = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="currentColor" opacity="0.2" />
        <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" stroke="currentColor" strokeWidth="2" />
        <path d="M6 12H9L10 10L12 14L14 11H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const CoinIcon = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="12" rx="9" ry="9" fill="currentColor" opacity="0.2" />
        <ellipse cx="12" cy="12" rx="9" ry="9" stroke="currentColor" strokeWidth="2" />
        <path d="M12 6V7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 16.5V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M9.5 9.5C9.5 8.4 10.6 7.5 12 7.5C13.4 7.5 14.5 8.4 14.5 9.5C14.5 10.6 13.4 11.5 12 11.5C10.6 11.5 9.5 12.4 9.5 13.5C9.5 14.6 10.6 15.5 12 15.5C13.4 15.5 14.5 14.6 14.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const ChipIcon = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" opacity="0.2" />
        <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" />
        <path d="M9 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M3 9H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M3 15H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 15H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const CalendarIcon = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="18" rx="2" fill="currentColor" opacity="0.2" />
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
        <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="15" r="2" fill="currentColor" />
    </svg>
);

export const MapPinIcon = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="currentColor" opacity="0.2" />
        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="9" r="3" fill="currentColor" />
    </svg>
);

export const TrophyIcon = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2H18V9C18 12.31 15.31 15 12 15C8.69 15 6 12.31 6 9V2Z" fill="currentColor" opacity="0.2" />
        <path d="M6 2H18V9C18 12.31 15.31 15 12 15C8.69 15 6 12.31 6 9V2Z" stroke="currentColor" strokeWidth="2" />
        <path d="M6 5H3V8C3 9.66 4.34 11 6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 5H21V8C21 9.66 19.66 11 18 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 15V18" stroke="currentColor" strokeWidth="2" />
        <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 18H14V21H10V18Z" fill="currentColor" />
    </svg>
);

export const ArrowRightIcon = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const SparkleIcon = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor" />
        <path d="M19 14L19.75 16.25L22 17L19.75 17.75L19 20L18.25 17.75L16 17L18.25 16.25L19 14Z" fill="currentColor" opacity="0.7" />
        <path d="M5 2L5.5 3.5L7 4L5.5 4.5L5 6L4.5 4.5L3 4L4.5 3.5L5 2Z" fill="currentColor" opacity="0.5" />
    </svg>
);

export const LightningIcon = ({ size = 24, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
    </svg>
);
