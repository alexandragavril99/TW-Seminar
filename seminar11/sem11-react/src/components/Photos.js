import React, { Component } from "react";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

class Photos extends Component { 
  constructor() {
    super();
    this.state = {
      data: [],
      loading: false,
      loaded: false,
    };
  }

  async fetchImages() {
    this.setState((prevState) => ({
      ...prevState,
      loading: true,
    }));

    try {
      const response = await fetch(
        "http://www.splashbase.co/api/v1/images/latest"
      );
      const data = await response.json();
      console.log(data);
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        loaded: true,
        data: data.images,
      }));
    } catch (err) {
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
      console.log(err);
    }
  }

  componentDidMount() {
    const savedImages = JSON.parse(localStorage.getItem("Images"));
    if (savedImages && savedImages.length > 0) {
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        loaded: true,
        data: savedImages,
      }));
    } else this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`Component updated... Is data loading? ${this.state.loading}`);
    console.log(`Component updated... Is data loaded? ${this.state.loaded}`);
    if (prevState.loaded !== this.state.loaded && this.state.loaded) {
      console.log(this.state.data);
    }
  }

  componentWillUnmount() {
    localStorage.setItem("Images", JSON.stringify(this.state.data));
  }

  render() {
    return (
      <div>
        {this.state.loading && <CircularProgress />}
        {this.state.loaded &&
          this.state.data.map((image, index) => {
            return (
              <h1 key={index}>
                <Link
                  to={{
                    pathname: `/photos/${image.id}`,
                    state: {
                      imageUrl: image.url,
                    },
                  }}
                >{`Image ${image.id}`}</Link>
              </h1>
            );
          })}
      </div>
    );
  }
}

export default Photos;
