import React from 'react'
import Sidebar from '../components/Sidebar'

export default function Villagers() {
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
            <div className="card card-body mb-2">
            <section className="table">
            <div className="row">
            </div>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Village</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <tr>
                        <td>1</td>
                        <td>Catur</td>
                        <td>Desa Catur</td>
                        <td>Kades</td>
                        <td><button>Edit</button></td>
                        </tr>
                      </tr>

                      <tr>
                        <tr>
                        <td>2</td>
                        <td>Pado</td>
                        <td>Desa Catur</td>
                        <td>Bendhara</td>
                        <td><button>Edit</button></td>
                        </tr>
                      </tr>

                      <tr>
                        <tr>
                        <td>3</td>
                        <td>Fahmi</td>
                        <td>Desa Catur</td>
                        <td>Warga</td>
                        <td><button>Edit</button></td>
                        </tr>
                      </tr>
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

