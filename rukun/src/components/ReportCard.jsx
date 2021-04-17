import React from 'react'

export default function ReportCard(props) {
  const { title, amount, note } = props.transaction
  const index = props.index

  return (
    <tr>
      <th scope="row"></th>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{note}</td>
      <td style={{textAlign:"end"}}>{amount}</td>
    </tr>
  )
}
