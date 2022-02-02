import React, { useEffect, useRef } from 'react';
import Messages from './Messages.jsx';
import io from 'socket.io-client';
import { useState } from 'react';
import x from './socket.js';

const messagesArr = [
    {username: 'user1', message: "Message1"},
        {username: 'user2', message: "Message2"},
        {username: 'user1', message: "Message3"},
    ]

const Chatroom = props => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState(messagesArr);
    const [input, setInput] = useState(null);
    const [name, setName] = useState(null);
    // const [btn, setBtn] = useState(null);
    // open socket.io connection
    // client socket x listen to 'test' event from io server
    // x = io(); (client-side socket)
    // x listen for 'test' from server io;
    x.on('test', msg => {
        console.log(messages);
        setMessages(messages.concat([msg]));
        console.log('from outer', msg);
    })

    useEffect(() => {
        console.log(x);
        // const socket = io.connect('http://localhost:8080/');
        // setSocket(sock);
        // sock.emit('chat', 'from useEffect')
        // sock.on('test', msg => {
        //     setMessages(messages.concat(msg));
        //     console.log('in useEffect', msg);
        // })
        
        // console.log(sock);
        // return () => sock.close();
    });    


    // search database for room_id to get message id

    const onSubmit = event => {
        event.preventDefault();
        // alert(input);

        // emit with chat message to store in db
        // x.emit('test', input);
        let payload = {username: name, message: input};

        // client socket sends 'test' event to server
        x.emit('test', payload);
        // x.on('test', msg => {
        //     setMessages(messages.concat([msg]));
        //     console.log(msg);
        // })
    }
    
    const onChange = event => {
        setInput(event.target.value);
    }

    return (
        <div className='chat-room'>
            <h1>Chatroom 1</h1>
            <div>
            Name <input onChange={(event) => setName(event.target.value)}/>
            </div>
            <Messages messages={messages}/>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} id="input"/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Chatroom;