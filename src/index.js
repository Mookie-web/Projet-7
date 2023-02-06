import React from 'react';
import '../src/assets/css/index.css'
// import './assets/css/index.css';
import App from './pages/App'
import {createRoot} from "react-dom/client";

const rootElement = document.getElementById('root')
const root = createRoot(rootElement);

root.render(
    <App/>
)

