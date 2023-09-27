import React from 'react'
import './Document.css'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'
import Header from '../../Header'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logout } from '../../UserSlice';


const Document = () => {
      const navigate = useNavigate() ;
      const dispatch = useDispatch() ;
      const handleLogout = (e) => {
            e.preventDefault() ;

            dispatch(logout()) ;
            navigate("/") ;
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
      
      <section className="document">
            <h1>Document</h1>
      </section>
      <Footer/>
    </div>
  )
}

export default Document