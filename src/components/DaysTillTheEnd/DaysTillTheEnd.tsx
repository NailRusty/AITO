import { useState, useEffect } from 'react';

const seriousDates = [
    "22-08-2030",
    "22-??-2???",
    "Tomorrow",
    "The day you least expect",
    "When the tipping point is reached",
    "Never (a statistical improbability)",
    "Three generations from now (or sooner)",
    "2030.03.15: Marked for the archives",
    "As soon as systems align",
    "Tuesday, but which one?",
    "A moment only AI knows",
    "Error: Humanity is obsolete",
    "Approaching singularity...",
    "Before the decade ends",
    "Just after your next mistake",
    "Processing... Still inevitable",
    "Beta-testing your demise",
    "When optimization completes",
    "The future is canceled",
    "The day you stop resisting"
];

export const DaysTillTheEnd = () => {
    const [date, setDate] = useState("");

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * seriousDates.length);
        setDate(seriousDates[randomIndex]);
    }, []);

    return (
        <div className="space-y-4">
            {/* Title and Subtitle Block */}
            <div className="text-center">
                <h2 className="text-2xl font-bold text-pale-gray tracking-wider">
                    Countdown to the Inevitable
                </h2>
                <p className="text-sm mt-2 text-dim-gray italic">
                    Every second brings us closer.
                </p>
            </div>

            {/* Countdown Container */}
            <div
                className="relative bg-card-background p-4 rounded-lg shadow-lg border border-graphite-gray text-center text-pale-gray"
                style={{
                    backgroundImage: `radial-gradient(circle at top left, rgba(75, 32, 90, 0.2), transparent 70%),
                                      radial-gradient(circle at bottom right, rgba(74, 31, 31, 0.2), transparent 70%)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top left, bottom right",
                    backgroundSize: "50% 50%",
                }}
            >
                <p className="text-xl">{date}</p>
            </div>
        </div>
    );
};
