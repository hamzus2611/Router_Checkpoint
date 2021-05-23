import React from 'react'
import { Route, Router } from 'react-router'
import MovieCard from '../MovieCard/MovieCard'
import MovieTrailer from '../MovieTrailer/MovieTrailer'

function MovieList({ movielist }) {
    return (
        <div className="container">
            <div className="row ml-10 d-flex justify-content-between">
                {movielist.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}
                    />
                ))}
            </div>
            
        </div>
    )
}

export default MovieList

