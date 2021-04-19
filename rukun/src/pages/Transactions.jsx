import React from 'react'
import Sidebar from '../components/Sidebar'
import TransactionForm from '../components/TransactionForm'
import { useSelector } from 'react-redux'


export default function Transaction() {
  const data = useSelector(state => state.admin.data)

  return (
    <div>
      <div className="container-fluid">
        <div className="d-flex flex-nowrap">
          <div className="card card-tumpul sidenav no-border my-2">
            <Sidebar></Sidebar>
          </div>
          <div className="card card-tumpul flex-grow-1 body-section no-border">
            <br/>
            <div className="container-fluid" style={{textAlign: "start"}}>
            {/* content */}
            <h3>Transactions</h3>
            
            <div className="mb-3 mt-3 d-flex justify-content-end align-items-center" >
            <div className="d-flex justify-content-end">
                <div style={{marginRight: 5, width: 100}}>
                  <label style={{marginRight: 5, width: 100, marginTop: 5}}>Village Name:</label>
                </div>
                <input type="text" value={data.name} disabled="disabled" style={{marginRight: 10, height: 30}}/>
                <div style={{marginRight: 5, width: 120}}>
                  <label style={{marginRight: 5, width: 115, marginTop: 5}}> Invitation Code:</label>
                </div>
                <input type="text" value={data?.invitation_code} disabled="disabled" style={{marginRight: 10, height: 30}}/>
              </div>
            </div>
            <h4>New Transaction</h4>
            <TransactionForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
