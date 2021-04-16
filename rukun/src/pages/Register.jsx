import React from 'react'
import { useHistory } from 'react-router-dom'
import "../styles/Register.css"

export default function Register() {
  const history = useHistory()

  function register() {
    history.push('/')
  }

  function login() {
    history.push('/')
  }
  
  return (
    <div>
      <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-6 border-line" >
              <div className="card2 card border-0 px-4 py-5 mt-5">
              <form onSubmit={register}>
                <div className="row px-3"> 
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Email Address</h6>
                  </label> 
                  <input className="mb-4" type="email" placeholder="Enter a valid email address"/> 
                </div>
                <div className="row px-3"> 
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Password</h6>
                  </label> 
                  <input type="password" placeholder="Enter password"/> 
                </div>
                <div className="row mb-3 px-3"> 
                  <button type="submit" className="btn btn-blue text-center">Register</button> 
                </div>
                <div className="row mb-4 px-3"> 
                  <small className="font-weight-bold">Already have an account? <a className="text-danger" onClick={login}>Login</a></small> 
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card1 pb-5">
              <div className="row d-flex justify-content-end" style={{width: 580}}>  
                <img src="" className="logo" placeholder="logo rukun"/> 
              </div>
              <div className="row justify-content-center mt-4 mb-5" style={{padding: 0, width: 580}}>   
                <img src="" className="image" placeholder="image biar bagus"/> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
