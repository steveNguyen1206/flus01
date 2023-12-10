import React from 'react';
import './signup_tab_second.css';
import googleIcon from '../../assets/SocialIcon/google.png';
import { useState } from 'react';
import smsServices from '@/services/smsServices';

const isValidEmail = (email) => {
  return email.includes('@');
};

const isValidPhone = (phone) => {
  return phone.length >= 10;
};

const SignUpTabSecond = ({ setTab, signUpPayload, setSignUpPayload }) => {
  const handleChange = (event) => {
    setSignUpPayload({
      ...signUpPayload,
      [event.target.name]: event.target.value,
    });
  };

  const [error, setError] = useState({
    email: '',
    phone: '',
    realName: '',
    nationality: '',
  });

  const isValidForm = () => {
    const errors = {
      email: isValidEmail(signUpPayload.email) ? '' : 'Invalid email address.',
      phone: isValidPhone(signUpPayload.phone) ? '' : 'Invalid phone number.',
      realName: signUpPayload.realName ? '' : "User's name is required.",
      nationality: signUpPayload.nationality ? '' : 'nationality is required.',
    };
    setError(errors);
    return !Object.values(errors).some((error) => error !== '');
  };

  
  let data = {
    phone_number: signUpPayload.phone,
  }

  const handleVerifyClick = () => {
    if (isValidForm()) {
      setTab(3);
      smsServices
        .sendCode(data)
        .then((response) => {
          if (response.status == 200) {
            console.log('Send SMS successfully');
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log('Form is not valid. Please check the errors.');
    }
  };

  return (
    <div className="info-field">
      <div className="input-container">
        <label htmlFor="inputEmail" className="form-label">
          Email
        </label>
        <input
          id="inputEmail"
          type="text"
          className="form-control"
          name="email"
          value={signUpPayload.email}
          onChange={handleChange}
        />
        <div className="error-message">{error.email}</div>
      </div>
      <div className="input-container">
        <label htmlFor="inputPhone" className="form-label">
          Phone number
        </label>
        <input
          type="text"
          id="inputPhone"
          name="phone"
          className="form-control"
          aria-describedby="passwordHelpBlock"
          value={signUpPayload.phone}
          onChange={handleChange}
        />
        <div className="error-message">{error.phone}</div>
      </div>
      <div className="input-container">
        <label htmlFor="inputName" className="form-label">
          User's Name
        </label>
        <input
          type="text"
          id="inputName"
          className="form-control"
          name="realName"
          aria-describedby="passwordHelpBlock"
          value={signUpPayload.realName}
          onChange={handleChange}
        />
        <div className="error-message">{error.realName}</div>
      </div>
      <div className="row input-container">
        <div className="col">
          <div className="input-container-1">
            <label htmlFor="inputnationality" className="form-label">
              Nationality
            </label>
            <input
              type="text"
              name="nationality"
              id="inputnationality"
              className="form-control"
              value={signUpPayload.nationality}
              aria-describedby="passwordHelpBlock"
              onChange={handleChange}
            />
            <div className="error-message">{error.nationality}</div>
          </div>
        </div>
      </div>

      <button onClick={handleVerifyClick} className="sign-up-button">
        <div className="div-wrapper">
          <div className="text-wrapper-2">Verify</div>
        </div>
      </button>
    </div>
  );
};

export default SignUpTabSecond;
