import React,{ useState, useEffect } from 'react'
import { getOneSuggestion, deleteSuggestion, updateSuggestion } from '../store/actions/suggestions'
import { useSelector, useDispatch } from 'react-redux'
import Moment from 'react-moment';
import Swal from 'sweetalert2'
// import 'moment-timezone';

export default function SuggestionCard(props) {
  const { title, description, UserId, id, createdAt } = props.suggestion
  const dispatch = useDispatch()

  function destroySuggestion(id) {
    Swal.fire({
      title: "Do you want to delete this suggestion?, you won't be able to recover it",
      showCancelButton: true,
      confirmButtonText: `Delete`,
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteSuggestion(id))
        Swal.fire('Deleted!', '', 'success')
      }
    })
  }

  return (
    <div className="card card-body mb-2">
      <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
        <div className="media-body">
          <h5 className="media-title font-weight-semibold">{title}</h5>
          <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
            <li className="list-inline-item" ><p> at <Moment format="D MMMM YYYY, HH:mm a" withTitle>{createdAt}</Moment></p></li><br/>
            <li className="list-inline-item" ><h5>{description}</h5></li>
          </ul>
        </div>
        <div className="mt-4">
        <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => destroySuggestion(id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}
