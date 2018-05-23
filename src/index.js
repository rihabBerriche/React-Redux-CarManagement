import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CarDashBoard from "./components/CarDashBoard";
import 'semantic-ui-css/semantic.min.css'
ReactDOM.render(<CarDashBoard/>, document.getElementById('root'))
registerServiceWorker();
