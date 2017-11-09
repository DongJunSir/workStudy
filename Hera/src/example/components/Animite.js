import React,{Component} from 'react'
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var INTERVAL = 2000;
import './Animite.css'

export default class Animite extends Component {

    static defaultProps={

    };
    constructor(props){
        super(props);
        this.state = {
            current: 0
        };
    }
    componentDidMount() {
        this.interval = setInterval(this.tick, INTERVAL);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    tick=()=> {
        this.setState({current: this.state.current + 1});
    }


    render() {
        var children = [];
        var pos = 0;
        var colors = ['red', 'gray', 'blue'];
        for (var i = this.state.current; i < this.state.current + colors.length; i++) {
            var style = {
                left: pos * 128,
                background: colors[i % colors.length]
            };
            pos++;
            children.push(<div key={i} className="animateItem" style={style}>{i}</div>);
        }
        return (
            <ReactCSSTransitionGroup
                component="ul"
                className="animateExample"
                transitionEnter={false}
                transitionAppear={true}
                transitionEnterTimeout={250}
                transitionLeaveTimeout={250}
                transitionName="example">
                {children}
            </ReactCSSTransitionGroup>
        );
    }
}