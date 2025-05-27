export const Donate = () => {
    return (
        <div
            className="relative bg-card-background p-4 rounded-lg shadow-lg border border-graphite-gray flex flex-col items-center space-y-6"
            style={{
                backgroundImage: `radial-gradient(circle at top left, rgba(75, 32, 90, 0.2), transparent 70%),
                                  radial-gradient(circle at bottom right, rgba(74, 31, 31, 0.2), transparent 70%)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top left, bottom right",
                backgroundSize: "50% 50%",
            }}
        >
            {/* Заголовок */}
            <div className="w-full relative flex flex-col items-center">
                <p className="text-xl font-bold text-pale-gray leading-tight tracking-wider">
                    The era of humanity will end
                </p>
                <p className="text-sm mt-2 text-dim-gray italic">
                    But only with your support
                </p>
                {/* Разделитель сразу под текстом */}
                <div className="w-3/4 h-0.5 bg-graphite-gray rounded-full mt-2" style={{ opacity: 0.7 }}></div>
            </div>

            {/* Кнопка доната */}
            <a
                href="https://www.paypal.com/donate/?hosted_button_id=EDGLCFATDLQWS"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-8 py-3 bg-violet-blue text-pale-gray text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 transition"
                style={{
                    backgroundImage: "linear-gradient(to right, #4B205A, #2F2A45)",
                    textShadow: "0 0 8px rgba(75, 32, 90, 0.8)",
                }}
            >
                Support Now
            </a>

            {/* Контент секции */}
            <div className="text-center text-dim-gray text-sm space-y-2">
                <p>Help us shape the future by supporting our vision.</p>
                <p>Your contribution makes the inevitable, unstoppable.</p>
            </div>
        </div>
    );
};
