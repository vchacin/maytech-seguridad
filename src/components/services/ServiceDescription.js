import React from 'react';


export class ServiceDescription extends React.Component{
    render() {
        return(
            <div className="servicesDescription col-6 pr-0">
              {this.props.children}
            </div>
        );
    }
}