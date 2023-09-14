import './assets/css/App.css';
import * as React from 'react'
import Login from './components/Login'
import Signup from './components/SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
