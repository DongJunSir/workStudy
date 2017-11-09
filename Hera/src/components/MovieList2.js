import React, {Component} from 'react';
import * as fetch from '../fetchs/homeFetch';

import MovieListItem from './MovieListItem';
import Loading from './Loading';


export default class MovieList extends Component {
    constructor(props,context){
        super(props);
        console.log("MovieList的构造函数");
        console.log(this.props.listType);
        this.state = {
            listType:this.props.listType?this.props.listType:'in_theaters',
            movieList:{},
            errMessage:"",
            isLoading:true
        };
    }

    componentDidMount() {
        this.fetchMovieList(this.state.listType);
    }

    componentWillUnmount(){
        console.log("MovieList组件结束了");
    }

    componentWillReceiveProps(nextProps) {
        console.log("属性发生变化了");
        console.log(nextProps);

        this.fetchMovieList(nextProps.listType);
        //this.setState({isLoading:true,listType:nextProps.listType})赋值是在这个方法里面设置的，但是没有立即执行
        //从效果上看先执行了获取数据的方法再执行渲染，也就是说明真正的赋值是在这个回调函数里面所有的懂西执行完毕之后才进行的
        // 其实遮罩是在数据请求之后才改变的状态
    }


    fetchMovieList=(listType)=>{
        console.log("数据请求执行了");
        this.setState({isLoading:true})
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
        console.log("MovieList渲染");

        let createItem = function (item) {
            return <MovieListItem data={item} key={item.id} />;
        };

        // 上来加载数据
        if(this.state.isLoading){
            return (
                    <div>
                        <Loading/>
                    </div>
                )
        }
        else{
            // 数据请求成功的时候渲染item数据
            return (
                <div>
                    <h1>{this.state.movieList.title}</h1>
                    {this.state.movieList.subjects.map(createItem)}
                </div>
            )
        }
    }
}
