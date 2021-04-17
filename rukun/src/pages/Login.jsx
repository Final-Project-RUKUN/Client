import React,{ useState } from 'react'
import { useHistory } from 'react-router-dom'
import "../styles/Login.css"
import { useDispatch } from 'react-redux'
import { adminLogin } from '../store/actions/admin'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default function Login() {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const dispatch = useDispatch()

  function addUsername(event) {
    setUsername(event.target.value)
  }
  function addPassword(event) {
    setPassword(event.target.value)
  }
  function addRole(event) {
    setRole(event.target.value)
  }

  function login(event) {
    event.preventDefault()
    const data ={
      username, password, role
    }
    dispatch(adminLogin(data))
    toast.success(`welcome ${username}`, {
      autoClose: 3000,
      position: toast.POSITION.TOP_RIGHT,
    })
    history.push('/dashboard')
  }
  function register() {
    history.push('/register')
  }

  return (
    <div>
      <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 pb-5 border-line">
                <div className="row"> 
                  <img src="" alt="logo" className="logo" placeholder="logo rukun"/> 
                </div>
                <div className="row px-3 justify-content-center mt-4 mb-5">   
                  <img src="" alt="logo" className="image" placeholder="image login"/> 
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card2 card border-0 px-4 py-5 mt-5">
              {/* form */}
              <form onSubmit={(event) => login(event)}>
                <div className="row px-3"> 
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Username</h6>
                  </label> 
                  <input className="mb-4" type="text" placeholder="Username" onChange={addUsername} required/> 
                </div>
                <div className="row px-3"> 
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Password</h6>
                  </label> 
                  <input type="password" placeholder="Enter password" required onChange={addPassword}/> 
                </div>
                <div className="row px-3"> 
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Role</h6>
                  </label> 
                  <input type="password" placeholder="Role" required onChange={addRole}/> 
                </div>
                <div className="row mb-3 px-3"> 
                  <button type="submit" className="btn btn-blue text-center">Login</button> 
                </div>
                <div className="row mb-4 px-3"> 
                  <small className="font-weight-bold">Don't have an account? <a className="text-danger" onClick={register}>Register</a></small> 
                </div>
              </form>
              {/* form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
