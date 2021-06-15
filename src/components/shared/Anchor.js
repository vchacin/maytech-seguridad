import React from 'react';

export class Anchor extends React.Component {
    render(){
        return(
            <a href={this.props.href} target="_blank" rel="noopener noreferrer">
                {this.props.children}
            </a>
        );
    }
}