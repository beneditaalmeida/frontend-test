import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import "./MovieInfo.css";

export default class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://www.omdbapi.com/?apikey=79c93c5e&i=${this.props.movieID}&plot=full`
      )
      .then(res => {
        this.setState({
          movies: res.data
        });
        // console.log(res, "aqui INFO");
      })
      .catch(err => console.log(err, "INFO ERROR"));
  }

  render() {
    return (
      <Link to={`/moviecard/${this.props.movieID}`}>
        <div>
          <figure>
            <img alt="poster" src={this.state.movies.Poster} />
          </figure>
          <p>{this.state.movies.Title}</p>
          <p>{this.state.movies.Director}</p>
        </div>
      </Link>
    );
  }
}
