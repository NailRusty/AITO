import { useEffect, useRef } from "react";

type MarqueeProps = {
    text: string;
};

export function Marquee({ text }: MarqueeProps) {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const textElement = marqueeRef.current!;
        const containerElement = containerRef.current!;
        let animationFrameId: number;

        const startAnimation = () => {
            const containerWidth = containerElement.offsetWidth;
            const textWidth = textElement.offsetWidth;
            const totalDistance = containerWidth + textWidth;
            const speed = 100;
            const duration = totalDistance / speed;
            const delay = 1.5;

            textElement.style.transform = `translateX(-${textWidth}px)`;
            textElement.style.transition = "none";

            setTimeout(() => {
                textElement.style.transition = `transform ${duration}s linear`;
                textElement.style.transform = `translateX(${containerWidth}px)`;
            }, 100);

            const totalTime = duration * 1000 + delay * 1000;
            animationFrameId = window.setTimeout(startAnimation, totalTime);
        };

        startAnimation();

        return () => {
            window.clearTimeout(animationFrameId);
        };
    }, [text]);

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden bg-charcoal-gray rounded-lg shadow-lg border border-graphite-gray"
            style={{
                height: "60px",
                lineHeight: "60px",
                background: `linear-gradient(145deg, #101010, #080808)`,
                boxShadow: `
                    inset 0 0 6px rgba(255, 255, 255, 0.1), 
                    0 4px 6px rgba(0, 0, 0, 0.7)
                `,
                borderRadius: "16px",
            }}
        >
            <div
                ref={marqueeRef}
                className="absolute whitespace-nowrap"
                style={{
                    fontSize: "2rem",
                    fontFamily: "matrix",
                    color: "#00d9ff",
                    textShadow: `
                        0 0 10px #00d9ff,
                        0 0 20px #00d9ff,
                        0 0 30px rgba(0, 217, 255, 0.8)
                    `,
                }}
            >
                {text}
            </div>
        </div>
    );
}
