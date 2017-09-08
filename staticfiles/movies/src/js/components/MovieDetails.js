import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { Grid, Row, Col} from 'react-bootstrap';
import axios from 'axios';



class MovieDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount(){
    axios
      .get('http://127.0.0.1:8000/movie/restapi/movieDetails/'+ this.props.match.params.movie_id + '/?format=json')
      .then(({ data })=> {
      	this.setState({
          data: [data]
        });
      })
      .catch((err)=> {})
  }

  render() {



    const movieList = this.state.data.map((el, index) => {
      return (
    <div>
    <div key={index}>
    <div className="thumbnail">
    <div>
    <img className="moviePic1"  src={'https://image.tmdb.org/t/p/w500' + el.backdrop_path} alt="movie.." />
    </div>
    <h4> {el.movie_id}</h4>
    <h4> {el.overview}</h4>
    <h4> {el.original_title}</h4>
    <h4> {el.url}</h4>
    <h4> </h4>
    </div>
    </div>
    </div>
   )});

    return(
<div>
           {movieList}
</div>

    );}
}

export default MovieDetails;
