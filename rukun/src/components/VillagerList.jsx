import React from 'react'

export default function VillagerList(props) {
  const { name, role, VillageId } = props.user
  const { index } = props.index

  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{VillageId}</td>
      <td>{role}</td>
      <td><button type="button" className="btn btn-outline-warning">Edit</button></td>
    </tr>
  )
}
