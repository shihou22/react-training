import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';


export default class MySubComponent extends React.Component {
    constructor(props, context, updater) {
        super(props, context, updater);
        this.state = {countX: 0}
    }

    render() {
        return (
            <h2>{'this.props.subVal/' + this.props.subVal}</h2>
        );
    }
}