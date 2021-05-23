import React from 'react'
import { Button, Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";


function MovieCard({ movie }) {

    return (
        <Card className=" mx-4 my-3 " style={{ width: "17rem" }} >
            <Card.Img variant="top"  src={movie.posterUrl} width="400" height="600"/>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Title>
                    <ReactStars
                        count={5}

                        size={24}
                        value={movie.rate}
                        activeColor="#ffd700"
                    />
                    </Card.Title>
                <Card.Text>
                    {movie.description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

    )
}

export default MovieCard

