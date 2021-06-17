import React from 'react';

export class InfoNumber extends React.Component {
  render(){
      return(
        <h3 className={this.props.css}>
          {this.props.children}
        </h3>
      );
  }
}