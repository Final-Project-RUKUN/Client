import React,{ useState } from 'react'
import Sidebar from '../components/Sidebar'
import { useSelector } from 'react-redux'
import AccountCard from '../components/AccountCard'
import VillageCard from '../components/VillageCard'

export default function Account() {
  const data = useSelector(state => state.admin.data)
  const admin = useSelector(state => state.users.admin)

  return (
    <div>
      <div className="container-fluid">
        <div className="d-flex flex-nowrap">
          <div className="card card-tumpul sidenav no-border my-2">
            <Sidebar></Sidebar>
          </div>
          <div className="card card-tumpul flex-grow-1 body-section no-border">
            <br/>
            <div className="container-fluid" style={{textAlign: "start", marginTop: 50}}>
            {/* content */}
            <h2>Account</h2> <br/>
            <h5>Account Detail</h5>
            <AccountCard admin={admin}/><br/>

            <h5>Village Detail</h5><br/>
              <VillageCard village={data}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
