import React,{ useState, useEffect } from 'react'
import { ListGroup, Modal } from 'react-bootstrap'
import { getOneSuggestion, deleteSuggestion, updateSuggestion } from '../store/actions/suggestions'
import { useSelector, useDispatch } from 'react-redux'

export default function SuggestionCard(props) {
  const { title, description, UserId, id, createdAt } = props.suggestion
  const { dataById, loading } = useSelector(state => state.suggestions)
  const [show, setShow] = useState(false)
  const [data, setData] = useState({
    title: '',
    description: ''
  })
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()

  useEffect(() => {
    if(dataById) {
      setData({
        ...data,
        title: dataById.title,
        description: dataById.description
      })
    }
  }, [loading])

  function getSuggestionById(id) {
    handleShow()
    const data  = {
      id
    }
    dispatch(getOneSuggestion(data))
  }

  function editSuggestion(event) {
    event.preventDefault()
    const newUpadte = { 
      id,
      title:data.title,
      description: data.description
    }
    dispatch(updateSuggestion(newUpadte))
    // toast.success(`new suggestion added to the list`, {
    //   autoClose: 3000,
    //   position: toast.POSITION.TOP_RIGHT,
    // })
    handleClose()
  }

  function changeValue(event){
    const { name, value } = event.target
    setData({
      ...data, [name]: value
    })
  }

  function destroySuggestion(id) {
    dispatch(deleteSuggestion(id))
  }

  useEffect(() => {
    if (show) {
      getSuggestionById(id)
    }
  }, [show])

  return (
    <div className="card card-body mb-2">
      <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
        <div className="media-body">
          <h5 className="media-title font-weight-semibold">{title}</h5>
          <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
            <li className="list-inline-item" > at {createdAt}</li><br/>
            <li className="list-inline-item" >{description}</li>
          </ul>
        </div>
        <div className="mt-4">
        <button type="button" className="btn btn-sm btn-outline-warning" style={{marginRight: 10}} onClick={() => getSuggestionById(id)}>Edit</button>
        <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => destroySuggestion(id)}>Delete</button>
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
          <input type="text" className="form-control" placeholder="Title" name="title" value={data.title} onChange={ changeValue } />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea placeholder="200 character max " maxLength= "200" name="description" onChange={ changeValue } value={data.description}></textarea>
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
