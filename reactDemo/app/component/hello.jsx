import React from "react";
import hello from "./hello.css"
import PropTypes from 'prop-types';

class Hello extends React.Component{
    constructor(props){
        super(props);
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

Hello.propTypes = {
    text:PropTypes.string
};

module.exports = Hello;