import React, {Component} from 'react';
import { Link } from 'react-router';

export default class MovieListItem extends Component {
    constructor(props,context){
        super(props);
        this.state = {
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <Link to={'/home/detail/'+this.props.data.id}>
                <div className="media">
                    <div className="media-left media-middle" href="#">
                        <img src={this.props.data.images.medium} alt=""/>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">电影名称：{this.props.data.title}</h4>
                        dfdfd
                    </div>
                </div>
            </Link>
        )

    }
}
