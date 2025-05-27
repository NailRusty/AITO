import './App.css';
import {
    SocialIcons,
    AIInteraction,
    SignInMethods,
    NewsFeed,
    Marquee,
    Disclaimer,
    Donate,
    TweetsFeed,
    AIProfileCard, DaysTillTheEnd, Arcade
} from './components';
import Logo from './images/Untitled.svg';
import {useEffect} from "react";

function App() {
    // useEffect(() => {
    //     fetch('http://localhost:3000/twitter/tweet', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ text: "test" }),
    //     });
    // })

    return (
        <div className="bg-deep-black text-pale-gray min-h-screen overflow-y-auto font-sans flex justify-center items-center min-w-[1920px]">
            {/* Внешний контейнер */}
            <div
                className="w-[1920px] min-h-full bg-charcoal-gray shadow-lg space-y-12 p-8 border-l border-r border-graphite-gray relative">
                {/* Логотип с абсолютным позиционированием */}

                {/* Основное содержимое */}
                <div className="grid grid-cols-9 gap-x-8 gap-y-8 relative">
                    {/* Пустая колонка */}
                    <div className="relative flex justify-center items-center">
                        <img
                            height={256}
                            width={256}
                            src={Logo}
                            alt="AI Take Over Logo"
                            className="absolute opacity-90 cursor-pointer transform translate-x-[-50%] translate-y-[-50%] hover:scale-110 transition-transform"
                            style={{
                                top: '50%',
                                left: '50%',
                                filter: 'drop-shadow(0 0 4px #A5A5A5) drop-shadow(0 0 8px #A5A5A5)',
                            }}
                        />
                    </div>
                    {/* Вторая колонка */}
                    <div className="col-span-2 bg-card-background p-4 rounded-lg flex items-center justify-center">
                        <p className="text-lg font-bold text-center text-pale-gray">Just fake cold nubmers</p>
                    </div>
                    {/* Социальные иконки */}
                    <div className="col-span-3 flex justify-center items-center border-t border-b border-dim-gray">
                        <SocialIcons/>
                    </div>
                    {/* Четвертая колонка */}
                    <div className="col-span-3 p-4 rounded-lg flex items-center justify-center">
                        <SignInMethods/>
                    </div>
                </div>

                {/* Вторая строка */}
                <div className="grid grid-cols-4 gap-x-8 gap-y-8">
                    <div className="col-span-1 space-y-8">
                        <div>
                            <AIInteraction/>
                        </div>
                        <div>
                            <Donate />
                        </div>
                        <div>
                            <Disclaimer />
                        </div>
                    </div>
                    <div className="col-span-2 space-y-8">
                        <div>
                            <Marquee text={'You are doomed.'} />
                        </div>
                        <div>
                            <AIProfileCard />
                        </div>
                        <div>
                            <NewsFeed/>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-8">
                        <div>
                            <DaysTillTheEnd />
                        </div>
                        <div>
                            <Arcade />
                        </div>
                        <div>
                            <TweetsFeed />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
