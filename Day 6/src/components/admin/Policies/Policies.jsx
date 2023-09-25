import React, { useState } from 'react'
import './Policies.css'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import Header from '../../Header'
import Footer from '../../Footer'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logout } from '../../UserSlice';


const Policies = () => {
      const navigate = useNavigate() ;
      const dispatch = useDispatch() ;
      const handleLogout = (e) => {
            e.preventDefault() ;

            dispatch(logout()) ;
            navigate("/") ;
      }

      
      const column = [
            {
                  name:'Policy Name',
                  selector: row => row.name,
                  sortable: true,
                  style:{
                        fontSize:"18px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        fontWeight:"500"
                  }
            },
            {
                  name:'Available Vacants',
                  selector: row => row.vacant,
                  sortable: true,
                  style:{
                        fontSize:"18px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        fontWeight:"500"
                  }
            },
            {
                  name:'Customer Available',
                  selector: row => row.available,
                  sortable: true,
                  style:{
                        fontSize:"18px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        fontWeight:"500"
                  }
            },
            {
                  name:'Edit',
                  cell:(row) => <button className='btn'>Edit</button>,
                  style:{
                        fontSize:"18px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                  }
            },
            {
                  name:'Delete',
                  cell:(row) => <button className='btndel'>Delete</button>,
                  style:{
                        fontSize:"14px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        padding:"20px 0",
                  }
            },
      ]
      const data = [
            {
                  id: 1,
                  name: "Life Insurance",
                  vacant: "30",
                  available: "2",
                  action: "",
            },
            {
                  id: 2,
                  name: "Vehicle Insurance",
                  vacant: "50",
                  available: "0",
                  action: "",
            },
            {
                  id: 3,
                  name: "Health Insurance",
                  vacant: "45",
                  available: "3",
                  action: "",
            },
            {
                  id: 4,
                  name: "Car Insurance",
                  vacant: "20",
                  available: "1",
                  action: "",
            },
            {
                  id: 5,
                  name: "Medical Insurance",
                  vacant: "20",
                  available: "0",
                  action: "",
            },
            {
                  id: 6,
                  name: "Home Insurance",
                  vacant: "25",
                  available: "0",
                  action: "",
            },
            
      ]
      const[records, setRecords] = useState(data);
      function handleFilter(event)
      {
            const newData = data.filter(row => {
                  return row.name.toLowerCase().includes(event.target.value.toLowerCase())
            })
            setRecords(newData)
      }
      const tableCustomer = {
            headCells:{
                  style:{
                        fontSize:'20px',
                        fontWeight:'600',
                        padding:'30px',
                        display:"flex",
                        justifyContent:"center",
                  }
            }
      }

  return (
    <div className='main'>
      <Header/>
      <nav>
            <div className="logo-name">
                  <label className="logo"><strong>Online </strong>Insurance</label>
            </div>
            <div className="menu-items">
                  <ul className="nav-links">
                        <li>
                              <Link className='link-text' to="/adminDashboard">
                                    <span className='link-name'>Dashboard</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminPolicies">
                                    <span className='link-name'>Policies</span>
                              </Link>
                        </li>
                        
                        <li>
                              <Link className='link-text' to="/adminClaims">
                                    <span className='link-name'>Claims</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminCustomer">
                                    <span className='link-name'>Customer</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminHelp">
                                    <span className='link-name'>Help</span>
                              </Link>
                        </li>
                  </ul>
                  <ul className="logout-mod">
                        <li>
                        <Link className='link-text-logout' onClick={(e) => handleLogout(e)}>
                                    <span className="link-name">Logout</span>
                              </Link>
                        </li>
                  </ul>
            </div>
      </nav>
      <section className='header'>
                  <label>admin@gmail.com</label>
            </section>
      <section className="customer">
            <h1>Manage Policies</h1>
            <div className="table">
                  <DataTable columns={column} data={records} className='table1' fixedHeader
                  customStyles={tableCustomer}
                  highlightOnHover
                  actions={<button className='btn-ex'>Export</button>}
                  subHeader
                  subHeaderComponent={<input className='input-search' type="text" placeholder='Search Here' onChange={handleFilter}></input>}>

                  </DataTable>
            </div>
            
      </section>
      <Footer/>
    </div>
  )
}

export default Policies