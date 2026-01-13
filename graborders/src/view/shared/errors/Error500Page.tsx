import { i18n } from "../../../i18n";
import { Link } from "react-router-dom";

function Error500Page() {
  return (
    <>
      <style>
        {`
          @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          
          /* Main Container - Same as your other pages */
          .app__error {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: white;
            background: radial-gradient(circle at center top, #0a1c3a, #051122 800px);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            max-width: 430px;
            margin: 0 auto;
            position: relative;
            overflow-x: hidden;
          }
          
          /* Error Code Display */
          .error-code-container {
            text-align: center;
            margin-bottom: 40px;
            position: relative;
          }
          
          .error-code {
            font-size: 8rem;
            font-weight: 900;
            background: linear-gradient(135deg, #ff416c, #ff4b2b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1;
            margin-bottom: 10px;
            text-shadow: 0 0 30px rgba(255, 65, 108, 0.3);
          }
          
          .error-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 5px;
          }
          
          .error-subtitle {
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.6);
          }
          
          /* Server Error Animation */
          .server-container {
            width: 120px;
            height: 120px;
            margin: 0 auto 30px;
            position: relative;
          }
          
          .server-icon {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          
          .server-box {
            width: 80px;
            height: 80px;
            background: rgba(255, 65, 108, 0.1);
            border: 2px solid rgba(255, 65, 108, 0.3);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          
          .server-box::before {
            content: '';
            position: absolute;
            width: 100px;
            height: 100px;
            border-radius: 16px;
            border: 1px solid rgba(255, 65, 108, 0.2);
            animation: serverPulse 2s infinite;
          }
          
          .server-box i {
            font-size: 2.5rem;
            color: #ff416c;
            background: linear-gradient(135deg, #ff416c, #ff4b2b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .server-lights {
            position: absolute;
            bottom: 15px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 8px;
          }
          
          .server-light {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #ff416c;
            animation: serverLightBlink 1.5s infinite;
          }
          
          .server-light:nth-child(1) { animation-delay: 0s; }
          .server-light:nth-child(2) { animation-delay: 0.5s; }
          .server-light:nth-child(3) { animation-delay: 1s; }
          
          @keyframes serverPulse {
            0% {
              transform: scale(0.9);
              opacity: 0.5;
            }
            70% {
              transform: scale(1.1);
              opacity: 0;
            }
            100% {
              transform: scale(1.1);
              opacity: 0;
            }
          }
          
          @keyframes serverLightBlink {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          
          /* Content Box - Same styling as your form containers */
          .error__content {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(8px);
            padding: 30px;
            max-width: 380px;
            width: 100%;
            text-align: center;
            margin-bottom: 20px;
          }
          
          .error__content h1 {
            font-size: 1.4rem;
            font-weight: 700;
            background: linear-gradient(135deg, #ff416c, #ff4b2b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 15px;
          }
          
          .desc {
            font-size: 0.95rem;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.5;
            margin-bottom: 30px;
          }
          
          /* Button - Same as your other buttons but with error color */
          .button__error {
            width: 100%;
            padding: 16px;
            background: linear-gradient(135deg, #ff416c, #ff4b2b);
            border: none;
            border-radius: 12px;
            color: white;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            text-decoration: none;
          }
          
          .button__error:hover {
            background: linear-gradient(135deg, #ff4b6e, #ff5c3b);
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(255, 65, 108, 0.2);
          }
          
          .button__error:active {
            transform: translateY(0);
          }
          
          /* Status Indicators */
          .status-indicators {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 20px;
          }
          
          .status-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
          }
          
          .status-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
          }
          
          .status-dot.active {
            background: #ff416c;
            animation: statusPulse 1.5s infinite;
          }
          
          .status-dot.inactive {
            background: rgba(255, 255, 255, 0.2);
          }
          
          .status-label {
            font-size: 0.7rem;
            color: rgba(255, 255, 255, 0.6);
            text-transform: uppercase;
          }
          
          @keyframes statusPulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          
          /* Responsive */
          @media (max-width: 430px) {
            .app__error {
              padding: 16px;
            }
            
            .error__content {
              padding: 24px;
            }
            
            .error-code {
              font-size: 6rem;
            }
            
            .error-title {
              font-size: 1.3rem;
            }
            
            .button__error {
              padding: 14px;
              font-size: 0.95rem;
            }
            
            .server-container {
              width: 100px;
              height: 100px;
            }
            
            .server-box {
              width: 70px;
              height: 70px;
            }
            
            .server-box i {
              font-size: 2rem;
            }
          }
          
          @media (max-width: 380px) {
            .error__content {
              padding: 20px;
            }
            
            .error-code {
              font-size: 5rem;
            }
            
            .desc {
              font-size: 0.9rem;
            }
            
            .status-indicators {
              flex-direction: column;
              gap: 10px;
            }
          }
        `}
      </style>

      <div className="app__error">
        <div className="error-code-container">
          <div className="error-code">500</div>
          <div className="error-title">Server Error</div>
          <div className="error-subtitle">Internal Server Error</div>
        </div>
        
        <div className="server-container">
          <div className="server-icon">
            <div className="server-box">
              <i className="fas fa-server"></i>
            </div>
            <div className="server-lights">
              <div className="server-light"></div>
              <div className="server-light"></div>
              <div className="server-light"></div>
            </div>
          </div>
        </div>
        
        <div className="error__content">
          <h1>SERVER ERROR</h1>
          <div className="desc">
            {i18n("errors.500") || "We're experiencing some technical difficulties. Our team has been notified and is working to fix the issue. Please try again later."}
          </div>
          
          <div className="status-indicators">
            <div className="status-item">
              <div className="status-dot active"></div>
              <div className="status-label">Server</div>
            </div>
            <div className="status-item">
              <div className="status-dot inactive"></div>
              <div className="status-label">Database</div>
            </div>
            <div className="status-item">
              <div className="status-dot active"></div>
              <div className="status-label">API</div>
            </div>
          </div>
          
          <Link to="/">
            <button className="button__error" type="button">
              <i className="fas fa-home"></i>
              {i18n("errors.backToHome")}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Error500Page;