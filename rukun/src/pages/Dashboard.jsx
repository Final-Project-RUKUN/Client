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
              <div className="container-fluid" >
                {/* content */}
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
                            <h2>Total Income</h2>
                            <span>range date</span>
                          </div>
                          <div className="align-self-center">
                            <h1>18,000</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* income */}

                {/* expense */}
                <div className="col-xl-6 col-md-12">
                    <div className="card">
                      <div className="card-content">
                        <div className="card-body cleartfix">
                          <div className="media align-items-stretch">
                            <div className="align-self-center">
                              <i className="icon-speech warning font-large-2 mr-2"></i>
                            </div>
                            <div className="media-body">
                              <h2>Total Expense</h2>
                              <span>range date</span>
                            </div>
                            <div className="align-self-center"> 
                              <h1>84,695</h1>
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
                    <div className="col-xl-6 col-md-12">
                      <div className="card overflow-hidden">
                        <div className="card-content">
                          <div className="card-body cleartfix">
                            <div className="media align-items-stretch">
                              <div className="align-self-center">
                                <i className="icon-pencil primary font-large-2 mr-2"></i>
                              </div>
                              <div className="media-body">
                                <h2>Total Income</h2>
                                <span>range date</span>
                              </div>
                              <div className="align-self-center">
                                <h1>18,000</h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* income */}
    
                    {/* expense */}
                    <div className="col-xl-6 col-md-12">
                        <div className="card">
                          <div className="card-content">
                            <div className="card-body cleartfix">
                              <div className="media align-items-stretch">
                                <div className="align-self-center">
                                  <i className="icon-speech warning font-large-2 mr-2"></i>
                                </div>
                                <div className="media-body">
                                  <h2>Total Expense</h2>
                                  <span>range date</span>
                                </div>
                                <div className="align-self-center"> 
                                  <h1>84,695</h1>
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
