import React, { Component } from "react";
import axios from "axios";
import "./MovieCard.css";
import { Link } from "react-router-dom";

import MovieSearch from "./MovieSearch";

export default class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://www.omdbapi.com/?apikey=79c93c5e&i=${id}&plot=full`)
      .then(res => {
        this.setState({ movie: res.data });
        // console.log(res, "aqui CARD");
      })
      .catch(err => console.log(err, "CARD ERROR"));
  }

  render() {
    return (
      <div className="movie">
        <MovieSearch />
        <Link to={`/`} className="link">
          <button className="button-back">Go Back</button>
        </Link>
        <div className="movie-poster">
          <div className="poster-text">
            <h1 className="poster-title">{this.state.movie.Title}</h1>
            <h3 className="poster-director">{this.state.movie.Director}</h3>
            <p className="poster-plot">{this.state.movie.Plot}</p>
          </div>
          <div>
            <figure>
              <img
                className="img-poster"
                alt="poster"
                src={this.state.movie.Poster}
              />
            </figure>
          </div>
        </div>
      </div>
    );
  }
}
