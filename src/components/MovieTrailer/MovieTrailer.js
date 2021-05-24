import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MovieTrailer({ MovieListe, match }) {
    const movie = MovieListe.find((el) => el.id.toString() === match.params.id.toString());
    // const movie = movie.find((el) => el.id.toString() === match.params.id);
    console.log({ movie })
    return (
        < div style={{ textAlign: "center" }} class="title">
           <h1>{movie.title}</h1>
           <br/>
                <iframe width="853" height="480" src={movie.trailer}
                 title="YouTube video player" frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen></iframe>

            
            
            <br />
            <Link to="/">

            <Button >Go back</Button>
            </Link>
        </ div >
    )
}

export default MovieTrailer
