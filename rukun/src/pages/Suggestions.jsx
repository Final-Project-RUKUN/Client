import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import SuggestionCard from '../components/SuggestionCard'
import { useHistory } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import ClipLoader from "react-spinners/ClipLoader"
import { toast } from "react-toastify";
import { useSelector, useDispatch } from 'react-redux'
import { setSuggestionsAsync, newSuggestion } from '../store/actions/suggestions'
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default function Suggestions() {
  const history = useHistory()
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = useSelector(state => state.suggestions.data)
  const loading = useSelector(state => state.suggestions.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setSuggestionsAsync())
  }, [dispatch])

  function addTitle(event) {
    setTitle(event.target.value)
  }
  function addDescription(event){
    setDescription(event.target.value)
  }

  function addSuggestion(event) {
    event.preventDefault()
    const data = {
      title, description
    }
    dispatch(newSuggestion(data))
    toast.success(`${title} added to the list`, {
      autoClose: 3000,
      position: toast.POSITION.TOP_RIGHT,
    })
    handleClose()
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
              <div className="mb-2 d-flex justify-content-end align-items-center" >
              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-sm btn-outline-warning" onClick={handleShow} >Add Suggestion</button>
                <div style={{marginRight: 5, width: 100}}>
                  <label style={{marginRight: 5, width: 100, marginTop: 5}}>Village Name:</label>
                </div>
                <input type="text" value={data.name} disabled="disabled" style={{marginRight: 10, height: 30}}/>
                <div style={{marginRight: 5, width: 120}}>
                  <label style={{marginRight: 5, width: 115, marginTop: 5}}> Invitation Code:</label>
                </div>
                <input type="text" value={data?.invitation_code} disabled="disabled" style={{marginRight: 10, height: 30}}/>
                <Modal show={show} 
                  onHide={handleClose} 
                  backdrop="static"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Add Suggestion</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <form onSubmit={(event) => addSuggestion(event)}>
                    <div className="form-group">
                      <label>Title</label>
                      <input type="text" className="form-control" placeholder="Title" onChange={addTitle}/>
                    </div>
                    <div className="form-group">
                      <label>Suggestion</label>
                      <textarea placeholder="200 character max " maxLength= "200" onChange={addDescription} />
                      <small id="emailHelp" className="form-text text-muted">Voice your suggestion here!</small>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="submit" className="btn btn-outline-primary" style={{marginRight:0}}>Submit</button>
                    </div>
                  </form>
                  </Modal.Body>
                  <Modal.Footer>
                  <small id="emailHelp" className="form-text text-muted">Your suggestion will be very helpful in improving our village!</small>
                  </Modal.Footer>
                </Modal>

              </div >
              
              </div>
              <div className="overflow-auto" style={{height: 550}}>
                {
                  loading ? <ClipLoader/> :
                  data.Suggestions?.map((suggestion, index) => {
                    return <SuggestionCard suggestion={suggestion} key={suggestion.id} index={index}></SuggestionCard>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
