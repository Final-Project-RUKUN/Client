import React from 'react'
import { useHistory } from 'react-router-dom'
import "../styles/Login.css"

export default function Login() {
  const history = useHistory()

  function login() {
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
              <form onSubmit={login}>
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
