import React from 'react'
import "./signUp.css"
import exitButton from '../../assets/exitButton.png'

import { SignUpTabFirst, SignUpTabSecond, SignUpTabThird } from '@/components'

const SignUp = () => {
  return (
    <div style={{zIndex:"100",height:"100%", width:"100%",backgroundColor:"rgba(256, 256, 256, 0.8)", position:"absolute"}}>
      <div className="pop-up-sign-up">
        <div className="signup-wrapper">
          <div className="navigation">
            <div className="header-popup-text">Sign Up</div>
            <img className="frame-4" alt="Frame" src={exitButton} />
          </div>
        
        {/* <SignUpTabFirst/> */}
        {/* <SignUpTabSecond/> */}
          {/* <SignUpTabThird/> */}
        </div>
      </div>
    </div>
    

  )
}

export default SignUp
