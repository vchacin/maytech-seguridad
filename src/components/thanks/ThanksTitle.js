import React from 'react';

export class ThanksTitle extends React.Component{
  render(){
    return(
      <p className="descriptionTitle mb-0 font-weight-bold">
        {this.props.children}
      </p>
    );
  }
}

    