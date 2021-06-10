import React, { Component, Fragment } from 'react';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <Fragment>
            {this.props.children}
        </Fragment>
      </div>
    );
  }
}
