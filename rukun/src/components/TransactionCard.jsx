import React from 'react'

export default function TransactionCard() {
  return (
    <div className="card card-body mb-2">
    <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
        {/* <div className="mr-2 mb-3 mb-lg-0"> 
        <img src="" width="150" height="150" alt="gambar apa gitu biar bagus"/> 
        </div> */}
        <div className="media-body">
            <h2 className="media-title font-weight-semibold">jumlah </h2>
            <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
                <li className="list-inline-item" ><h4>pado</h4></li>
                <li className="list-inline-item" >bayar iuran</li>
            </ul>
            <p className="mb-3">comment pas bayar kalo ada</p>
        </div>
    </div>
  </div>
  )
}
