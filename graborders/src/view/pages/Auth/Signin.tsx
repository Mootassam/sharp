import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/auth/authActions";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import { i18n } from "../../../i18n";
import { yupResolver } from "@hookform/resolvers/yup";
import InputFormItem from "src/shared/form/InputFormItem";
import selectors from "src/modules/auth/authSelectors";
import ButtonIcon from "src/shared/ButtonIcon";
import I18nSelect from 'src/view/layout/I18nSelect';

const schema = yup.object().shape({
  email: yupFormSchemas.string(i18n("inputs.username"), {
    required: true,
  }),
  password: yupFormSchemas.string(i18n("inputs.password"), {
    required: true,
  }),
  rememberMe: yupFormSchemas.boolean(i18n("inputs.rememberMe")),
});

function Signin() {
  const dispatch = useDispatch();
  const [showLanguage, setShowLanguage] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const loading = useSelector(selectors.selectLoading);
  
  const [initialValues] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });

  useEffect(() => {
    dispatch(actions.doClearErrorMessage());
  }, [dispatch]);

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValues,
  });

  const externalErrorMessage = useSelector(selectors.selectErrorMessage);
  
  const onSubmit = ({ email, password, rememberMe }) => {
    dispatch(actions.doSigninWithEmailAndPassword(email, password, rememberMe));
  };

  return (
    <>
      <style>
        {`
          @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          .cinema-signin {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            min-height: 100vh;
            background: radial-gradient(circle at top, #0a1c3a, #051122);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            position: relative;
            overflow: hidden;
          }
          
          .cinema-signin::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 300px;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 0%, transparent 100%);
            pointer-events: none;
          }
          
          .cinema-signin::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 200px;
            background: linear-gradient(to top, rgba(0, 198, 255, 0.05) 0%, transparent 100%);
            pointer-events: none;
          }
          
          .login-container {
            width: 100%;
            max-width: 450px;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
            overflow: hidden;
            position: relative;
            z-index: 10;
          }
          
          .login-header {
            position: relative;
            height: 180px;
            overflow: hidden;
          }
          
          .login-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.8) 100%);
            z-index: 1;
          }
          
          .login-header img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(0.7);
          }
          
          .logo-section {
            position: absolute;
            top: 20px;
            left: 20px;
            z-index: 2;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          
          .logo-section img {
            height: 26px;
            filter: brightness(1);
                object-position: left;
          }
          
          .logo-section h1 {
            color: white;
            font-size: 1.5rem;
            font-weight: 700;
            letter-spacing: 1px;
          }
          
          .header-content {
            position: absolute;
            bottom: 30px;
            left: 0;
            right: 0;
            text-align: center;
            z-index: 2;
          }
          
          .header-content h2 {
            color: white;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 5px;
            letter-spacing: 1px;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
          }
          
          .header-content p {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;
          }
          
          .language-toggle {
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 2;
          }
          
          .language-btn {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 1.1rem;
          }
          
          .language-btn:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.05);
          }
          
          .language-dropdown {
            position: absolute;
            top: 50px;
            right: 0;
            background: rgba(10, 28, 58, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 15px;
            min-width: 200px;
            z-index: 100;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }
          
          .language-close {
            position: absolute;
            top: 10px;
            right: 10px;
            color: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: color 0.3s;
            background: none;
            border: none;
            font-size: 1rem;
          }
          
          .language-close:hover {
            color: white;
          }
          
          .login-form {
            padding: 40px 30px 30px;
          }
          
          .form-group {
            margin-bottom: 25px;
            position: relative;
          }
          
          .input-wrapper {
            position: relative;
          }
          
          .auth-input {
            width: 100%;
            padding: 15px 45px 15px 15px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 10px;
            color: white;
            font-size: 1rem;
            transition: all 0.3s;
          }
          
          .auth-input:focus {
            outline: none;
            border-color: #00c6ff;
            box-shadow: 0 0 0 2px rgba(0, 198, 255, 0.1);
            background: rgba(255, 255, 255, 0.08);
          }
          
          .input-icon {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: rgba(255, 255, 255, 0.5);
            font-size: 1rem;
          }
          
          .password-toggle {
            cursor: pointer;
            transition: color 0.3s;
          }
          
          .password-toggle:hover {
            color: #00c6ff;
          }
          
          .login-button {
            width: 100%;
            padding: 16px;
            background: linear-gradient(135deg, #0068c8, #00c6ff);
            border: none;
            border-radius: 10px;
            color: white;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            letter-spacing: 0.5px;
            margin-bottom: 25px;
          }
          
          .login-button:hover:not(:disabled) {
            background: linear-gradient(135deg, #005bb5, #00b8ff);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 104, 200, 0.3);
          }
          
          .login-button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
          
          .register-link {
            text-align: center;
            margin-top: 20px;
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            display: block;
            transition: color 0.3s;
          }
          
          .register-link:hover {
            color: white;
          }
          
          .register-text {
            font-size: 0.9rem;
          }
          
          .register-now {
            color: #00c6ff;
            font-weight: 600;
            margin-left: 5px;
          }
          
          .cinema-effects {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            z-index: 1;
          }
          
          .light-beam {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 400px;
            height: 400px;
            background: radial-gradient(ellipse at center, rgba(0, 198, 255, 0.1) 0%, transparent 70%);
          }
          
          .particles {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
          
          .particle {
            position: absolute;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          .movie-reel {
            position: absolute;
            font-size: 3rem;
            color: rgba(255, 255, 255, 0.05);
            animation: float 10s ease-in-out infinite;
          }
          
          .reel-1 { top: 10%; left: 10%; animation-delay: 0s; }
          .reel-2 { top: 20%; right: 15%; animation-delay: 2s; }
          .reel-3 { bottom: 30%; left: 15%; animation-delay: 4s; }
          
          .cinema-tagline {
            text-align: center;
            color: rgba(255, 255, 255, 0.5);
            font-size: 0.8rem;
            margin-top: 30px;
            font-style: italic;
            letter-spacing: 1px;
          }
          
          .error-message {
            color: #ff416c;
            font-size: 0.85rem;
            margin-top: 5px;
            text-align: center;
            background: rgba(255, 65, 108, 0.1);
            padding: 8px;
            border-radius: 5px;
            border: 1px solid rgba(255, 65, 108, 0.3);
          }
          
          @media (max-width: 480px) {
            .login-container {
              max-width: 100%;
              margin: 10px;
            }
            
            .login-form {
              padding: 30px 20px 20px;
            }
            
            .header-content h2 {
              font-size: 1.7rem;
            }
          }
        `}
      </style>

      <div className="cinema-signin">
        {/* Cinema Effects */}
        <div className="cinema-effects">
          <div className="light-beam"></div>
          <div className="movie-reel reel-1">🎬</div>
          <div className="movie-reel reel-2">🎥</div>
          <div className="movie-reel reel-3">🍿</div>
        </div>
        
        {/* Login Container */}
        <div className="login-container">
          {/* Header with Cinema Theme */}
          <div className="login-header">
            <img 
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1525&q=80" 
              alt="Cinema Background" 
              loading="lazy"
            />
            <div className="logo-section">
              <img src="/images/Login/logo.svg" alt="Cinema Logo" />
            </div>
            <div className="header-content">
              <h2>{i18n("text.signin")}</h2>
              <p>Welcome back to the ultimate movie experience</p>
            </div>
            
            {/* Language Selector */}
            <div className="language-toggle">
              <Link 
                className="language-btn" 
                to="/languages"
                title="Select Language"
              >
                <i className="fas fa-globe"></i>
              </Link>
              
   
     
            </div>
          </div>
          
          {/* Login Form */}
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="login-form">
              {/* Display Error Message */}
              {externalErrorMessage && (
                <div className="error-message">
                  <i className="fas fa-exclamation-circle"></i> {externalErrorMessage}
                </div>
              )}
              
              <div className="form-group">
                <div className="input-wrapper">
                  <InputFormItem
                    name="email"
                    placeholder={i18n("inputs.username")}
                    className="auth-input"
                    externalErrorMessage={externalErrorMessage}
                  />
                  <span className="input-icon">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-wrapper">
                  <InputFormItem
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    placeholder={i18n("inputs.password")}
                    className="auth-input"
                  />
                  <span 
                    className="input-icon password-toggle"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  >
                    <i className={`fas ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </span>
                </div>
              </div>
              
              <button className="login-button" disabled={loading} type="submit">
                <ButtonIcon loading={loading} />
                <span>{i18n("buttons.login")}</span>
              </button>
              
              <Link to="/auth/signup" className="register-link">
                <span className="register-text">{i18n("text.noaccount")}?</span>
                <span className="register-now">{i18n("buttons.registerNow")}</span>
              </Link>
              
              <div className="cinema-tagline">
                <i className="fas fa-film"></i> Unlimited Movies, One Login
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
}

export default Signin;