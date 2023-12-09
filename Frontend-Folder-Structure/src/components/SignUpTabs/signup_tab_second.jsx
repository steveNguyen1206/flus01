import React from 'react';
import './signup_tab_second.css';
import googleIcon from '../../assets/SocialIcon/google.png';
import { useState } from 'react';

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
    country: '',
    city: '',
  });

  const isValidForm = () => {
    const errors = {
      email: isValidEmail(signUpPayload.email) ? '' : 'Invalid email address.',
      phone: isValidPhone(signUpPayload.phone) ? '' : 'Invalid phone number.',
      realName: signUpPayload.realName ? '' : 'User\'s name is required.',
      country: signUpPayload.country ? '' : 'Country is required.',
      city: signUpPayload.city ? '' : 'Province/City is required.',
    };
    setError(errors);
    return !Object.values(errors).some((error) => error !== '');
  };

  const handleVerifyClick = () => {
    if (isValidForm()) {
      setTab(3);
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
            <label htmlFor="inputCountry" className="form-label">
              Country
            </label>
            <input
              type="text"
              name="country"
              id="inputCountry"
              className="form-control"
              value={signUpPayload.country}
              aria-describedby="passwordHelpBlock"
              onChange={handleChange}
            />
            <div className="error-message">{error.country}</div>
          </div>
        </div>

        <div className="col">
          <div className="input-container-1">
            <label htmlFor="inputCity" className="form-label">
              Province/City
            </label>
            <input
              type="text"
              id="inputCity"
              value={signUpPayload.city}
              className="form-control"
              name="city"
              aria-describedby="passwordHelpBlock"
              onChange={handleChange}
            />
            <div className="error-message">{error.city}</div>
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
