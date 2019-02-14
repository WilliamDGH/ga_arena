import React, { Component } from 'react';

class NavItem extends Component {
  render() {
    return (
      <li className="nav-item mx-0 mx-lg-1">
        <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href={ this.props.url }>{this.props.name}</a>
      </li>
    )
  }
}

export default NavItem
