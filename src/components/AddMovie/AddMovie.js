import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

function AddMovie({ handleAdd }) {

    const [show, setShow] = useState(false);
    const [Title, setTitle] = useState("")
    const [description, setDescription] = useState("");
    const [posterUrl, setPosterUrl] = useState("");
    const [rate, setRate] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (e) => {
        e.preventDefault()
        const newMovie = {
            id: Math.random(),
            title:Title,
            description,
            posterUrl: posterUrl,
            rate
        }
        if (Title && description && posterUrl && rate ) {
            handleAdd(newMovie)
            setTitle("")
            setDescription("")
            setPosterUrl("")
            setRate()
            
            handleClose()
        }
        else alert("Fill all the fields")
    }
   
    return (
        <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            Title :{" "}
            <input
              type="text"
              className="form-control"
              placeholder="Enter movie name"
              onChange={e => setTitle(e.target.value)}
              value={Title}
            />
            Description:
            <input
              type="text"
              className="form-control"
              placeholder="Enter description movie"
              onChange={e => setDescription(e.target.value)}
              value={description}

            />
            Image:
            <input
              type="url"
              className="form-control"
              placeholder="Enter movie poster"
              onChange={e => setPosterUrl(e.target.value)}
              value={posterUrl}
            />
            Rate:
            <input
              type="number"
              className="form-control"
              placeholder="Enter movie rate"
              onChange={e => setRate(e.target.value)}
              value={rate}
            />
               <Button variant="primary" type="submit">
            Save Changes
          </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
    );
}

export default AddMovie
