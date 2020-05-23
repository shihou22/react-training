import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import MySubComponent from "./MySubComponent";


export default class MyComponent extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater);
        this.state = {countX: 0}
    }

    doChange(e) {
        "--"
    }

    render() {
        // return React.createElement('h1', null, this.props.val);

        // return React.createElement('input', {
        //     type: 'text', placeholder: '値を入力してEnterを押下', onKeyPress: (e) => {
        //         if (e.key === 'Enter' && e.target.value)
        //             alert(e.target)
        //     }
        // });

        return (
            <div>
                <h1>{this.props.val1 + this.props.val2 + '-----' + this.props.children + '/' + this.props.time + '/' + this.props.age}</h1>
                <MySubComponent subVal={this.props.time}/>
            </div>
        );

        // return ([
        //     // React.createElement('h1', null, 'hogehoge'),
        //     // React.createElement('input', {type: 'test', size: 10}),
        //     <h1>hogehoge2</h1>,
        //     <input type={"text"} size={50} onChange={this.doChange}/>
        // ]);

        // return [
        //     React.createElement('input', {
        //         type: 'text',
        //         placeholder: '値を入力してEnterを押下',
        //         onChange: (e) => this.setState(
        //             {
        //                 countX: e.target.value.length
        //             }
        //         )
        //     }),
        //     React.createElement('span', null, this.state.countX),
        // ]

        // return (
        //     <div className="App">
        //         {this.state.status}
        //     </div>
        // );
    }

    componentDidMount() {
        console.log('マウントされました');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('ステートが次の値に更新されます：', nextState);
    }

}