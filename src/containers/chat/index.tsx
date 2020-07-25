import React, { useEffect, useRef, useState } from 'react';
import Button from '../../components/Button';
import { initiateSocket, disconnectSocket, subscribeToChat, sendMessage } from '../../utils/chat';
import ChatField from '../../components/ChatField';

const Chat: React.SFC = () => {
    const roomInputRef = useRef<HTMLInputElement>(null);
    const messageInputRef = useRef<HTMLInputElement>(null);
    const [roomID, setRoomID] = useState<string | null>(null);
    const [allChat, setAllChat] = useState<string[]>([]);
    useEffect(() => {
        if (roomID) {
            initiateSocket(roomID);
        }
        subscribeToChat((err, message) => {
            if (err) {
                return;
            }
            if (message) {
                setAllChat((oldChat: string[]) => [...oldChat, message]);
            }
        });
        return () => {
            disconnectSocket();
        };
    }, [roomID]);
    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (roomInputRef && roomInputRef.current) {
            setRoomID(roomInputRef.current.value);
        }
    };
    const messageSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (messageInputRef && messageInputRef.current && roomID) {
            sendMessage(roomID, messageInputRef.current.value);
            messageInputRef.current.value = '';
        }
    };
    return (
        <>
            <h1>Room: {roomID ? roomID : ''}</h1>
            {roomID ? (
                <div>
                    <div
                        style={{
                            overflow: 'auto',
                            height: '80vh',
                        }}
                    >
                        {allChat.map((chat: string, chatIndex: number) => {
                            return <div key={`chatIndex-${chatIndex}`}>{chat}</div>;
                        })}
                    </div>
                    <form onSubmit={messageSubmit}>
                        <ChatField
                            inputFieldProps={{
                                ref: messageInputRef,
                            }}
                            buttonProps={{
                                text: 'Send',
                                type: 'submit',
                            }}
                        />
                    </form>
                </div>
            ) : (
                <form onSubmit={formSubmit}>
                    <input type={'text'} ref={roomInputRef} />
                    <Button text={'Enter'} type={'submit'} />
                </form>
            )}
        </>
    );
};

export default Chat;
