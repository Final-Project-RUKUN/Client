import React,{ useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { getOneSuggestion } from '../store/actions/suggestions'
import { useSelector, useDispatch } from 'react-redux'

export default function SuggestionCard(props) {
  const { title, description, UserId, id } = props.suggestion
  const suggestionsById = useSelector(state => state.suggestions.dataById)
  const [show, setShow] = useState(false);
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()

  useEffect(() => {
    if(suggestionsById) {
      setNewTitle(suggestionsById.title)
      setNewDescription(suggestionsById.description)
    }
  }, [suggestionsById])


  function editTitle(event) {
    setNewTitle(event.target.value)
  }
  function editDescription(event){
    setNewDescription(event.target.value)
  }

  function getSuggestionById(id) {
    handleShow()
    const data  = {
      id
    }
    dispatch(getOneSuggestion(data))
    // console.log(data, 'id');
  }

  function editSuggestion(event) {
    event.preventDefault()
    const data = {
      newTitle, newDescription
    }
    console.log(data, 'data edit');

    // toast.success(`new suggestion added to the list`, {
    //   autoClose: 3000,
    //   position: toast.POSITION.TOP_RIGHT,
    // })
    handleClose()
  }

  return (
    <div className="card card-body mb-2">
      <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
        <div className="media-body">
          <h5 className="media-title font-weight-semibold">{title}</h5>
          <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
            {/* <li className="list-inline-item" ><h6>by user id: {UserId} </h6></li> */}
            <li className="list-inline-item" > at 16 April 2021</li><br/>
            <li className="list-inline-item" >{description}</li>
          </ul>
        </div>
        <div className="mt-4">
        <button type="button" className="btn btn-outline-warning" style={{marginRight: 10}} onClick={() => getSuggestionById(id)}>Edit</button>
        <button type="button" className="btn btn-outline-danger">Delete</button>
        </div>
      </div>
      <Modal show={show} 
      onHide={handleClose} 
      backdrop="static"
      >
      <Modal.Header closeButton>
        <Modal.Title>Edit Suggestion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={(event) => editSuggestion(event)}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" placeholder="Title" value={suggestionsById.title} onChange={editTitle} />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea placeholder="200 character max " maxLength= "200" onChange={editDescription} value={suggestionsById.description}></textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-outline-primary" style={{marginRight:10}}>Submit</button>
        </div>
      </form>
      </Modal.Body>
      <Modal.Footer>
      <small id="emailHelp" className="form-text text-muted">Your detail is only visible to you</small>
      </Modal.Footer>
    </Modal>
    </div>
  )
}
