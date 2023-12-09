import React from 'react';
import './signup_tab_third.css';
import authServices from '@/services/authServices'
const SignUpTabThird = ({ setTab, signUpPayload, setSignUpPayload, onSignUp}) => {

  const signin = () => {
    var data = {
      account_name: signUpPayload.userName,
      password: signUpPayload.userPassword,
      profile_name: signUpPayload.realName,
      phone_number: signUpPayload.phone,
      nationality: signUpPayload.country,
      user_type: 1,
      email: signUpPayload.email,
      avt_url: "https://imgur.com/gallery/ApNKGxs",
      social_link: "https://imgur.com/gallery/ApNKGxs",
    };

    // console.log(data)
    authServices.signup(data)
      .then(response => {
        if(response.status == 200)
        {
          console.log("Sign up successfully")
          
        }
      })
      .catch(e => {
        console.log(e);
      });
  }


  const handleEnterClick = () => {
    signin();
    onSignUp();
  };

  return (
    <div className="info-field">
      <div className="input-container">
        <label htmlFor="inputUsername" className="form-label">
          CODE
        </label>
        <input
          id="inputUsername"
          type="text"
          name='code'
          className="form-control"
          placeholder="Enter code we send to your phone number..."
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <button onClick={() => setTab(2)} className="sign-up-button row">
        <div className="div-wrapper-b">
          <div className="text-wrapper-2">Back</div>
        </div>
      </button>
      <button onClick={() => {handleEnterClick()}} className="sign-up-button row">
        <div className="div-wrapper-n">
          <div className="text-wrapper-2-n">Enter</div>
        </div>
      </button>
    </div>
  );
};

export default SignUpTabThird;
