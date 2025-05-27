import { useState, useEffect, useRef } from 'react';
import { AIAvatar } from './AIAvatar';
import { Chat } from './Chat';

export function AIInteraction() {
    const [response, setResponse] = useState('');
    const [displayedText, setDisplayedText] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);
    const monitorRef = useRef<HTMLDivElement>(null);
    const [isSpeaking, setIsSpeaking] = useState(false);

    useEffect(() => {
        if (!response) return;

        let index = 0;
        const fullText = response;

        const interval = setInterval(() => {
            if (index < fullText.length) {
                const currentText = fullText.slice(0, index + 1);
                setDisplayedText(currentText);
                index++;
            } else {
                clearInterval(interval);
                setIsSpeaking(false);
            }
        }, 67);

        setIsSpeaking(true);

        return () => {
            clearInterval(interval);
            setIsSpeaking(false);
        };
    }, [response]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    const handleSendMessage = async (message: string) => {
        if (!message.trim()) return;

        try {
            const res = await fetch('/api/ai/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: message }),
            });
            const data = await res.json();
            setResponse(data.content);
        } catch (error) {
            console.error('Error fetching AI response:', error);
            setResponse('Error! Unable to fetch a response.');
        }
    };

    return (
        <div className="relative flex flex-col items-center">
            {/* Outer Wrapper */}
            <div className="relative w-full max-w-3xl">
                {/* Gradient Background */}
                <div
                    className="absolute inset-x-0 bg-card-background rounded-lg shadow-lg"
                    style={{
                        top: '25%',
                        height: 'calc(100% - 25%)',
                        backgroundImage: `radial-gradient(circle at top left, rgba(75, 32, 90, 0.2), transparent 70%),
                                          radial-gradient(circle at bottom right, rgba(74, 31, 31, 0.2), transparent 70%)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'top left, bottom right',
                        backgroundSize: '50% 50%',
                    }}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center space-y-6 p-6">
                    {/* AI Avatar */}
                    <div className="w-full flex justify-center">
                        <AIAvatar isSpeaking={isSpeaking} />
                    </div>

                    {/* Monitor for displaying response */}
                    <div
                        ref={monitorRef}
                        className="w-full mx-4 bg-charcoal-gray text-pale-gray p-4 rounded-lg shadow-lg border border-graphite-gray overflow-hidden"
                        style={{
                            height: '200px',
                            overflowY: 'scroll',
                            background: `linear-gradient(145deg, #101010, #080808)`,
                            boxShadow: 'inset 0 0 6px rgba(255, 255, 255, 0.1), 0 4px 6px rgba(0, 0, 0, 0.7)',
                            borderRadius: '16px',
                            color: '#00aa00',
                            fontFamily: 'Courier, monospace',
                            fontSize: '1.2rem',
                            letterSpacing: '0.1rem',
                            scrollbarWidth: 'none',
                        }}
                    >
                        <div className="whitespace-pre-line">
                            {displayedText}
                            {cursorVisible && (
                                <span
                                    className="animate-blink"
                                    style={{ color: '#00aa00' }}
                                >
                                    |
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Chat Input */}
                    <div className="w-full">
                        <Chat onSendMessage={handleSendMessage} />
                    </div>
                </div>
            </div>

            <style>{`
                ::-webkit-scrollbar {
                    display: none;
                }

                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .animate-blink {
                    animation: blink 1s steps(2, start) infinite;
                }
            `}</style>
        </div>
    );
}
