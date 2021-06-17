import React from 'react';

export class InfoDescription extends React.Component {
  render(){
      return(
        <p className="px-lg-5">
          {this.props.children}
        </p>
      );
  }
}