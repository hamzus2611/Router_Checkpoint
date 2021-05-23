import React from 'react'
import { Button, Form, FormControl, Navbar } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
function Filter({ hendelchange, Title, ratingChanged, rate }) {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="d-flex justify-content-around ">
            
                <Navbar.Brand href="#home">
                <Link to="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/1200px-Disney%2B_logo.svg.png"
                        width="350"
                        height="100"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /> </Link>
                </Navbar.Brand>
               
                <Form>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={30}
                        activeColor="#ffd700"
                        isHalf={true}
                    />
                </Form>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={hendelchange}
                        value={Title} />
                    <Button variant="outline-light">Search</Button>

                </Form>
                <Form><Link to="/inscrp">
                <Button variant="primary">Sign in</Button></Link>
                </Form>

            </Navbar>
        </div>
    )
}

export default Filter
