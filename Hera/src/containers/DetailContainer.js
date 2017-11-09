import React, {Component} from 'react';
import MovieList from '../components/MovieList';

import * as fetch from '../fetchs/homeFetch';
import Loading from '../components/Loading';


export default class DetailContainer extends Component {
    constructor(props, context) {
        super(props);
        this.state = {
            movieData: {},
            errMessage: "",
            isLoading: true
        };
    }

    componentDidMount() {

        var _this = this;
        // 获取数据，获取数据之后调用setState方法给state赋值
        fetch.getMovieDetail(this.props.params.id).then(function (data) {
            _this.setState({movieData: data, isLoading: false})
        }, function (err) {
            _this.setState({errMessage: err})
        })

    }

    render() {
        // 上来加载数据
        if (this.state.isLoading) {
            return (
                <div>
                    <Loading/>
                </div>
            )
        }
        else {
            // 数据请求成功的时候渲染item数据
            return (
                <div>
                    <img src={this.state.movieData.images.large} alt=""/>
                    <h1>{this.state.movieData.title}</h1>
                    <p>{this.state.movieData.summary}</p>
                </div>
            )
        }
    }
}
