// 项目入口文件
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Routes from './Routes'

import '../styles/appCss.css'

ReactDOM.render(
        <div>
            <Routes/>
        </div>,
    document.getElementById('app')
);