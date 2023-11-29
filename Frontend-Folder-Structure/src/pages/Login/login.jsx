import React from 'react'
import "./login.css"
import exitButton from '../../assets/exitButton.png'
import googleIcon from '../../assets/SocialIcon/google.png'
const LogIn = () => {
  return (
    <div style={{zIndex:"100",height:"100%", width:"100%",backgroundColor:"rgba(256, 256, 256, 0.8)", position:"absolute"}}>
      <div className="pop-up-sign-in">
        <div className="signin-wrapper">
        <div className="navigation">
          <div className="header-popup-text">Sign In</div>
          <img className="frame-4" alt="Frame" src={exitButton} />
        </div>
        
        <div className='info-field'>
          <div className="input-container">
            <label for="inputUsername" class="form-label">Username</label>
            <input id="inputUsername" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
          <div className="input-container">
            <label for="inputPassword5" class="form-label">Password</label>
            <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
          </div>

          <div className="sign-in-button">
            <div className="div-wrapper">
              <div className="text-wrapper-2">Sign in</div>
            </div>
          </div>

          <div className="or-sign-in-using-wrapper">
            or continue with
          </div>
          <div className="frame-2">
            <img className="ellipse" alt="Ellipse" src={googleIcon} />
            {/* <img className="img" alt="Ellipse" src={} /> */}
          </div>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default LogIn
