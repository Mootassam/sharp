import React, { useCallback, useEffect, useState } from "react";
import SubHeader from "src/view/shared/Header/SubHeader";
import authSelectors from "src/modules/auth/authSelectors";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import * as yup from "yup";
import { i18n } from "../../../i18n";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import InputFormItem from "src/shared/form/InputFormItem";
import actions from "src/modules/transaction/form/transactionFormActions";
import authActions from "src/modules/auth/authActions";
import { useHistory } from "react-router-dom"; // Add this import

const schema = yup.object().shape({
  amount: yupFormSchemas.integer(i18n("withdraw.withdrawamount"), {
    required: true,
    min: 50,
  }),
  withdrawPassword: yupFormSchemas.string(i18n("withdraw.Withdrawpassword"), {
    required: true,
  }),
});

function Withdraw() {
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const dispatch = useDispatch();
  const history = useHistory(); // Add this for goBack functionality

  const refreshItems = useCallback(async () => {
    try {
      await dispatch(authActions.doRefreshCurrentUser());
    } catch (error) {
      console.error("Error during refreshing items:", error);
    }
  }, [dispatch]);

  const onSubmit = async ({ amount, withdrawPassword }) => {
    const values = {
      status: 'pending',
      date: new Date(),
      user: currentUser ? currentUser.id : null,
      type: "withdraw",
      amount: amount,
      vip: currentUser,
      withdrawPassword: withdrawPassword,
    };
    await dispatch(actions.doCreate(values));
    await refreshItems();
  };

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => { }, [currentUser, refreshItems]);

  const [initialValues] = useState({
    amount: "",
  });
  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValues,
  });

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
          .withdraw__page {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: white;
            background: radial-gradient(circle at center top, #0a1c3a, #051122 800px);
            min-height: 100vh;
            max-width: 430px;
            margin: 0 auto;
            position: relative;
            overflow-x: hidden;
          }
          
          .withdraw__content {
            padding: 16px 18px 20px;
          }
          
          /* Header */
          .withdraw-header {
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
          
          .withdraw-title {
            font-size: 1.3rem;
            font-weight: 700;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          /* Balance Display */
          .balance-display {
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
          
          /* Form Container */
          .withdraw-form-container {
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
          
          form {
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
          
          .input__withdraw {
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
          
          .input__withdraw:focus {
            border-color: #00c6ff;
            background: rgba(0, 198, 255, 0.05);
            box-shadow: 0 0 0 2px rgba(0, 198, 255, 0.1);
          }
          
          .input__withdraw::placeholder {
            color: rgba(255, 255, 255, 0.4);
          }
          
          /* Number Click Section */
          .number__click {
            margin: 20px 0;
          }
          
          .number__click h3.hall {
            font-size: 1rem;
            margin-bottom: 10px;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 600;
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
          
          /* Rules Section */
          .withdraw__rules {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(8px);
            padding: 20px;
            margin-top: 20px;
          }
          
          .rules__title {
            font-size: 1.1rem;
            font-weight: 600;
            color: white;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          
          .rules__title:before {
            content: "📋";
            font-size: 1.2rem;
          }
          
          .rules__list {
            list-style: none;
            padding-left: 0;
          }
          
          .rules__list li {
            padding: 8px 0;
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;
            line-height: 1.5;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          
          .rules__list li:last-child {
            border-bottom: none;
          }
          
          .rules__list li:before {
            content: "•";
            color: #00c6ff;
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-right: 8px;
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
          .input-container.error .input__withdraw {
            border-color: #ff416c;
            background: rgba(255, 65, 108, 0.05);
          }
          
          .error-message {
            color: #ff416c;
            font-size: 0.8rem;
            margin-top: 5px;
            padding-left: 5px;
          }
          
          /* Responsive */
          @media (max-width: 430px) {
            .withdraw__content {
              padding: 14px 16px 20px;
            }
            
            .withdraw-form-container {
              padding: 18px;
            }
            
            .input__withdraw {
              padding: 12px 14px;
              font-size: 0.9rem;
            }
            
            .confirm {
              padding: 14px;
              font-size: 0.95rem;
            }
            
            .withdraw__rules {
              padding: 16px;
            }
          }
          
          @media (max-width: 380px) {
            form {
              padding: 14px;
            }
            
            .form-group {
              margin-bottom: 16px;
            }
            
            .rules__list li {
              font-size: 0.85rem;
            }
          }
        `}
      </style>

      <div className="withdraw__page">
        <div className="withdraw__content">
          {/* Header with Back Button */}
          <div className="withdraw-header">
            <button className="back-button" onClick={goBack}>
              <i className="fas fa-arrow-left"></i>
              {i18n("buttons.back")}
            </button>
            <h1 className="withdraw-title">{i18n("text.withdraw")}</h1>
          </div>

          {/* Balance Display */}
          <div className="balance-display">
            <span className="balance-label">{i18n("withdraw.availablebalance")}</span>
            <div className="balance-amount">
              {currentUser?.balance?.toFixed(2) || "0.00"}
            </div>
          </div>

          {/* Withdraw Form */}
          <div className="withdraw-form-container">
            <div className="form-header">
              <div className="form-title">
                <i className="fas fa-money-bill-transfer"></i>
                {i18n("withdraw.withdrawrequest")}
              </div>
            </div>
            
            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="form-group">
                  <div className="form-label">
                    <span>*</span>
                    <span>{i18n("withdraw.withdrawamount")}</span>
                  </div>
                  <div className="input-container">
                    <InputFormItem
                      type="text"
                      name="amount"
                      placeholder={i18n("withdraw.withdrawamount")}
                      className="input__withdraw"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-label">
                    <span>*</span>
                    <span>{i18n("withdraw.Withdrawpassword")}</span>
                  </div>
                  <div className="input-container">
                    <InputFormItem
                      type="password"
                      name="withdrawPassword"
                      placeholder={i18n("withdraw.Withdrawpassword")}
                      className="input__withdraw"
                    />
                  </div>
                </div>

                <button className="confirm" type="submit" disabled={form.formState.isSubmitting}>
                  <i className="fas fa-check-circle"></i>
                  {i18n("buttons.confirm")}
                </button>
              </form>
            </FormProvider>
          </div>

          {/* Rules Section */}
          <div className="withdraw__rules">
            <div className="rules__title">{i18n("withdraw.rules")}</div>
            <ul className="rules__list">
              <li>(1) {i18n("withdraw.rule1")}</li>
              <li>(2) {i18n("withdraw.rule2")}</li>
              <li>(3) {i18n("withdraw.rule3")}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Withdraw;