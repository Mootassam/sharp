import React, { useState, useEffect, useCallback, useMemo } from "react";
import "../styles/styles.css";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "src/modules/auth/authSelectors";
import actions from "src/modules/product/list/productListActions";
import selector from "src/modules/product/list/productListSelectors";
import LoadingModal from "src/shared/LoadingModal";
import Dates from "src/view/shared/utils/Dates";
import recordActions from "src/modules/record/form/recordFormActions";
import recordListAction from "src/modules/record/list/recordListActions";
import recordSelector from "src/modules/record/list/recordListSelectors";
import selectors from "src/modules/record/list/recordListSelectors";
import { useHistory } from "react-router-dom";
import authActions from "src/modules/auth/authActions";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import selectorsC from "src/modules/company/list/companyListSelectors";
import listactions from "src/modules/company/list/companyListActions";
import { i18n } from "../../../i18n";

const Grappage = () => {
  const [rating, setRating] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [lodingRoll, setLoadingRoll] = useState(false);
  
  const history = useHistory();
  const dispatch = useDispatch();
  
  const totalperday = useSelector(selectors.selectTotalPerday);
  const loadingImage = useSelector(selectorsC?.selectLoading);
  const logorecord = useSelector(selectorsC.selectRows);
  const record = useSelector(authSelectors.selectCurrentUser);
  const items = useSelector(selector.selectRows);
  const loading = useSelector(selector.selectLoading);
  const selectCountRecord = useSelector(recordSelector.selectCountRecord);
  const error = useSelector(recordSelector.selectError);
  const currentUser = useSelector(authSelectors.selectCurrentUser);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const refreshItems = useCallback(async () => {
    try {
      await dispatch(recordListAction.doFetch());
      await dispatch(actions.doFetch());
      await dispatch(authActions.doRefreshCurrentUser());
      await dispatch(recordListAction.doCountDay());
    } catch (error) {
      console.error("Error during refreshing items:", error);
    }
  }, [dispatch]);

  const stop = useMemo(() => {
    return parseInt(selectCountRecord) === parseInt(record?.vip?.dailyorder);
  }, [selectCountRecord, record]);

  const rollAll = async () => {
    try {
      setLoadingRoll(true);
      await dispatch(recordListAction.doCheck());
      if (error) {
        return;
      }
      await dispatch(actions.doFetch());

      setTimeout(() => {
        setShowModal(true);
      }, 1000);

      setLoadingRoll(false);
    } catch (error) {
      setLoadingRoll(false);
    }
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const [number] = useState(Dates.Number());

  useEffect(() => {
    dispatch(recordListAction.doCount());
    dispatch(listactions.doFetch());
    dispatch(recordListAction.doCountDay());
  }, [dispatch]);

  const calculateTotal = (price, commission) => {
    const total = (parseFloat(commission) / 100) * parseFloat(price);
    return total.toFixed(3);
  };

  const submit = async () => {
    const values = {
      number: number,
      product: items?.id,
      status: items?.combo ? "pending" : "completed",
      user: currentUser.id,
      rating: rating,
    };
    await dispatch(recordActions.doCreate(values));
    await refreshItems();
    setShowModal(false);
  };

  const progressPercentage = useMemo(() => {
    const done = currentUser?.tasksDone || 0;
    const total = record?.vip?.dailyorder || 1;
    return (done / total) * 100;
  }, [currentUser, record]);

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
          
          .task-container {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: white;
            background: radial-gradient(circle at center top, #0a1c3a, #051122 800px);
            min-height: 100vh;
            max-width: 430px;
            margin: 0 auto;
            position: relative;
            overflow-x: hidden;
          }
          
          /* Task Content */
          .task-content {
            padding: 16px 18px 90px;
          }
          
          /* Task Stats - Compact */
          .task-info {
            margin-bottom: 22px;
          }
          
          .task-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin-bottom: 18px;
          }
          
          .task-stat {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 14px 10px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.08);
            transition: all 0.2s;
          }
          
          .task-stat:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(0, 198, 255, 0.2);
            transform: translateY(-2px);
          }
          
          .task-value {
            display: block;
            font-size: 1.3rem;
            font-weight: 800;
            margin-bottom: 4px;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .task-label {
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.7);
            display: block;
          }
          
          /* Progress Container */
          .progress-container {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 12px;
            padding: 14px;
            border: 1px solid rgba(255, 255, 255, 0.08);
          }
          
          .progress-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 500;
          }
          
          .progress-bar-container {
            height: 6px;
            background: rgba(255, 255, 255, 0.08);
            border-radius: 3px;
            overflow: hidden;
            margin-bottom: 8px;
          }
          
          .progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #00c6ff, #0068c8);
            border-radius: 3px;
            width: ${progressPercentage}%;
            transition: width 0.5s ease;
          }
          
          /* Task Display Area */
          .task-display {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 14px;
            padding: 20px;
            margin-bottom: 22px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            text-align: center;
            backdrop-filter: blur(8px);
          }
          
          .task-gif {
            height: 170px;
            object-fit: contain;
            margin-bottom: 16px;
            border-radius: 10px;
          }
          
          .task-message {
            margin-top: 10px;
          }
          
          .task-title {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 6px;
            color: white;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .task-subtitle {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.4;
          }
          
          /* Action Buttons */
          .action-buttons {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 20px;
          }
          
          .btn-primary {
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            border: none;
            color: white;
            padding: 14px 20px;
            border-radius: 12px;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
          }
          
          .btn-primary:hover:not(:disabled) {
            background: linear-gradient(135deg, #00b8ff, #005bb5);
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0, 104, 200, 0.25);
          }
          
          .btn-primary:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          
          .btn-secondary {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: white;
            padding: 14px 20px;
            border-radius: 12px;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            text-decoration: none;
            text-align: center;
          }
          
          .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.12);
            border-color: rgba(255, 255, 255, 0.25);
            transform: translateY(-2px);
          }
          
          /* Terms Link */
          .terms-link {
            text-align: center;
            margin-top: 16px;
          }
          
          .terms-link a {
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.8rem;
            text-decoration: none;
            transition: all 0.2s;
          }
          
          .terms-link a:hover {
            color: #00c6ff;
          }
          
          /* Modal Styles */
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.85);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 5000;
            padding: 20px;
            backdrop-filter: blur(10px);
          }
          
          .modal-container {
            background: radial-gradient(circle at center top, #0a1c3a, #051122);
            border-radius: 18px;
            width: 100%;
            max-width: 380px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            overflow: hidden;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          }
          
          .modal-header {
            padding: 20px;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            position: relative;
          }
          
          .modal-close {
            position: absolute;
            top: 16px;
            right: 16px;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: white;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s;
          }
          
          .modal-close:hover {
            background: rgba(255, 255, 255, 0.12);
            transform: rotate(90deg);
          }
          
          .modal-product-img {
            width: 120px;
            // height: 120px;
            object-fit: cover;
            border-radius: 10px;
            margin: 12px auto;
            border: 2px solid rgba(0, 198, 255, 0.3);
          }
          
          .modal-title {
            font-size: 1.3rem;
            font-weight: 700;
            margin: 8px 0;
            color: white;
          }
          
          .modal-content {
            padding: 20px;
          }
          
          .modal-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          
          .modal-row:last-child {
            border-bottom: none;
          }
          
          .modal-label {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
          }
          
          .modal-value {
            font-size: 0.95rem;
            font-weight: 600;
            color: white;
          }
          
          .modal-income {
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .modal-rating {
            margin: 20px 0;
            text-align: center;
          }
          
          .rating-title {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 12px;
          }
          
          .rating-stars {
            display: flex;
            justify-content: center;
            gap: 8px;
          }
          
          .rating-star {
            font-size: 1.8rem;
            cursor: pointer;
            transition: all 0.2s;
          }
          
          .rating-star:hover {
            transform: scale(1.2);
          }
          
          .modal-submit {
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            border: none;
            color: white;
            padding: 14px 20px;
            border-radius: 10px;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            margin-top: 10px;
          }
          
          .modal-submit:hover {
            background: linear-gradient(135deg, #00b8ff, #005bb5);
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0, 104, 200, 0.25);
          }
          
          /* Loading Overlay */
          .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            backdrop-filter: blur(10px);
          }
          
          .loading-spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255, 255, 255, 0.1);
            border-top: 3px solid #00c6ff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
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
            .task-content {
              padding: 14px 16px 90px;
            }
            
            .task-stats {
              gap: 8px;
            }
            
            .task-stat {
              padding: 12px 8px;
            }
            
            .task-value {
              font-size: 1.2rem;
            }
            
            .task-display {
              padding: 18px;
            }
            
            .task-gif {
              width: 120px;
              height: 120px;
            }
          }
        `}
      </style>

      <div className="task-container">
        {/* Main Content */}
        <div className="task-content">
          {/* Task Stats */}
          <div className="task-info">
            <div className="task-stats">
              <div className="task-stat">
                <span className="task-value">${totalperday?.toFixed(3)}</span>
                <span className="task-label">Today</span>
              </div>
              <div className="task-stat">
                <span className="task-value">${currentUser?.balance?.toFixed(2)}</span>
                <span className="task-label">Balance</span>
              </div>
              <div className="task-stat">
                <span className="task-value">${currentUser?.freezeblance?.toFixed(2)}</span>
                <span className="task-label">Frozen</span>
              </div>
            </div>
            
            <div className="progress-container">
              <div className="progress-header">
                <span>Tasks Done</span>
                <span>{currentUser?.tasksDone || 0}/{record?.vip?.dailyorder || 0}</span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          {/* Task Display Area */}
          <div className="task-display">
            <img src="/images/start_img.gif" alt="Start Task" className="task-gif" />
            <div className="task-message">
              <div className="task-title">Ready to Earn?</div>
              <div className="task-subtitle">Complete tasks and earn rewards instantly</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button
              className="btn-primary"
              onClick={rollAll}
              disabled={lodingRoll || stop}
            >
              {lodingRoll ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Loading
                </>
              ) : (
                <>
                  <i className="fas fa-play"></i>
                  {i18n("buttons.start")}
                </>
              )}
            </button>
            
            <Link to="/order" className="btn-secondary">
              <i className="fas fa-history"></i>
              {i18n("buttons.orders")}
            </Link>
          </div>

          {/* Terms Link */}
          <div className="terms-link">
            <Link to="/tc">
              {i18n("text.termsconditions")}
            </Link>
          </div>
        </div>

        {/* Modal */}
        {!loading && showModal && items && (
          <div className="modal-overlay">
            <div className="modal-container">
              <div className="modal-header">
                <button className="modal-close" onClick={hideModal}>
                  <i className="fas fa-times"></i>
                </button>
                
                {items?.photo && items?.photo[0]?.downloadUrl || items.image  &&  (
                  <img
                      src={items.image || items?.photo[0]?.downloadUrl  || 'https://via.placeholder.com/70x70/3b82f6/ffffff?text=Product'}
            alt={items.title || items?.product?.title}
                    className="modal-product-img"
                        loading="lazy"
                  />
                )}
                
                <div className="modal-title">{items?.title}</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                  {i18n("text.sumbitInformation")}
                </div>
              </div>
              
              <div className="modal-content">
                <div className="modal-row">
                  <span className="modal-label">{i18n("text.creationtime")}</span>
                  <span className="modal-value">{Dates.current()}</span>
                </div>
                
                
                
                <div className="modal-row">
                  <span className="modal-label">{i18n("text.orderamount")}</span>
                  <span className="modal-value">${items?.amount}</span>
                </div>
                
                <div className="modal-row">
                  <span className="modal-label">{i18n("text.income")}</span>
                  <span className="modal-value modal-income">
                    ${calculateTotal(items?.amount, items?.commission)}
                  </span>
                </div>
                
                <div className="modal-rating">
                  <div className="rating-title">
                    {i18n("text.buyerating")} ({rating}/5)
                  </div>
                  <div className="rating-stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="rating-star"
                        onClick={() => handleRating(star)}
                        style={{ 
                          color: star <= rating ? '#ffd700' : 'rgba(255, 255, 255, 0.3)' 
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="modal-submit" onClick={submit}>
                  <i className="fas fa-check-circle"></i>
                  {i18n("buttons.submit")}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Loading Overlay */}
        {loading && (
          <div className="loading-overlay">
            <div className="loading-spinner"></div>
          </div>
        )}

  
      </div>
    </>
  );
};

export default Grappage;