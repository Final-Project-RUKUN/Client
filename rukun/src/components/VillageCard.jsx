import React from 'react'
import { useHistory } from 'react-router-dom'

export default function VillageCard() {
  const history = useHistory()

  function editVillage() {
    history.push('/village/edit')
  }

  return (
    <div className="card card-body mb-2">
    <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
      <div className="media-body">
          <h6>Name: Desa Catur</h6><br/>
          <h6>Location: Fakfak, Papua</h6><br/>
          <h6>Invitation Code: Nganu123456</h6><br/>
          <button onClick={editVillage}>Edit</button>
      </div>
    </div>
  </div>
  )
}
