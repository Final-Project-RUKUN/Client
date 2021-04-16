import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'

export default function AccountCard() {
  const history = useHistory()
  const [show, setShow] = useState(false);
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  function editName(event) {
    setName(event.target.value)
  }
  function editRole(event) {
    setRole(event.target.value)
  }
  function editUsername(event) {
    setUsername(event.target.value)
  }
  function editPassword(event) {
    setPassword(event.target.value)
  }
  function editAccount(event) {
    event.preventDefault()
    const data = {
      name, role, username, password
    }
    console.log(data);
    // history.push('/account/edit')
    handleClose()
  }
  
  return (
    <div className="card card-body mb-2">
    <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
      <div className="media-body">
        <h6>Name: Catur</h6><br/>
        <h6>Username: caturkades</h6><br/>
        <h6>Role: Kades</h6><br/>
        <button type="button" className="btn btn-warning" onClick={handleShow}>Edit</button>
      </div>
    </div>
    <Modal show={show} 
      onHide={handleClose} 
      backdrop="static"
      >
      <Modal.Header closeButton>
        <Modal.Title>Edit Account Detail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={editAccount}>
        <input type="text" placeholder="Edit Name" style={{margin: 10, width:350}} onChange={editName}/>
        <input type="text" placeholder="Edit Role" style={{margin: 10, width:350}}
        onChange={editRole}/>
        <input type="text" placeholder="Edit Username" style={{margin: 10, width:350}}
        onChange={editUsername}/>
        <input type="password" placeholder="Edit Password" style={{margin: 10, width:350}}
        onChange={editPassword}/>
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
