import React from 'react'
import './Help.css'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'
import Header from '../../Header'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logout } from '../../UserSlice';



const Help = () => {
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
      <section className='header'>
                  <label>admin@gmail.com</label>
            </section>
      <section className="help">
            <div className="faq-main">
                  <div className="faq">
                  <h1>Frequently Asked Questions</h1>
                        <div className="questions">
                              <h3>Why we apply Insurance?</h3>
                              
                        </div>
                        <div className="answer">
                              <p>Insurance plans are beneficial to anyone looking to protect their family, assets/property and themselves from financial risk/losses: Insurance plans will help you pay for medical emergencies, hospitalisation, contraction of any illnesses and treatment, and medical care required in the future. 
                              </p>
                        </div>
                  </div>
                  <div className="faq">
                        
                        <div className="questions">
                              <h3>Benefits of Insurance</h3>
                              
                        </div>
                        <div className="answer">
                              <p>Provides Protection. Insurance coverage does reduce the impact of loss that one bears in perilous situations. ...
                              Provides Certainty. Insurance coverage provides a feeling of assurance to the policyholders. ...
                              Risk Sharing. ...
                              Value of Risk. ...
                              Capital Generation. ...
                              Economic Growth. ...
                              Saving Habits.
                              </p>
                        </div>
                  </div>
                  <div className="faq">
                        
                        <div className="questions">
                              <h3>What are 3 most type of insurance?</h3>
                              
                        </div>
                        <div className="answer">
                              <p>Most experts agree that life, health, long-term disability, and auto insurance are the four types of insurance you must have.
                              </p>
                        </div>
                  </div>
                  <div className="faq">
                        
                        <div className="questions">
                              <h3>What are the principle of insurance?</h3>
                              
                        </div>
                        <div className="answer">
                              <p>In the insurance world there are six basic principles that must be met, ie insurable interest, Utmost good faith, proximate cause, indemnity, subrogation and contribution. Insurable Interest. The right to insure arising out of a financial relationship, between the insured to the insured and legally recognized.
                              </p>
                        </div>
                  </div>
            </div>
            <div className="contact-main">
                  <div className="contact">
                        <h1>Contact Us Directly</h1>
                        <div className="inputname">
                              <input type="text" placeholder='Firstname'/>
                              <input type="text" placeholder='Lastname'/>
                        </div>
                        <input type="text" placeholder='Email Address'/>
                        <input type="text" placeholder='Subject'/>
                        <textarea name='content-request' rows={10} cols={72} placeholder='Your Message'></textarea>
                        <button className='btn'>Submit</button>
                  </div>
                  <div className="address">
                        <div className="addresssub1">
                              <h1>Contact Us</h1>
                              <p>12th Kamaraj Street,</p>
                              <p>Kovaipudur, Coimbatore</p>
                              <p>TamilNadu, India.</p>
                              <p>+92837484(89)</p>
                        </div>
                        <div className="addresssub2">
                              <h1>AdminDetails</h1>
                              <p>Name : V.Ranjith</p>
                              <p>Email : ranjith@gmail.com</p>
                              <p>Location : Coimbatore</p>
                              <p>Mobile : 9283747789</p>
                        </div>
                  </div>
            </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Help