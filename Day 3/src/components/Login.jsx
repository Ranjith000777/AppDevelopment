import React from "react";
import '../assets/css/Login.css'
import signup from '../assets/signup-.jpg'


const Login = () =>{
      const [data, setData] = React.useState({
            username:"",
            password:""
      })
      const handleOnChange = (e) => {
            const [name, value] = [e.target.name, e.target.value] ;
            setData({
                  ...data,
                  [name]:value
            })
      }
      const onSubmit = (e) => {
            e.preventDefault() ;
            console.log(data) ;
      }
      return(
            <form onSubmit={onSubmit}>
                  <div className="main">
                        <div>
                              <img src={signup} alt="signup" />
                        </div>
                        <div className="container">
                              <h1><strong>LOG</strong> IN</h1>
                              <input type="text" placeholder="USERNAME" name="username" onChange={handleOnChange}></input>
                              <input type="password" placeholder="PASSWORD" name="password" onChange={handleOnChange}></input>
                              <a href="#">Forget Password?</a>
                              <button type="submit">LOGIN</button>
                        </div>    
                  </div>
                   
            </form>
      )
}
export default Login