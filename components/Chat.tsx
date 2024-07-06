"use client";

import { useEffect, useState } from 'react';
import echo from '../lib/echo';

interface Message {
    data: string;
}

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        const channel = echo.channel('PublicChannel');

        channel.listen('.public-event', (e: Message) => {
            console.log(e.data);
            setMessages((prevMessages) => [...prevMessages, e.data]);
        });

        return () => {
            channel.stopListening('.public-event');
            echo.leaveChannel('PublicChannel');
        };
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-5 bg-white rounded-lg shadow-lg mt-16">
            <h1 className="text-2xl text-center mb-5 font-bold">Massage</h1>
            <ul className="list-none p-0">
                {messages.length > 0 ? (
                    messages.map((msg, index) => (
                        <li key={index} className="p-2 text-center mb-2 mt-2 font-bold">
                            {msg}
                        </li>
                    ))
                ) : (
                    <li className="p-2 text-center mb-2 mt-2 font-bold">-</li>
                )}
            </ul>
        </div>
    );
};

export default Chat;
