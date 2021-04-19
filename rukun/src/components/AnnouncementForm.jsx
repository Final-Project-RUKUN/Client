import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTransactionsAsync } from '../store/actions/transactions'
import { useHistory } from 'react-router-dom'
import { setSuggestionsAsync, newSuggestion } from '../store/actions/suggestions'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();


export default function AnnouncementForm() {
  const history = useHistory()

  const [data, setData] = useState({
    title: '',
    description: ''
  })
  const [isError, setError] = useState(false)
  const dispatch = useDispatch()

  function handleInput(e) {
    e.preventDefault()
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const values = Object.values(data)

    const errors = values.filter(value => value === '')

    if (errors.length) {
      setError(true)
    } else {
      // console.log(data);
      toast.info(`${data.title} added`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      })
      dispatch(addTransactionsAsync(data))
      setData({
        title: '',
        description: ''
      })
    }

  }

  return (
    <div className="card card-body mb-2">
      <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
        <div className="media-body">
            {
              isError ?
              <div className="alert alert-warning alert-dismissible fade show" role="alert">
                Please <strong>fill in all data!.</strong> 
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
               : <></>
            }
          <div className="mb-2 d-flex justify-content-start" >
            <form onSubmit={handleSubmit}>
              <input type="text" name="title" placeholder="Iuran Keamanan Naik Per Bulan Ini" value={data.title} onChange={handleInput} style={{ margin: 10, width: 350 }} /> <br></br>
              <input type="textarea" name="description" placeholder="Desciption of the Title" value={data.description} onChange={handleInput} style={{ margin: 10, width: 500, height: 200, alignItems: 'start' }} /> <br></br>
              <button className="btn btn-sm btn-outline-primary" type="submit" style={{ margin: 10, width: 100 }}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
