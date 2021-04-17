import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'

import VillagerList from '../components/VillagerList'
import '../styles/Table.css'

import { useSelector, useDispatch } from 'react-redux'
import { setUsersAsync } from '../store/actions/users'

export default function Villagers() {

  const users = useSelector(state => state.users.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUsersAsync())
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
            <h2>Villagers</h2>
            
            <div className="mb-5 mt-5 mr-5 d-flex justify-content-start align-items-center" >
              <div>
                <h5>Desa Catur, 16 April 2021</h5>
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
                  users.map((user, index) => {
                    return <VillagerList user={user} key={user.id} index={index}></VillagerList>
                  })
                }
                  {/* <VillagerList></VillagerList>
                  <VillagerList></VillagerList>
                  <VillagerList></VillagerList>
                  <VillagerList></VillagerList>
                  <VillagerList></VillagerList>
                  <VillagerList></VillagerList>
                  <VillagerList></VillagerList>
                  <VillagerList></VillagerList>
                  <VillagerList></VillagerList>
                  <VillagerList></VillagerList>
                  <VillagerList></VillagerList>
                  <VillagerList></VillagerList> */}
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

