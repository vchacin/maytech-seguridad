import React from 'react';


export class ServiceType extends React.Component{
    render() {
        return(
          <p className={`service${this.props.type}`}>
            {this.props.children}
          </p>
        );
    }
}