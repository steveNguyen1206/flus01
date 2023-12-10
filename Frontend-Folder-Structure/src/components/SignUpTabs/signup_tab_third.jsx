import React from 'react';
import './signup_tab_third.css';
import authServices from '@/services/authServices';
import smsServices from '@/services/smsServices';

const SignUpTabThird = ({
  setTab,
  signUpPayload,
  setSignUpPayload,
  onSignUp,
}) => {
  const signin = () => {
    var data = {
      account_name: signUpPayload.userName,
      password: signUpPayload.userPassword,
      profile_name: signUpPayload.realName,
      phone_number: signUpPayload.phone,
      nationality: signUpPayload.country,
      user_type: 1,
      email: signUpPayload.email,
      avt_url: 'https://imgur.com/gallery/ApNKGxs',
      social_link: 'https://imgur.com/gallery/ApNKGxs',
    };

    authServices
      .signup(data)
      .then((response) => {
        if (response.status == 200) {
          console.log('Sign up successfully');
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  let data2 = {
    phone_number: signUpPayload.phone,
    code: signUpPayload.code,
  };

  const handleEnterClick = () => {
    smsServices
      .verifyCode(data2)
      .then((response) => {
        if (response.status == 200) {
          console.log('Verify code successfully');
          // document.cookie = `accessToken=${response.data.accessToken}; path=/`;
          signin();
          onSignUp();
        }
      })
      .catch((e) => {
        console.log(e);
      });
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
          name="code"
          className="form-control"
          placeholder="Enter code we send to your phone number..."
          aria-label="Username"
          value={signUpPayload.code}
          onChange={(e) =>
            setSignUpPayload({ ...signUpPayload, code: e.target.value })
          }
          aria-describedby="basic-addon1"
        />
      </div>

      <button onClick={() => setTab(2)} className="sign-up-button row">
        <div className="div-wrapper-b">
          <div className="text-wrapper-2">Back</div>
        </div>
      </button>
      <button
        onClick={() => {
          handleEnterClick();
        }}
        className="sign-up-button row"
      >
        <div className="div-wrapper-n">
          <div className="text-wrapper-2-n">Enter</div>
        </div>
      </button>
    </div>
  );
};

export default SignUpTabThird;
