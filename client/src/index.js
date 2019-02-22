import React from 'react';
import ReactDOM from 'react-dom';
import  './bootstrap.min.css';
import App from './App';
import './utilities.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
