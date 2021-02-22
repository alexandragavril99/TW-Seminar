import React, { Component } from "react";
import {withRouter} from "react-router-dom"

class Photo extends Component {
  render() {
    const props = this.props;
    console.log(props);
    const imageUrl = props.location.state.imagUrl;
    return (<div>
        <img src={imageUrl} alt=""></img>
    </div>);
  }
}

export default withRouter(Photo);
