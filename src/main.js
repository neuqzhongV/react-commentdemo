// 项目的入口文件
// 在入口文件中，创建虚拟DOM。并把创建好的虚拟DOM渲染到页面上的容器中（Id为App的Div）

// 1. 导入React这个模块，创建虚拟DOM
import React from 'react';

import ReactDOM from 'react-dom'

// 2. 创建虚拟DOM
// <div title="this is div" class="divHeader">这是一个DIV</div>
// document.createElement(); // 
// React.createElement()这个方法接收几个参数：
// 参数1：字符串类型的标签类型
// 参数2：对象类型的属性
// 参数3：（子节点）内容

var divObj = React.createElement('div',{title:'this is div'},'创建的Div')

// 3. 将创建好的虚拟DOM，渲染到页面上
// 参数1：需要被渲染的虚拟DOM
// 参数2：容器，用来放虚拟DOM的元素,指定渲染到页面上哪个位置

ReactDOM.render(divObj,document.getElementById('app'));