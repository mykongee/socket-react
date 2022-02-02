import React from 'react';
import reactDom from 'react-dom';
import App from './App.jsx';
import { BrowserRouter, Routes, route} from 'react-router-dom';


reactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);