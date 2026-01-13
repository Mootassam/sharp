import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom'
import { i18n } from '../../../i18n';
import I18nSelect from 'src/view/layout/I18nSelect';
const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('images/Login/getstarted.jpg');
    background-repeat: no-repeat;
    background-size:cover;
  }
`;
function Cover() {
  const [show, setShow] = useState(false)

  return (
    <>
     <div className="icon__images" onClick={() => setShow(!show)}>
          <i className="fa-solid fa-language awesome"></i>
        </div>
      {show && <div className="choose__language">
        <div className="close__translate" onClick={() => setShow(false)}>
          <i className="fa-solid fa-close">
          </i>

        </div>
        <div className="list__language">
          <I18nSelect />

        </div>
      </div>}
      <GlobalStyle />
      <div className="cover__page">
        <div className="auth__header">
          <img src="/images/Login/logo.svg" alt="" className="non-scrolled-logo" width="180" />
          <h1 className="auth__title"> {i18n('text.welcome')}!</h1>
          <span className='auth__description'>{i18n('text.discover')}!</span>
        </div>
        <div className="auth__bottom ">
          <Link to="/auth/signin" className="remove__ligne auth__button">

            <span>{i18n('buttons.getstarted')}</span>

          </Link>
        </div>
      </div>
    </>
  );
}

export default Cover;
