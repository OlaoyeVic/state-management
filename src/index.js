import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { GrudgeProvider } from './GrudgeContext';



ReactDOM.render(<GrudgeProvider><App /></GrudgeProvider>, document.getElementById('root'));