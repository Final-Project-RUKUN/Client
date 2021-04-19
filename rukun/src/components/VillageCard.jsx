import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'


export default function VillageCard(props) {
  const history = useHistory()
  const [show, setShow] = useState(false);
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [code, setCode] = useState('')
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function editName(event) {
    setName(event.target.value)
  }

  function editLocation(event) {
    setLocation(event.target.value)
  }

  function editCode(event) {
    setCode(event.target.value)
  }

  function editVillage(event) {
    event.preventDefault()
    const data ={
      name, location, code
    }
    console.log(data);
    handleClose()
    // history.push('/village/edit')
  }

  return (
    <div className="card card-body mb-2">
      <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
        <div className="media-body">
          <h6>Name: {props.village.name}</h6><br/>
          <h6>Location: {props.village.location}</h6><br/>
          <h6>Invitation Code: {props.village.invitation_code}</h6><br/>
          <button type="button" className="btn btn-outline-warning" onClick={handleShow}>Edit</button>
      </div>
    </div>
    <Modal show={show} 
      onHide={handleClose} 
      backdrop="static"
      >
      <Modal.Header closeButton>
        <Modal.Title>Edit Village Detail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={editVillage}>
        <input type="text" placeholder="Edit Name" style={{margin: 10, width:350}} onChange={editName}/>
        <input type="text" placeholder="Edit Lokasi" style={{margin: 10, width:350}} onChange={editLocation}/>
        <input type="text" placeholder="Edit Code" style={{margin: 10, width:350}}
        onChange={editCode}/>
        <button className="btn btn-sm btn-outline-primary" type="submit" style={{margin: 10, width:100}}>Save</button>
      </form>
      </Modal.Body>
      <Modal.Footer>
      <small id="emailHelp" className="form-text text-muted">Your detail is only visible to you</small>
      </Modal.Footer>
    </Modal>
  </div>
  )
}
