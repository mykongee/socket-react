import React from 'react';

const Message = props => {
    const {username, message} = props;

    return (
        <li>
            {username} : {message}
        </li>
    )
}

export default Message;