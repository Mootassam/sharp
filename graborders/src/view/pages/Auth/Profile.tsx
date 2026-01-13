import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import authActions from "src/modules/auth/authActions";
import authSelectors from "src/modules/auth/authSelectors";
import { useHistory } from "react-router-dom";
import actions from "src/modules/record/list/recordListActions";
import selectors from "src/modules/record/list/recordListSelectors";
import Message from "src/view/shared/message";
import ImagesFormItem from "src/shared/form/ImagesFormItems";
import Storage from "src/security/storage";
import { i18n } from "../../../i18n";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import I18nSelect from "src/view/layout/I18nSelect";

const schema = yup.object().shape({
  avatars: yupFormSchemas.images(i18n("inputs.avatars"), {
    max: 1,
  }),
});

function Profile() {
  const dispatch = useDispatch();
  const [showLanguage, setShowLanguage] = useState(false);
  const history = useHistory();

  const total = useSelector(selectors.selectTotal);
  const totalperday = useSelector(selectors.selectTotalPerday);

  useEffect(() => {
    const values = {
      status: `${i18n("text.completed")}`,
    };
    dispatch(actions.doCountDay());
    dispatch(actions.doFetch(values, values));
  }, [dispatch]);

  const doSignout = () => {
    dispatch(authActions.doSignout());
  };

  const goto = (param) => {
    history.push(param);
  };

  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const referenceCodeRef = useRef<any>(null);

  const copyToClipboard = () => {
    const referenceCode = referenceCodeRef.current.innerText;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(referenceCode)
        .then(() => Message.success("Copied to clipboard"))
        .catch((error) => console.error("Error copying:", error));
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = referenceCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      Message.success("Copied to clipboard");
    }
  };

  const [initialValues] = useState(() => {
    const record = currentUser || {};
    return { avatars: record.avatars || [] };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    dispatch(authActions.doUpdateProfile(values));
  };

  const menuSections = [
    {
      title: i18n("text.myfinance"),
      icon: "💳",
      items: [
        { icon: "fas fa-money-check", label: i18n("text.withdraw"), action: () => goto("/withdraw") },
        { icon: "fas fa-check-circle", label: i18n("text.validation"), action: () => goto("/validation") },
      ]
    },
    {
      title: i18n("text.mydetails"),
      icon: "👤",
      items: [
        { icon: "fas fa-user", label: i18n("text.profile"), url: "/myprofile" },
        { icon: "fas fa-wallet", label: i18n("text.wallet"), url: "/wallet" },
      ]
    },
    {
      title: i18n("text.other"),
      icon: "⚙️",
      items: [
        { icon: "fas fa-headset", label: i18n("text.customersupport"), url: "/online" },
        { icon: "fas fa-exchange-alt", label: i18n("text.transaction"), url: "/transaction" },
        { icon: "fas fa-history", label: i18n("text.taskshistory"), url: "/order" },
        { icon: "fas fa-lock", label: i18n("text.security"), url: "/security" },
      ]
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
          
          .app-container {
            padding: 14px 16px 80px;
          }
          
          /* Header - Compact */
          .profile-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 18px;
            padding: 0 4px;
          }
          
          .profile-logo {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.2rem;
            font-weight: 700;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .profile-logo i {
            font-size: 1.4rem;
          }
          
          .header-actions {
            position: relative;
          }
          
          .language-toggle-btn {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: white;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 0.9rem;
          }
          
          .language-toggle-btn:hover {
            background: rgba(255, 255, 255, 0.12);
            transform: rotate(15deg);
          }
          
          .language-dropdown {
            position: absolute;
            top: 44px;
            right: 0;
            background: rgba(10, 28, 58, 0.98);
            border-radius: 12px;
            padding: 16px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(12px);
            z-index: 100;
            min-width: 180px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
          }
          
          .close-language {
            position: absolute;
            top: 8px;
            right: 8px;
            color: rgba(255, 255, 255, 0.6);
            cursor: pointer;
            width: 22px;
            height: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.2s;
            font-size: 0.8rem;
          }
          
          .close-language:hover {
            background: rgba(255, 255, 255, 0.1);
          }
          
          /* User Profile Card - Compact */
          .user-profile-card {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 16px;
            padding: 20px;
            margin-bottom: 16px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(8px);
          }
          
          .profile-info {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 20px;
          }
          
          .avatar-large {
            position: relative;
            width: 72px;
            height: 72px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid rgba(0, 198, 255, 0.6);
            background: rgba(0, 198, 255, 0.08);
            flex-shrink: 0;
                display: flex;
    align-items: center;
    justify-content: center;
          }
          
          .user-details {
            flex: 1;
            min-width: 0;
          }
          
          .user-details h2 {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 6px;
            color: white;
            display: flex;
            align-items: center;
            gap: 8px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .user-details h2 img {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
          }
          
          .user-id {
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.7);
            background: rgba(255, 255, 255, 0.04);
            padding: 6px 10px;
            border-radius: 8px;
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100%;
          }
          
          /* Stats Container - Compact */
          .stats-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }
          
          .stat-card {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 10px;
            padding: 14px 10px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.07);
            transition: all 0.2s;
          }
          
          .stat-card:hover {
            background: rgba(255, 255, 255, 0.06);
            transform: translateY(-2px);
            border-color: rgba(0, 198, 255, 0.2);
          }
          
          .stat-value {
            display: block;
            font-size: 1rem;
            font-weight: 800;
            margin-bottom: 4px;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.2;
          }
          
          .stat-label {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.65);
            display: block;
            line-height: 1.2;
          }
          
          /* Promotion Code Card - Compact */
          .promotion-code-card {
            background: linear-gradient(135deg, rgba(156, 39, 176, 0.12), rgba(255, 152, 0, 0.12));
            border-radius: 14px;
            padding: 16px;
            margin-bottom: 16px;
            border: 1px solid rgba(156, 39, 176, 0.25);
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            transition: all 0.2s;
            backdrop-filter: blur(8px);
          }
          
          .promotion-code-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 18px rgba(156, 39, 176, 0.18);
            border-color: rgba(156, 39, 176, 0.4);
          }
          
          .code-display {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          
          .code-display i {
            font-size: 1.3rem;
            color: #9c27b0;
            opacity: 0.9;
          }
          
          .copy-btn {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: white;
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 0.8rem;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 5px;
            font-weight: 500;
          }
          
          .copy-btn:hover {
            background: rgba(255, 255, 255, 0.12);
          }
          
          /* Credit Score Card - Compact */
          .credit-score-card {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 14px;
            padding: 18px;
            margin-bottom: 20px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(8px);
          }
          
          .score-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
          }
          
          .score-value {
          padding-top:10px; 
            font-size: 1.6rem;
            font-weight: 800;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1;
          }
          
          .progress-bar-container {
            height: 8px;
            background: rgba(255, 255, 255, 0.08);
            border-radius: 4px;
            margin-bottom: 12px;
            overflow: hidden;
          }
          
          .progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #ff416c, #ff4b2b);
            border-radius: 4px;
            transition: width 1s ease-in-out;
          }
          
          .progress-labels {
            display: flex;
            justify-content: space-between;
            color: rgba(255, 255, 255, 0.55);
          }
                  .progress-labels > span {
                  font-size:15px !important;
                  } 
          
          /* Menu Sections - Compact */
          .menu-sections {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 24px;
          }
          
          .menu-section {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 14px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(8px);
          }
          
          .section-title {
            padding: 14px 16px;
            font-size: 1rem;
            font-weight: 600;
            color: white;
            background: rgba(0, 104, 200, 0.18);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            align-items: center;
            gap: 8px;
          }
          
          .menu-items {
            display: flex;
            flex-direction: column;
          }
          
          .menu-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 16px;
            text-decoration: none;
            color: white;
            border-bottom: 1px solid rgba(255, 255, 255, 0.04);
            transition: all 0.2s;
            cursor: pointer;
          }
          
          .menu-item:last-child {
            border-bottom: none;
          }
          
          .menu-item:hover {
            background: rgba(255, 255, 255, 0.06);
          }
          
          .menu-item-content {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          
          .menu-icon {
            width: 36px;
            height: 36px;
            border-radius: 8px;
            background: rgba(0, 104, 200, 0.18);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          
          .menu-icon i {
            font-size: 1rem;
            color: #00c6ff;
          }
          
          .menu-item span {
            font-size: 0.9rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.95);
          }
          
          .menu-item i.fa-chevron-right {
            opacity: 0.4;
            font-size: 0.8rem;
          }
          
          /* Logout Section - Compact */
          .logout-section {
            text-align: center;
            padding: 8px 0;
          }
          
          .logout-btn {
    background: linear-gradient(135deg, rgba(255, 65, 108, 0.16), rgba(255, 75, 43, 0.16));
    border: 1px solid rgba(255, 65, 108, 0.25);
    color: white;
    padding: 12px 32px;
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    align-items: center;
    text-align: center;
    justify-content: center;
}
          
          .logout-btn:hover {
            background: linear-gradient(135deg, rgba(255, 65, 108, 0.22), rgba(255, 75, 43, 0.22));
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 65, 108, 0.15);
            border-color: rgba(255, 65, 108, 0.4);
          }
          
          .logout-btn i {
            font-size: 0.95rem;
          }
          
          /* Bottom Navigation - Matching Cinema Theme */
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
          
          /* Responsive Adjustments */
          @media (max-width: 430px) {
            .app-container {
              padding: 12px 14px 75px;
            }
            
            .stats-container {
              grid-template-columns: repeat(3, 1fr);
              gap: 10px;
            }
            
            .stat-card {
              padding: 12px 8px;
            }
            
            .stat-value {
              font-size: 1.2rem;
            }
            
            .menu-item {
              padding: 12px 14px;
            }
          }
          
          @media (max-width: 380px) {
            .stats-container {
              grid-template-columns: 1fr;
            }
            
            .profile-info {
              gap: 12px;
            }
            
            .avatar-large {
              width: 64px;
              height: 64px;
            }
          }
        `}
      </style>

      <div className="profile-app">
        <div className="app-container">
          {/* Header */}
          <div className="profile-header">
            <div className="profile-logo">
              <i className="fas fa-user-circle"></i>
              <span>My Profile</span>
            </div>

            <div className="header-actions">
              <Link className="language-toggle-btn"to="/language">
                <i className="fas fa-language"></i>
              </Link>

           
            </div>
          </div>

          {/* User Profile Card */}
          <div className="user-profile-card">
            <div className="profile-info">
              <div className="avatar-large">
                <FormProvider {...form}>
                  <form>
                    <ImagesFormItem
                      name="avatars"
                      storage={Storage.values.userAvatarsProfiles}
                      max={1}
                    />
                  </form>
                </FormProvider>
              </div>

              <div className="user-details">
                <h2>
                  {currentUser?.fullName || "User Name"}
                  <img src="/images/check.png" alt="verified" />
                </h2>
                <div className="user-id">
                  {i18n("text.uid")}: {currentUser?.invitationcode || "N/A"}
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="stats-container">
              <div className="stat-card">
                <span className="stat-value">${totalperday?.toFixed(2) || "0.00"}</span>
                <span className="stat-label">{i18n("text.todayearning")}</span>
              </div>

              <div className="stat-card">
                <span className="stat-value">${total?.toFixed(2) || "0.00"}</span>
                <span className="stat-label">{i18n("text.totalearning")}</span>
              </div>

              <div className="stat-card">
                <span className="stat-value">${currentUser?.balance?.toFixed(2) || "0.00"}</span>
                <span className="stat-label">{i18n("text.walletamount")}</span>
              </div>
            </div>
          </div>

          {/* Promotion Code Card */}
          <div className="promotion-code-card" onClick={copyToClipboard}>
            <div className="code-display">
              <i className="fas fa-tag"></i>
              <div>
                <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>{i18n("text.promotioncode")}</div>
                <div ref={referenceCodeRef} style={{ fontWeight: 600, fontSize: '1rem' }}>
                  {currentUser?.refcode || "N/A"}
                </div>
              </div>
            </div>
            <button className="copy-btn">
              <i className="fas fa-copy"></i>
              Copy
            </button>
          </div>

          {/* Credit Score Card */}
          <div className="credit-score-card">
            <div className="score-header">
              <div>
                <div style={{ fontSize: '0.85rem', opacity: 0.7 }}>{i18n("text.creditassesment")}</div>
                <div className="score-value">
                  {currentUser?.score ? currentUser.score : 100}%
                </div>
              </div>
              <i className="fas fa-chart-line"></i>
            </div>

            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${currentUser?.score ? currentUser.score : 100}%` }}
              ></div>
            </div>

            <div className="progress-labels">
              <span>Poor</span>
              <span>Fair</span>
              <span>Good</span>
              <span>Excellent</span>
            </div>
          </div>

          {/* Menu Sections */}
          <div className="menu-sections">
            {menuSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="menu-section">
                <div className="section-title">
                  <span>{section.icon}</span>
                  {section.title}
                </div>

                <div className="menu-items">
                  {section.items.map((item, itemIndex) => (
                    item.url ? (
                      <Link to={item.url} key={itemIndex} className="menu-item">
                        <div className="menu-item-content">
                          <div className="menu-icon">
                            <i className={item.icon}></i>
                          </div>
                          <span>{item.label}</span>
                        </div>
                        <i className="fas fa-chevron-right"></i>
                      </Link>
                    ) : (
                      <div key={itemIndex} className="menu-item" onClick={item.action}>
                        <div className="menu-item-content">
                          <div className="menu-icon">
                            <i className={item.icon}></i>
                          </div>
                          <span>{item.label}</span>
                        </div>
                        <i className="fas fa-chevron-right"></i>
                      </div>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Logout Button */}
          <div className="logout-section">
            <button className="logout-btn" onClick={doSignout}>
              <i className="fas fa-sign-out-alt"></i>
              {i18n("buttons.logout")}
            </button>
          </div>
        </div>

 
      </div>
    </>
  );
}

export default Profile;