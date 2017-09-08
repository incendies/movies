import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { Grid, Row, Col} from 'react-bootstrap';
import axios from 'axios';

class MovieList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount(){
    axios
      .get('http://127.0.0.1:8000/movie/restapi/movies/?format=json')
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


            <div className="movieElement">
            <div class="thumbnail">
            <Link to={'details/'+el.movie_id} >
            <img className="moviePic" src={'https://image.tmdb.org/t/p/w500' + el.poster_path} alt="movie.." />
            </Link>
            <div class="caption">
               <h3> {el.title}</h3>
               <p>{el.overview}</p>
              <p>Average Rate:{el.vote_average}</p>
           </div>
           </div>
           </div>


   )});

    return(
    <div>
         <div className="container">
          {movieList}
        </div>
     </div>
    );}
}

export default MovieList;