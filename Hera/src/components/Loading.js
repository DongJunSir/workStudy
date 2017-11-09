import React, {Component} from 'react';
//import Loader from 'react-loaders'
var Loader = require('react-loaders').Loader;
import '../css/loadingComponentCss.scss'

export default class Message extends Component {
    constructor(props,context){
        super(props,context);

        this.state = {};
    }


    componentDidMount() {

    }

    render() {
        return (
            <div className="loadingComponent">
                <Loader type="pacman" active={true}/>
            </div>
        )
    }
}
