import { useEffect, useRef, useState } from 'react';

export default function AnimatedSection({
    children,
    className = '',
    animation = 'reveal-up',
    delay = 0,
    threshold = 0.1,
    triggerOnce = true
}) {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(entry.target);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin: '0px 0px -50px 0px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [threshold, triggerOnce]);

    // Build class names - CSS handles all animation states
    const animationClass = `anim-${animation}`;
    const visibleClass = isVisible ? 'is-visible' : '';

    return (
        <div
            ref={sectionRef}
            className={`animated-section ${animationClass} ${visibleClass} ${className}`}
            style={{ '--anim-delay': `${delay}ms` }}
        >
            {children}
        </div>
    );
}
