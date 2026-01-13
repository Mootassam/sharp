import { i18n } from "../../../i18n";
import { Link } from "react-router-dom";

function Error403Page() {
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
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1;
            margin-bottom: 10px;
            text-shadow: 0 0 30px rgba(0, 198, 255, 0.3);
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
            background: linear-gradient(135deg, #00c6ff, #0068c8);
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
          
          /* Button - Same as your other buttons */
          .button__error {
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
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            text-decoration: none;
          }
          
          .button__error:hover {
            background: linear-gradient(135deg, #00d2ff, #0075e6);
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(0, 198, 255, 0.2);
          }
          
          .button__error:active {
            transform: translateY(0);
          }
          
          /* Security Icon */
          .security-icon {
            width: 100px;
            height: 100px;
            margin: 0 auto 30px;
            position: relative;
          }
          
          .security-icon-circle {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: linear-gradient(135deg, rgba(0, 198, 255, 0.1), rgba(0, 104, 200, 0.1));
            border: 2px solid rgba(0, 198, 255, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          
          .security-icon-circle::before {
            content: '';
            position: absolute;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 1px solid rgba(0, 198, 255, 0.2);
            animation: pulse 2s infinite;
          }
          
          .security-icon-circle i {
            font-size: 3rem;
            color: #00c6ff;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          @keyframes pulse {
            0% {
              transform: scale(0.8);
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
            
            .security-icon {
              width: 80px;
              height: 80px;
            }
            
            .security-icon-circle {
              width: 80px;
              height: 80px;
            }
            
            .security-icon-circle i {
              font-size: 2.5rem;
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
          }
        `}
      </style>

      <div className="app__error">
        <div className="error-code-container">
          <div className="error-code">403</div>
          <div className="error-title">Access Restricted</div>
          <div className="error-subtitle">Permission Required</div>
        </div>
        
        <div className="security-icon">
          <div className="security-icon-circle">
            <i className="fas fa-lock"></i>
          </div>
        </div>
        
        <div className="error__content">
          <h1>ACCESS DENIED</h1>
          <div className="desc">
            {i18n("errors.403") || "You don't have permission to access this resource. Please contact the administrator if you believe this is an error."}
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

export default Error403Page;