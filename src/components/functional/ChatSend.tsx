import SendSharpIcon from '@mui/icons-material/SendSharp';
import { IconButton } from '@mui/material';
import { useState } from 'react';

const ChatSend = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSendMessage = () => {
        console.log('Send message:', inputValue);
        setInputValue(''); // Reset input after send
    };
    
    return (
        <div style={{
            display: 'flex',
            position: 'relative',
            border: '1px solid black',
            background: '#f6f4fc',
        }}>
            <input type="text"
                name="message"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type a message..."
                style={{
                    padding: '18px 60px 18px 18px', // Aumentado el padding derecho
                    border: 0,
                    width: '100%',
                    boxShadow: '2px 5px 15px #dcdbdb',
                    borderRadius: '6px',
                }} />
            <IconButton
                onClick={handleSendMessage} // Agrega el manejador onClick
                style={{
                    position: 'absolute',
                    top: '12px',
                    right: '20px', // Asegúrate de coordinar esta posición con el padding derecho del input
                    color: '#ffffff',
                    background: '#233044',
                    borderRadius: '50%',
                    width: '35px',
                    height: '35px',
                }}>
                <SendSharpIcon fontSize="inherit" />
            </IconButton>
        </div>
    );
};

export default ChatSend;
