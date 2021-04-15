import React from 'react'
import '../styles/Dashboard.css'

export default function Home() {
  return (
    <div>
       <div className="container-fluid">
            <div className="d-flex flex-nowrap">
                <div className="card card-tumpul sidenav no-border my-2">
                    <div className="card-body px-0 d-flex flex-column">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-5">
                            <h3 className="m-0" style={{backgroundImage: "url(../images/rukun-logo-long.png)", color:"white"}}>logo RUKUN</h3>
                            <i className="fa fa-chart-line mb-1" style={{fontSize:"1rem", color:"#1abc9c"}}>tagline</i>
                        </div>
                        <div className="flex-grow-1 menu">
                            <div className="d-flex align-items-center">
                                <i className="fa fa-home" style={{fontSize:"3rem", color:"#1abc9c"}}></i>
                                <h6 className="m-0 font" style={{color: "white"}}>Home</h6>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fa fa-shopping-basket" style={{fontSize:"3rem", color:"#1abc9c"}}></i>
                                <h6 className="m-0 font" style={{color: "white"}}>Product</h6>
                            </div>
                            <div className="d-flex align-items-center">
                                <i className="fa fa-boxes" style={{fontSize:"3rem", color:"#1abc9c"}}></i>
                                <h6 className="m-0 font" style={{color: "white"}}>Category</h6>
                            </div>
                        </div>
                        <div className="menu">
                            {/* <p className="text-left mb-2 pl-4 font" style={{color: "#bdc3c7"}}>addtional</p>
                            <div className="d-flex align-items-center">
                                <i className="fa fa-tools" style={{fontSize:"3rem", color:"#1abc9c"}}></i>
                                <h6 className="m-0 font">Setting</h6>
                            </div> */}
                            <div className="d-flex align-items-center">
                                <i className="fa fa-power-off" style={{fontSize:"3rem", color:"#1abc9c"}}></i>
                                <h6 className="m-0 font" style={{color: "white"}}>Logout</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-tumpul flex-grow-1 body-section no-border">
                  <br/>
                    <h1 className="mb-2">test</h1>

                  <div className="container-fluid" >

                  <div class="row">
                    {/* income */}
                    <div class="col-xl-6 col-md-12">
                      <div class="card overflow-hidden">
                        <div class="card-content">
                          <div class="card-body cleartfix">
                            <div class="media align-items-stretch">
                              <div class="align-self-center">
                                <i class="icon-pencil primary font-large-2 mr-2"></i>
                              </div>
                              <div class="media-body">
                                <h4>Total Income</h4>
                                <span>range date</span>
                              </div>
                              <div class="align-self-center">
                                <h1>18,000</h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* income */}


                    {/* expense */}
                  <div class="col-xl-6 col-md-12">
                    <div class="card">
                      <div class="card-content">
                        <div class="card-body cleartfix">
                          <div class="media align-items-stretch">
                            <div class="align-self-center">
                              <i class="icon-speech warning font-large-2 mr-2"></i>
                            </div>
                            <div class="media-body">
                              <h4>Total Expense</h4>
                              <span>range date</span>
                            </div>
                            <div class="align-self-center"> 
                              <h1>84,695</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                    {/* expense */}
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
