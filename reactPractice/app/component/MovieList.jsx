'use strict;'
import React from "react";
import * as fetch from '../fetchs/Homefetch';
import { Link } from 'react-router';

import MovieListItem from "./MovieListItem.jsx";


class MovieList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listType: this.props.listType ? this.props.listType : 'in_theaters',
            movieList:{},
            errMessage:"",
            isLoading:true
        }
    }

    componentDidMount() {
        console.log("执行了");
        this.requestMovieList(this.state.listType);
    }

    requestMovieList(listType){
        console.log("数据请求执行了");

        var _this=this;
        // 获取数据，获取数据之后调用setState方法给state赋值
        fetch.getMovieList(listType).then(function(data){
            console.log(data);
            _this.setState({movieList:data,isLoading:false})
        },function(err){
            _this.setState({errMessage:err})
        })
    }

    render() {
        let createItem = function (item,index) {
            return <MovieListItem data={item} key={item.id} />
        };


        if(this.state.isLoading){
            return (
                <div>
                    加载数据中............
                </div>
            )
        }
        else{
            // 数据请求成功的时候渲染item数据
            return (
                <div className="container clearfix">
                    <div className="movieList-title">
                        {this.state.movieList.title}
                    </div>
                    <div className="left-container doubleFloor">
                        <ul>{this.state.movieList.subjects.map(createItem)}</ul>
                        <div className="showMore"><Link>显示更多</Link></div>
                    </div>

                </div>
            )
        }
    }
}

module.exports = MovieList;
