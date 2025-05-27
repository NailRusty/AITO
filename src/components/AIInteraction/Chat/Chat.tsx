import { FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';

export function Chat({ onSendMessage }: { onSendMessage: (message: string) => void }) {
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (inputValue.trim()) {
            onSendMessage(inputValue.trim());
            setInputValue('');
        }
    };

    return (
        <div className="w-full max-w-lg p-4 rounded-lg flex items-center space-x-4">
            {/* Input Field */}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow p-2 rounded-lg bg-graphite-gray text-white border border-dim-gray focus:outline-none focus:ring-2 focus:ring-violet-blue shadow-inner"
            />
            {/* Send Button */}
            <button
                onClick={handleSend}
                className="p-2 rounded-lg bg-violet-blue text-white shadow-lg hover:bg-deep-violet active:scale-95 transform hover:scale-110 transition flex items-center justify-center border-2 border-dim-gray hover:border-violet-blue"
            >
                <FaPaperPlane size={20} />
            </button>
        </div>
    );
}
