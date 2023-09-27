import React from 'react'
import './HomeInsurance.css'
import { useNavigate } from 'react-router-dom'

const LifeInsurance = () => {
      const navigate = useNavigate() ;
      const handleHome = () => {    
            navigate("/userdocument")
      }
  return (
    <div className='homeins-main'>
      <div className="homeinsurance-main">
            <h1>Life Insurance Policy Document</h1><br />
            <div className="homeinsurance-content">
                  <h3><strong>Policy Number:</strong> 002</h3>
                  <h3><strong>Effective Date:</strong> 30-09-2023</h3>
                  <h3><strong>Expiration Date:</strong> 21-3-2034</h3><br />
                  <h1><strong>Coverages:</strong></h1>
                  <h3>
                  <strong>Death Benefit:</strong> [Coverage Amount] - This is the amount paid to the beneficiary upon the insured person's death.</h3><br />

                  <h3><strong>Premium:</strong> Rs.7,000/month</h3>
                  <h3><strong>Payment Schedule:</strong> 24-10-2023</h3><br />
                  <h3>
                  Policy Terms and Conditions:</h3>

                  <h3><strong>Grace Period:</strong> [Number of days for grace period for premium payment]</h3>
                  <h3><strong>Policy Loans:</strong> [Information about policy loans, if applicable]</h3>
                  <h3><strong>Surrender Value:</strong> [Information about policy surrender value, if applicable]
                  </h3>
                  <h3><strong>Contact Information:</strong></h3><br />

                  <h3><strong>Insurance Provider:</strong> Online Insurance Portal</h3>
                  <h3><strong>Customer Service:</strong> 919128 039403</h3>
                  <h3><strong>Claims Department:</strong> 938477 573839</h3><br />
                  <button className='btn' onClick={handleHome}>BACK</button>
            </div>
      </div>
    </div>
  )
}

export default LifeInsurance