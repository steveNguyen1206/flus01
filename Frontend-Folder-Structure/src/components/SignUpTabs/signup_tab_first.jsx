import React from "react";
import './signup_tab_first.css'
import googleIcon from '../../assets/SocialIcon/google.png'

const signUpTabFirst = () => {
    return(
      <div className='info-field'>
        <div className="input-container">
          <label for="inputUsername" class="form-label">Username</label>
          <input id="inputUsername" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-container">
          <label for="inputPassword5" class="form-label">Password</label>
          <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
        </div>
        <div className="input-container">
          <label for="inputPassword6" class="form-label">Reconfirm Password</label>
          <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpBlock"/>
        </div>

        <div className="sign-up-button">
          <div className="div-wrapper">
            <div className="text-wrapper-2">Sign up</div>
          </div>
        </div>

        <div className="or-sign-up-using-wrapper">
          or continue with
        </div>
        <div className="frame-2">
          <img className="ellipse" alt="Ellipse" src={googleIcon} />
          {/* <img className="img" alt="Ellipse" src={} /> */}
        </div>
      </div>
    )
}

export default signUpTabFirst;