import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyComponent from './MyComponent';
import './index.css';

ReactDOM.render(
    // React.createElement(App),
    <App/>,

    // React.createElement(MyComponent,{val:'HOGE'}),
    // <MyComponent></MyComponent>,
    // <MyComponent val1={'hoge'} val2={'fuga'}> children????</MyComponent>,

    // React.createElement('h1',null,'Hello World!!'),
    document.getElementById('root')
);
const data = {
    name: '山田',
    age: 19,
    time: '',
    val1: '',
}
setInterval(() => {
    data.age++;
    data.time = (new Date()).toLocaleString();
    ReactDOM.render(
        // React.createElement(MyComponent,{val:'HOGE'}),
        // <MyComponent></MyComponent>,
        // <MyComponent val1={'--'} val2={''}> children????</MyComponent>,
        <MyComponent {...data}/>,
        // React.createElement('h1',null,'Hello World!!'),
        document.getElementById('root_sub')
    )
    ;
}, 1000)