import React,{ useEffect, useState } from 'react'
import '../styles/Dashboard.css'
import Sidebar from '../components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../store/actions/admin'
import ClipLoader from "react-spinners/ClipLoader"
import { useHistory } from "react-router-dom"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();


export default function Home() {
  const data = useSelector(state => state.admin.data)
  const loading = useSelector(state => state.admin.loading)
  const login = useSelector(state => state.admin.login)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  function toIDR (value) {
    return `Rp. ${value?.toLocaleString()}`
  }

  if(loading) {
    return <ClipLoader></ClipLoader>
  }

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
                          { 
                            loading ? <ClipLoader></ClipLoader> :
                            (<h3>{toIDR(data?.balance)}</h3>)
                          }
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
                          {
                            loading ? <ClipLoader></ClipLoader> :
                            <h3>{
                            data.Transactions?.length === 0 ? 0 : data.Transactions?.length 
                            }</h3>
                          }
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
