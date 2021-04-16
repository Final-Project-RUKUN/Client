import React from 'react'

export default function Sidebar() {
  return (
      <div className="card-body px-0 d-flex flex-column">
        <div className="d-flex flex-column align-items-center justify-content-center mb-4">
            <h3 className="m-0" style={{backgroundImage: "url(../images/rukun-logo-long.png)", color:"white"}}>logo RUKUN</h3>
            <i className="fa fa-chart-line mb-1" style={{fontSize:"1rem", color:"#1abc9c"}}>tagline</i>
        </div>
        <div className="flex-grow-1 menu">
            <div className="d-flex align-items-center">
                <i className="fa fa-home" style={{fontSize:"3rem", color:"#1abc9c"}}></i>
                <h6 className="m-0 font" style={{color: "white"}}>Dashboard</h6>
            </div>
            <div className="d-flex align-items-center">
                <i className="fa fa-home" style={{fontSize:"3rem", color:"#1abc9c"}}></i>
                <h6 className="m-0 font" style={{color: "white"}}>Reports</h6>
            </div>
            <div className="d-flex align-items-center">
                <i className="fa fa-shopping-basket" style={{fontSize:"3rem", color:"#1abc9c"}}></i>
                <h6 className="m-0 font" style={{color: "white"}}>Transaction</h6>
            </div>
            <div className="d-flex align-items-center">
                <i className="fa fa-boxes" style={{fontSize:"3rem", color:"#1abc9c"}}></i>
                <h6 className="m-0 font" style={{color: "white"}}>Suggestion</h6>
            </div>
            <div className="d-flex align-items-center">
                <i className="fa fa-boxes" style={{fontSize:"3rem", color:"#1abc9c"}}></i>
                <h6 className="m-0 font" style={{color: "white"}}>Villagers</h6>
            </div>
            <div className="d-flex align-items-center">
                <i className="fa fa-boxes" style={{fontSize:"3rem", color:"#1abc9c"}}></i>
                <h6 className="m-0 font" style={{color: "white"}}>Account</h6>
            </div>
        </div>
        <div className="menu">
            <div className="d-flex align-items-center">
                <i className="fa fa-power-off" style={{fontSize:"3rem", color:"#1abc9c"}}></i>
                <h6 className="m-0 font" style={{color: "white"}}>Logout</h6>
            </div>
        </div>
    </div>
  )
}
