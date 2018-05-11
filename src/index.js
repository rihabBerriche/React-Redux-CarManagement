import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CarDashBoard from "./components/CarDashBoard";

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CarDashBoard/>, document.getElementById('root'))
registerServiceWorker();
