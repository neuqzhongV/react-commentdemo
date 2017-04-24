import React from 'react';

import ReactDOM from 'react-dom';

function Hello (props){
    return (<div>
        <li>我是一个里标签</li>
        <p>姓名：{props.username}</p>
        <p>年龄：{props.age}</p>   
    </div>)
}

ReactDOM.render(
    <div>
        <Hello username="张三" age={20}></Hello>
    </div> ,document.getElementById("app")
);