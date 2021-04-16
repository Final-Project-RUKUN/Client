import React from 'react'

export default function TransactionForm() {
  return (
    <div className="card card-body mb-2">
    <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
      {/* <div className="mr-2 mb-3 mb-lg-0"> 
      <img src="" width="150" height="150" alt="gambar apa gitu biar bagus"/> 
      </div> */}
      <div className="media-body">
        <div className="mb-2 d-flex justify-content-start align-items-center" >
          <form action="">
            <input type="text" placeholder="Iuran Keamanan" style={{margin: 10, width:350}}/>
            <input type="text" placeholder="Mr. Catur" style={{margin: 10, width:350}}/>
            <input type="number" placeholder="5.000.000" style={{margin: 10, width:350}}/>
            <input type="text" placeholder="Iuran Rutin" style={{margin: 10, width:350}}/>
            <input type="text" placeholder="Untuk 5 tahun" style={{margin: 10, width:350}}/>
            <input type="text" placeholder="Income" style={{margin: 10, width:350}}/> <br/>
            
            <button type="button" className="btn btn-sm btn-outline-primary" type="submit" style={{margin: 10, width:100}}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
