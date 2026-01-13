import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/style.css";
import { i18n } from "../../i18n";

function TabBottomNavigator() {
  const location = useLocation();

  const isActive = (pathname) => location.pathname === pathname;

  const tabs = [
    {
      icon: "/images/home/home.png",
      activeIcon: "/images/home/home.png",
      path: "/",
      name: `${i18n("tabbarmenue.home")}`,
    },
    {
      icon: "/images/home/grab.png",
      activeIcon: "/images/home/grab.png",
      path: "/grap",
      name: `${i18n("tabbarmenue.rating")}`,
    },
    {
      icon: "/images/home/mine.png",
      activeIcon: "/images/home/mine.png",
      path: "/profile",
      name: `${i18n("tabbarmenue.profile")}`,
    },
  ];

  return (
    <>
      <style>
        {`
          .bottom-nav-container {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 80px;
            background: rgba(5, 17, 34, 0.95);
            backdrop-filter: blur(20px);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: space-around;
            align-items: center;
            max-width: 430px;
            margin: 0 auto;
            z-index: 1000;
          }
          
          .nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            text-decoration: none;
            flex: 1;
            height: 100%;
            transition: all 0.3s ease;
          }
          
          .nav-icon-container {
            width: 56px;
            height: 56px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 16px;
            margin-bottom: 4px;
            transition: all 0.3s ease;
            position: relative;
          }
          
          .nav-item:not(.center-item) .nav-icon-container {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.05);
          }
          
          .nav-item:not(.center-item).active .nav-icon-container {
            background: rgba(0, 104, 200, 0.2);
            border: 1px solid rgba(0, 104, 200, 0.3);
          }
          
          .nav-icon {
            width: 22px;
            height: 22px;
            object-fit: contain;
            filter: brightness(0.8);
            transition: all 0.3s ease;
          }
          
          .nav-item:not(.center-item).active .nav-icon {
            filter: brightness(1.2);
            transform: scale(1.1);
          }
          
          .nav-label {
            font-size: 0.7rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.6);
            transition: all 0.3s ease;
            text-align: center;
          }
          
          .nav-item:not(.center-item).active .nav-label {
            color: #0068c8;
            font-weight: 600;
          }
          
          /* Center Item (Grap) */
          .center-item {
            margin-top: -60px;
            z-index: 1001;
          }
          
          .center-glow {
            position: absolute;
            top: -15px;
            width: 70px;
            height: 70px;
            background: radial-gradient(circle, rgba(0, 104, 200, 0.2) 0%, transparent 70%);
            z-index: -1;
          }
          
          .center-circle {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: linear-gradient(135deg, #0068c8, #00c6ff);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 25px rgba(0, 104, 200, 0.4);
            border: 3px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
          }
          
          .center-item.active .center-circle {
            transform: scale(1.05);
            box-shadow: 0 12px 30px rgba(0, 104, 200, 0.6);
          }
          
          .center-icon {
            width: 34px;
            height: 34px;
            object-fit: contain;
            filter: brightness(0) invert(1);
          }
          
          .center-label {
            position: absolute;
            bottom: -20px;
            font-size: 0.75rem;
            font-weight: 600;
            color: #0068c8;
            text-align: center;
            width: 100%;
          }
          
          .center-item.active .center-label {
            color: #00c6ff;
          }
          
          /* Active Indicator */
          .active-indicator {
            position: absolute;
            top: -8px;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #0068c8;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .nav-item:not(.center-item).active .active-indicator {
            opacity: 1;
          }
          
          /* Hover Effects */
          .nav-item:not(.center-item):hover .nav-icon-container {
            background: rgba(255, 255, 255, 0.08);
          }
          
          .center-item:hover .center-circle {
            transform: scale(1.08);
            box-shadow: 0 15px 35px rgba(0, 104, 200, 0.5);
          }
          
          /* Responsive */
          @media (max-width: 430px) {
            .bottom-nav-container {
              border-radius: 0;
            }
          }
          
          @media (max-width: 380px) {
            .nav-label {
              font-size: 0.65rem;
            }
            
            .center-circle {
              width: 65px;
              height: 65px;
            }
            
            .center-icon {
              width: 30px;
              height: 30px;
            }
          }
        `}
      </style>

      <div className="bottom-nav-container">
        {tabs.map((item, index) => {
          const active = isActive(item.path);
          const isCenter = item.path === "/grap";
          
          return (
            <Link
              key={index}
              to={item.path}
              className={`nav-item ${active ? "active" : ""} ${isCenter ? "center-item" : ""}`}
            >
              {isCenter ? (
                <>
                  <div className="center-glow"></div>
                  <div className="center-circle">
                    <img 
                      src={item.icon} 
                      alt={item.name}
                      className="center-icon"
                    />
                  </div>
                  <div className="center-label">
                    {i18n("tabbarmenue.rate")}
                  </div>
                </>
              ) : (
                <>
                  <div className="active-indicator"></div>
                  <div className="nav-icon-container">
                    <img 
                      src={item.icon} 
                      alt={item.name}
                      className="nav-icon"
                    />
                  </div>
                  <div className="nav-label">
                    {item.name}
                  </div>
                </>
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default TabBottomNavigator;