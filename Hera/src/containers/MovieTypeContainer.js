import React, {Component} from 'react';

import MovieList from '../components/MovieList';
import Loading from '../components/Loading'
// 电影列表服务
import movieListService from '../services/movieListService';
import '../styles/listCss.css'

export default class MovieTypeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieType:this.props.params.movieType?this.props.params.movieType:"in_theaters",
            movieListData:{},
            isLoading:true
        };
    }


    static contextTypes={
        router: React.PropTypes.object
    };

    componentWillReceiveProps(nextProps){
        //从路由传过来的参数变化,只能在nextProps.params
        console.log("MovieTypeContainer属性发生变化");
        console.log(nextProps)
        this.fetchMovieListData(nextProps.params.movieType);
    }

    componentDidMount() {
        console.log("MovieTypeContainer第一次进入");
        // 组件进入第一次的时候初始化列表数据，而且只执行一次
        this.fetchMovieListData(this.state.movieType);
    }

    fetchMovieListData=(movieType)=>{
        // 先打开遮罩
        // ☆☆☆☆☆☆☆☆☆setState方法是有延迟的，他要等到fetchMovieListData执行过一遍之后才生效☆☆☆☆☆☆☆
        this.setState({
            isLoading:true
        })

        console.log(333333333);
        console.log(movieType);
        var _this=this;
        let promise = movieListService.getMovieListData(movieType);
        promise.then(function (data) {
            console.log('22222222222');
            _this.setState({
                movieListData:JSON.parse(data),
                isLoading:false
            })
        }, function () {

        });
    }

    // 渲染loading组件
    renderLoading=()=>{
        return (
            <Loading/>
        )
    }

    renderContent=()=>{
        if(this.state.isLoading){
            return(
                <Loading/>
            )
        }
        else{
            return (
                <MovieList movieListData={this.state.movieListData}/>
            )
        }
    }

    render() {
        return (
            <div className="list-container">
                <div className="list-content">
                    {this.renderContent()}
                </div>
            </div>
        )
    }
}