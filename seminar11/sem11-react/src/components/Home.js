import React, { Component } from "react";
import { Button, Typography, ButtonGroup } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import PhotoIcon from "@material-ui/icons/Photo";
import { withRouter } from "react-router-dom";

class Home extends Component {
  render() {
    const props = this.props;
    return (
      <div>
        <Typography variant="h6">Home component</Typography>
        <ButtonGroup variant = "contained">
          <Button
            startIcon={<InfoIcon />}
            size="small"
            color="primary"
            onClick={() => {
              props.history.push("/about");
            }}
          >
            Go to About
          </Button>
          <Button
            startIcon={<PhotoIcon />}
            size="small"
            color="secondary"
            onClick={() => {
              props.history.push("/photos");
            }}
          >
            Go to Photos
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default withRouter(Home);
