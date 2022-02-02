import React, { useEffect } from 'react';
import Messages from './Messages.jsx';
import io from 'socket.io-client';
import { useState } from 'react';

const messagesArr = [
    {username: 'user1', message: "Message1"},
        {username: 'user2', message: "Message2"},
        {username: 'user1', message: "Message3"},
    ]

const Chatroom = props => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState(messagesArr);
    // const [btn, setBtn] = useState(null);
    // open socket.io connection
    useEffect(() => {
        // console.log(socket);
        const socket = io();
        // const socket = io.connect('http://localhost:8080/');
        setSocket(socket);
        socket.emit('chat', 'from useEffect')
        socket.on('test', msg => {
            setMessages(messages.concat(msg));
            console.log('in useEffect', msg);
        })
        
        console.log(socket);
        return () => socket.close();
    }, [])
    
    useEffect(() => {        
        socket.on('test', msg => {
            setMessages(messages.concat(msg));

            console.log('in other useEffect');
        })
    }, [socket]);

    // search database for room_id to get message id

    const onSubmit = event => {
        event.preventDefault();
        console.log('send button clicked');

        // emit with chat message to store in db
        socket.emit('test', {test: 'obj'});
        socket.on('test', msg => {
            setMessages(messages.concat(msg));
            console.log(msg);
        })
    }

    return (
        <div className='chat-room'>
            <h1>Chatroom 1</h1>
            <Messages messages={messages}/>
            <form onSubmit={onSubmit}>
                input
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Chatroom;