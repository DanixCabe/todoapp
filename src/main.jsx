import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {  TodoListApp } from './TodoListApp';
import { Provider } from 'react-redux';
import { store } from './store';
import 'flowbite';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <TodoListApp />
        </Provider>
    </React.StrictMode>,
)
