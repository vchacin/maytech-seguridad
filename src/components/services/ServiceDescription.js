import React from 'react';


export class ServiceDescription extends React.Component{
    render() {
        return(
            <div className="col-lg-6 servicesDescription">
              {this.props.children}
            </div>
        );
    }
}