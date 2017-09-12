import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import MovieList from '../components/MovieList.js'
import MovieDetails from '../components/MovieDetails'
import AppHeader from '../components/AppHeader.js'

import '../css/App.css';

class App extends Component {
  render() {
    return (
    <div>

    <AppHeader />

     <Router>
        <div>
            <Route exact path="/" component={MovieList}/>
            <Route path={'/details/:movie_id'} component={MovieDetails}/>
        </div>
    </Router>
</div>
    );
  }
}

export default App;
