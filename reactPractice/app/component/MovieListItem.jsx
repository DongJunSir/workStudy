import React from "react";
import { Link } from 'react-router';

import "./app.css"

class MovieListItem extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){

    }

    render() {
        return (
            <li className="media">
                <Link to={'/home/detail/'+this.props.data.id}>
                    <div className="media-poster" href="#">
                        <img src={this.props.data.images.small} alt=""/>
                    </div>
                </Link>
                <div className="media-info">{this.props.data.title}</div>
                <div className="movie-review"></div>
                <div className="movie-bought"><button >选座购票</button></div>
            </li>
        )
    }
}

module.exports = MovieListItem;
