import io, { Socket } from 'socket.io-client';
let socket: typeof Socket | null = null;

export const initiateSocket = (roomID: string): void => {
    socket = io('/', {
        path: '/socketio',
    });
    if (socket && roomID) {
        socket.emit('join', roomID);
    }
};

export const disconnectSocket = (): void => {
    if (socket) {
        socket.disconnect();
    }
};

export const subscribeToChat = (cb: CallBackType) => {
    if (!socket) {
        return cb(true);
    }
    socket.on('chat', (msg: string) => {
        return cb(false, msg);
    });
};

interface CallBackType {
    (error: boolean, message?: string): void;
}

export const sendMessage = (roomID: string, message: string): void => {
    if (socket) {
        socket.emit('chat', {
            message,
            roomID,
        });
    }
};
