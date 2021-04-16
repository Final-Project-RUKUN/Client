import React from 'react'
import Sidebar from '../components/Sidebar'
import SuggestionCard from '../components/SuggestionCard'

export default function Suggestions() {
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
                <h3>Suggestions</h3>
              <div className="mb-2 d-flex justify-content-end align-items-center" >
                <form action="" className="d-flex justify-content-end">
                  <input type="text" value="Desa Catur" disabled="disabled" style={{marginRight: 10}}/>
                  <input type="date" style={{marginRight: 10}}/>
                  <button type="button" className="btn btn-sm btn-outline-primary" type="submit">Search</button>
                </form>
              </div>
              <div className="overflow-auto" style={{height: 550}}>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
                <SuggestionCard></SuggestionCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
