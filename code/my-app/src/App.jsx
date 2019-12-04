import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import MovieSearch from "./components/MovieSearch";
import MovieCard from "./components/MovieCard";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={MovieSearch} />
            <Route path="/moviecard/:id" exact component={MovieCard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
