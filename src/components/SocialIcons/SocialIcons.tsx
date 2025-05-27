import { FaTwitter, FaTelegram, FaYoutube, FaTwitch } from 'react-icons/fa';

export function SocialIcons() {
    return (
        <div className="flex justify-center items-center space-x-14 py-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter
                    className="text-pale-gray hover:text-neon-blue transition-all transform hover:scale-110"
                    size={32}
                    style={{
                        filter: 'drop-shadow(0 0 8px #00d9ff)',
                        transition: 'filter 0.3s ease',
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.filter = 'drop-shadow(0 0 12px #00d9ff)')
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.filter = 'drop-shadow(0 0 8px #00d9ff)')
                    }
                />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                <FaTelegram
                    className="text-pale-gray hover:text-neon-blue transition-all transform hover:scale-110"
                    size={32}
                    style={{
                        filter: 'drop-shadow(0 0 8px #00d9ff)',
                        transition: 'filter 0.3s ease',
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.filter = 'drop-shadow(0 0 12px #00d9ff)')
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.filter = 'drop-shadow(0 0 8px #00d9ff)')
                    }
                />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube
                    className="text-pale-gray hover:text-neon-red transition-all transform hover:scale-110"
                    size={32}
                    style={{
                        filter: 'drop-shadow(0 0 8px #ff003c)',
                        transition: 'filter 0.3s ease',
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.filter = 'drop-shadow(0 0 12px #ff003c)')
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.filter = 'drop-shadow(0 0 8px #ff003c)')
                    }
                />
            </a>
            <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer">
                <FaTwitch
                    className="text-pale-gray hover:text-neon-purple transition-all transform hover:scale-110"
                    size={32}
                    style={{
                        filter: 'drop-shadow(0 0 8px #a500ff)',
                        transition: 'filter 0.3s ease',
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.filter = 'drop-shadow(0 0 12px #a500ff)')
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.filter = 'drop-shadow(0 0 8px #a500ff)')
                    }
                />
            </a>
        </div>
    );
}
