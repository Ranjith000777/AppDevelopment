import React from 'react'
import '../../assets/css/Policy.css'
import { useNavigate } from 'react-router-dom'

const UserPolicy = () => {
      const navigate = useNavigate() ;
      let butStyle = {
            margin: "auto",
      }
      const handleback = () =>
      {
            navigate("/application")
      }
  return (
      <div className="policy-main-policy">
            <div className="policy-main">
      <h1>Online Insurance Privacy Policy</h1>
      <div className="policy-main-sub">
            <h2>1. Introduction</h2>
            <p>This Privacy Policy "Policy" outlines the practices of Online Insurance Portal we regarding the collection, use, and protection of personal information provided by users you through our online insurance services. By accessing or using our services, you consent to the practices described in this Policy.</p>
            <h2>2. Information We Collect</h2>
            <p>Contact Information: Your name, address, email address, phone number, and other contact details.</p>
            <p>Policy Information: Information related to your insurance policy, including coverage details and payment information.</p>
            <p>Identification: Government-issued identification, such as driver's license or passport, and other relevant documents.</p>
            <p>Financial Information: Payment card information and bank account details for premium payments.</p>
            <p>Claims Information: Information related to insurance claims, including incident details and supporting documents.</p>
            <h2>3. Security</h2>
            <p>We employ reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet or storage method is completely secure, and we cannot guarantee the security of your information.</p>
            <h2>4. Children's Privacy</h2>
            <p>Our services are not intended for children under the age of 18. We do not knowingly collect or maintain personal information from individuals under 18 years of age.</p>
            <h2>5. Changes to this Policy</h2>
            <p>We may update this Policy from time to time. The "Last Updated" date at the top of this Policy will indicate the latest revision. By continuing to use our services after changes are made, you accept those changes..</p>
            <h2>6. Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Policy or your personal information, please contact us at [Provide Contact Information].</p>
            <button className="btn" style={butStyle} onClick={handleback}>BACK</button>
            
      </div>
    </div>
      </div>
    
  )
}

export default UserPolicy