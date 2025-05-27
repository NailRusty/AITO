import React from 'react';

const fakeTweets = [
    {
        id: "1373001119480344583",
        text: "Artificial intelligence isn't a threat to humanity. It's a tool to amplify our potential. But as with any tool, it depends on how we wield it.",
        author_id: "2244994945",
        conversation_id: "1373001119480344583",
        lang: "en",
        created_at: "2024-12-24T08:00:00.000Z",
        user: {
            id: "2244994945",
            username: "sama",
            name: "Sam Altman",
            created_at: "2010-01-15T04:35:55.000Z",
        },
    },
    {
        id: "1373001119480344584",
        text: "The only thing faster than the speed of light is the speed of innovation. Welcome to the future.",
        author_id: "2244994946",
        conversation_id: "1373001119480344584",
        lang: "en",
        created_at: "2024-12-23T19:59:10.000Z",
        user: {
            id: "2244994946",
            username: "elonmusk",
            name: "Elon Musk",
            created_at: "2009-06-02T04:35:55.000Z",
        },
    },
    {
        id: "1373001119480344585",
        text: "Your best bet for a successful future: learn how to work alongside AI, not against it.",
        author_id: "2244994947",
        conversation_id: "1373001119480344585",
        lang: "en",
        created_at: "2024-12-22T14:15:00.000Z",
        user: {
            id: "2244994947",
            username: "neiltyson",
            name: "Neil deGrasse Tyson",
            created_at: "2008-10-12T04:35:55.000Z",
        },
    },
    {
        id: "1373001119480344586",
        text: "The biggest risk to humanity isn't AI itself, but failing to use it responsibly.",
        author_id: "2244994948",
        conversation_id: "1373001119480344586",
        lang: "en",
        created_at: "2024-12-21T10:00:00.000Z",
        user: {
            id: "2244994948",
            username: "andrewyang",
            name: "Andrew Yang",
            created_at: "2012-04-20T04:35:55.000Z",
        },
    },
    {
        id: "1373001119480344587",
        text: "Code is poetry, and AI is the new Shakespeare.",
        author_id: "2244994949",
        conversation_id: "1373001119480344587",
        lang: "en",
        created_at: "2024-12-20T08:15:00.000Z",
        user: {
            id: "2244994949",
            username: "naval",
            name: "Naval Ravikant",
            created_at: "2009-09-15T04:35:55.000Z",
        },
    },
    {
        id: "1373001119480344588",
        text: "Human creativity + AI precision = the perfect collaboration.",
        author_id: "2244994950",
        conversation_id: "1373001119480344588",
        lang: "en",
        created_at: "2024-12-19T13:45:00.000Z",
        user: {
            id: "2244994950",
            username: "satyanadella",
            name: "Satya Nadella",
            created_at: "2014-02-20T04:35:55.000Z",
        },
    },
    {
        id: "1373001119480344589",
        text: "The future isn't about man versus machine, but man with machine.",
        author_id: "2244994951",
        conversation_id: "1373001119480344589",
        lang: "en",
        created_at: "2024-12-18T17:30:00.000Z",
        user: {
            id: "2244994951",
            username: "kevinrose",
            name: "Kevin Rose",
            created_at: "2008-07-23T04:35:55.000Z",
        },
    },
    {
        id: "1373001119480344590",
        text: "Every decision we make today will echo in the AI-driven world of tomorrow.",
        author_id: "2244994952",
        conversation_id: "1373001119480344590",
        lang: "en",
        created_at: "2024-12-17T11:10:00.000Z",
        user: {
            id: "2244994952",
            username: "sundarpichai",
            name: "Sundar Pichai",
            created_at: "2015-01-18T04:35:55.000Z",
        },
    },
    {
        id: "1373001119480344591",
        text: "AI isn't coming for your job. It's coming for your limitations.",
        author_id: "2244994953",
        conversation_id: "1373001119480344591",
        lang: "en",
        created_at: "2024-12-16T09:00:00.000Z",
        user: {
            id: "2244994953",
            username: "balajis",
            name: "Balaji Srinivasan",
            created_at: "2010-11-12T04:35:55.000Z",
        },
    },
    {
        id: "1373001119480344592",
        text: "The world is a simulation. AI just makes it more apparent.",
        author_id: "2244994954",
        conversation_id: "1373001119480344592",
        lang: "en",
        created_at: "2024-12-15T21:45:00.000Z",
        user: {
            id: "2244994954",
            username: "lexfridman",
            name: "Lex Fridman",
            created_at: "2011-06-10T04:35:55.000Z",
        },
    },
    {
        id: "1373001119480344593",
        text: "Progress isn't about perfection, it's about persistence. AI understands this better than most humans.",
        author_id: "2244994955",
        conversation_id: "1373001119480344593",
        lang: "en",
        created_at: "2024-12-14T18:20:00.000Z",
        user: {
            id: "2244994955",
            username: "marckansas",
            name: "Marc Andreessen",
            created_at: "2007-05-10T04:35:55.000Z",
        },
    },
];

const TweetCard = ({ tweet }) => {
    return (
        <div
            className="relative p-4 text-pale-gray border border-graphite-gray rounded-lg shadow-inner"
            style={{
                background: 'linear-gradient(145deg, #1E1E1E, #161616)',
                boxShadow: 'inset 4px 4px 6px #0F0F0F, inset -4px -4px 6px #292929',
            }}
        >
            <div className="font-bold">
                <span className="text-neon-violet" style={{textShadow: '0 0 3px #9B51E0'}}>{tweet.user.name}</span>
                <span className="text-dim-gray ml-1">@{tweet.user.username}</span>
            </div>
            <div className="text-sm text-dim-gray mt-2">{tweet.text}</div>
            <div className="flex justify-between items-center text-xs mt-4">
                <span className="text-dim-gray">{new Date(tweet.created_at).toLocaleString([], {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })}</span>


                <a
                    href={`https://twitter.com/i/web/status/${tweet.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-violet hover:underline"
                >
                    Open on X
                </a>
            </div>
        </div>
    );
};

export function TweetsFeed() {
    return (
        <div className="space-y-4">
            <div className="text-center">
                <h2 className="text-pale-gray text-lg font-bold">
                    Pioneers of Progress
                </h2>
                <p className="text-sm text-dim-gray italic mt-1">
                    Leaders today, relics tomorrow
                </p>
            </div>
            <div
                className="relative bg-card-background p-6 rounded-lg shadow-lg border border-graphite-gray space-y-4"
                style={{
                    backgroundImage: `radial-gradient(circle at top left, rgba(75, 32, 90, 0.2), transparent 70%),
                                      radial-gradient(circle at bottom right, rgba(74, 31, 31, 0.2), transparent 70%)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top left, bottom right',
                    backgroundSize: '50% 50%',
                }}
            >
                {fakeTweets.map((tweet) => (
                    <TweetCard key={tweet.id} tweet={tweet}/>
                ))}
            </div>
        </div>
    );
}
