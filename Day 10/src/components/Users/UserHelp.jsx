import React from 'react'
import './UserHelp.css'
import { useNavigate } from 'react-router-dom'

const UserHelp = () => {
      const navigate = useNavigate() ;
      const handleHome = () => {
            navigate("/homelog")
      }
  return (
    <div className='main'>
      <section className="help-user">
            <div className="faq-main">
            <button className='btn' onClick={handleHome}>HOME</button>
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
    </div>
  )
}

export default UserHelp