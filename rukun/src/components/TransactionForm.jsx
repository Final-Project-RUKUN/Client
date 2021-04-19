import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTransactionsAsync } from '../store/actions/transactions'
import { useHistory } from 'react-router-dom'
import { setSuggestionsAsync, newSuggestion } from '../store/actions/suggestions'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();


export default function TransactionForm() {
  const history = useHistory()

  const [data, setData] = useState({
    title: '',
    amount: '',
    category: '',
    note: '',
    type: 'income',
    status: 'panding'
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
        amount: '',
        category: '',
        note: '',
        status: 'panding'
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
                <strong>Please!</strong> fill in all data.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
               : <></>
            }
          <div className="mb-2 d-flex justify-content-start align-items-center" >
            <form onSubmit={handleSubmit}>
              <input type="text" name="title" placeholder="Iuran Keamanan" value={data.title} onChange={handleInput} style={{ margin: 10, width: 350 }} />
              <input type="number" name="amount" placeholder="5.000.000" value={data.amount} onChange={handleInput} style={{ margin: 10, width: 350 }} />
              <input type="text" name="category" placeholder="Iuran Rutin" value={data.category} onChange={handleInput} style={{ margin: 10, width: 350 }} />
              <input type="text" name="note" placeholder="Untuk 5 tahun" value={data.note} onChange={handleInput} style={{ margin: 10, width: 350 }} />
              <select className="form-select" aria-label="Default select example" name="type" onChange={handleInput} style={{ margin: 10, width: 350 }}>
                <option value="income">Pemasukan</option>
                <option value="expance">pengeluaran</option>
              </select>
              <button className="btn btn-sm btn-outline-primary" type="submit" style={{ margin: 10, width: 100 }}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
