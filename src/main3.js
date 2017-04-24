import React from 'react';

import ReactDOM from 'react-dom';

class Welcome extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            comments:[
                { user: '张三', content: '哈哈，沙发' },
                { user: '张三2', content: '哈哈，板凳' },
                { user: '张三3', content: '哈哈，凉席' },
                { user: '张三4', content: '哈哈，砖头' },
                { user: '张三5', content: '哈哈，楼下山炮' }
            ]
        }
    }

    createComment(){
        var list = [];
        for(var i=0;i<this.state.comments.length;i++){
            var li = <li key={i}>
                <h3>评论内容：{this.state.comments[i].content}</h3>
                <p>用户：{this.state.comments[i].user}</p>
            </li>
            list.push(li);
        }
        return list;
    }

    render(){
        return <div>
            <ul>
                {this.createComment()}
            </ul>
        </div>
    }
}



ReactDOM.render(
    <div>
        <Welcome></Welcome>
    </div> ,document.getElementById("app")
);