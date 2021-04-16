import React from 'react'
import Sidebar from '../components/Sidebar'
import ReportCard from '../components/ReportCard'
import '../styles/Table.css'


export default function Reports() {
  return (
    <div>
      <div>
        <div className="container-fluid">
          <div className="d-flex flex-nowrap">
            <div className="card card-tumpul sidenav no-border my-2">
              <Sidebar></Sidebar>
            </div>
            <div className="card card-tumpul flex-grow-1 body-section no-border">
              <br/>
              <div className="container-fluid" style={{textAlign: "start"}}>
                <h3>Reports</h3>
              {/* content */}
              <div className="mb-2 d-flex justify-content-end align-items-center" >
                <form action="" className="d-flex justify-content-end">
                  <input type="text" value="Desa Catur" disabled="disabled" style={{marginRight: 10}}/>
                  <input type="date" style={{marginRight: 10}}/>
                  <button type="button" className="btn btn-sm btn-outline-primary" type="submit">Search</button>
                </form>
              </div>

              {/* header */}
              <div className="card">
              <div className="row">
                <div className="col-xl-4 col-sm-12 col-12"> 
                  <div className="card" style={{border:"none"}}>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="media d-flex">
                          <div className="align-self-center">
                            <i className="icon-pencil primary font-large-2 float-left"></i>
                          </div>
                          <div className="media-body text-right">
                            <h3>3</h3>
                            <span>Transactions</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-12">
                  <div className="card" style={{border:"none"}}>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="media d-flex">
                          <div className="align-self-center">
                            <i className="icon-speech warning font-large-2 float-left"></i>
                          </div>
                          <div className="media-body text-right">
                            <h3>Rp. 27.000.000</h3>
                            <span>Total Income</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-12 col-12">
                  <div className="card" style={{border:"none"}}>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="media d-flex">
                          <div className="align-self-center">
                            <i className="icon-graph success font-large-2 float-left"></i>
                          </div>
                          <div className="media-body text-right">
                            <h3>Rp. 25.000.000</h3>
                            <span>Current Balance</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              {/* header */}

              {/* table */}
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Friday, 16 April 2021</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col" style={{textAlign:"end"}}>Balance</th>
                  </tr>
                </thead>
                <tbody style={{height: 380}}>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                  <ReportCard></ReportCard>
                </tbody>
              </table>
              {/* table */}
              {/* content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
