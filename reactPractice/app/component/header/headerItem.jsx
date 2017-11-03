import React,{Component} from "react";
import "./header.css"

class HeaderItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <ul id="header-ul" className="item-list" style={this.props.style}>
            {this.props.links.map(function(text,index){
                return <li key={index} >
                    <a>{text}</a>
                </li>;
            })}
        </ul>
    }
}

module.exports = HeaderItem;