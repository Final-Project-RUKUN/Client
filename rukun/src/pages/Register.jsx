import React from 'react'
import Navbar from '../components/Navbar'
import { useHistory } from 'react-router-dom'

export default function Register() {
  const history = useHistory()

  function register() {
    history.push('/')
  }
  
  return (
  <div>
    <Navbar></Navbar>
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Register</h5>
              <form className="form-signin" onSubmit={register}>
                <div className="form-label-group">
                  <label>Email</label>
                  <input type="email" className="form-control" placeholder="Email" required autoFocus/>
                </div>
                <br/>
                <div className="form-label-group">
                  <label>Password</label>
                  <br/>
                  <input type="password" className="form-control" placeholder="Password" required/>
                </div>
                <br/><br/>
                <button className="btn btn-primary btn-block" type="submit">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
