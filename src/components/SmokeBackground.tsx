import { useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-expect-error - Vanta.js doesn't have TypeScript definitions
import HALO from 'vanta/dist/vanta.halo.min';

interface VantaEffect {
    destroy: () => void;
}

const SmokeBackground = () => {
    const vantaRef = useRef<VantaEffect | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!vantaRef.current && containerRef.current) {
            vantaRef.current = HALO({
                el: containerRef.current,
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
                minHeight: window.innerHeight,
                minWidth: window.innerWidth,
                amplitudeFactor: 2.5,
                size: 2.0,
                xOffset: 0.25,
                yOffset: 0,
                baseColor: 0x4338CA, // Rich Indigo (Tailwind Indigo-700 for better contrast)
                backgroundColor: 0x000000,
                THREE: THREE
            });

            // Handle resize
            const handleResize = () => {
                if (vantaRef.current) {
                    vantaRef.current.destroy();
                    vantaRef.current = HALO({
                        el: containerRef.current!,
                        mouseControls: false,
                        touchControls: false,
                        gyroControls: false,
                        minHeight: window.innerHeight,
                        minWidth: window.innerWidth,
                        amplitudeFactor: 2.5,
                        size: 2.0,
                        xOffset: 0.25,
                        yOffset: 0,
                        baseColor: 0x4338CA,
                        backgroundColor: 0x000000,
                        THREE: THREE
                    });
                }
            };

            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
                if (vantaRef.current) {
                    vantaRef.current.destroy();
                }
            };
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 w-full h-full"
            style={{
                opacity: 0.85,
                background: 'linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.25) 50%), linear-gradient(to bottom, transparent 85%, rgba(0,0,0,0.8) 100%)'
            }}
        />
    );
};

export default SmokeBackground;