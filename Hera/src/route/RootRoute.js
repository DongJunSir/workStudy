import React,{Component} from 'react'
import { Router, Route, Link,IndexRoute,Redirect,browserHistory,hashHistory} from 'react-router'

import AppContainer from '../containers/AppContainer'
import HomeContainer from '../containers/HomeContainer'
//import ListContainer from '../containers/ListContainer'
//import DetailContainer from '../containers/DetailContainer'
//import CategoryContainer from '../containers/CategoryContainer'
//import Message from '../components/Message'


export default class RootRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={AppContainer}>
                    <IndexRoute component={HomeContainer}/>
                    <Route path="home" component={HomeContainer}>
                        <Route path="list/:listType" getComponent={
                            (nextState,callback)=>{
                                require.ensure([],(require)=>{
                                     callback(null,require("../containers/ListContainer.js").default)
                                },"44")
                            }}
                        />
                        <Route path="detail/:id" getComponent={
                            (nextState,callback)=>{
                                require.ensure([],(require)=>{
                                     callback(null,require("../containers/DetailContainer.js").default)
                                },"55")
                            }}
                        />
                    </Route>
                    <Route path="category" getComponent={
                        (nextState,callback)=>{
                            require.ensure([],(require)=>{
                                 callback(null,require("../containers/CategoryContainer.js").default)
                            },"66")
                        }}
                    >
                        {/*这是绝对路由的写法，直接拼接/*/}
                        <Route path="/messages/:id" getComponent={
                            (nextState,callback)=>{
                                require.ensure([],(require)=>{
                                     callback(null,require("../components/Message").default)
                                },"77")
                            }}
                        />
                        {/*<Route path="messages/:id" component={Message} />*/}
                        {/* 跳转 /inbox/messages/:id 到 /messages/:id */}
                        <Redirect from="messages/:id" to="/messages/:id"/>
                    </Route>
                </Route>
            </Router>
        )
    }
}
