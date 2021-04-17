import React from 'react'


export default function SuggestionCard(props) {
  const { title, description, UserId } = props.suggestion
  const index = props.index

  return (
    <div className="card card-body mb-2">
      <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
        <div className="media-body">
          <h5 className="media-title font-weight-semibold">{title}</h5>
          <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
            {/* <li className="list-inline-item" ><h6>by user id: {UserId} </h6></li> */}
            <li className="list-inline-item" > at 16 April 2021</li><br/>
            <li className="list-inline-item" >{description}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
