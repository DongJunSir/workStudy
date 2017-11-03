/**
 * Created by Administrator on 2017/9/11 0011.
 */
import React, {Component} from 'react';
import {render} from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'

import App   from "./component/app.jsx";
import Home   from "./component/home.jsx";
import Theaters     from "./component/theaters.jsx";
import ComingSoon from "./component/coming_soon.jsx";
import Top250     from "./component/top250.jsx";


class RootRoute extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="/in_theaters" component={Theaters}></Route>
                    <Route path="/coming_soon" component={ComingSoon}></Route>
                    <Route path="/top250" component={Top250}></Route>
                </Route>
            </Router>
        )
    }
}

module.exports = RootRoute;

