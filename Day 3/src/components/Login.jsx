import React from 'react'
import login from '../assets/login.jpg'
import '../assets/css/Login.css'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate() ;
  const [data, setData] = React.useState({
    email:"",
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
    if(data.email === "admin@gmail.com" && data.password === "12345")
    {
      navigate("/adminDashboard")
    }
}
  return (
    <div>
      <div className="main" onSubmit={onSubmit}>
            <img src={login} alt="" />
            <form>
                  <div className="container">
                        <label className="heading">LOGIN</label>
                        <input type="email" name ="email" placeholder='EMAIL' onChange={handleOnChange}/>
                        <input type="password" name ="password" placeholder='PASSWORD'onChange={handleOnChange}/>
                        <label>Forget Password? <Link to='/'>Click here</Link></label>
                        <button type="submit">LOGIN</button>
                        <label>Already have an account? <Link to='/signup'>SignUp</Link></label>
                  </div>
            </form>
      </div>
    </div>
  )
}

export default Login