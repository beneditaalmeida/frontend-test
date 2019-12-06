import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieInfo from "./MovieInfo";

import "./MovieSearch.css";

export default class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesList: [],
      searchMovie: "",
      message: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  search = e => {
    e.preventDefault();
    axios
      .get(
        `https://www.omdbapi.com/?apikey=79c93c5e&s=${this.state.searchMovie}&plot=full`
      )
      .then(res => res.data)
      .then(res => {
        if (!res.Search) {
          this.setState({ moviesList: [] });
          return;
        }

        const moviesList = res.Search.map(movie => movie.imdbID);
        this.setState({
          moviesList
        });
      });
  };

  handleChange = event => {
    this.setState({
      searchMovie: event.target.value
    });
  };

  render() {
    const { moviesList } = this.state;
    return (
      <div className="container">
        <div className="header">
          <div className="navigation">
            <Link to="/">
              <img alt="logo" src="../images/cinema-logo.png" width="300px" />
            </Link>
            <form onSubmit={this.search}>
              <input
                placeholder="Search for a movie"
                type="text"
                onChange={this.handleChange}
              />
              <button className="button-search" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="list">
          <ul>
            {moviesList.map(movie => (
              <MovieInfo movieID={movie} key={movie} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
