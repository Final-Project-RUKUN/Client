import React from 'react'

export default function ReportCard(props) {
  const { title, amount, note, category, type } = props.transaction

  function toIDR (value) {
    return `Rp. ${value?.toLocaleString()}`
  }

  return (
    <tr>
      <th scope="row">{type === "expance" ? "expense" : "income"}</th>
      <td>{category}</td>
      <td>{title}</td>
      <td>{note}</td>
      <td style={{textAlign:"end", color: (type === "expance") ? 'red' : 'black'}}>{toIDR(amount)}</td>
    </tr>
  )
}
