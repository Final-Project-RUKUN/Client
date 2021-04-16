import React from 'react'
import '../styles/Dashboard.css'
import Sidebar from '../components/Sidebar'

export default function Home() {
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
            <h3>Dashboard</h3>
            <div className="mb-2 d-flex justify-content-end align-items-center" >
              <form action="" className="d-flex justify-content-end">

                <input type="text" value="Desa Catur" disabled="disabled" style={{marginRight: 10, height: 30}}/>
                <input type="date" style={{marginRight: 10, height: 30}}/>
                <button type="button" className="btn btn-sm btn-outline-primary" type="submit" style={{marginRight: 10, height: 30, marginTop: 2}}>Search</button>

              </form>
            </div>
              
            {/* summary */}
            <h4>SUMMARY</h4>
            <div className="row">
              {/* income */}
              <div className="col-xl-6 col-md-12 mb-2">
                <div className="card overflow-hidden">
                  <div className="card-content">
                    <div className="card-body cleartfix" style={{padding: 5}}>
                      <div className="media align-items-stretch">
                        <div className="align-self-center">
                          <i className="icon-pencil primary font-large-2 mr-2"></i>
                        </div>
                        <div className="media-body">
                          <h6>TOTAL INCOME</h6>
                          <h3>Rp. 27.000.000</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* income */}

              {/* expense */}
              <div className="col-xl-6 col-md-12 mb-2">
                  <div className="card">
                    <div className="card-content">
                      <div className="card-body cleartfix" style={{padding: 5}}>
                        <div className="media align-items-stretch">
                          <div className="align-self-center">
                            <i className="icon-speech warning font-large-2 mr-2"></i>
                          </div>
                        <div className="media-body">
                          <h6>TOTAL EXPENSE</h6>
                          <h3>Rp. 12.000.000</h3>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* expense */}

          {/* transaction */}
            <div className="row">
              {/* income */}
              <div className="col-xl-6 col-md-12 mb-2">
                <div className="card overflow-hidden">
                  <div className="card-content">
                    <div className="card-body cleartfix" style={{padding: 5}}>
                      <div className="media align-items-stretch">
                        <div className="align-self-center">
                          <i className="icon-pencil primary font-large-2 mr-2"></i>
                        </div>
                        <div className="media-body">
                          <h6>CURRENT BALANCE</h6>
                          <h3>Rp. 25.000.000</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* income */}

              {/* expense */}
              <div className="col-xl-6 col-md-12 mb-2">
                  <div className="card">
                    <div className="card-content">
                      <div className="card-body cleartfix" style={{padding: 5}}>
                        <div className="media align-items-stretch">
                          <div className="align-self-center">
                            <i className="icon-speech warning font-large-2 mr-2"></i>
                          </div>
                          <div className="media-body">
                          <h6>TRANSACTIONS</h6>
                          <h3>5</h3>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* transaction */}
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
