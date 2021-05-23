import {moviedata} from './data'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import MovieList from './components/MovieList/MovieList';
import Filter from './components/Filter/Filter';
import AddMovie from './components/AddMovie/AddMovie';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieCard from './components/MovieCard/MovieCard';
import MovieTrailer from './components/MovieTrailer/MovieTrailer';
import Inscription from './components/Inscription/Inscription';

function App() {
  const [MovieListe, setMovieListe] = useState(moviedata);
  const [rate, setRate] = useState(0)
  const [Title, setTitle] = useState("")
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };
  const handleAdd = (newMovie) => {
    setMovieListe([...MovieListe,newMovie])
  }
  return (
    <div className="App">
      <Router>
      <Filter 
      hendelchange={handleChange}
      Title={Title}
      ratingChanged={ratingChanged}
      rate={rate}/>
      
      <Route path="/" render={() =>     <MovieList movielist={MovieListe.filter((movie)=>
     movie.title.toUpperCase().includes(Title.toUpperCase())
      && movie.rate>=rate)} />} exact />
     
     <Route path="/inscrp" exact component={Inscription}/>
     <Route path="/" render={()=><AddMovie handleAdd={handleAdd}/>  }exact />
     <Route path="/:id" 
     render={ (props)=><MovieTrailer {...props} MovieListe={MovieListe} />}/>
     </Router>
    </div>
    
  );
}

export default App;
