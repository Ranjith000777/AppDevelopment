import React, { useState } from 'react'
import './Dashboard.css'

import Chart from "react-apexcharts";
import Footer from '../../Footer'
import Header from '../../Header'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../UserSlice';




const Dashboard = () => {
      const navigate = useNavigate() ;
      const dispatch = useDispatch() ;
      const handleLogout = (e) => {
            e.preventDefault() ;

            dispatch(logout()) ;
            navigate("/") ;
      }

      const [state] = useState({
            options: {
              chart: {
                id: "basic-bar"
              },
              xaxis: {
                categories: ["Life Insurance", "Personal Insurance", "Home Insurance", "Health Insurance", "Vehicle Insurance"]
              }
            },
            series: [
              {
                name: "series-1",
                data: [2000, 1000, 3000, 1000, 5000]
              }
            ]
          })
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
                                    Dashboard
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
            <section className="dashboard">
                   <h1>DASHBOARD</h1>
                 <div className="top">
                        <div className="first-panel">
                             <label className="cust">6</label> 
                             <label className="cust-name">No. of. Customer</label> 
                        </div>
                        <div className="first-panel">
                     
                     
                     
                        <label className="cust">6</label> 
                             <label className="cust-name">No. of. Policies</label>
                        </div>
                        <div className="first-panel">
                        <label className="cust">12,000</label> 
                             <label className="cust-name">No. of. Site Visits</label> 
                        </div>
                  </div>
                        <div className="content">
                              <h1>Most Visited Insurances</h1>
                              <div className='chart'>
                                    <Chart className="chart1"
                                          options={state.options}
                                          series={state.series}
                                          type="bar"
                                          width="600"
                                    />
                                    <Chart className="chart2"
                                          options={state.options}
                                          series={state.series}
                                          type="line"
                                          width="600"
                                    />
                              </div>
                              
                        </div>
            </section>
            <Footer/>
    </div>
  )
}

export default Dashboard