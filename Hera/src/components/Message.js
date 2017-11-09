import React, {Component} from 'react';

export default class Message extends Component {
    constructor(props,context){
        super(props,context);
        //console.log(this.context);
        this.state = {};
    }
    //componentWillReceiveProps(nextProps) {
    //}

    // 相当于defaultProps一样是给context设置初始值,react-router内部也是用context特性实现的
    static contextTypes={
        router: React.PropTypes.object
    };


    componentDidMount() {

        //this.context.router.push('/home')

        //console.log(this.context);
        //console.log(1);
        var _this=this;
        //console.log(this.context.router);
        //
        setTimeout(function(){
            _this.context.router.goBack();
        },3000)

    }

    render() {
        return (
            <div>
                这是message
                <h3>Message {this.props.params.id}</h3>
            </div>
        )
    }
}
