import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import MovieList from './components/MovieList.js'
import MovieDetails from './components/MovieDetails'

import '../css/App.css';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
            <Route exact path="/" component={MovieList}/>
            <Route path={'/details/'} component={MovieDetails}/>
        </div>
    </Router>
    );
  }
}

export default App;
