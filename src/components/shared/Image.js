import React from 'react';

export class Image extends React.Component {
    render(){
        return(
            <img className={`${this.props.css}`} src={this.props.src} alt={this.props.alt}/>
        );
    }
}