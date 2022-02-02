import React, { useEffect } from 'react';
import Message from './Message.jsx';

const Messages = props => {
    const { messages } = props;
    useEffect(() => {
        console.log(messages);
    })

    const messageMaker = (message) => {
        return <Message 
            {...message}
        />
    }

    const messagesList = messages.map((message) => messageMaker(message));

    return (
        <div className='messages'>
            <ul className='messagesList'>{messagesList}</ul>
        </div>
    )
}


export default Messages;