import React from 'react'
import './admin/Dashboard/Dashboard.css'
import {Link} from 'react-router-dom'

const Footer = () => {
      return( 
            <div className='footer'>
                  <Link className='f' to="/terms">Terms and Conditions</Link>
                  <Link className='f' to="/policy">Privacy Policy</Link>
                  <Link className='f'>CopyRight by V.Ranjith</Link>
            </div>
      )
}

export default Footer