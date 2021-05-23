import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MovieTrailer({ MovieListe, match }) {
    const movie = MovieListe.find((el) => el.id.toString() === match.params.id.toString());
    // const movie = movie.find((el) => el.id.toString() === match.params.id);
    console.log({ movie })
    return (
        < div style={{ textAlign: "center" }}>
           
                {/* <iframe width="853" height="480" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            
{/*          
            <h1>{movie.title}</h1>
            <h1>{movie.trailer}</h1> */}
            <br />
            <Link to="/">

            <Button >Go back</Button>
            </Link>
        </ div >
    )
}

export default MovieTrailer
