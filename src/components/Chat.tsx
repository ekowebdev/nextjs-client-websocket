// components/Chat.tsx
import { useEffect, useState } from 'react';
import pusher from '../lib/pusher';

interface Message {
    data: string;
}

const Chat: React.FC = () => {
    const [latestMessage, setLatestMessage] = useState<string | null>(null);

    useEffect(() => {
        const channel = pusher.subscribe('PublicChannel');

        channel.bind('public-event', (e: Message) => {
            setLatestMessage(e.data);
        });

        return () => {
            pusher.unsubscribe('PublicChannel');
        };
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-5 bg-white rounded-lg shadow-lg mt-16">
            <h1 className="text-2xl text-center mb-5 font-bold">Message</h1>
            <p className="p-2 text-center mb-2 mt-2 font-bold">
                {latestMessage !== null ? latestMessage : "-"}
            </p>
        </div>
    );
};

export default Chat;
