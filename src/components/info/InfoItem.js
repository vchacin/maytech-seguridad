import React from 'react';

export class InfoItem extends React.Component {
  render(){
      return(
        <div className="col-3 p-0 infoItem">
            {this.props.children}
        </div>
      );
  }
}