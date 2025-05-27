import React, { useEffect, useState } from 'react';
import it from '../../../assets/it.mp4';

export function AIAvatar({ isSpeaking }: { isSpeaking: boolean }) {
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [isOnline, setIsOnline] = useState(true); // Online/Offline toggle

    useEffect(() => {
        if (isSpeaking) {
            if (videoRef.current) {
                videoRef.current.play();
            }
        } else {
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0; // Reset video to start
            }
        }
    }, [isSpeaking]);

    const toggleStatus = () => {
        setIsOnline((prevState) => !prevState);
    };

    return (
        <div className="relative flex flex-col justify-center items-center">
            {/* Outer Container for Metal Effect */}
            <div className={"absolute w-64 h-64 rounded-lg bg-charcoal-gray"}></div>

            <div
                className="relative w-60 h-60 rounded-lg overflow-hidden z-10 flex items-center justify-center"
                style={{
                    background: `linear-gradient(145deg, #2a2a2a, #1a1a1a)`,
                    border: '3px solid',
                    borderColor: '#444 #222 #222 #444',
                    borderRadius: '8px',
                    boxShadow: `
                        0 4px 8px rgba(0, 0, 0, 0.9),
                        inset 0 1px 2px rgba(255, 255, 255, 0.1),
                        inset -1px -1px 2px rgba(0, 0, 0, 0.4)`
                }}
            >
                {/* Inner Border for Extra Depth */}
                <div
                    className="absolute inset-1 rounded-lg overflow-hidden"
                    style={{
                        border: '2px solid',
                        borderColor: '#393939 #505050 #505050 #393939',
                        boxShadow: `
                            inset 0 1px 3px rgba(0, 0, 0, 0.5),
                            0 1px 1px rgba(255, 255, 255, 0.2)`
                    }}
                >
                    {/* Inner Content */}
                    <div
                        className="relative w-full h-full rounded-lg overflow-hidden"
                        style={{
                            background: `linear-gradient(145deg, #202020, #101010)`
                        }}
                    >
                        {/* Inner Glowing Layer */}
                        {isSpeaking && (
                            <div
                                className="absolute inset-0 z-20 pointer-events-none rounded-lg"
                                style={{
                                    boxShadow: `
                                        0 0 15px rgba(255, 255, 255, 0.2), 
                                        inset 0 0 20px rgba(255, 255, 255, 0.15)`
                                }}
                            ></div>
                        )}

                        {/* Video Element */}
                        <video
                            ref={videoRef}
                            src={it}
                            className="object-cover w-full h-full rounded-lg z-10"
                            loop
                            muted
                        ></video>

                        {/* Status Indicator */}
                        <div
                            className="absolute bottom-[-2px] right-[-2px] flex items-center px-3 py-1 z-15"
                            style={{
                                background: `linear-gradient(145deg, #2a2a2a, #1a1a1a), radial-gradient(circle at top left, #3a3a3a, #2a2a2a 70%)`,
                                boxShadow: '0 2px 4px #000000',
                                borderRadius: '4px',
                                isolation: 'isolate'
                            }}
                        >
                            {/* Status Light */}
                            <div
                                className={`w-2 h-2 rounded-full mr-2 ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}
                                style={{
                                    background: `radial-gradient(circle, ${isOnline ? 'rgba(50, 255, 50, 1)' : 'rgba(255, 50, 50, 1)'} 40%, rgba(0, 0, 0, 0.7) 100%)`,
                                    boxShadow: `inset 0 0 1px rgba(0, 0, 0, 0.8), 0 0 4px ${isOnline ? 'rgba(50, 255, 50, 0.8)' : 'rgba(255, 50, 50, 0.8)'}`,
                                    animation: isOnline ? 'greenPulse 1.2s ease-in-out infinite' : 'redPulse 1.2s ease-in-out infinite',
                                    transform: 'translateX(-3px) translateY(-1px)'
                                }}
                            ></div>
                            {/* Status Text */}
                            <span
                                className="text-xs text-white font-semibold tracking-wide font-vt323"
                                style={{
                                    transform: 'translateX(-3px) translateY(-1px)'
                                }}
                            >
                                {isOnline ? 'ONLINE' : 'OFFLINE'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
