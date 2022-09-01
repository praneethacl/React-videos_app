import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/App';

const root = document.getElementById("root");
const el = ReactDOMClient.createRoot(root);

el.render(<App/>);