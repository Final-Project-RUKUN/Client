import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import SuggestionCard from '../components/SuggestionCard'
import { useHistory } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'

export default function Suggestions() {
  const history = useHistory()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function addSuggestion() {
    setShow(false)

  }

  return (
    <div>
      <div>
        <div className="container-fluid">
          <div className="d-flex flex-nowrap">
            <div className="card card-tumpul sidenav no-border my-2">
              <Sidebar></Sidebar>
            </div>

            <div className="card card-tumpul flex-grow-1 body-section no-border">
              <br/>
              <div className="container-fluid" style={{textAlign: "start"}}>
                <h3>Suggestions</h3>
              <div className="mb-2 d-flex justify-content-between align-items-center" >
              <div className="d-flex justify-content-start">
                <button type="button" className="btn btn-sm btn-outline-warning" onClick={handleShow}>Add Suggestion</button>

                <Modal show={show} 
                onHide={handleClose} 
                backdrop="static"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Add Suggestion</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <form onSubmit={addSuggestion}>
                    <div class="form-group">
                      <label>Title</label>
                      <input type="text" class="form-control" placeholder="Title"/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Suggestion</label>
                      <textarea placeholder="200 character max " maxLength= "200"></textarea>
                      <small id="emailHelp" class="form-text text-muted">Voice your suggestion here!</small>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="submit" class="btn btn-outline-primary" style={{marginRight:10}}>Submit</button>
                      <button type="submit" class="btn btn-outline-danger" onClick={handleClose}>Cancel</button>
                    </div>
                  </form>
                  </Modal.Body>
                  <Modal.Footer>
                  <small id="emailHelp" class="form-text text-muted">Your suggestion will be very helpful in improving our village!</small>
                  </Modal.Footer>
                </Modal>
              </div>
                <form action="" className="d-flex justify-content-end">
                  <input type="text" value="Desa Catur" disabled="disabled" style={{marginRight: 10, height: 30}}/>
                  <input type="date" style={{marginRight: 10, height: 30}}/>
                  <button type="button" className="btn btn-sm btn-outline-primary" type="submit" style={{marginRight: 10, height: 30, marginTop: 2}}>Search</button>
                </form>
              </div>
              <div className="overflow-auto" style={{height: 550}}>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
