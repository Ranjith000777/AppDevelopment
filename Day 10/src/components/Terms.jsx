import React from 'react'
import '../assets/css/Terms.css'
import { useNavigate } from 'react-router-dom';

const Terms = () => {
      const navigate = useNavigate() ;
      let butStyle = {
            margin: "auto",
      }
      const handleback = () =>
      {
            navigate("/adminDashboard")
      }
  return (
      <div className="term-main-term">
            <div className="term-main">
      <h1>Online Insurance Policy Terms and Conditions</h1>
      <div className="term-main-sub">
            <h2>Acceptance of Terms</h2>
            <p>By accessing or using our online insurance services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please do not use our services.</p>
            <h2>Definitions</h2>
            <p>We and Online Insurance portal refer to Online Insurance Portal, the insurance provider.</p>
            <p>"You" and "your" refer to the policyholder or user of our online insurance services.</p>
            <p>"Policy" refers to the insurance policy issued by us, including all related documents and endorsements.</p>
            <p>"Online Services" refer to the services provided by us through our website or mobile application.</p>
            <h2>Coverage</h2>
            <p>Our online insurance policies provide coverage as described in the policy documentation provided to you upon purchase. It is your responsibility to review and understand the coverage details, limits, and exclusions outlined in your policy.</p>
            <h2>Policy Changes</h2>
            <p>You may request changes to your policy by contacting our customer service department. We reserve the right to approve or deny requested changes in accordance with our underwriting guidelines.</p>
            <h2>Premiums and Payments</h2>
            <p>Premiums are due as outlined in your policy documents. Failure to pay premiums may result in the cancellation of your policy. Payment methods and options are available through our online portal.</p>
            <h2>Claims</h2>
            <p>Claims must be reported to us promptly as specified in your policy documentation. We will process claims in accordance with our claims handling procedures and applicable laws.</p>
            <h2>Privacy</h2>
            <p>We collect, use, and disclose your personal information as described in our Privacy Policy, which is incorporated by reference into these Terms and Conditions. By using our services, you consent to the collection and use of your information as outlined in the Privacy Policy.</p>
            <h2>Dispute Resolution</h2>
            <p>Any disputes or claims arising from or related to your insurance policy or these Terms and Conditions will be resolved through arbitration in accordance with the rules and procedures of [Specify Arbitration Organization], unless prohibited by law.</p>
            <button className="btn" style={butStyle} onClick={handleback}>BACK</button>
      </div>
    </div>
      </div>
    
  )
}

export default Terms