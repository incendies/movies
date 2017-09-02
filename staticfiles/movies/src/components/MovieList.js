import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import axios from 'axios';
import MovieDetails from './MovieDetails.js'

class MovieList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount(){
    axios
      .get('http://127.0.0.1:8000/movie/movies/?format=json')
      .then(({ data })=> {
      	this.setState({
          data: data
        });
      })
      .catch((err)=> {})
  }

  render() {
    const movieList = this.state.data.map((el, index) => {
      return (

    <div key={index}>
    <Router>
    <div>
    <div className="list1">
    <div class="thumbnail">
    <div>
    <Link to={'/MovieDetails:'+el.title}>
    <a class="thumbnail">
       <img className="moviePic" src={'https://image.tmdb.org/t/p/w500' + el.poster_path} alt={el.title} />
    </a>
    </Link>
    <Route path={'/MovieDetails:'+el.title} component={MovieDetails}/>
    </div>
    <div class="caption">
        <h3>{el.title}</h3>
        <p>{el.overview}</p>
        <p>Average Rate:{el.vote_average}</p>
     </div>
     </div>
     </div>

   </div>
    </Router>
    </div>
   )});

    return(
    <div>
       <div>{ movieList }</div>
    </div>

    );}
}

export default MovieList;