import React, { Component } from "react";

class Movie extends Component {
  constructor() {
    super();
    this.state = {
      pictures: {},
      error: null,
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=88d04ebd")
      .then(results => results.json())
      .then(res => {
        this.setState({ pictures: res, loading: false });
      })
      .catch(err => {
        this.setState({ error: err.data, loading: false });
      });
  }

  render() {
    const { pictures, error, loading } = this.state;
    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
            <div className="container2">
              <div className="container1">
                {pictures ? (
                  <div className="dib br4 ma3 dim ba">
                    <img alt="unable to load" src={pictures.Poster} />
                    <p className="tc">{pictures.Title}</p>
                    {}
                  </div>
                ) : (
                    <div>{error && "Error loading picture"}</div>
                  )}
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default Movie;
