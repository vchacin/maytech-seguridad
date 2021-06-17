import React from 'react';

export class ServicesTitle extends React.Component{
  render(){
    return(
      <h4 className="py-2 txt-black">
        {this.props.children}
      </h4>
    );
  }
}

    