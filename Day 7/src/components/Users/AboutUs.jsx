import React from 'react'
import './AboutUs.css'
import { useNavigate } from 'react-router-dom'

const AboutUs = () => {
      const navigate = useNavigate() ;
      const handleHome = () => {
            navigate("/homelog")
      }
  return (
    <div>
      <div className="main-about">
            <div className="firstpanel-about">
                  <h1>Online Insurance Portal</h1>
                  <p>Welcome to Your Online Insurance Portal, your trusted partner in securing your future and protecting your assets. We understand that life is filled with unexpected twists and turns, and that's why we're here to provide you with the peace of mind you deserve. Our mission is to simplify the process of obtaining and managing insurance while delivering exceptional value and service to our customers.</p>
                  <h1>Why Choose Us?</h1>
                  <p>When you choose Your Online Insurance Portal, you're choosing a partner who puts your interests first. Here are some reasons to trust us:</p>

                  <p><strong>Expertise:</strong> Our team of insurance experts has years of experience in the industry, ensuring you receive expert advice and guidance.</p>

                  <p><strong>Customer-Centric:</strong> We prioritize your satisfaction and strive to exceed your expectations in every interaction.</p>

                  <p><strong>Technology-Driven:</strong> Our advanced online platform makes managing your insurance simple and efficient.</p>

                  <p><strong>Competitive Pricing:</strong> We work tirelessly to offer you the best coverage at competitive rates.</p>

                  
            </div>
            <div className="secondpanel-about">
                  <h1>Our Commitment</h1>
                  <p>
                  <strong>Empowering You:</strong> We believe that informed decisions are the best decisions. That's why we provide you with the tools and resources you need to understand your insurance options fully.</p><br></br>

                  <p><strong>Simplicity and Convenience:</strong> We've streamlined the insurance process, making it easy and convenient to purchase, manage, and renew your policies from the comfort of your home or office. Say goodbye to the hassles of paperwork and long waiting times.</p><br></br>

                  <p><strong>Personalized Solutions:</strong> We recognize that every individual and business is unique. Our team of experienced insurance professionals is dedicated to tailoring insurance solutions to meet your specific needs, ensuring you get the coverage you need at a price you can afford.</p><br></br>

                  <p><strong>Transparency:</strong> We believe in complete transparency. You'll find no hidden fees or surprises when you work with us. We provide clear and concise information about your insurance options so you can make informed choices.
                  </p>
            </div>
            <div className="thirdpanel-about">
                  <h1>Our Services</h1>
                  <p><strong>Auto Insurance:</strong> Protect your vehicles and stay safe on the road with our comprehensive auto insurance coverage.</p><br />

                  <p><strong>Home Insurance:</strong> Safeguard your home and belongings against unexpected events, giving you peace of mind.</p><br />

                  <p><strong>Life Insurance:</strong> Ensure your loved ones' financial security with our various life insurance policies.</p><br />

                  <p><strong>Health Insurance:</strong> Access quality healthcare without the financial burden with our health insurance plans.</p><br />

                  <p>Business Insurance: Protect your business assets and operations from potential risks and liabilities.</p><br />

                  <p>Specialized Insurance: From travel insurance to pet insurance, we have solutions for all your unique needs.</p><br />
                  <button className='btn' onClick={handleHome}>
                        CLOSE
                  </button>
            </div>
      </div>
    </div>
  )
}

export default AboutUs