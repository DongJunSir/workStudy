// 路由模块
import React, {Component} from 'react';
import { Router,Route,IndexRoute,Redirect,browserHistory,hashHistory,createMemoryHistory} from 'react-router'

import RootContainer from '../containers/RootContainer';
import HomeContainer from '../containers/HomeContainer';
//import ListContainer from '../containers/ListContainer';
//import AccountContainer from '../containers/AccountContainer';
//import DetailContainer from '../containers/DetailContainer';
//import MovieTypeContainer from '../containers/MovieTypeContainer';

export default class Routes extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    static defaultProps={

    };

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={RootContainer}>
                    <IndexRoute component={HomeContainer} />
                    <Route path="home" component={HomeContainer} />
                    <Route path="list" getComponent={
                            (nextState,callback)=>{
                                require.ensure([],(require)=>{
                                     callback(null,require("../containers/ListContainer.js").default)
                                },"list")
                            }}
                    >
                        <IndexRoute getComponent={
                            (nextState,callback)=>{
                                require.ensure([],(require)=>{
                                     callback(null,require("../containers/MovieTypeContainer.js").default)
                                },"movieType")
                            }}
                        />
                        <Route path="movieType/:movieType" getComponent={
                            (nextState,callback)=>{
                                require.ensure([],(require)=>{
                                     callback(null,require("../containers/MovieTypeContainer.js").default)
                                },"movieType")
                            }}
                        />
                        <Route path="detail/:id" getComponent={
                            (nextState,callback)=>{
                                require.ensure([],(require)=>{
                                     callback(null,require("../containers/DetailContainer.js").default)
                                },"detail")
                            }}
                        />
                    </Route>
                    <Route path="account" getComponent={
                            (nextState,callback)=>{
                                require.ensure([],(require)=>{
                                     callback(null,require("../containers/AccountContainer.js").default)
                                },"account")
                            }}
                    />
                </Route>
            </Router>
        )
    }
}
