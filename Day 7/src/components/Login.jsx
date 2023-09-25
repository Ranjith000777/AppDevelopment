import React, { useState } from 'react'
import loginimg from '../assets/login.jpg'
import '../assets/css/Login.css'
import { Link, useNavigate} from 'react-router-dom'
import { login } from './UserSlice'
import { useDispatch } from 'react-redux'
import { useUser } from '../components/context/UserContext';



const Login = () => {
  const { login: userLogin } = useUser();
  const navigate = useNavigate() ;
  const [email, setEmail] = useState("") ;
  const [password, setPassword] = useState("") ;

const dispatch = useDispatch() ;

const submitLoginForm = (e) => {
        e.preventDefault();
        if (email === '' ||  password === '') {
          alert('error', 'Please fill in all fields');
        } else {
          userLogin();
          dispatch(login({ email: email, password:password }));
          navigate("/homelog")
        }
        if(email === 'admin@gmail.com' && password === '12345')
    {
      navigate("/adminDashboard")
    }
    };

  return (
    <div>
      <div className="main" onSubmit={(e) => submitLoginForm(e)}>
            <img src={loginimg} alt="" />
            <form>
                  <div className="container">
                        <label className="heading">LOGIN</label>
                        <input type="email" name ="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} placeholder='EMAIL' />
                        <input type="password" name ="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}placeholder='PASSWORD'/>
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