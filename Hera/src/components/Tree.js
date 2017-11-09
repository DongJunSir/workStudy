import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Tree extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {};
    }
    //componentWillReceiveProps(nextProps) {
    //}


    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Link to="/home/list/in_theaters"><h4>正在热映</h4></Link>
                <Link to="/home/list/top250"><h4>Top250</h4></Link>
                <Link to="/home/list/coming_soon"><h4>即将上映</h4></Link>
            </div>
        )
    }
}
