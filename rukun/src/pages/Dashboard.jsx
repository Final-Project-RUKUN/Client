import React from 'react'
import '../styles/Dashboard.css'
import TransactionCard from '../components/TransactionCard'

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
                  <div className="container-fluid" >
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
                  {/* expense */}
                  <br/>
                  {/* detail list */}
                  <div className="overflow-auto" style={{height: 495}}>
                    <TransactionCard></TransactionCard>
                    <TransactionCard></TransactionCard>
                    <TransactionCard></TransactionCard>
                    <TransactionCard></TransactionCard>
                    <TransactionCard></TransactionCard>
                    <TransactionCard></TransactionCard>
                    <TransactionCard></TransactionCard>
                    <TransactionCard></TransactionCard>
                    <TransactionCard></TransactionCard>
                    <TransactionCard></TransactionCard>
                    <TransactionCard></TransactionCard>
                  </div>
                  {/* detail list */}


                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
