import React from "react";
import './signup_tab_second.css'
import googleIcon from '../../assets/SocialIcon/google.png'

const signUpTabSecond = () => {
    return(
      <div className='info-field'>
        <div className="input-container">
          <label for="inputEmail" class="form-label">Email</label>
          <input id="inputEmail" type="text" class="form-control"/>
        </div>
        <div className="input-container">
          <label for="inputPhone" class="form-label">Phone number</label>
          <input type="text" id="inputPhone" class="form-control" aria-describedby="passwordHelpBlock"/>
        </div>
        <div className="input-container">
          <label for="inputName" class="form-label">User's Name</label>
          <input type="text" id="inputName" class="form-control" aria-describedby="passwordHelpBlock"/>
        </div>
        <div className="row input-container">
            <div className="col">
                <div className="input-container-1">
                    <label for="inputCountry" class="form-label">Country</label>
                    <input type="text" id="inputCountry" class="form-control" aria-describedby="passwordHelpBlock"/>
                </div>
            </div>
            
            <div className="col">
                <div className="input-container-1">
                    <label for="inputCountry" class="form-label">Province/City</label>
                    <input type="text" id="inputCountry" class="form-control" aria-describedby="passwordHelpBlock"/>
                </div>
            </div>

        </div>
        

        <div className="sign-up-button">
          <div className="div-wrapper">
            <div className="text-wrapper-2">Verify</div>
          </div>
        </div>
      </div>
    )
}

export default signUpTabSecond;