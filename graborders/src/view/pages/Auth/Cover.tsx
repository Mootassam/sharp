import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {Link} from 'react-router-dom'
const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('images/Login/background.jpg');
    background-repeat: no-repeat;
    background-size:cover;
  }
`;

const navigateToLogin = ()=> {
  
}

function Cover() {
  return (
    <>
      <GlobalStyle />
      <div className="cover__page">
        <div className="auth__header">
          <img src="/images/Login/logo.svg" alt="" className="non-scrolled-logo" width="180" />
          <h1 className="auth__title"> Welcome!</h1>
          <span className='auth__description'>Discover exclusive offers just for you!</span>
        </div>
        <div className="auth__bottom ">
        <Link to="/auth/signin" className="remove__ligne auth__button">
      
            <span>Get Started</span>

          </Link>
        </div>
      </div>
    </>
  );
}

export default Cover;
