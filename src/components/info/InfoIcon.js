import React from 'react';

export class InfoIcon extends React.Component {
  render(){
      return(
        <div className="infoSvg pb-2">
          {this.props.children}
        </div>
      );
  }
}