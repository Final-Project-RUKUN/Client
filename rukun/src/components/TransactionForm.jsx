import React from 'react'

export default function TransactionForm() {
  return (
    <div className="card card-body mb-2">
    <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
      <div className="media-body">
        <div className="mb-2 d-flex justify-content-start align-items-center" >
          <form action="">
            <input type="text" placeholder="Iuran Keamanan" style={{margin: 10, width:350}}/>
            <input type="text" placeholder="Mr. Catur" style={{margin: 10, width:350}}/>
            <input type="number" placeholder="5.000.000" style={{margin: 10, width:350}}/>
            <input type="text" placeholder="Iuran Rutin" style={{margin: 10, width:350}}/>
            <input type="text" placeholder="Untuk 5 tahun" style={{margin: 10, width:350}}/>
            <input type="text" placeholder="Income" style={{margin: 10, width:350}}/> <br/>
            
            <button className="btn btn-sm btn-outline-primary" type="submit" style={{margin: 10, width:100}}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
