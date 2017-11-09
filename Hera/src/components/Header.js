import React, {Component} from 'react';
import { Link } from 'react-router'

import '../css/Header.css'
export default class Message extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="headerCss">
                <ul>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/category">分类</Link></li>
                    <li><Link to="/category/messages/23">message</Link></li>
                    <li><Link to="/messages/23">/message</Link></li>
                </ul>
            </div>
        )
    }
}
