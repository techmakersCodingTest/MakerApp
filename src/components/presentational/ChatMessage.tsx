// ChatMessage.tsx
import React from 'react';
import CSS from "csstype";

type ChatMessageProps = {
    sender: boolean; // true if the message is from the sender, false if from the receiver
    message: string;
    timestamp: string;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ sender, message, timestamp }) => {
    const messageStyle: CSS.Properties = {
        padding: '10px',
        margin: '5px',
        borderRadius: '10px',
        maxWidth: '75%',
        alignSelf: sender ? 'flex-end' : 'flex-start',
        backgroundColor: sender ? '#dcf8c6' : '#ffffff',
        border: sender ? '1px solid #defede' : '1px solid #ccc',
        color: '#333',
    };

    const containerStyle: CSS.Properties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: sender ? 'flex-end' : 'flex-start',
        margin: '5px 20px',
    };

    return (
        <div style={containerStyle}>
            <div style={messageStyle}>
                <p style={{ margin: 0 }}>{message}</p>
            </div>
            <span style={{ fontSize: '0.8em', color: '#888' }}>{timestamp}</span>
        </div>
    );
};

export default ChatMessage;
