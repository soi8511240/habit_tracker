import React, { PureComponent } from "react";

class NavBar extends PureComponent {
  render() {
    return <div>{this.props.habitsCount}</div>;
  }
}

export default NavBar;
