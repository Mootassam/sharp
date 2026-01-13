import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "src/modules/auth/authSelectors";
import { i18n } from "../../../i18n";

function Myprofile() {
  const currentUser = useSelector(authSelectors.selectCurrentUser);

  const userFields = [
    {
      label: i18n("profile.fullname"),
      value: currentUser?.fullName,
      icon: "fas fa-user",
      color: "#00c6ff"
    },
    {
      label: i18n("profile.email"),
      value: currentUser?.email,
      icon: "fas fa-envelope",
      color: "#9c27b0"
    },
    {
      label: i18n("profile.phonenumber"),
      value: currentUser?.phoneNumber || i18n("profile.notprovided"),
      icon: "fas fa-phone",
      color: "#ff9800"
    },
    {
      label: i18n("profile.country"),
      value: currentUser?.country || i18n("profile.notprovided"),
      icon: "fas fa-globe",
      color: "#4caf50"
    },
    {
      label: i18n("profile.Invitationcode"),
      value: currentUser?.invitationcode,
      icon: "fas fa-tag",
      color: "#ff5722"
    }
  ];

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
          
          .profile-app {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: white;
            background: radial-gradient(circle at center top, #0a1c3a, #051122 800px);
            min-height: 100vh;
            max-width: 430px;
            margin: 0 auto;
            position: relative;
            overflow-x: hidden;
          }
          
          .profile-container {
            padding: 16px 18px 20px;
          }
          
          /* Header */
          .profile-header {
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
          
          .profile-title {
            font-size: 1.3rem;
            font-weight: 700;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          /* User Profile Card */
          .user-card {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 16px;
            padding: 20px;
            margin-bottom: 20px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(8px);
            text-align: center;
          }
          
          .user-avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin: 0 auto 16px;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            font-weight: 700;
            color: white;
            border: 3px solid rgba(255, 255, 255, 0.1);
          }
          
          .user-name {
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 4px;
            color: white;
          }
          
          .user-status {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(0, 198, 255, 0.1);
            color: #00c6ff;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 600;
            margin-top: 8px;
          }
          
          /* Profile Details */
          .profile-details {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(8px);
            overflow: hidden;
          }
          
          .details-header {
            padding: 16px 20px;
            background: rgba(0, 104, 200, 0.15);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .details-title {
            font-size: 1.1rem;
            font-weight: 600;
            color: white;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          
          .details-title i {
            color: #00c6ff;
          }
          
          .details-list {
            display: flex;
            flex-direction: column;
          }
          
          .detail-item {
            display: flex;
            align-items: center;
            padding: 16px 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.04);
            transition: all 0.2s;
          }
          
          .detail-item:last-child {
            border-bottom: none;
          }
          
          .detail-item:hover {
            background: rgba(255, 255, 255, 0.03);
          }
          
          .detail-icon {
            width: 36px;
            height: 36px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 14px;
            flex-shrink: 0;
          }
          
          .detail-content {
            flex: 1;
            min-width: 0;
          }
          
          .detail-label {
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.65);
            margin-bottom: 4px;
            display: block;
          }
          
          .detail-value {
            font-size: 0.95rem;
            font-weight: 600;
            color: white;
            display: block;
            word-break: break-word;
          }
          
          .detail-value.empty {
            color: rgba(255, 255, 255, 0.5);
            font-style: italic;
          }
          
          .detail-arrow {
            color: rgba(255, 255, 255, 0.3);
            font-size: 0.8rem;
            margin-left: 10px;
          }
          
          /* Action Buttons */
          .action-buttons {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            margin-top: 20px;
          }
          
          .action-button {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: white;
            padding: 14px 12px;
            border-radius: 12px;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }
          
          .action-button:hover {
            background: rgba(255, 255, 255, 0.08);
            transform: translateY(-2px);
            border-color: rgba(255, 255, 255, 0.2);
          }
          
          .action-button.primary {
            background: linear-gradient(135deg, rgba(0, 198, 255, 0.2), rgba(0, 104, 200, 0.2));
            border-color: rgba(0, 198, 255, 0.3);
          }
          
          .action-button.primary:hover {
            background: linear-gradient(135deg, rgba(0, 198, 255, 0.25), rgba(0, 104, 200, 0.25));
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
          
          /* Responsive */
          @media (max-width: 430px) {
            .profile-container {
              padding: 14px 16px 20px;
            }
            
            .user-card {
              padding: 18px;
            }
            
            .action-buttons {
              grid-template-columns: 1fr;
              gap: 10px;
            }
            
            .detail-item {
              padding: 14px 16px;
            }
          }
        `}
      </style>

      <div className="profile-app">
        <div className="profile-container">
          {/* Header */}
          <div className="profile-header">
            <Link to="/profile" className="back-button">
              <i className="fas fa-arrow-left"></i>
              Back
            </Link>
            <h1 className="profile-title">My Profile</h1>
          </div>

          {/* User Card */}
          <div className="user-card">
            <div className="user-avatar">
              {currentUser?.fullName?.[0]?.toUpperCase() || "U"}
            </div>
            <div className="user-name">{currentUser?.fullName || "User Name"}</div>
            <div className="user-status">
              <i className="fas fa-check-circle"></i>
              Verified Account
            </div>
          </div>

          {/* Profile Details */}
          <div className="profile-details">
            <div className="details-header">
              <div className="details-title">
                <i className="fas fa-id-card"></i>
                Personal Information
              </div>
            </div>
            
            <div className="details-list">
              {userFields.map((field, index) => (
                <div key={index} className="detail-item">
                  <div 
                    className="detail-icon"
                    style={{ background: `rgba(${parseInt(field.color.slice(1, 3), 16)}, ${parseInt(field.color.slice(3, 5), 16)}, ${parseInt(field.color.slice(5, 7), 16)}, 0.15)` }}
                  >
                    <i className={field.icon} style={{ color: field.color }}></i>
                  </div>
                  <div className="detail-content">
                    <span className="detail-label">{field.label}</span>
                    <span className={`detail-value ${!field.value ? 'empty' : ''}`}>
                      {field.value || "Not provided"}
                    </span>
                  </div>
                  <i className="fas fa-chevron-right detail-arrow"></i>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <Link className="action-button primary" to="/wallet">
              <i className="fas fa-edit"></i>
              Edit Wallet
            </Link>
            <Link className="action-button" to="/security">
              <i className="fas fa-shield-alt"></i>
              Security
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}

export default Myprofile;