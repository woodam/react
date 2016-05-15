var React = require('react');
var ReactDOM = require('react-dom');


var objOne = {
    name : 'Andrew',
    location : 'philadelphia'
};

var objTwo = {
    age : 25,
    ...objOne // package.json에 babel-preset-stage-0 추가해야됨 그리고 webpack.config.js파일에도 추가해야됨stage-0
};

console.log(objTwo)

ReactDOM.render(
    <h1>boilerplate app</h1>,
    document.getElementById('app')
);