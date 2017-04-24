import React from 'react';

import CommenLi from './CommenLi';

export default class CommenList extends React.Component {
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
        return this.state.comments.map((item,i)=>{
            return <CommenLi {...item} key={i}></CommenLi>
        });
    }

    render(){
        return <div>
            <ul>
                {this.createComment()}
            </ul>
        </div>
    }
}
