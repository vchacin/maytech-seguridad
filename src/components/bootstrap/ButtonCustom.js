import React from 'react';

export class ButtonCustom extends React.Component{
    render() {
        return(
            <button className={`btn btn-${this.props.color}`}>
                {this.props.children}
            </button>
        );
    }
}