import React, {Component} from 'react';
import {Link} from 'react-router'

import '../styles/rootCss.css'

export default class RootContainer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    static defaultProps={

    };

    render() {
        return (
            <div className="root-container">
                <div className="root-header">
                    <Link to="/home">首页</Link>
                    <Link to="/list">电影列表</Link>
                    <Link to="/account">账户</Link>
                </div>
                <div className="root-content">
                    {this.props.children}
                </div>
                <div className="root-footer">
                     版本所有&copy;8期和9期
                </div>
            </div>

        )
    }
}