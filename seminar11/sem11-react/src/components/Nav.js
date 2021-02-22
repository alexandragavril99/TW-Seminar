import React, { Component } from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";

class Nav extends Component {
  render() {
    const props = this.props;
    console.log(props);
    return (
      <React.Fragment>
        <AppBar style={{ position: "relative" }}>
          <Toolbar>
            <Typography variant="h6">
              <Button
                style={{ color: "white" }}
                onClick={() => {
                  props.history.push("/");
                }}
              >
                Logo
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default withRouter(Nav);
