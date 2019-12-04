import React, { Component } from "react";
import axios from "axios";

import { Col, Card } from "react-bootstrap";
// import MovieSearch from "./MovieSearch";

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
      <div>
        {/* <MovieSearch /> */}
        <Card className="border-0">
          <Col md={5}>
            <Card.Img variant="top" src={this.state.movie.Poster} />

            <Card.Body>
              <Card.Title>{this.state.movie.Title}</Card.Title>
              <Card.Text>{this.state.movie.Director}</Card.Text>
              <Card.Text>{this.state.movie.Plot}</Card.Text>
            </Card.Body>
          </Col>
        </Card>
      </div>
    );
  }
}
