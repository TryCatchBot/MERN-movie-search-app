import React, { Component } from "react";
import Movie from "./Movie";
import './Movie.css';
import titles from "./Title";


import SearchMovie from "./SearchMovie";
import { withRouter } from "react-router-dom";

class Main extends Component {
  state = {
    search: ""
  };

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  HandleSearch = () => {
    const { search } = this.state;
    console.log(search);
    this.props.history.push({
      pathname: "/search",
      search: "?query=search",
      state: { param: search }
    });
  };

  render() {
    const { search } = this.state;
    return (
      <div className="display">
        <div>
          <h1 className="header">Movie Search</h1>
          <form className="form-control">
            <input value={search} type="text" onChange={this.handleChange} className="text-input" />
            <button type="button" className="button1" onClick={this.HandleSearch}>
              Find Movie
            </button>
          </form>
        </div>
        {
          titles.map(Movietitle => {
            return (
              <div key={Movietitle.id}>
                <Movie title={Movietitle.title} />
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default withRouter(Main);
