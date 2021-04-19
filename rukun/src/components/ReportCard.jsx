import React from 'react'

export default function ReportCard(props) {
  const { title, amount, note, category, type } = props.transaction
  const index = props.index

  function toIDR (value) {
    return `Rp. ${value?.toLocaleString()}`
  }

  return (
    <tr>
      <th scope="row">{type === "expance" ? "expense" : "income"}</th>
      <td>{category}</td>
      <td>{title}</td>
      <td>{note}</td>
      <td style={{textAlign:"end"}}>{toIDR(amount)}</td>
    </tr>
  )
}
