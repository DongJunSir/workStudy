import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import "./css/main.css"

import RootRoute from "./RootRoute.jsx";
import Header from "./component/header/Header.jsx"
import App   from "./component/app.jsx";
import Theaters     from "./component/theaters.jsx";

ReactDOM.render(
    <div>
        <RootRoute/>
    </div>,
    document.getElementById('root')
);
