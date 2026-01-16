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
import categoryService from "src/modules/category/categoryService";

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
  const [showCustomerSupport, setShowCustomerSupport] = useState(false);
  const [customerSupportData, setCustomerSupportData] = useState([]);
  const [supportLoading, setSupportLoading] = useState(true);
  const loading = useSelector(selectors.selectLoading);

  const [initialValues] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });

  const fetchCustomerSupport = async () => {
    try {
      setSupportLoading(true);
      const response = await categoryService.online();
      console.log("Customer support data:", response.rows);
      setCustomerSupportData(response.rows || []);
    } catch (error) {
      console.error("Error fetching customer support:", error);
      setCustomerSupportData([]);
    } finally {
      setSupportLoading(false);
    }
  };

  useEffect(() => {
    dispatch(actions.doClearErrorMessage());
    fetchCustomerSupport();
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

  const getContactIcon = (type) => {
    switch(type?.toLowerCase()) {
      case 'whatsapp': return 'fab fa-whatsapp';
      case 'phone': return 'fas fa-phone';
      case 'email': return 'fas fa-envelope';
      case 'telegram': return 'fab fa-telegram';
      case 'messenger': return 'fab fa-facebook-messenger';
      default: return 'fas fa-comment-dots';
    }
  };

  const getContactColor = (type) => {
    switch(type?.toLowerCase()) {
      case 'whatsapp': return '#25D366';
      case 'phone': return '#4285F4';
      case 'email': return '#EA4335';
      case 'telegram': return '#0088cc';
      case 'messenger': return '#006AFF';
      default: return '#00C6FF';
    }
  };

  const getContactTypeText = (type) => {
    switch(type?.toLowerCase()) {
      case 'whatsapp': return 'WhatsApp';
      case 'phone': return 'Phone Call';
      case 'email': return 'Email';
      case 'telegram': return 'Telegram';
      case 'messenger': return 'Messenger';
      default: return 'Contact';
    }
  };

  const handleContactClick = (type, number) => {
    if (type?.toLowerCase() === 'whatsapp') {
      window.open(`https://wa.me/${number}`, '_blank');
    } else if (type?.toLowerCase() === 'phone') {
      window.location.href = `tel:${number}`;
    } else if (type?.toLowerCase() === 'email') {
      window.location.href = `mailto:${number}`;
    }
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
          
          /* Customer Support Styles */
          .customer-support-container {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 1000;
          }
          
          .support-button {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg, #00c6ff, #0072ff);
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(0, 198, 255, 0.4);
            position: relative;
          }
          
          .support-button:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 25px rgba(0, 198, 255, 0.6);
          }
          
          .support-button.pulse::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: inherit;
            animation: pulse 2s infinite;
            z-index: -1;
          }
          
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(1.5); opacity: 0; }
          }
          
          .support-panel {
            position: absolute;
            bottom: 70px;
            right: 0;
            width: 350px;
            background: rgba(10, 28, 58, 0.98);
            backdrop-filter: blur(15px);
            border-radius: 15px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 0;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
            animation: slideUp 0.3s ease;
            overflow: hidden;
          }
          
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .support-header {
            background: rgba(0, 0, 0, 0.2);
            padding: 20px;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .support-header h3 {
            color: white;
            font-size: 1.2rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin: 0;
          }
          
          .support-header h3 i {
            color: #00c6ff;
          }
          
          .contacts-list {
            max-height: 400px;
            overflow-y: auto;
            padding: 15px;
          }
          
          .contacts-list::-webkit-scrollbar {
            width: 5px;
          }
          
          .contacts-list::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
          }
          
          .contacts-list::-webkit-scrollbar-thumb {
            background: rgba(0, 198, 255, 0.3);
            border-radius: 10px;
          }
          
          .contact-item {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 15px;
            margin-bottom: 12px;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .contact-item:hover {
            background: rgba(255, 255, 255, 0.08);
            transform: translateY(-2px);
            border-color: rgba(0, 198, 255, 0.3);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }
          
          .contact-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #00c6ff, #0072ff);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: white;
            margin-right: 15px;
            flex-shrink: 0;
            overflow: hidden;
            border: 2px solid rgba(255, 255, 255, 0.2);
          }
          
          .contact-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          .contact-details {
            flex: 1;
            min-width: 0;
          }
          
          .contact-name {
            color: white;
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 5px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .contact-info {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 5px;
          }
          
          .contact-type {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 0.8rem;
            padding: 3px 8px;
            border-radius: 20px;
            color: white;
            font-weight: 500;
          }
          
          .contact-number {
            color: rgba(255, 255, 255, 0.9);
            font-size: 0.9rem;
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .contact-action {
            color: rgba(255, 255, 255, 0.5);
            font-size: 1rem;
            transition: all 0.3s;
            margin-left: 10px;
            padding: 5px;
            border-radius: 5px;
            background: rgba(255, 255, 255, 0.05);
          }
          
          .contact-item:hover .contact-action {
            color: white;
            background: rgba(255, 255, 255, 0.1);
            transform: translateX(2px);
          }
          
          .support-loading {
            text-align: center;
            padding: 40px 20px;
            color: rgba(255, 255, 255, 0.7);
          }
          
          .support-loading i {
            margin-bottom: 10px;
            display: block;
          }
          
          .support-empty {
            text-align: center;
            padding: 40px 20px;
            color: rgba(255, 255, 255, 0.5);
            font-style: italic;
          }
          
          .support-empty i {
            margin-bottom: 10px;
            display: block;
            font-size: 2rem;
            opacity: 0.5;
          }
          
          .close-panel {
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            color: rgba(255, 255, 255, 0.7);
            cursor: pointer;
            font-size: 0.9rem;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .close-panel:hover {
            color: white;
            background: rgba(255, 255, 255, 0.2);
            transform: rotate(90deg);
          }
          
          .contact-status {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.6);
            display: flex;
            align-items: center;
            gap: 5px;
          }
          
          .status-indicator {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            display: inline-block;
          }
          
          .status-online {
            background-color: #25D366;
            box-shadow: 0 0 5px #25D366;
          }
          
          .status-offline {
            background-color: #ff416c;
          }
          
          .support-footer {
            text-align: center;
            padding: 15px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.5);
            background: rgba(0, 0, 0, 0.2);
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
            
            .customer-support-container {
              bottom: 20px;
              right: 20px;
            }
            
            .support-panel {
              width: 300px;
              right: -10px;
            }
            
            .contact-item {
              padding: 12px;
            }
            
            .contact-avatar {
              width: 45px;
              height: 45px;
              font-size: 1.2rem;
            }
          }
        `}
      </style>

      <div className="cinema-signin">
        {/* Customer Support Widget */}
        <div className="customer-support-container">
          <button 
            className={`support-button ${showCustomerSupport ? 'active' : 'pulse'}`}
            onClick={() => setShowCustomerSupport(!showCustomerSupport)}
            title="Customer Support"
          >
            <i className="fas fa-headset"></i>
          </button>
          
          {showCustomerSupport && (
            <div className="support-panel">
              <button 
                className="close-panel"
                onClick={() => setShowCustomerSupport(false)}
              >
                <i className="fas fa-times"></i>
              </button>
              
              <div className="support-header">
                <h3>
                  <i className="fas fa-headset"></i>
                  Customer Support
                </h3>
              </div>
              
              <div className="contacts-list">
                {supportLoading ? (
                  <div className="support-loading">
                    <i className="fas fa-spinner fa-spin"></i>
                    <div>Loading contacts...</div>
                  </div>
                ) : customerSupportData.length > 0 ? (
                  customerSupportData.map((contact, index) => (
                    <div 
                      key={contact.id || index}
                      className="contact-item"
                      onClick={() => handleContactClick(contact.type, contact.number)}
                    >
                      <div className="contact-avatar">
                        {contact.photo?.[0]?.downloadUrl ? (
                          <img 
                            src={contact.photo[0].downloadUrl} 
                            alt={contact.name} 
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = '<i class="fas fa-user-circle"></i>';
                            }}
                          />
                        ) : (
                          <i className="fas fa-user-circle"></i>
                        )}
                      </div>
                      
                      <div className="contact-details">
                        <div className="contact-name">{contact.name}</div>
                        
                        <div className="contact-info">
                          <div 
                            className="contact-type"
                            style={{ backgroundColor: getContactColor(contact.type) }}
                          >
                            <i className={getContactIcon(contact.type)}></i>
                            <span>{getContactTypeText(contact.type)}</span>
                          </div>
                        </div>
                        
                        
                      </div>
                      
                      <div className="contact-action">
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="support-empty">
                    <i className="fas fa-comment-slash"></i>
                    <div>No support contacts available</div>
                  </div>
                )}
              </div>
              
              <div className="support-footer">
                Click on any contact to get immediate support
              </div>
            </div>
          )}
        </div>

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