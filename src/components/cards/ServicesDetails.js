import React from 'react';

export class ServicesDetails extends React.Component{
  render(){
    return(
      <p className="pb-2 m-0 txt-black font-weight-bold">
        {this.props.children}
      </p>
    );
  }
}

    