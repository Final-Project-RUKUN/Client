import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import VillagerList from '../components/VillagerList'
import '../styles/Table.css'
import ClipLoader from "react-spinners/ClipLoader"


import { useSelector, useDispatch } from 'react-redux'
import { getVillagers } from '../store/actions/village'

export default function Villagers() {
  const village = useSelector(state => state.village.data)
  const loading = useSelector(state => state.village.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVillagers())
  }, [dispatch])

  return (
    <div>
      <div className="container-fluid">
        <div className="d-flex flex-nowrap">
          <div className="card card-tumpul sidenav no-border my-2">
            <Sidebar></Sidebar>
          </div>
          <div className="card card-tumpul flex-grow-1 body-section no-border">
            <br/>
            <div className="container-fluid" style={{textAlign: "start"}}>
            {/* content */}
            
            <div className="mb-5 mt-3 mr-3 d-flex justify-content-start align-items-center" >
              <div>
                {
                  loading ? <ClipLoader></ClipLoader> :
                <h2>{village.name}</h2>
                }
              </div>
            </div>
            <h4>Village Member</h4>
            <div className="card card-body mb-2" style={{padding: 0, border: "none"}}>
            <section className="table">
            <div className="row">
            </div>
            <div>

              <table>
                <thead className="thead-light">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Village</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody style={{height: 380}}>

                {
                  loading ? <ClipLoader></ClipLoader> :
                  village.Users.map((user, index) => {
                    return <VillagerList user={user} key={user.id} index={index}></VillagerList>
                  })
                }
                </tbody>
              </table>

            </div>
            </section>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

