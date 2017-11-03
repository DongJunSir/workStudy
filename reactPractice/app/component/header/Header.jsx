import React,{Component} from "react";
import HeaderItem from "./headerItem.jsx";

import "./header.css"

let f_left={float:"left"}
let f_right={float:"right"}



const leftList = ["豆瓣","读书","电影","音乐","同城","小组","阅读","FM","时间","东西","市集","更多"];
const rightList = ["下载豆瓣客户端","登录","注册"];


class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className="header">
            <HeaderItem links={leftList} style={f_left}></HeaderItem>
            <HeaderItem links={rightList} style={f_right}></HeaderItem>
        </div>
    }
}

module.exports = Header;
