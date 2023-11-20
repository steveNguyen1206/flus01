import React from 'react';
import Button from '../../components/Button';
import { WhiteButton } from '@/components';

const index = () => {
  return (
    <div className="container">
      <div className="login">
        <div className="header">Login</div>
        <div className="inputs">
          <div className="input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username ..."
            />
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password ..."
            />
          </div>
        </div>

        <div className="btn-login">
          <WhiteButton />
        </div>

        <div className="social-login">
          <div className="social-login-title">Or login with</div>
          <button>Facebook</button>
          <button>Linkedin</button>
          <button>Google</button>
        </div>
      </div>
    </div>
  );
};

export default index;
