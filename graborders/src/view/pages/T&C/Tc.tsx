import React, { useEffect } from "react";
import SubHeader from "src/view/shared/Header/SubHeader";
import actions from 'src/modules/company/list/companyListActions'
import selectors from 'src/modules/company/list/companyListSelectors' 
import { useDispatch, useSelector } from "react-redux";
import LoadingModal from "src/shared/LoadingModal";
import { Link } from "react-router-dom";

function Tc() {
  const dispatch = useDispatch();
  const record = useSelector(selectors.selectRows); 
  const loading = useSelector(selectors.selectLoading);

  const doFetch = () => { 
    dispatch(actions.doFetch());
  };

  useEffect(() => {
    doFetch();
  }, [dispatch]);

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
          
          .terms-app {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: white;
            background: radial-gradient(circle at center top, #0a1c3a, #051122 800px);
            min-height: 100vh;
            max-width: 430px;
            margin: 0 auto;
            position: relative;
            overflow-x: hidden;
          }
          
          .terms-container {
            padding: 16px 18px 20px;
          }
          
          /* Header */
          .terms-header {
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
          }
          
          .back-button:hover {
            gap: 10px;
            background: rgba(255, 255, 255, 0.08);
          }
          
          .terms-title {
            font-size: 1.3rem;
            font-weight: 700;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          /* Content Area */
          .terms-content {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 14px;
            padding: 20px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(8px);
            margin-bottom: 24px;
            max-height: calc(100vh - 200px);
            overflow-y: auto;
          }
          
          .terms-content::-webkit-scrollbar {
            width: 6px;
          }
          
          .terms-content::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 3px;
          }
          
          .terms-content::-webkit-scrollbar-thumb {
            background: rgba(0, 198, 255, 0.3);
            border-radius: 3px;
          }
          
          .terms-content::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 198, 255, 0.5);
          }
          
          /* Terms Text Styling */
          .terms-text {
            color: rgba(255, 255, 255, 0.9);
            line-height: 1.6;
            font-size: 0.9rem;
          }
          
          .terms-text h1,
          .terms-text h2,
          .terms-text h3,
          .terms-text h4 {
            color: #00c6ff;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
            font-weight: 600;
          }
          
          .terms-text h1 {
            font-size: 1.4rem;
            border-bottom: 2px solid rgba(0, 198, 255, 0.3);
            padding-bottom: 8px;
          }
          
          .terms-text h2 {
            font-size: 1.2rem;
          }
          
          .terms-text h3 {
            font-size: 1.1rem;
          }
          
          .terms-text p {
            margin-bottom: 1em;
            color: rgba(255, 255, 255, 0.8);
          }
          
          .terms-text ul,
          .terms-text ol {
            margin-left: 1.5em;
            margin-bottom: 1em;
          }
          
          .terms-text li {
            margin-bottom: 0.5em;
            color: rgba(255, 255, 255, 0.8);
          }
          
          .terms-text strong {
            color: #ffffff;
            font-weight: 600;
          }
          
          .terms-text em {
            color: rgba(255, 255, 255, 0.7);
          }
          
          .terms-text a {
            color: #00c6ff;
            text-decoration: none;
            border-bottom: 1px dotted rgba(0, 198, 255, 0.5);
            transition: all 0.2s;
          }
          
          .terms-text a:hover {
            color: #00b8ff;
            border-bottom: 1px solid #00b8ff;
          }
          
          .terms-text blockquote {
            border-left: 3px solid #00c6ff;
            padding-left: 15px;
            margin: 1.5em 0;
            color: rgba(255, 255, 255, 0.7);
            background: rgba(0, 198, 255, 0.05);
            padding: 15px;
            border-radius: 0 8px 8px 0;
          }
          
          /* Loading State */
          .loading-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 60px 20px;
          }
          
          .loading-spinner {
            width: 40px;
            height: 40px;
            border: 3px solid rgba(255, 255, 255, 0.1);
            border-top: 3px solid #00c6ff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 16px;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .loading-text {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
          }
          
          /* Empty State */
          .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
            text-align: center;
            background: rgba(255, 255, 255, 0.04);
            border-radius: 14px;
            border: 1px solid rgba(255, 255, 255, 0.08);
          }
          
          .empty-icon {
            font-size: 2.5rem;
            color: #00c6ff;
            margin-bottom: 16px;
          }
          
          .empty-title {
            font-size: 1.1rem;
            font-weight: 600;
            color: white;
            margin-bottom: 8px;
          }
          
          .empty-description {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.6);
            line-height: 1.4;
          }
          
          /* Bottom Navigation (if needed) */
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
          
          /* Responsive */
          @media (max-width: 430px) {
            .terms-container {
              padding: 14px 16px 20px;
            }
            
            .terms-content {
              padding: 16px;
            }
          }
        `}
      </style>

      <div className="terms-app">
        <div className="terms-container">
          {/* Header */}
          <div className="terms-header">
            <Link to="/profile" className="back-button">
              <i className="fas fa-arrow-left"></i>
              Back
            </Link>
            <h1 className="terms-title">Terms & Conditions</h1>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <div className="loading-text">Loading terms and conditions...</div>
            </div>
          )}

          {/* Empty State */}
          {!loading && (!record || !record[0]?.tc) && (
            <div className="empty-state">
              <i className="fas fa-file-contract empty-icon"></i>
              <div className="empty-title">No Terms Available</div>
              <div className="empty-description">
                The terms and conditions are currently unavailable. Please check back later.
              </div>
            </div>
          )}

          {/* Terms Content */}
          {!loading && record && record[0]?.tc && (
            <div className="terms-content">
              <div 
                className="terms-text"
                dangerouslySetInnerHTML={{ __html: record[0]?.tc }} 
              />
            </div>
          )}
        </div>

        {/* Bottom Navigation (uncomment if needed) */}
        {/* 
        <div className="bottom-nav">
          <Link to="/home" className="nav-item">
            <i className="fas fa-home"></i>
            Home
          </Link>
          <Link to="/profile" className="nav-item active">
            <i className="fas fa-user"></i>
            Profile
          </Link>
          <Link to="/support" className="nav-item">
            <i className="fas fa-headset"></i>
            Support
          </Link>
        </div>
        */}
      </div>
    </>
  );
}

export default Tc;