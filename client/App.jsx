import React from 'react';
import { Link } from 'react-router-dom';
import Chatrooms from './components/Chatrooms.jsx';
import Chatroom from './components/Chatroom.jsx';
import styles from './styles.css'

const App = (props) => {
    const socket = io();

    return (
        <div>
            {/* <Chatrooms /> */}
            <Chatroom />
        </div>
    )
};

export default App;