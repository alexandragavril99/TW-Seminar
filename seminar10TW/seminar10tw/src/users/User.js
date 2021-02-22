import React, { Component } from "react";

class User extends Component {
  //nu definim state=> nu avem nevoie de constructor
  componentWillUnmount() {
    console.log("Component unmounted...");
  }
  render() {
    const props = this.props;
    return (
      <div>
        {`Name: ${props.name}`} | {`Age: ${props.age}`}
      </div>
    );
  }
}

export default User;
