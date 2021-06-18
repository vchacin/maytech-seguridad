import React from 'react';

export class ServicesItemContainer extends React.Component{
  render(){
    return(
      <div className="serviceItem col-md-3 py-lg-2 mx-2 mb-lg-3">
        {this.props.children}
      </div>
    );
  }
}

    