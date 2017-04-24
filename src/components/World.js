import React from "react"

function World(props){
    return <div>
        <div>{props.name},你好！这是World组件</div>
        <h1>这是World组件的H1</h1>
        <p>这是World组件的p</p>
    </div>
}

export default World;