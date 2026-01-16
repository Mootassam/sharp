import React, { useEffect } from "react";
import "../styles/styles.css";
import { useSelector, useDispatch } from "react-redux";
import actions from "src/modules/category/list/categoryListActions";
import selector from "src/modules/category/list/categoryListSelectors";
import LoadingModal from "src/shared/LoadingModal";
import { Link } from "react-router-dom";
import { i18n } from "../../../i18n";

function Online() {
  const dispatch = useDispatch();
  const record = useSelector(selector.selectRows);
  const loading = useSelector(selector.selectLoading);

  useEffect(() => {
    dispatch(actions.doFetch());
  }, [dispatch]);

  const supportChannels = [
    {
      id: 1,
      title: "Live Chat",
      description: "Instant support from our team",
      icon: "fas fa-comments",
      color: "#00c6ff",
      comingSoon: true
    },
    {
      id: 2,
      title: "Email Support",
      description: "Get help via email within 24h",
      icon: "fas fa-envelope",
      color: "#9c27b0",
      email: "support@cinema-app.com"
    },
    {
      id: 3,
      title: "FAQs",
      description: "Find answers to common questions",
      icon: "fas fa-question-circle",
      color: "#ff9800",
      link: "/faq"
    }
  ];

  const contactOptions = record?.map((item) => ({
    ...item,
    platform: item.type === "whatsApp" ? "WhatsApp" : "Telegram",
    icon: item.type === "whatsApp" ? "fab fa-whatsapp" : "fab fa-telegram",
    color: item.type === "whatsApp" ? "#25D366" : "#0088cc",
    url: item.type === "whatsApp" 
      ? `https://wa.me/${item.number}`
      : `https://t.me/${item.number}`
  }));

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
          
          .support-app {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: white;
            background: radial-gradient(circle at center top, #0a1c3a, #051122 800px);
            min-height: 100vh;
            max-width: 430px;
            margin: 0 auto;
            position: relative;
            overflow-x: hidden;
          }
          
          .support-container {
            padding: 16px 18px 20px;
          }
          
          /* Header */
          .support-header {
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
          
          .support-title {
            font-size: 1.3rem;
            font-weight: 700;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          /* Help Notice */
          .help-notice {
            background: linear-gradient(135deg, rgba(255, 152, 0, 0.15), rgba(255, 87, 34, 0.15));
            border-radius: 12px;
            padding: 16px;
            margin-bottom: 22px;
            border: 1px solid rgba(255, 152, 0, 0.25);
            backdrop-filter: blur(8px);
            text-align: center;
          }
          
          .help-notice h3 {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 8px;
            color: #ff9800;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }
          
          .help-notice p {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.4;
          }
          
          /* Support Channels */
          .support-channels {
            margin-bottom: 24px;
          }
          
          .channels-title {
            font-size: 1rem;
            font-weight: 600;
            color: white;
            margin-bottom: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          
          .channels-title i {
            color: #00c6ff;
          }
          
          .channels-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
          }
          
          .channel-card {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 10px;
            padding: 14px 10px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.08);
            transition: all 0.2s;
          }
          
          .channel-card:hover {
            background: rgba(255, 255, 255, 0.06);
            transform: translateY(-2px);
          }
          
          .channel-icon {
            font-size: 1.5rem;
            margin-bottom: 8px;
          }
          
          .channel-name {
            font-size: 0.8rem;
            font-weight: 600;
            color: white;
            display: block;
            margin-bottom: 4px;
          }
          
          .channel-status {
            font-size: 0.7rem;
            color: rgba(255, 255, 255, 0.6);
          }
          
          .channel-status.soon {
            color: #ff9800;
          }
          
          /* Contact List */
          .contact-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 24px;
          }
          
          .contact-agent {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 14px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(8px);
            transition: all 0.2s;
          }
          
          .contact-agent:hover {
            transform: translateY(-3px);
            border-color: rgba(255, 255, 255, 0.15);
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
          }
          
          .agent-header {
            padding: 16px 18px;
            background: rgba(0, 104, 200, 0.15);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .agent-name {
            font-size: 1.1rem;
            font-weight: 700;
            color: white;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          
          .agent-name i {
            font-size: 1.2rem;
          }
          
          .agent-content {
            padding: 18px;
            display: flex;
            align-items: center;
            gap: 16px;
          }
          
          .agent-avatar {
            width: 60px;
            height: 60px;
            border-radius: 12px;
            overflow: hidden;
            flex-shrink: 0;
            border: 2px solid rgba(255, 255, 255, 0.1);
          }
          
          .agent-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          .agent-info {
            flex: 1;
          }
          
          .agent-platform {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(255, 255, 255, 0.08);
            color: white;
            padding: 6px 12px;
            border-radius: 8px;
            font-size: 0.8rem;
            font-weight: 600;
            margin-bottom: 8px;
          }
          
          .agent-availability {
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 4px;
          }
          
          .agent-response {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.5);
          }
          
          .agent-action {
            text-align: right;
          }
          
          .contact-button {
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            border: none;
            color: white;
            padding: 10px 20px;
            border-radius: 10px;
            font-size: 0.85rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
          }
          
          .contact-button:hover {
            background: linear-gradient(135deg, #00b8ff, #005bb5);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 104, 200, 0.25);
          }
          
          .contact-button.whatsapp {
            background: linear-gradient(135deg, #25D366, #128C7E);
          }
          
          .contact-button.whatsapp:hover {
            background: linear-gradient(135deg, #1DA851, #0D7C6E);
          }
          
          .contact-button.telegram {
            background: linear-gradient(135deg, #0088cc, #005580);
          }
          
          .contact-button.telegram:hover {
            background: linear-gradient(135deg, #0077bb, #004466);
          }
          
          /* Help Resources */
          .help-resources {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 14px;
            padding: 18px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(8px);
          }
          
          .resources-title {
            font-size: 1rem;
            font-weight: 600;
            color: white;
            margin-bottom: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          
          .resources-title i {
            color: #00c6ff;
          }
          
          .resources-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          
          .resource-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            transition: all 0.2s;
            cursor: pointer;
            text-decoration: none;
            color: inherit;
          }
          
          .resource-item:hover {
            background: rgba(255, 255, 255, 0.08);
          }
          
          .resource-icon {
            width: 36px;
            height: 36px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            flex-shrink: 0;
          }
          
          .resource-text {
            flex: 1;
          }
          
          .resource-name {
            font-size: 0.9rem;
            font-weight: 600;
            color: white;
            margin-bottom: 2px;
          }
          
          .resource-desc {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.6);
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
            .support-container {
              padding: 14px 16px 20px;
            }
            
            .channels-grid {
              grid-template-columns: 1fr;
              gap: 8px;
            }
            
            .channel-card {
              padding: 12px;
            }
            
            .agent-content {
              padding: 16px;
            }
          }
        `}
      </style>

      <div className="support-app">
        <div className="support-container">
          {/* Header */}
          <div className="support-header">
            <Link to="/profile" className="back-button">
              <i className="fas fa-arrow-left"></i>
              Back
            </Link>
            <h1 className="support-title">Customer Support</h1>
          </div>

          {/* Help Notice */}
          <div className="help-notice">
            <h3>
              <i className="fas fa-headset"></i>
              {i18n("cs.note") || "How can we help you today?"}
            </h3>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <div className="loading-text">Loading support agents...</div>
            </div>
          )}

          {/* Support Channels */}
          {!loading && (
            <>
      

              {/* Contact Agents */}
              <div className="contact-list">
                {contactOptions?.map((agent, index) => (
                  <div key={index} className="contact-agent">
                    <div className="agent-header">
                      <div className="agent-name">
                        <i className={agent.icon} style={{ color: agent.color }}></i>
                        {agent.name || "Support Agent"}
                      </div>
                    </div>
                    <div className="agent-content">
                      <div className="agent-avatar">
                        <img 
                          src={agent?.photo?.[0]?.downloadUrl || "/images/default-avatar.png"} 
                          alt={agent.name}
                        />
                      </div>
                      <div className="agent-info">
                        <div className="agent-platform">
                          <i className={agent.icon}></i>
                          {agent.platform}
                        </div>
                        <div className="agent-availability">Available 24/7</div>
                        <div className="agent-response">Response time: under 5 minutes</div>
                      </div>
                      <div className="agent-action">
                        <a 
                          href={agent.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`contact-button ${agent.type === 'whatsApp' ? 'whatsapp' : 'telegram'}`}
                        >
                          <i className={agent.icon}></i>
                          {i18n("cs.contactnow") || "Contact Now"}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Help Resources */}
         
            </>
          )}
        </div>

      </div>
    </>
  );
}

export default Online;