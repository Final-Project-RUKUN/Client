import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import ReportCard from '../components/ReportCard'
import '../styles/Table.css'
import ClipLoader from "react-spinners/ClipLoader"

import { useSelector, useDispatch } from 'react-redux'
import { setTransactionsAsync } from '../store/actions/transactions'

export default function Reports() {
  const data = useSelector(state => state.admin.data)
  const transactions = useSelector(state => state.transactions.data)
  const loading = useSelector(state => state.transactions.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(totalIncome(), 'function');
    dispatch(setTransactionsAsync())
  }, [dispatch])

  function totalIncome() {
    // const income = transactions.filter(transaction => transaction.type === "income")
    let income = 0

    transactions.forEach(transaction => {
      if (transaction.type === "income") {
        income = income + +transaction.amount
      }
    })

    var rupiah = '';		
    var angkarev = income.toString().split('').reverse().join('');
    for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
    return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
  }

  function totalExpance() {
    // const income = transactions.filter(transaction => transaction.type === "income")
    let income = 0

    transactions.forEach(transaction => {
      if (transaction.type === "expance") {
        income = income + +transaction.amount
      }
    })

    var rupiah = '';		
    var angkarev = income.toString().split('').reverse().join('');
    for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
    return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
  }

  if(loading) {
    return <ClipLoader></ClipLoader>
  }

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
                  <div style={{marginRight: 5, width: 100}}>
                    <label style={{marginRight: 5, width: 100, marginTop: 5}}>Village Name:</label>
                  </div>
                  <input type="text" value={data.name} disabled="disabled" style={{marginRight: 10, height: 30}}/>
                  <div style={{marginRight: 5, width: 120}}>
                    <label style={{marginRight: 5, width: 115, marginTop: 5}}> Invitation Code:</label>
                  </div>
                  <input type="text" value={data?.invitation_code} disabled="disabled" style={{marginRight: 10, height: 30}}/>
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
                            <h3>                          {
                            loading ? <ClipLoader></ClipLoader> :
                            <h3>{
                            data.Transactions?.length === 0 ? 0 : data.Transactions?.length 
                            }</h3>
                          }</h3>
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
                            {
                              transactions ?
                              <h3>{ totalIncome() }</h3>
                              : <></>
                            }
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
                            {
                              transactions ?
                              <h3>{ totalExpance() }</h3>
                              : <></>
                            }
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
                    <th scope="col" style={{textAlign:"end"}}>Amount</th>
                  </tr>
                </thead>
                <tbody style={{height: 380}}>
                  {
                    loading ? <ClipLoader></ClipLoader> :
                    transactions?.map((transaction, index) => {
                      return <ReportCard transaction={transaction} key={transaction.id} index={index}></ReportCard>
                    })
                  }
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
