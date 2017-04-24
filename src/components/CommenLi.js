import React from 'react';

import '../css/pFont.css'

export default function CommenLi(props){

    var styles = {
        liStyle:{border:'1px solid red', fontSize:'12px',margin:'5px'},
        h3Style:{color:'silver'}
    }

    return <li style={styles.liStyle}>
            <h3 style={styles.h3Style}>评论内容：{props.content}</h3>
            <p className="pUser">用户：{props.user}</p>
        </li>
    }
