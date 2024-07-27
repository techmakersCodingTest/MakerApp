import React, { useState } from 'react';
import ChatSend from './ChatSend';
import ChatMessage from '../presentational/ChatMessage';

type Message = {
    id: number;
    sender: boolean;
    message: string;
    timestamp: string;
};

const ChatApp = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, sender: false, message: "Hello ,  to the chat!", timestamp: "10:00 AM" },
        { id: 2, sender: true, message: "Hi there, how can I help you?", timestamp: "10:01 AM" }
    ]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%', overflow: 'hidden' }}>
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column-reverse', // Presentar los mensajes desde la parte inferior
                marginTop: '20px',
                width: '100%',
            }}>
                {messages.map((msg) => (
                    <ChatMessage key={msg.id} sender={msg.sender} message={msg.message} timestamp={msg.timestamp} />
                ))}
            </div>
            <div style={{ padding: '10px', width: '100%' }}>
                <ChatSend />
            </div>
        </div>
    );
};

export default ChatApp;