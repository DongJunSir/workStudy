import React from "react";
import hello from "./hello.css"

class Hello extends React.Component{
    constructor(props){
        super(props);
        this.propTypes = {
            text:React.PropTypes.string
        }
    }
    render(){
        return <div className="hello" onClick={this.print}>
                    hello <span>{this.props.text}</span>
                </div>
    }
    print(){
        console.log("点击事件");
        console.log(this);
    }
}

module.exports = Hello;