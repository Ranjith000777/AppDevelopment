import React, { useState } from 'react'
import './Claim.css'
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
                  name:'Customer Name',
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
                  name:'Email ID',
                  selector: row => row.email,
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
                  name:'Claim Date',
                  selector: row => row.claim,
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
                  name:'Status',
                  selector: row => row.status,
                  style:{
                        fontSize:"18px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                  }
            },
            {
                  name:'Action',
                  cell:(row) => <button className='btndel'>Reject</button>,
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
                  name: "Ranjith V",
                  email:"ranjith@gmail.com",
                  claim:"20.5.2023",
                  status:"Completed"
            },
            {
                  id: 2,
                  name: "Yuven",
                  email:"yuven@gmail.com",
                  claim:"20.5.2023",
                  status:"Completed"
            },
            {
                  id: 3,
                  name: "John",
                  email:"john@gmail.com",
                  claim:"20.5.2023",
                  status:"Completed"
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
            <h1>Manage </h1>
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