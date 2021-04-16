import React from 'react'


export default function SuggestionCard() {
  return (
    <div className="card card-body mb-2">
      <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
        <div className="media-body">
          <h5 className="media-title font-weight-semibold">Title</h5>
          <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
            <li className="list-inline-item" ><h6>by asdf, </h6></li>
            <li className="list-inline-item" > at 16 April 2021</li><br/>
            <li className="list-inline-item" > Description</li>
          </ul>
        </div>
      </div>
    </div>
  )
}