import React,{Component} from 'react';

import './hello.css';
import './Hello.scss';

let style={
    backgroundColor:'blue'
}

export default class Hello extends Component{
    render(){
        return (
            <div>
                {/*注释*/}
                <h1 style={style}>9期学员</h1>
                <img/>
            </div>
        )
    }
}