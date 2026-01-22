import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const ringRef = useRef(null);
    const trailRefs = useRef([]);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const mousePos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });
    const trailPositions = useRef([]);
    const rafId = useRef(null);

    useEffect(() => {
        // Check for touch device
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        // Initialize trail positions
        trailPositions.current = Array(5).fill({ x: 0, y: 0 });

        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };

            // Move main cursor immediately
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseEnter = () => setIsHidden(false);
        const handleMouseLeave = () => setIsHidden(true);

        // Check for hoverable elements
        const handleElementHover = (e) => {
            const target = e.target;
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('[role="button"]') ||
                target.closest('[data-cursor="hover"]') ||
                target.classList.contains('nav-btn') ||
                target.classList.contains('cta') ||
                target.classList.contains('domain-card') ||
                target.classList.contains('round-card');

            setIsHovering(isInteractive);
        };

        // Animation loop for smooth ring follow
        const animate = () => {
            // Smooth ring follow - reduced lerp for smoother movement
            if (ringRef.current) {
                ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.08;
                ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.08;
                ringRef.current.style.left = `${ringPos.current.x}px`;
                ringRef.current.style.top = `${ringPos.current.y}px`;
            }

            // Update trail
            trailPositions.current = trailPositions.current.map((pos, i) => {
                const prevPos = i === 0 ? mousePos.current : trailPositions.current[i - 1];
                return {
                    x: pos.x + (prevPos.x - pos.x) * (0.3 - i * 0.04),
                    y: pos.y + (prevPos.y - pos.y) * (0.3 - i * 0.04)
                };
            });

            trailRefs.current.forEach((trail, i) => {
                if (trail && trailPositions.current[i]) {
                    trail.style.left = `${trailPositions.current[i].x}px`;
                    trail.style.top = `${trailPositions.current[i].y}px`;
                }
            });

            rafId.current = requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousemove', handleElementHover);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        animate();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousemove', handleElementHover);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    // Check for touch device
    if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
        return null;
    }

    const cursorClasses = [
        'vortex-cursor',
        isHovering && 'cursor-hover',
        isClicking && 'cursor-click',
        isHidden && 'cursor-hidden'
    ].filter(Boolean).join(' ');

    const ringClasses = [
        'vortex-cursor-ring',
        isHovering && 'cursor-hover',
        isClicking && 'cursor-click',
        isHidden && 'cursor-hidden'
    ].filter(Boolean).join(' ');

    return (
        <>
            {/* Trail dots */}
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    ref={el => trailRefs.current[i] = el}
                    className="cursor-trail"
                    style={{ opacity: 0.5 - i * 0.1 }}
                />
            ))}

            {/* Main cursor ring */}
            <div ref={ringRef} className={ringClasses} />

            {/* Main cursor dot */}
            <div ref={cursorRef} className={cursorClasses} />
        </>
    );
}
