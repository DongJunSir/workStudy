import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Hello from '../components/Hello.js'
import Life from '../components/Life.js'

ReactDOM.render(
    <div>
        <Life/>
    </div>,
    document.getElementById('app')
)