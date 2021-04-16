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
            <h2>Dashboard</h2>
            <div>
            
            </div>
              
            {/* summary */}
            <h4>SUMMARY</h4>
            <div className="row">
              {/* income */}
              <div className="col-xl-6 col-md-12 mb-4">
                <div className="card overflow-hidden">
                  <div className="card-content">
                    <div className="card-body cleartfix">
                      <div className="media align-items-stretch">
                        <div className="align-self-center">
                          <i className="icon-pencil primary font-large-2 mr-2"></i>
                        </div>
                        <div className="media-body">
                          <h6>TOTAL INCOME</h6>
                          <h2>Rp. 27.000.000</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* income */}

              {/* expense */}
              <div className="col-xl-6 col-md-12 mb-4">
                  <div className="card">
                    <div className="card-content">
                      <div className="card-body cleartfix">
                        <div className="media align-items-stretch">
                          <div className="align-self-center">
                            <i className="icon-speech warning font-large-2 mr-2"></i>
                          </div>
                        <div className="media-body">
                          <h6>TOTAL EXPENSE</h6>
                          <h2>Rp. 12.000.000</h2>
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
              <div className="col-xl-6 col-md-12 mb-4">
                <div className="card overflow-hidden">
                  <div className="card-content">
                    <div className="card-body cleartfix">
                      <div className="media align-items-stretch">
                        <div className="align-self-center">
                          <i className="icon-pencil primary font-large-2 mr-2"></i>
                        </div>
                        <div className="media-body">
                          <h6>CURRENT BALANCE</h6>
                          <h2>Rp. 25.000.000</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* income */}

              {/* expense */}
              <div className="col-xl-6 col-md-12 mb-4">
                  <div className="card">
                    <div className="card-content">
                      <div className="card-body cleartfix">
                        <div className="media align-items-stretch">
                          <div className="align-self-center">
                            <i className="icon-speech warning font-large-2 mr-2"></i>
                          </div>
                          <div className="media-body">
                          <h6>TRANSACTIONS</h6>
                          <h2>5</h2>
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
