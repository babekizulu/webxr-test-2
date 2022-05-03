//libraries
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
//components
//variables
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App/>);
