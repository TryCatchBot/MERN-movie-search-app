import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import SearchCard from "./SearchCard";
class SearchMovie extends Component {
  state = {
    pictures: []
  };

  componentDidMount() {
    const param = this.props.history.location.state.param;
    this.setState({ loading: true });
    axios(`http://www.omdbapi.com/?apikey=88d04ebd&s=${param}`)
      .then(res => {
        console.log(res.data.Search);
        this.setState({ pictures: res.data.Search, loading: false });
      })
      .catch(err => {
        console.log("catch console", err);
        this.setState({ error: err.data, loading: false });
      });
  }

  render() {
    const { pictures } = this.state;
    return (
      <div>
        {pictures.map((picture, index) => {
          return (
            <div key={index}>
              <SearchCard Title={picture.Title} src={picture.Poster} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(SearchMovie);
