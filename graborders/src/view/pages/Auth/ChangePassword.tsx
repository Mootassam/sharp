import React, { useState } from "react";
import SubHeader from "src/view/shared/Header/SubHeader";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import * as yup from "yup";
import { i18n } from "../../../i18n";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/auth/authActions";
import InputFormItem from "src/shared/form/InputFormItem";
import selectors from "src/modules/auth/authSelectors";
import ButtonIcon from "src/shared/ButtonIcon";
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  oldPassword: yupFormSchemas.string(i18n("security.oldpassword"), {
    required: true,
  }),
  newPassword: yupFormSchemas.string(i18n("security.newpassword"), {
    required: true,
  }),
  newPasswordConfirmation: yupFormSchemas
    .string(i18n("security.confirmpassword"), {
      required: true,
    })
    .oneOf(
      [yup.ref("newPassword"), null],
      i18n("auth.passwordChange.mustMatch")
    ),
});

function ChangePassword() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [initialValues] = useState(() => ({
    oldPassword: "",
    newPassword: "",
    newPasswordConfirmation: "",
  }));

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: initialValues,
  });

  const saveLoading = useSelector(selectors.selectLoadingPasswordChange);

  const onSubmit = (values) => {
    dispatch(actions.doChangePassword(values.oldPassword, values.newPassword));
  };

  const goBack = () => {
    history.goBack();
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
          
          /* Main Container */
          .change-password-app {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: white;
            background: radial-gradient(circle at center top, #0a1c3a, #051122 800px);
            min-height: 100vh;
            max-width: 430px;
            margin: 0 auto;
            position: relative;
            overflow-x: hidden;
          }
          
          .change-password-container {
            padding: 16px 18px 20px;
          }
          
          /* Header */
          .password-header {
            display: flex;
            align-items: center;
            margin-bottom: 24px;
            padding: 0 4px;
          }
          
          .back-button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #00c6ff;
            text-decoration: none;
            font-size: 0.9rem;
            margin-right: 15px;
            transition: all 0.2s;
            padding: 6px 12px;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            cursor: pointer;
          }
          
          .back-button:hover {
            gap: 10px;
            background: rgba(255, 255, 255, 0.08);
          }
          
          .password-title {
            font-size: 1.3rem;
            font-weight: 700;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          /* Form Container */
          .password-form-container {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(8px);
            overflow: hidden;
            margin-bottom: 20px;
          }
          
          .form-header {
            padding: 16px 20px;
            background: rgba(0, 104, 200, 0.15);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .form-title {
            font-size: 1.1rem;
            font-weight: 600;
            color: white;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          
          .form-title i {
            color: #00c6ff;
          }
          
          .wallet__form {
            padding: 20px;
          }
          
          /* Form Groups */
          .form__group {
            margin-bottom: 20px;
          }
          
          .label__form {
            display: flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 8px;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 500;
          }
          
          .label__form span:first-child {
            color: #ff416c;
            font-weight: bold;
          }
          
          .label__form span:last-child {
            color: rgba(255, 255, 255, 0.9);
            font-size: 0.9rem;
          }
          
          /* Input Fields */
          .input__div {
            position: relative;
          }
          
          .input__ {
            width: 100%;
            padding: 14px 16px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            color: white;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            outline: none;
          }
          
          .input__:focus {
            border-color: #00c6ff;
            background: rgba(0, 198, 255, 0.05);
            box-shadow: 0 0 0 2px rgba(0, 198, 255, 0.1);
          }
          
          .input__::placeholder {
            color: rgba(255, 255, 255, 0.4);
          }
          
          /* Submit Button */
          .confirm {
            width: 100%;
            padding: 16px;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            border: none;
            border-radius: 12px;
            color: white;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }
          
          .confirm:hover {
            background: linear-gradient(135deg, #00d2ff, #0075e6);
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(0, 198, 255, 0.2);
          }
          
          .confirm:active {
            transform: translateY(0);
          }
          
          .confirm:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none !important;
          }
          
          /* Note Section */
          .password-note {
            display: block;
            text-align: center;
            line-height: 1.5;
            padding: 15px;
            background: rgba(255, 65, 108, 0.08);
            border-radius: 10px;
            border: 1px solid rgba(255, 65, 108, 0.15);
            margin-top: 20px;
            font-size: 0.85rem;
          }
          
          .password-note b {
            color: #ff416c;
          }
          
          /* Success/Error Messages */
          .form-message {
            padding: 12px 16px;
            border-radius: 10px;
            margin-bottom: 20px;
            font-size: 0.9rem;
            text-align: center;
          }
          
          .form-message.success {
            background: rgba(76, 175, 80, 0.15);
            border: 1px solid rgba(76, 175, 80, 0.3);
            color: #4caf50;
          }
          
          .form-message.error {
            background: rgba(244, 67, 54, 0.15);
            border: 1px solid rgba(244, 67, 54, 0.3);
            color: #f44336;
          }
          
          /* Form Validation */
          .input__div.error .input__ {
            border-color: #ff416c;
            background: rgba(255, 65, 108, 0.05);
          }
          
          .error-message {
            color: #ff416c;
            font-size: 0.8rem;
            margin-top: 5px;
            padding-left: 5px;
          }
          
          /* Password Strength Indicator */
          .password-strength {
            margin-top: 5px;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
          }
          
          .strength-bar {
            height: 100%;
            transition: all 0.3s ease;
          }
          
          .strength-weak {
            background: #ff416c;
            width: 25%;
          }
          
          .strength-fair {
            background: #ff9a00;
            width: 50%;
          }
          
          .strength-good {
            background: #00c6ff;
            width: 75%;
          }
          
          .strength-strong {
            background: #4caf50;
            width: 100%;
          }
          
          /* Responsive */
          @media (max-width: 430px) {
            .change-password-container {
              padding: 14px 16px 20px;
            }
            
            .wallet__form {
              padding: 18px;
            }
            
            .input__ {
              padding: 12px 14px;
              font-size: 0.9rem;
            }
            
            .confirm {
              padding: 14px;
              font-size: 0.95rem;
            }
            
            .password-note {
              padding: 12px;
              font-size: 0.8rem;
            }
          }
          
          @media (max-width: 380px) {
            .wallet__form {
              padding: 14px;
            }
            
            .form__group {
              margin-bottom: 16px;
            }
            
            .label__form span:last-child {
              font-size: 0.85rem;
            }
          }
          
          /* Loading Button Animation */
          .loading-spinner {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s ease-in-out infinite;
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>

      <div className="change-password-app">
        <div className="change-password-container">
          {/* Header */}
          <div className="password-header">
            <button className="back-button" onClick={goBack}>
              <i className="fas fa-arrow-left"></i>
              {i18n("buttons.back")}
            </button>
            <h1 className="password-title">{i18n("security.changepassword")}</h1>
          </div>

          {/* Password Form */}
          <div className="password-form-container">
            <div className="form-header">
              <div className="form-title">
                <i className="fas fa-lock"></i>
                {i18n("security.passwordsecurity")}
              </div>
            </div>
            
            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="wallet__form">
                  <div className="form__">
                    <div className="form__group">
                      <div className="label__form">
                        <span>*</span>
                        <span>{i18n("security.oldpassword")}</span>
                      </div>
                      <div className="input__div">
                        <InputFormItem
                          type="password"
                          name="oldPassword"
                          autoComplete="current-password"
                          className="input__"
                          placeholder={i18n("security.oldpassword")}
                        />
                      </div>
                    </div>
                    
                    <div className="form__group">
                      <div className="label__form">
                        <span>*</span>
                        <span>{i18n("security.newpassword")}</span>
                      </div>
                      <div className="input__div">
                        <InputFormItem
                          type="password"
                          name="newPassword"
                          autoComplete="new-password"
                          className="input__"
                          placeholder={i18n("security.newpassword")}
                        />
                      </div>
                      {/* Password Strength Indicator (Optional)
                      <div className="password-strength">
                        <div className="strength-bar strength-weak"></div>
                      </div>
                      */}
                    </div>
                    
                    <div className="form__group">
                      <div className="label__form">
                        <span>*</span>
                        <span>{i18n("security.confirmpassword")}</span>
                      </div>
                      <div className="input__div">
                        <InputFormItem
                          type="password"
                          name="newPasswordConfirmation"
                          autoComplete="new-password"
                          className="input__"
                          placeholder={i18n("security.confirmpassword")}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <button
                    className="confirm"
                    disabled={saveLoading}
                    type="submit"
                  >
                    {saveLoading ? (
                      <div className="loading-spinner"></div>
                    ) : (
                      <i className="fas fa-check-circle"></i>
                    )}
                    {i18n("buttons.submit")}
                  </button>
                  
                  <span className="password-note">
                    <b>{i18n("security.note")}:</b> {i18n("security.notedesc")}
                  </span>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;