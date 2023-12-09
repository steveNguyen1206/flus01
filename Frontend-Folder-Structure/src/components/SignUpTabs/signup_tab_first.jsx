import React from 'react';
import './signup_tab_first.css';
import googleIcon from '../../assets/SocialIcon/google.png';
import { useState } from 'react';

const isValidPassword = (password) => {
  return password.length >= 8;
};

const verifyPassword = (password, confirmPassword) => {
  return password === confirmPassword;
};

const signUpTabFirst = ({ setTab, signUpPayload, setSignUpPayload }) => {
  const handleChange = (event) => {
    setSignUpPayload({
      ...signUpPayload,
      [event.target.name]: event.target.value,
    });
  };

  const [error, setError] = useState({
    userName: '',
    userPassword: '',
    confirmPassword: '',
  });

  const isValidForm = () => {
    const errors = {
      userName: signUpPayload.userName ? '' : 'Username is required.',
      userPassword: isValidPassword(signUpPayload.userPassword)
        ? ''
        : 'Password must be at least 8 characters.',
      confirmPassword: verifyPassword(
        signUpPayload.userPassword,
        signUpPayload.confirmPassword
      )
        ? ''
        : 'Passwords do not match.',
    };
    setError(errors);
    return !Object.values(errors).some((error) => error !== '');
  };

  const handleSignUpClick = () => {
    if (isValidForm()) {
      setTab(2);
    } else {
      console.log('Form is not valid. Please check the errors.');
    }
  };

  return (
    <div className="info-field">
      <div className="input-container">
        <label for="inputUsername" class="form-label">
          Username
        </label>
        <input
          id="inputUsername"
          type="text"
          name="userName"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          value={signUpPayload.userName}
          aria-describedby="basic-addon1"
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <label for="inputPassword5" class="form-label">
          Password
        </label>
        <input
          type="password"
          name="userPassword"
          id="inputPassword5"
          value={signUpPayload.userPassword}
          class="form-control"
          aria-describedby="passwordHelpBlock"
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <label for="inputPassword6" class="form-label">
          Reconfirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="inputPassword6"
          value={signUpPayload.confirmPassword}
          class="form-control"
          aria-describedby="passwordHelpBlock"
          onChange={handleChange}
        />
      </div>

      <button onClick={handleSignUpClick} className="sign-up-button">
        <div className="div-wrapper">
          <div className="text-wrapper-2">Sign up</div>
        </div>
      </button>

      <div className="or-sign-up-using-wrapper">or continue with</div>
      <div className="frame-2">
        <img className="ellipse" alt="Ellipse" src={googleIcon} />
        {/* <img className="img" alt="Ellipse" src={} /> */}
      </div>
    </div>
  );
};

export default signUpTabFirst;
