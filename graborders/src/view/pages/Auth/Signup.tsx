import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/auth/authActions";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import { i18n } from "../../../i18n";
import { yupResolver } from "@hookform/resolvers/yup";
import selectors from "src/modules/auth/authSelectors";
import ButtonIcon from "src/shared/ButtonIcon";

const schema = yup.object().shape({
  email: yupFormSchemas.string(i18n("inputs.username"), {
    required: true,
  }),
  password: yupFormSchemas.string(i18n("inputs.password"), {
    required: true,
    min: 6,
  }),
  newPasswordConfirmation: yupFormSchemas
    .string(i18n("inputs.newPasswordConfirmation"), {
      required: true,
    })
    .oneOf([yup.ref("password"), null], i18n("auth.passwordChange.mustMatch")),
  phoneNumber: yupFormSchemas.string(i18n("inputs.phoneNumber"), {
    required: true,
    matches: /^[\d\s\-\+\(\)]+$/,
  }),
  withdrawPassword: yupFormSchemas.string(
    i18n("inputs.withdrawPassword"),
    {
      required: true,
      min: 4,
    }
  ),
  invitationcode: yupFormSchemas.string(i18n("inputs.invitationcode"), {
    required: true,
  }),
});

function Signup() {
  const dispatch = useDispatch();
  const loading = useSelector(selectors.selectLoading);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [withdrawPasswordVisible, setWithdrawPasswordVisible] = useState(false);
  const [formStep, setFormStep] = useState(1);

  // Store form data in state to persist between steps
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    withdrawPassword: "",
    invitationcode: "",
    newPasswordConfirmation: "",
  });

  useEffect(() => {
    dispatch(actions.doClearErrorMessage());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: formData,
  });

  // Sync formData with react-hook-form when formData changes
  useEffect(() => {
    Object.keys(formData).forEach(key => {
      setValue(key, formData[key]);
    });
  }, [formData, setValue]);

  const externalErrorMessage = useSelector(selectors.selectErrorMessage);

  const onSubmit = (data) => {
    // Update formData before submission
    setFormData(data);
    dispatch(
      actions.doRegisterEmailAndPassword(
        data.email,
        data.password,
        data.phoneNumber,
        data.withdrawPassword,
        data.invitationcode
      )
    );
  };

  const handleInputChange = (fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
    setValue(fieldName, value, { shouldValidate: true });
  };

  const nextStep = () => {
    // Get current values from form state
    const currentValues = getValues();
    
    // Update formData with current values
    setFormData(prev => ({
      ...prev,
      ...currentValues
    }));
    
    // Validate only the fields in step 1
    const step1Fields = ['email', 'phoneNumber', 'invitationcode'];
    
    // Check if fields are filled
    const isValid = step1Fields.every(field => 
      currentValues[field] && currentValues[field].trim() !== ''
    );
    
    if (isValid) {
      setFormStep(2);
    } else {
      // Trigger validation for step 1 fields
      trigger(step1Fields);
    }
  };

  const prevStep = () => {
    // Get current values before going back
    const currentValues = getValues();
    setFormData(prev => ({
      ...prev,
      ...currentValues
    }));
    setFormStep(1);
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
          
          .cinema-signup {
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
          
          .cinema-signup::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 300px;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 0%, transparent 100%);
            pointer-events: none;
          }
          
          .signup-container {
            width: 100%;
            max-width: 500px;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
            overflow: hidden;
            position: relative;
            z-index: 10;
          }
          
          .signup-header {
            position: relative;
            height: 160px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, rgba(0, 104, 200, 0.3), rgba(0, 198, 255, 0.2));
          }
          
          .signup-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80');
            background-size: cover;
            background-position: center;
            opacity: 0.2;
          }
          
          .header-content {
            text-align: center;
            position: relative;
            z-index: 2;
          }
          
          .logo-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin-bottom: 15px;
          }
          
          .logo-container img {
            height: 45px;
            filter: brightness(1) drop-shadow(0 2px 4px rgba(0,0,0,0.3));
          }
          
          .logo-container h1 {
            color: white;
            font-size: 2rem;
            font-weight: 700;
            letter-spacing: 2px;
          }
          
          .header-content h2 {
            color: white;
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 5px;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          }
          
          .header-content p {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;
          }
          
          .signup-form {
            padding: 40px 30px 30px;
          }
          
          .form-progress {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 30px;
            gap: 20px;
          }
          
          .progress-step {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
          }
          
          .step-circle {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 0.9rem;
            transition: all 0.3s;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.2);
            color: rgba(255, 255, 255, 0.7);
          }
          
          .step-circle.active {
            background: linear-gradient(135deg, #0068c8, #00c6ff);
            border-color: #00c6ff;
            color: white;
            box-shadow: 0 4px 15px rgba(0, 104, 200, 0.3);
          }
          
          .step-circle.completed {
            background: linear-gradient(135deg, #00b09b, #96c93d);
            border-color: #96c93d;
            color: white;
          }
          
          .step-label {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.6);
            transition: color 0.3s;
            text-align: center;
          }
          
          .step-label.active {
            color: #00c6ff;
            font-weight: 500;
          }
          
          .progress-line {
            flex: 1;
            height: 2px;
            max-width: 50px;
            background: rgba(255, 255, 255, 0.1);
            position: relative;
          }
          
          .form-section {
            animation: fadeIn 0.5s ease;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .form-group {
            margin-bottom: 20px;
          }
          
          .input-with-icon {
            position: relative;
          }
          
          .signup-input {
            width: 100%;
            padding: 14px 45px 14px 14px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 10px;
            color: white;
            font-size: 1rem;
            transition: all 0.3s;
          }
          
          .signup-input:focus {
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
          
          .form-actions {
            display: flex;
            gap: 10px;
            margin-top: 30px;
          }
          
          .back-button {
            width: 50px;
            padding: 12px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            color: rgba(255, 255, 255, 0.7);
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .back-button:hover {
            background: rgba(255, 255, 255, 0.15);
            color: white;
            transform: translateY(-2px);
          }
          
          .next-button {
            flex: 1;
            padding: 14px;
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
            gap: 8px;
            margin:auto;

            margin-top: 30px ;
          }
          
          .next-button:hover:not(:disabled) {
            background: linear-gradient(135deg, #005bb5, #00b8ff);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 104, 200, 0.3);
          }
          
          .submit-button {
            width: 100%;
            padding: 16px;
            background: linear-gradient(135deg, #00b09b, #96c93d);
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
          }
          
          .submit-button:hover:not(:disabled) {
            background: linear-gradient(135deg, #00a18e, #88c437);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(150, 201, 61, 0.3);
          }
          
          .submit-button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
          
          .login-link {
            text-align: center;
            margin-top: 25px;
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            display: block;
            transition: color 0.3s;
          }
          
          .login-link:hover {
            color: white;
          }
          
          .login-link-text {
            font-size: 0.95rem;
          }
          
          .login-now {
            color: #00c6ff;
            font-weight: 600;
            margin-left: 5px;
          }
          
          .benefits-list {
            margin-top: 25px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .benefits-title {
            font-size: 1rem;
            color: #00c6ff;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          
          .benefit-item {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 12px;
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;
          }
          
          .benefit-icon {
            color: #00c6ff;
            width: 20px;
          }
          
          .password-hint {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.5);
            margin-top: 5px;
            display: block;
          }
          
          .cinema-tagline {
            text-align: center;
            color: rgba(255, 255, 255, 0.5);
            font-size: 0.8rem;
            margin-top: 20px;
            font-style: italic;
          }
          
          .perks-banner {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
            padding: 15px;
            background: linear-gradient(135deg, rgba(0, 104, 200, 0.1), rgba(0, 198, 255, 0.05));
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .perk-item {
            text-align: center;
          }
          
          .perk-icon {
            font-size: 1.5rem;
            margin-bottom: 5px;
            display: block;
          }
          
          .perk-label {
            font-size: 0.7rem;
            color: rgba(255, 255, 255, 0.7);
          }
          
          .field-error {
            color: #ff416c;
            font-size: 0.8rem;
            margin-top: 5px;
            display: block;
          }
          
          @media (max-width: 480px) {
            .signup-container {
              max-width: 100%;
              margin: 10px;
            }
            
            .signup-form {
              padding: 30px 20px 20px;
            }
            
            .step-label {
              font-size: 0.7rem;
            }
            
            .progress-line {
              max-width: 30px;
            }
          }
        `}
      </style>

      <div className="cinema-signup">
        <div className="signup-container">
          {/* Header */}
          <div className="signup-header">
            <div className="header-content">
              <div className="logo-container">
                <img src="/images/Login/logo.svg" alt="Cinema Logo" />
              </div>
              <h2>Join the Ultimate Movie Experience</h2>
              <p>Create your account and start your cinematic journey</p>
            </div>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
            {/* Progress Steps */}
            <div className="form-progress">
              <div className="progress-step">
                <div className={`step-circle ${formStep >= 1 ? 'active' : ''} ${formStep > 1 ? 'completed' : ''}`}>
                  {formStep > 1 ? <i className="fas fa-check"></i> : '1'}
                </div>
                <div className={`step-label ${formStep === 1 ? 'active' : ''}`}>
                  Account Details
                </div>
              </div>
              
              <div className="progress-line"></div>
              
              <div className="progress-step">
                <div className={`step-circle ${formStep === 2 ? 'active' : ''}`}>
                  2
                </div>
                <div className={`step-label ${formStep === 2 ? 'active' : ''}`}>
                  Security
                </div>
              </div>
            </div>
            
            {/* Error Message */}
            {externalErrorMessage && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i> {externalErrorMessage}
              </div>
            )}
            
            {/* Step 1: Account Details */}
            {formStep === 1 && (
              <div className="form-section">
                <div className="form-group">
                  <div className="input-with-icon">
                    <input
                      type="email"
                      {...register("email")}
                      placeholder={i18n("inputs.username") || "Email Address"}
                      className="signup-input"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                    <span className="input-icon">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                  {errors.email && (
                    <span className="field-error">{errors.email.message}</span>
                  )}
                </div>
                
                <div className="form-group">
                  <div className="input-with-icon">
                    <input
                      type="tel"
                      {...register("phoneNumber")}
                      placeholder={i18n("inputs.phoneNumber") || "Phone Number"}
                      className="signup-input"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    />
                    <span className="input-icon">
                      <i className="fas fa-phone"></i>
                    </span>
                  </div>
                  {errors.phoneNumber && (
                    <span className="field-error">{errors.phoneNumber.message}</span>
                  )}
                </div>
                
                <div className="form-group">
                  <div className="input-with-icon">
                    <input
                      type="text"
                      {...register("invitationcode")}
                      placeholder={i18n("inputs.invitationcode") || "Invitation Code"}
                      className="signup-input"
                      value={formData.invitationcode}
                      onChange={(e) => handleInputChange("invitationcode", e.target.value)}
                    />
                    <span className="input-icon">
                      <i className="fas fa-ticket-alt"></i>
                    </span>
                  </div>
                  {errors.invitationcode && (
                    <span className="field-error">{errors.invitationcode.message}</span>
                  )}
                </div>
                
                {/* Perks Banner */}
                <div className="perks-banner">
                  <div className="perk-item">
                    <span className="perk-icon">🎬</span>
                    <div className="perk-label">Free Ticket</div>
                  </div>
                  <div className="perk-item">
                    <span className="perk-icon">🍿</span>
                    <div className="perk-label">Discounts</div>
                  </div>
                  <div className="perk-item">
                    <span className="perk-icon">⭐</span>
                    <div className="perk-label">Rewards</div>
                  </div>
                </div>
                
                <button 
                  type="button" 
                  className="next-button" 
                  onClick={nextStep}
                >
                  Continue <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            )}
            
            {/* Step 2: Security */}
            {formStep === 2 && (
              <div className="form-section">
                <div className="form-group">
                  <div className="input-with-icon">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      {...register("password")}
                      placeholder={i18n("inputs.password") || "Password"}
                      className="signup-input"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                    />
                    <span 
                      className="input-icon password-toggle"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      <i className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </span>
                  </div>
                  {errors.password && (
                    <span className="field-error">{errors.password.message}</span>
                  )}
                  <div className="password-hint">Use at least 6 characters</div>
                </div>
                
                <div className="form-group">
                  <div className="input-with-icon">
                    <input
                      type={confirmPasswordVisible ? "text" : "password"}
                      {...register("newPasswordConfirmation")}
                      placeholder={i18n("inputs.confirmPassword") || "Confirm Password"}
                      className="signup-input"
                      value={formData.newPasswordConfirmation}
                      onChange={(e) => handleInputChange("newPasswordConfirmation", e.target.value)}
                    />
                    <span 
                      className="input-icon password-toggle"
                      onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                    >
                      <i className={`fas ${confirmPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </span>
                  </div>
                  {errors.newPasswordConfirmation && (
                    <span className="field-error">{errors.newPasswordConfirmation.message}</span>
                  )}
                </div>
                
                <div className="form-group">
                  <div className="input-with-icon">
                    <input
                      type={withdrawPasswordVisible ? "text" : "password"}
                      {...register("withdrawPassword")}
                      placeholder={i18n("inputs.withdrawPassword") || "Withdrawal PIN"}
                      className="signup-input"
                      value={formData.withdrawPassword}
                      onChange={(e) => handleInputChange("withdrawPassword", e.target.value)}
                    />
                    <span 
                      className="input-icon password-toggle"
                      onClick={() => setWithdrawPasswordVisible(!withdrawPasswordVisible)}
                    >
                      <i className={`fas ${withdrawPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </span>
                  </div>
                  {errors.withdrawPassword && (
                    <span className="field-error">{errors.withdrawPassword.message}</span>
                  )}
                  <div className="password-hint">4-digit PIN for withdrawals</div>
                </div>
                
                {/* Member Benefits */}
                <div className="benefits-list">
                  <div className="benefits-title">
                    <i className="fas fa-crown"></i>
                    Member Benefits
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-check benefit-icon"></i>
                    <span>Exclusive movie discounts</span>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-check benefit-icon"></i>
                    <span>Early access to tickets</span>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-check benefit-icon"></i>
                    <span>Free popcorn on first booking</span>
                  </div>
                  <div className="benefit-item">
                    <i className="fas fa-check benefit-icon"></i>
                    <span>Loyalty points on every purchase</span>
                  </div>
                </div>
                
                <div className="form-actions">
                  <button 
                    type="button" 
                    className="back-button" 
                    onClick={prevStep}
                  >
                    <i className="fas fa-arrow-left"></i>
                  </button>
                  
                  <button 
                    className="submit-button" 
                    disabled={loading} 
                    type="submit"
                  >
                    <ButtonIcon loading={loading} />
                    <span>{i18n("buttons.signup") || "Create Account"}</span>
                  </button>
                </div>
              </div>
            )}
            
            {/* Login Link */}
            <Link to="/auth/signin" className="login-link">
              <span className="login-link-text">
                Already have an account? 
                <span className="login-now"> Login now</span>
              </span>
            </Link>
            
            <div className="cinema-tagline">
              <i className="fas fa-film"></i> Your cinematic adventure awaits
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;