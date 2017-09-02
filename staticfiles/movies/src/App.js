import React, { Component } from 'react';
import MovieList from './components/MovieList.js'
import MovieDetails from './components/MovieDetails'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
     <MovieList/>
      </div>
    );
  }
}

export default App;
