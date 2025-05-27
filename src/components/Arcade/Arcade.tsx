import { useState } from "react";

export const Arcade = () => {
    const [activeGameIndex, setActiveGameIndex] = useState(0);
    const games = ["Game 1", "Game 2", "Game 3"]; // Заглушки для игр

    const handlePrevious = () => {
        setActiveGameIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : games.length - 1));
    };

    const handleNext = () => {
        setActiveGameIndex((prevIndex) => (prevIndex < games.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className="relative bg-card-background p-4 rounded-lg shadow-lg border border-graphite-gray flex flex-col items-center space-y-4">
            {/* Верхние стрелки */}
            <div className="flex space-x-4">
                <button
                    onClick={handlePrevious}
                    className="w-10 h-10 bg-charcoal-gray text-pale-gray rounded-full flex items-center justify-center hover:bg-deep-violet transition"
                >
                    ◄
                </button>
                <button
                    onClick={handleNext}
                    className="w-10 h-10 bg-charcoal-gray text-pale-gray rounded-full flex items-center justify-center hover:bg-deep-violet transition"
                >
                    ►
                </button>
            </div>

            {/* Индикаторы */}
            <div className="flex space-x-2">
                {games.map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 rounded-full ${
                            activeGameIndex === index ? "bg-deep-violet" : "bg-charcoal-gray"
                        }`}
                    ></div>
                ))}
            </div>

            {/* Игровой экран */}
            <div
                className="w-full h-64 bg-charcoal-gray rounded-lg shadow-md border border-graphite-gray flex items-center justify-center"
                style={{
                    backgroundImage: `radial-gradient(circle at top left, rgba(75, 32, 90, 0.2), transparent 70%),
                                  radial-gradient(circle at bottom right, rgba(74, 31, 31, 0.2), transparent 70%)`,
                }}
            >
                <p className="text-pale-gray font-bold">{games[activeGameIndex]}</p>
            </div>
        </div>
    );
};