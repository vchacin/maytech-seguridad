import React from 'react';

export class Icon extends React.Component {
    render(){
        return(
            <i className={`fas fa-${this.props.icon} ${this.props.css}`}></i>
        );
    }
}