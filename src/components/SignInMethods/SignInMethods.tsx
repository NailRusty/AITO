// Main component with modal functionality
import { useState } from "react";
import { FaGoogle, FaTwitter, FaTelegram } from "react-icons/fa";

export const SignInMethods = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    const handleSignIn = (provider) => {
        console.log(`Signing in with ${provider}`);
        // Add your sign-in logic here
    };

    return (
        <div className="relative w-full flex justify-center items-center">
            {/* Button to open modal */}
            <div className="flex justify-end items-center w-full h-full">
                <button
                    onClick={toggleModal}
                    className="px-6 py-3 bg-card-background text-pale-gray font-semibold rounded-lg shadow-sm transform transition-all duration-150 hover:bg-card-hover active:bg-card-active active:scale-95 focus:outline-none"
                >
                    Choose a Login Method
                </button>
            </div>


            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                >
                    {/* Диагональный градиент только на фоне */}
                    <div
                        className="absolute inset-0 pointer-events-none z-0"
                        style={{
                            backgroundImage: `repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0px, rgba(255, 255, 255, 0.02) 1px, transparent 1px, transparent 10px)`
                        }}
                    ></div>

                    {/* Модальное окно */}
                    <div
                        className="relative bg-card-background w-96 p-6 rounded-xl shadow-lg z-10"
                        style={{
                            border: '2px solid #4A4A4A',
                            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.9), inset 0 0 10px rgba(255, 255, 255, 0.03)',
                            background: '#1b1b1b',
                        }}
                    >
                        {/* Закрывающая кнопка */}
                        <button
                            onClick={toggleModal}
                            className="absolute top-2 right-2 text-lg font-bold text-gray-400 hover:text-gray-300 focus:outline-none"
                            style={{
                                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
                                transition: 'color 0.2s ease',
                            }}
                        >
                            ✕
                        </button>

                        {/* Заголовок */}
                        <h2 className="text-lg font-bold text-pale-gray text-center mb-4">
                            Choose a Sign In Method
                        </h2>

                        {/* Кнопки выбора */}
                        <div className="space-y-4">
                            {/* Google Button */}
                            <button
                                onClick={() => handleSignIn("google")}
                                className="flex items-center justify-center w-full py-3 px-6 bg-graphite-gray text-pale-gray rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-[#DB4437] hover:text-white active:scale-95"
                            >
                                <FaGoogle className="mr-2" size={24}/>
                                Google
                            </button>

                            {/* Twitter Button */}
                            <button
                                disabled
                                className="flex items-center justify-center w-full py-3 px-6 bg-graphite-gray text-gray-500 rounded-lg shadow-md cursor-not-allowed"
                            >
                                <FaTwitter className="mr-2" size={24}/>
                                Twitter (Coming soon...)
                            </button>

                            {/* Telegram Button */}
                            <button
                                disabled
                                className="flex items-center justify-center w-full py-3 px-6 bg-graphite-gray text-gray-500 rounded-lg shadow-md cursor-not-allowed"
                            >
                                <FaTelegram className="mr-2" size={24}/>
                                Telegram (Coming soon...)
                            </button>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};
