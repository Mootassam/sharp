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
import selector from "src/modules/auth/authSelectors";
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  erc20: yupFormSchemas.string(i18n("inputs.walletaddress"), {
    required: true,
  }),
});

function Wallet() {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(selector.selectCurrentUser);

  const [initialValues] = useState(() => {
    return {
      erc20: "" || currentUser.erc20,
      walletname: "" || currentUser.walletname,
      usernamewallet: "" || currentUser.usernamewallet,
      balance: currentUser?.balance
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValues,
  });

  const onSubmit = ({ erc20, walletname, usernamewallet }) => {
    const values = {
      erc20: erc20,
      walletname: walletname,
      usernamewallet: usernamewallet,
      balance: currentUser.balance
    };
    dispatch(actions.doUpdateProfile(values));
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
          .wallet-app {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: white;
            background: radial-gradient(circle at center top, #0a1c3a, #051122 800px);
            min-height: 100vh;
            max-width: 430px;
            margin: 0 auto;
            position: relative;
            overflow-x: hidden;
          }
          
          .wallet-container {
            padding: 16px 18px 20px;
          }
          
          /* Header */
          .wallet-header {
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
          
          .wallet-title {
            font-size: 1.3rem;
            font-weight: 700;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          /* Balance Card */
          .balance-card {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 16px;
            padding: 20px;
            margin-bottom: 20px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(8px);
            text-align: center;
          }
          
          .balance-label {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.65);
            margin-bottom: 8px;
            display: block;
          }
          
          .balance-amount {
            font-size: 2rem;
            font-weight: 800;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.2;
          }
          
          .balance-currency {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.5);
            margin-top: 4px;
          }
          
          /* Wallet Form */
          .wallet-form-container {
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
          
          .wallet-form {
            padding: 20px;
          }
          
          /* Form Groups */
          .form-group {
            margin-bottom: 20px;
          }
          
          .form-label {
            display: flex;
            align-items: center;
            gap: 5px;
            margin-bottom: 8px;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 500;
          }
          
          .form-label span:first-child {
            color: #ff416c;
            font-weight: bold;
          }
          
          .form-label span:last-child {
            color: rgba(255, 255, 255, 0.9);
            font-size: 0.9rem;
          }
          
          /* Input Fields */
          .input-container {
            position: relative;
          }
          
          .wallet-input {
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
          
          .wallet-input:focus {
            border-color: #00c6ff;
            background: rgba(0, 198, 255, 0.05);
            box-shadow: 0 0 0 2px rgba(0, 198, 255, 0.1);
          }
          
          .wallet-input::placeholder {
            color: rgba(255, 255, 255, 0.4);
          }
          
          /* Submit Button */
          .submit-button {
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
          
          .submit-button:hover {
            background: linear-gradient(135deg, #00d2ff, #0075e6);
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(0, 198, 255, 0.2);
          }
          
          .submit-button:active {
            transform: translateY(0);
          }
          
          .submit-button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none !important;
          }
          
          /* Note Section */
          .wallet-note {
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
          
          .wallet-note b {
            color: #ff416c;
          }
          
          /* Bottom Navigation */
          .bottom-nav {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(10, 28, 58, 0.98);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: space-around;
            padding: 10px 0;
            max-width: 430px;
            margin: 0 auto;
            z-index: 100;
            backdrop-filter: blur(12px);
            box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.25);
          }
          
          .nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            color: rgba(255, 255, 255, 0.55);
            text-decoration: none;
            font-size: 0.7rem;
            transition: all 0.2s;
            padding: 4px 8px;
            border-radius: 8px;
          }
          
          .nav-item.active {
            color: #00c6ff;
            background: rgba(0, 198, 255, 0.08);
          }
          
          .nav-item i {
            font-size: 1.1rem;
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
          .input-container.error .wallet-input {
            border-color: #ff416c;
            background: rgba(255, 65, 108, 0.05);
          }
          
          .error-message {
            color: #ff416c;
            font-size: 0.8rem;
            margin-top: 5px;
            padding-left: 5px;
          }
          
          /* QR Code Section (Optional) */
          .qr-section {
            text-align: center;
            padding: 20px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 12px;
            margin-top: 20px;
          }
          
          .qr-title {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 10px;
          }
          
          /* Responsive */
          @media (max-width: 430px) {
            .wallet-container {
              padding: 14px 16px 20px;
            }
            
            .balance-card {
              padding: 18px;
            }
            
            .wallet-form {
              padding: 16px;
            }
            
            .wallet-input {
              padding: 12px 14px;
              font-size: 0.9rem;
            }
            
            .submit-button {
              padding: 14px;
              font-size: 0.95rem;
            }
          }
          
          @media (max-width: 380px) {
            .wallet-form {
              padding: 14px;
            }
            
            .form-group {
              margin-bottom: 16px;
            }
            
            .form-label span:last-child {
              font-size: 0.85rem;
            }
          }
        `}
      </style>

      <div className="wallet-app">
        <div className="wallet-container">
          {/* Header */}
          <div className="wallet-header">
            <button className="back-button" onClick={goBack}>
              <i className="fas fa-arrow-left"></i>
              {i18n("buttons.back")}
            </button>
            <h1 className="wallet-title">{i18n("text.wallet")}</h1>
          </div>

     
          {/* Wallet Form */}
          <div className="wallet-form-container">
            <div className="form-header">
              <div className="form-title">
                <i className="fas fa-wallet"></i>
               {i18n("wallet.info")}
              </div>
            </div>
            
            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="wallet-form">
                <div className="form-group">
                  <div className="form-label">
                    <span>*</span>
                    <span>{i18n("wallet.username")}</span>
                  </div>
                  <div className="input-container">
                    <InputFormItem
                      type="text"
                      name="usernamewallet"
                      placeholder={i18n("wallet.username")}
                      className="wallet-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-label">
                    <span>*</span>
                    <span>{i18n("wallet.walletname")}</span>
                  </div>
                  <div className="input-container">
                    <InputFormItem
                      type="text"
                      name="walletname"
                      placeholder={i18n("wallet.walletname")}
                      className="wallet-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-label">
                    <span>*</span>
                    <span>{i18n("wallet.walletaddress")}</span>
                  </div>
                  <div className="input-container">
                    <InputFormItem
                      type="text"
                      name="erc20"
                      placeholder={i18n("wallet.walletaddress")}
                      className="wallet-input"
                    />
                  </div>
                </div>

                <button className="submit-button" type="submit" disabled={form.formState.isSubmitting}>
                  <i className="fas fa-check-circle"></i>
                  {i18n("buttons.submit")}
                </button>

                <span className="wallet-note">
                  <b>{i18n("wallet.note")}:</b> {i18n("wallet.notedesctiption")}
                </span>
              </form>
            </FormProvider>
          </div>

        
        </div>

      </div>
    </>
  );
}

export default Wallet;