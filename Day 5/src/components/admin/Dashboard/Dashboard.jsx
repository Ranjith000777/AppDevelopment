import React, { useState } from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import { selectUser } from '../../UserSlice'
import { useSelector } from 'react-redux'
import Chart from "react-apexcharts";



const Dashboard = () => {
      const user = useSelector(selectUser) ;
      const [state, setState] = useState({
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
                data: [20000, 10000, 30000, 40000, 30000]
              }
            ]
          })
  return (
    <div>
      <nav>
            <div className="logo-name">
                  <label className="logo">Online Insurance</label>
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
                              <Link className='link-text' to="/adminDocument">
                                    <span className='link-name'>Document</span>
                              </Link>
                        </li>
                        <li>
                              <Link className='link-text' to="/adminSettings">
                                    <span className='link-name'>Settings</span>
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
                              <Link className='link-text' to="/">
                                    <span className="link-name">Logout</span>
                              </Link>
                        </li>
                  </ul>
            </div>
      </nav>
            <section className='header'>
                  <label>{user.email}</label>
            </section>
            <section className="dashboard">
                   <h1>DASHBOARD</h1>
                 <div className="top">
                        <div className="first-panel">
                             <label className="cust">3500</label> 
                             <label className="cust-name">No. of. Customer</label> 
                        </div>
                        <div className="first-panel">
                     
                     
                     
                        <label className="cust">75</label> 
                             <label className="cust-name">No. of. Policies</label>
                        </div>
                        <div className="first-panel">
                        <label className="cust">1,30,000</label> 
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
    </div>
  )
}

export default Dashboard