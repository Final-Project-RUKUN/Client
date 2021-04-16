import React from 'react'
import { useHistory } from 'react-router-dom'

export default function AccountCard() {
  const history = useHistory()

  function editAccount() {
    history.push('/account/edit')
  }
  
  return (
    <div className="card card-body mb-2">
    <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
      <div className="media-body">
          <h6>Name: Catur</h6><br/>
          <h6>Username: caturkades</h6><br/>
          <h6>Role: Kades</h6><br/>
          <button onClick={editAccount}>Edit</button>
      </div>
    </div>
  </div>
  )
}
