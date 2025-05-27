import { useState } from "react";
import { FaShareAlt, FaGhost, FaFacebook, FaTwitter, FaTelegram, FaEnvelope } from "react-icons/fa";

// Тип для элементов новостей
type NewsItem = {
    title: string;
    description: string;
    content: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
};

// Компонент для отображения одной новости
export function NewsCard({ item }: { item: NewsItem }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen((prev) => !prev);

    const shareToSocial = (platform: string) => {
        const shareText = `${item.title}\n${item.url}`;
        switch (platform) {
            case "facebook":
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(item.url)}`, "_blank");
                break;
            case "twitter":
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, "_blank");
                break;
            case "telegram":
                window.open(`https://t.me/share/url?url=${encodeURIComponent(item.url)}&text=${encodeURIComponent(item.title)}`, "_blank");
                break;
            case "email":
                window.location.href = `mailto:?subject=${encodeURIComponent(item.title)}&body=${encodeURIComponent(item.url)}`;
                break;
            default:
                console.error("Unsupported platform");
        }
    };

    return (
        <div
            className="bg-card-background rounded-lg shadow-lg p-4 border border-graphite-gray flex flex-col space-y-4"
            style={{
                backgroundImage: `radial-gradient(circle at top left, rgba(75, 32, 90, 0.2), transparent 70%),
                                  radial-gradient(circle at bottom right, rgba(74, 31, 31, 0.2), transparent 70%)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top left, bottom right",
                backgroundSize: "50% 50%",
            }}
        >
            {/* Изображение */}
            {item.urlToImage && (
                <img
                    src={item.urlToImage}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-md shadow"
                />
            )}

            {/* Текстовая информация */}
            <div className="space-y-2">
                <h3 className="text-lg font-bold text-pale-gray">{item.title}</h3>
                <p className="text-sm text-dim-gray">{item.description}</p>
                <p className="text-xs text-dim-gray">
                    {item.content.replace(/\[\+\d+ chars\]/, '')}
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neon-violet text-sm hover:text-neon-violet-hover active:text-neon-violet-active hover:underline transition-all duration-200 transform hover:scale-105"
                        style={{ textShadow: '0 0 8px #9B51E0' }}
                    >
                        Continue reading ↗
                    </a>
                </p>
            </div>

            {/* Дата и кнопки */}
            <div className="flex justify-between items-center text-xs text-dim-gray">
                <span>{new Date(item.publishedAt).toLocaleDateString()}</span>
                <div className="flex space-x-4">
                    {/* Share Button with Tooltip */}
                    <div className="relative group">
                        <button
                            onClick={toggleModal}
                            className="p-2 rounded-md bg-brand-violet text-pale-gray hover:bg-brand-violet-hover active:bg-brand-violet-active active:scale-90 transition-transform flex items-center justify-center"
                        >
                            <FaShareAlt size={16} />
                        </button>
                        <span
                            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-charcoal-gray text-pale-gray text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                        >
                            Share
                        </span>
                    </div>

                    {/* I'm scared Button with Tooltip */}
                    <div className="relative group">
                        <button
                            className="p-2 rounded-md bg-brand-violet text-pale-gray hover:bg-brand-violet-hover active:bg-brand-violet-active active:scale-90 transition-transform flex items-center justify-center"
                        >
                            <FaGhost size={16} />
                            <span className="pl-2">0</span>
                        </button>
                        <span
                            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-charcoal-gray text-pale-gray text-xs py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                        >
                            I'm scared
                        </span>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div
                        className="relative bg-card-background w-96 p-6 rounded-xl shadow-lg"
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
                        <h2 className="text-center text-lg font-bold text-pale-gray mb-4">Share this news</h2>

                        {/* Кнопки соцсетей */}
                        <div className="flex justify-around space-x-4">
                            <FaFacebook
                                size={32}
                                className="cursor-pointer text-blue-600 hover:scale-110 transition-transform"
                                onClick={() => shareToSocial("facebook")}
                            />
                            <FaTwitter
                                size={32}
                                className="cursor-pointer text-blue-400 hover:scale-110 transition-transform"
                                onClick={() => shareToSocial("twitter")}
                            />
                            <FaTelegram
                                size={32}
                                className="cursor-pointer text-blue-500 hover:scale-110 transition-transform"
                                onClick={() => shareToSocial("telegram")}
                            />
                            <FaEnvelope
                                size={32}
                                className="cursor-pointer text-gray-500 hover:scale-110 transition-transform"
                                onClick={() => shareToSocial("email")}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
