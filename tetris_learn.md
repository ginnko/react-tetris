### 文档核心代码结构
- index.js(入口文件)
  整个项目最外层的入口文件，职责：
  1. 使用ReactDOM.render对核心App组件进行包裹，渲染
  2. 借助react-redux的provider，方便store在各层的调用
  3. 传入redux中的状态保存树store
  4. 将状态保存在localStorage

- ./containers/index.js
  1. 核心组件`Matrix`组件

    这个组件用来显示游戏区域，包括背景和block，接受三个参数：matrix，current，reset

- ./components/matrix/index.js
  1. Matrix组件
    1. Matrix拥有自己的状态，使用react原生的state管理
    2. 

- ./store/index.js(创造store的地方)
  
  createStore函数中还使用了`window.devToolsExtension && window.devToolsExtension()`这行代码，这个是为了使用浏览器的redux插件

- ./control（用来存放控制代码的地方）*暂缓*

- ./reducers（用来存放reducer的地方）*暂缓*
  - index.js（入口文件）
    使用*redux-immutable*的 **combineReducers**函数来将所有的reducer合并
  - 其他文件夹
    每个文件夹里都有一个index.js文件，用来存放文件名显示功能的reducer

### 内置函数

1. `encodeURIComponent` ：转义除了字母、数字、(、)、.、!、~、*、'、-和_之外的所有字符。
2. `addEventListener`：这个事件注册函数的第三个参数为true时，表示在捕获阶段触发事件；为false（默认）时，表示在冒泡阶段触发事件。

### 问题

- unit.js
  1. subscribeRecord()函数将store中的state存储在了localStorage中，为何在存储前要对数据使用btoa函数转码？