import React, {Component} from 'react';
import MovieList from '../components/MovieList';

export default class ListContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <MovieList listType={this.props.params.listType}/>
            </div>
        )
    }
}
