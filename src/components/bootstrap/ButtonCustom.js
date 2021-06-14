import React from 'react';

export class ButtonCustom extends React.Component{
    render() {
        return(
            <a className={`btn btn-${this.props.color}`} href={`${this.props.href}`} target="_blank" rel="noopener noreferrer">
                {this.props.children}
            </a>
        );
    }
}