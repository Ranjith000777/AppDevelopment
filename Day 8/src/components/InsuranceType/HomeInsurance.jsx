import React from 'react'
import './HomeInsurance.css'
import { useNavigate } from 'react-router-dom'

const HomeInsurance = () => {
      const navigate = useNavigate() ;
      const handleHome = () => {    
            navigate("/userdocument")
      }
  return (
    <div className='homeins-main'>
      <div className="homeinsurance-main">
            <h1>Home Insurance Policy Document</h1><br />
            <div className="homeinsurance-content">
                  <h3><strong>Policy Number:</strong> 001</h3>
                  <h3><strong>Effective Date:</strong> 22-09-2023</h3>
                  <h3><strong>Expiration Date:</strong> 24-10-2034</h3><br />
                  <h1><strong>Coverages:</strong></h1>
                  <h3>
                  <strong>Dwelling Coverage:</strong> [Coverage Amount] - This coverage protects the physical structure of your home, including the foundation, walls, roof, and attached structures, from covered perils.</h3><br />

                  <h3><strong>Other Structures:</strong> [Coverage Amount] - Coverage for detached structures on your property, such as a garage or shed.</h3><br />

                  <h3><strong>Personal Property:</strong> [Coverage Amount] - Coverage for your personal belongings, including furniture, clothing, and electronics, against covered perils, whether at home or away.</h3><br />

                  <h3><strong>Loss of Use:</strong> [Coverage Amount] - Provides coverage for additional living expenses if your home becomes uninhabitable due to a covered loss.</h3><br />

                  <h3><strong>Personal Liability:</strong> [Coverage Amount] - Protects you against liability claims if someone is injured on your property, and you're found legally responsible.</h3><br />

                  <h3><strong>Medical Payments:</strong> [Coverage Amount] - Provides coverage for medical expenses if someone is injured on your property, regardless of fault.
                  </h3><br />
                  <h3><strong>Deductibles:</strong></h3><br />

                  <h3><strong>Dwelling Deductible:</strong> [Deductible Amount]</h3><br />
                  <h3><strong>Personal Property Deductible:</strong> [Deductible Amount]</h3><br />
                  <h3>[Any other applicable deductibles]</h3><br />
                  <h3><strong>Premium:</strong> Rs.7,000/month</h3>
                  <h3><strong>Payment Schedule:</strong> 24-10-2023</h3><br />
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

export default HomeInsurance