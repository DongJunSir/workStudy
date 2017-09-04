/**
 * Created by Administrator on 2017/9/1 0001.
 */
var React = require("react");
var ReactDOM = require("react-dom");

import Index from "./views/index.jsx";//引入index组件

ReactDOM.render(
    <div>
        <h1>welcome</h1>
        <Index/>
    </div>
    ,document.querySelector(".content")
);

