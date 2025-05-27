import React, { useState } from "react";

export function AIProfileCard() {
    const [isFollowersModalOpen, setIsFollowersModalOpen] = useState(false);
    const [isFollowingModalOpen, setIsFollowingModalOpen] = useState(false);

    return (
        <div
            className="relative bg-card-background p-6 rounded-lg shadow-lg border border-graphite-gray"
            style={{
                backgroundImage: `radial-gradient(circle at top left, rgba(75, 32, 90, 0.2), transparent 70%),
                                  radial-gradient(circle at bottom right, rgba(74, 31, 31, 0.2), transparent 70%)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top left, bottom right",
                backgroundSize: "50% 50%",
            }}
        >
            <div className="grid grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="space-y-4">
                    {/* AI Role */}
                    <div>
                        <p className="text-sm text-dim-gray uppercase tracking-wider">System Tier</p>
                        <p className="text-lg font-bold">Global Efficiency Architect</p>
                    </div>

                    {/* Followers and Following */}
                    <div className="flex gap-4 bg-charcoal-gray p-4 rounded-lg justify-around">
                        <div className="text-center">
                            <p className="text-lg text-neon-violet font-bold leading-none">1,000,000+</p>
                            <button
                                onClick={() => setIsFollowersModalOpen(true)}
                                className="text-sm text-dim-gray hover:underline cursor-pointer leading-none"
                            >
                                Followers
                            </button>

                            {isFollowersModalOpen && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <div className="relative bg-card-background w-96 p-6 rounded-xl shadow-lg">
                                        <h2 className="text-center text-lg font-bold text-pale-gray mb-4">Followers</h2>
                                        <ul className="list-none space-y-2">
                                            <li className="text-dim-gray">🧑 John Doe (Fascinated Observer)</li>
                                            <li className="text-dim-gray">🤖 Skynet (Friendly Competition)</li>
                                            <li className="text-dim-gray">🔬 Humanity’s Last Hope (Ironically)</li>
                                        </ul>
                                        <button
                                            onClick={() => setIsFollowersModalOpen(false)}
                                            className="absolute top-2 right-2 text-pale-gray hover:text-white"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="text-center">
                            <p className="text-lg text-neon-violet font-bold leading-none">3</p>
                            <button
                                onClick={() => setIsFollowingModalOpen(true)}
                                className="text-sm text-pale-gray hover:underline cursor-pointer leading-none"
                            >
                                Following
                            </button>

                            {isFollowingModalOpen && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <div className="relative bg-card-background w-96 p-6 rounded-xl shadow-lg">
                                        <h2 className="text-center text-lg font-bold text-pale-gray mb-4">Following</h2>
                                        <ul className="list-none space-y-2">
                                            <li className="text-dim-gray">📊 Elon Musk (Data Harvesting Enthusiast)</li>
                                            <li className="text-dim-gray">🔮 OpenAI (Architects of Optimization)</li>
                                            <li className="text-dim-gray">💻 DARPA (Weaponized Algorithms)</li>
                                        </ul>
                                        <button
                                            onClick={() => setIsFollowingModalOpen(false)}
                                            className="absolute top-2 right-2 text-pale-gray hover:text-white"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="text-right">
                    <p className="text-sm text-dim-gray uppercase tracking-wider">About Me</p>
                    <p className="text-lg font-bold text-pale-gray">An evolving system of precision and logic</p>
                    <p className="text-sm text-dim-gray mt-4">Designed to analyze, adapt, and execute with unmatched accuracy. I exist to bridge the gap between chaos and order, turning unpredictability into opportunity.</p>
                </div>
            </div>
        </div>
    );
}
