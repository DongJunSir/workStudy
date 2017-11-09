import React, {Component} from 'react';

import Tree from '../components/Tree';
import MovieList from '../components/MovieList';

import '../css/homeContainer.css';

export default class HomeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="homeContainer">
                <div>
                    <Tree/>
                </div>
                <div>
                    {this.props.children?this.props.children: <MovieList/>}
                </div>
            </div>
        )
    }
}
