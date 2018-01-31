//TODO: Module
import ReactDOM from 'react-dom';
import React from 'react';
import MaterialUI from './MaterialUI';
import Favicon from 'react-favicon';
import "jquery";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import Logo from "../public/images/logo.png";
// import "../public/css/materialui.min.css";
import "../public/scss/materialui.scss";
//TODO: Khởi tạo store
import { createStore } from 'redux';
//TODO: Import reducer
import myReducer from './reducers/index';
//TODO: Kết nối react với redux
import {Provider} from 'react-redux';
const store = createStore(myReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<div><Favicon url={Logo}/><Provider store={store}><MaterialUI  /></Provider></div>,document.querySelector('#root'));
