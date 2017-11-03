import React from "react";
import { Link } from 'react-router';
import Header from "./header/Header.jsx"
import NavLink from "./publicTool/NavLink"


import "./app.css"

class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div><Header/></div>
                <div className="nav_ul clearfix">
                    <ul role="nav" className="container">
                        <li><Link to="/">影讯&购票</Link></li>
                        <li><Link to="/">选电影</Link></li>
                        <li><Link to="/">电视剧</Link></li>
                        <li><NavLink to="/in_theaters">正在上映</NavLink></li>
                        <li><NavLink to="/coming_soon">即将上映</NavLink></li>
                        <li><NavLink to="/top250">top250</NavLink></li>
                    </ul>
                </div>
                {this.props.children}
            </div>
        )
    }
}


module.exports = App;