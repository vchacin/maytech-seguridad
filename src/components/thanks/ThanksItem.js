import React from 'react';

export class ThanksItem extends React.Component{
  render(){
    return(
      <li className={this.props.css}>
        {this.props.children}
      </li>
    );
  }
}

    