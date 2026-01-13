import React from 'react';
import { getLanguages, getLanguageCode } from '../../i18n';
import actions from 'src/modules/layout/layoutActions';
import { useHistory } from "react-router-dom";

function I18nSelect({ onClose }) {
    const history = useHistory();
  
  const doChangeLanguage = (language) => {
    actions.doChangeLanguage(language);
    // Optional: Close modal after selection
    // if (onClose) onClose();
  };

  const handleBack = () => {
    history.goBack();

  };

  return (
    <>
      <style>
        {`
          @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
          
          .i18n-select-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 80000;
            backdrop-filter: blur(5px);
            animation: fadeIn 0.3s ease;
          }
          
          .i18n-container {
            background: radial-gradient(circle at center top, #0a1c3a, #051122 800px);
            width: 90%;
            max-width: 420px;
            padding: 20px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 
              0 20px 60px rgba(0, 0, 0, 0.5),
              0 0 0 1px rgba(255, 255, 255, 0.05),
              inset 0 0 0 1px rgba(255, 255, 255, 0.05);
            position: relative;
            overflow: hidden;
            animation: slideUp 0.4s ease;
            max-height: 100%;
            overflow-y: auto;
          }
          
          .i18n-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, 
              transparent, 
              rgba(0, 198, 255, 0.5), 
              transparent
            );
          }
          
          /* Header with Back Button - Matching Order/Transaction style */
          .i18n-header-container {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
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
          
          .i18n-title {
            font-size: 1.2rem;
            font-weight: 700;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          /* Language Header */
          .language-header {
            text-align: center;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .language-header i {
            font-size: 2.5rem;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 10px;
            display: block;
          }
          
          .language-header h2 {
            font-size: 1.4rem;
            font-weight: 600;
            color: white;
            margin-bottom: 5px;
          }
          
          .language-header p {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.6);
            margin: 0;
          }
          
          /* Languages Grid */
          .languages-grid {
            display: grid;
            gap: 10px;
            margin-bottom: 10px;
          }
          
          /* Language Card */
          .language-card {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 16px;
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(8px);
          }
          
          .language-card:hover {
            background: rgba(255, 255, 255, 0.08);
            transform: translateY(-2px);
            border-color: rgba(0, 198, 255, 0.3);
            box-shadow: 0 8px 20px rgba(0, 198, 255, 0.1);
          }
          
          .language-card.active {
            background: linear-gradient(135deg, 
              rgba(0, 198, 255, 0.15), 
              rgba(0, 104, 200, 0.1)
            );
            border-color: rgba(0, 198, 255, 0.4);
            box-shadow: 
              0 10px 25px rgba(0, 198, 255, 0.15),
              inset 0 0 0 1px rgba(0, 198, 255, 0.2);
          }
          
          .language-card.active::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, #00c6ff, #0068c8);
          }
          
          /* Language Flag */
          .language-flag {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            overflow: hidden;
            margin-right: 16px;
            flex-shrink: 0;
            border: 2px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            position: relative;
          }
          
          .language-flag img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          .language-card.active .language-flag {
            border-color: rgba(0, 198, 255, 0.5);
            box-shadow: 0 4px 12px rgba(0, 198, 255, 0.2);
          }
          
          /* Language Info */
          .language-info {
            flex: 1;
            min-width: 0;
          }
          
          .language-name {
            display: block;
            font-size: 0.95rem;
            font-weight: 600;
            color: white;
            margin-bottom: 4px;
            line-height: 1.2;
          }
          
          .language-native {
            display: block;
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.6);
            font-style: italic;
            line-height: 1.2;
          }
          
          .language-card.active .language-name {
            color: #00c6ff;
          }
          
          /* Selected Indicator */
          .selected-indicator {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            margin-left: 12px;
            animation: bounceIn 0.3s ease;
          }
          
          .selected-indicator i {
            font-size: 0.7rem;
            color: white;
          }
          
          /* Close Button */
          .close-button {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 36px;
            height: 36px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            color: rgba(255, 255, 255, 0.7);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
            z-index: 10;
          }
          
          .close-button:hover {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            transform: rotate(90deg);
          }
          
          /* Animations for new language selection */
          .language-card.selected-new {
            animation: selectPulse 0.6s ease;
          }
          
          /* Search Bar (Optional) */
          .search-container {
            margin-bottom: 20px;
            position: relative;
          }
          
          .search-input {
            width: 100%;
            padding: 14px 16px 14px 45px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            color: white;
            font-size: 0.95rem;
            transition: all 0.3s ease;
          }
          
          .search-input:focus {
            outline: none;
            border-color: #00c6ff;
            background: rgba(0, 198, 255, 0.05);
            box-shadow: 0 0 0 2px rgba(0, 198, 255, 0.1);
          }
          
          .search-icon {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: rgba(255, 255, 255, 0.5);
          }
          
          /* Animations */
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideUp {
            from { 
              opacity: 0;
              transform: translateY(30px); 
            }
            to { 
              opacity: 1;
              transform: translateY(0); 
            }
          }
          
          @keyframes bounceIn {
            0% {
              transform: scale(0);
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }
          
          @keyframes selectPulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.02);
              box-shadow: 0 15px 30px rgba(0, 198, 255, 0.3);
            }
            100% {
              transform: scale(1);
            }
          }
          
          /* Responsive */
          @media (max-width: 480px) {
            .i18n-container {
              width: 95%;
              padding: 16px;
              max-height: 80vh;
            }
            
            .i18n-header-container {
              margin-bottom: 15px;
            }
            
            .language-header i {
              font-size: 2rem;
            }
            
            .language-header h2 {
              font-size: 1.2rem;
            }
            
            .language-card {
              padding: 14px;
            }
            
            .language-flag {
              width: 44px;
              height: 44px;
              margin-right: 14px;
            }
            
            .language-name {
              font-size: 0.9rem;
            }
            
            .language-native {
              font-size: 0.75rem;
            }
            
            .selected-indicator {
              width: 22px;
              height: 22px;
            }
          }
          
          @media (max-width: 380px) {
            .i18n-container {
              padding: 14px;
            }
            
            .language-card {
              padding: 12px;
            }
            
            .language-flag {
              width: 40px;
              height: 40px;
              margin-right: 12px;
            }
            
            .selected-indicator {
              width: 20px;
              height: 20px;
            }
          }
          
          /* Scrollbar Styling */
          .i18n-container::-webkit-scrollbar {
            width: 6px;
          }
          
          .i18n-container::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 3px;
          }
          
          .i18n-container::-webkit-scrollbar-thumb {
            background: rgba(0, 198, 255, 0.3);
            border-radius: 3px;
          }
          
          .i18n-container::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 198, 255, 0.5);
          }
        `}
      </style>

      <div className="i18n-select-modal">
        <div className="i18n-container">
          {/* Header with Back Button - Matching Order/Transaction style */}
          <div className="i18n-header-container">
            <button className="back-button" onClick={handleBack}>
              <i className="fas fa-arrow-left"></i>
              Back
            </button>
            <h1 className="i18n-title">Language</h1>
          </div>

          <div className="language-header">
            <i className="fa-solid fa-language"></i>
            <h2>Select Language</h2>
            <p>Choose your preferred language</p>
          </div>

          {/* Optional Search Bar - Uncomment if you want search functionality */}
          {/* 
          <div className="search-container">
            <i className="fa-solid fa-search search-icon"></i>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search languages..." 
            />
          </div>
          */}

          <div className="languages-grid">
            {getLanguages().map((language) => (
              <div
                key={language.id}
                onClick={() => doChangeLanguage(language.id)}
                className={`language-card ${getLanguageCode() === language.id ? 'active' : ''
                  }`}
              >
                <div className="language-flag">
                  <img src={language.flag} alt={language.label} />
                </div>
                <div className="language-info">
                  <span className="language-name">{language.label}</span>
                  <span className="language-native">
                    {language.nativeName || language.label}
                  </span>
                </div>
                {getLanguageCode() === language.id && (
                  <div className="selected-indicator">
                    <i className="fa-solid fa-check"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default I18nSelect;