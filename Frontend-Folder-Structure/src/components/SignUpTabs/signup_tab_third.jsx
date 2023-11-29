import React from "react";
import './signup_tab_third.css'

const signUpTabThird = () => {
    return(
      <div className='info-field'>
        <div className="input-container">
          <label for="inputUsername" class="form-label">CODE</label>
          <input id="inputUsername" type="text" class="form-control" placeholder="Enter code we send to your phone number..." aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        

        <div className="sign-up-button row">
          <div className="div-wrapper-b">
            <div className="text-wrapper-2">Back</div>
          </div>
          <div className="div-wrapper-n ">
            <div className="text-wrapper-2-n">Enter</div>
          </div>
        </div>
      </div>
    )
}

export default signUpTabThird;