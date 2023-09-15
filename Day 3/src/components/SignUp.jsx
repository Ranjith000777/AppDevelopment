import React from "react";
import '../assets/css/Signup.css'
import signup from '../assets/signup-.jpg'
import { Link } from 'react-router-dom'

const Signup = () =>
{
      const [signupData, setSignUpData] = React.useState({
            firstname:"",
            lastname:"",
            username:"",
            email:"",
            password:"",
            confirmpassword:""
      })

      const handleOnChange = (e) =>
      {
            const [name, value] = [e.target.name, e.target.value] ;
            setSignUpData({
                  ...signupData,
                  [name]:value
            })
      }

      const onSubmit = (e) => {
            e.preventDefault() ;
            console.log(signupData) ;
      }

      return(
            <form onSubmit={onSubmit}>
                  <div className="main">
                        <div>
                              <img src={signup} alt="signup" />
                        </div>
                        <div className="container-sign">
                              <h1><strong>SIGN</strong> UP</h1>
                              <input type="text" placeholder="FIRSTNAME" name="firstname" onChange={handleOnChange}></input>
                              <input type="text" placeholder="LASTNAME" name="lastname" onChange={handleOnChange}></input>
                              <input type="text" placeholder="USERNAME" name="username" onChange={handleOnChange}></input>
                              <input type="email" placeholder="EMAIL ID" name="email" onChange={handleOnChange}></input>
                              <input type="password" placeholder="PASSWORD" name="password" onChange={handleOnChange}></input>
                              <input type="password" placeholder="CONFIRM PASSWORD" name="confirmpassword" onChange={handleOnChange}></input>
                              <button type="submit">SIGNUP</button>
                              <Link to='/login'>Already have an account? Signin</Link>
                        </div>    
                  </div>
                   
            </form>
      )
}

export default Signup