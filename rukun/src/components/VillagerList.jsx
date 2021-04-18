import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteVillagers } from '../store/actions/village'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default function VillagerList(props) {
  const { id, name, role, VillageId } = props.user
  const dispatch = useDispatch()

  function destroyVillager(id) {
    if(role === 'admin') {
      toast.error(`cannot delete admin`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      })
    } else {
      toast.error(`${name} deleted`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      })
      dispatch(deleteVillagers(id))
    }
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{VillageId}</td>
      <td>{role}</td>
      <td><button type="button" className="btn btn-outline-danger" onClick={() => destroyVillager(id)}>Delete</button></td>
    </tr>
  )
}
