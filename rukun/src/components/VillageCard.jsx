import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'


export default function VillageCard() {
  const history = useHistory()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function editVillage() {
    handleClose()

    // history.push('/village/edit')
  }

  return (
    <div className="card card-body mb-2">
      <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
        <div className="media-body">
          <h6>Name: Desa Catur</h6><br/>
          <h6>Location: Fakfak, Papua</h6><br/>
          <h6>Invitation Code: Nganu123456</h6><br/>
          <button type="button" className="btn btn-warning" onClick={handleShow}>Edit</button>
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
        <input type="text" placeholder="Edit Name" style={{margin: 10, width:350}}/>
        <input type="text" placeholder="Edit Lokasi" style={{margin: 10, width:350}}/>
        <input type="number" placeholder="Edit Code" style={{margin: 10, width:350}}/>
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
