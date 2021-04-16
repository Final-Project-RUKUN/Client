import React,{ useState } from 'react'
import Sidebar from '../components/Sidebar'
import AccountCard from '../components/AccountCard'
import VillageCard from '../components/VillageCard'

export default function Account() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <h2>Account</h2>
            
            <div className="mb-3 mt-3 mr-5 d-flex justify-content-start align-items-center" >
              <div>
                <h5>Desa Catur, 16 April 2021</h5>
              </div>
            </div>
            <h5>Account Detail</h5>
            <AccountCard/><br/>

            <h5>Village Detail</h5>
            <VillageCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
