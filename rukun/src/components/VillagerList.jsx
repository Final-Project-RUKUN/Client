import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteVillagers } from '../store/actions/village'
import { changeAdmin } from '../store/actions/admin'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default function VillagerList(props) {
  const { id, name, role, VillageId } = props.user
  const dispatch = useDispatch()

  useEffect(() => {

  },[])

  function destroyVillager(id) {
    if(role === 'admin') {
      toast.error(`cannot delete admin`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      })
    } else {
      toast.success(`${name} deleted`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      })
      dispatch(deleteVillagers(id))
    }
  }

  function demoteAdmin(id) {
    if(role !== 'admin') {
      toast.error(`You can only demote an admin`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      })
    } else {
      toast.success(`${name} demoted`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      })
      dispatch(changeAdmin(id))
    }
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{VillageId}</td>
      <td>{role}</td>
      <td><button type="button" className="btn btn-sm btn-outline-danger mr-2" onClick={() => destroyVillager(id)}>Delete</button>
      <button type="button" className="btn btn-sm btn-outline-warning" onClick={() => demoteAdmin(id)}>Change Role</button></td>
    </tr>
  )
}
