import React from 'react'
import { Link } from 'react-router-dom'
import './Application.css'
import { useNavigate } from 'react-router-dom'
import register_image from '../../assets/register_img.jpg'

const Application = (props) => {
  const navigate = useNavigate() ;
  const handleCancel = () => {
    navigate("/homelog")
  }
  const handleApply = () => {
    alert("Applied Successfully");
    navigate("/homelog")
  }
  return (
    <div className="login-container">
      <img src={register_image} alt="images" />
      <div className="login-container01">
        <h1>REGISTRATION FORM</h1>
        <div className="login-container02">
          <input type="text" placeholder="FIRST NAME" className="input" />
          <input type="text" placeholder="LAST NAME" className="input" />
        </div>
        <div className="login-container03">
          <input type="text" placeholder="AGE" className="input" />
          <select>
            <option value="Option 1" hidden>GENDER</option>
            <option value="Option 2">MALE</option>
            <option value="Option 3">FEMALE</option>
            <option value="Option 3">OTHERS</option>
          </select>
        </div>
        <div className="login-container04">
          <input type="text" placeholder="PERMANENT EMAIL" className="input" />
          <input type="text" placeholder="MOBILE NUMBER" className="input" />
        </div>
        <textarea
          placeholder="PERMANENT ADDRESS"
          className="login-textarea textarea"
          rows={3}
        ></textarea>
        <div className="login-container05">
          <div className="login-container06">
            <input type="text" placeholder="MARTIAL STATUS" className="input" />
          </div>
          <input type="text" placeholder="TOTAL INSURANCE NOW" className="input" />
        </div>
        <div className="login-container07">
          <select>
            <option value="Option 1" hidden>INSURANCE TYPE</option>
            <option value="Option 2">LIFE INSURANCE</option>
            <option value="Option 3">HOME INSURANCE</option>
            <option value="Option 3">VEHICLE INSURANCE</option>
            <option value="Option 3">MEDICAL INSURANCE</option>
            <option value="Option 3">CAR INSURANCE</option>
            <option value="Option 3">HEALTH INSURANCE</option>
          </select>
          <select>
            <option value="Option 1">INSURANCE PLAN</option>
            <option value="Option 2">2 YEARS</option>
            <option value="Option 3">5 YEARS</option>
            <option value="Option 3">10 YEARS</option>
            <option value="Option 3">20 YEARS</option>
            <option value="Option 3">LIFETIME</option>
          </select>
        </div>
        <textarea
          placeholder="ANY QUESTIONS"
          className="login-textarea1 textarea"
        ></textarea>
        <div className="login-container08">
          <input type="checkbox" />
          <label>Accept <Link to="/userterms">Terms and Conditions</Link></label>
        </div>
        <div className="login-container09">
          <input type="checkbox" />
          <label>Accept <Link to="/userpolicy">Privacy Policy</Link></label>
        </div>
        <div className="login-container10">
          <button type="button" className="button1" onClick={handleCancel}>
            <span>
              <span>CANCEL</span>
              <br></br>
            </span>
          </button>
          <button type="button" className="button2" onClick={handleApply}>
            APPLY
          </button>
        </div>
      </div>
    </div>
  )
}

export default Application
