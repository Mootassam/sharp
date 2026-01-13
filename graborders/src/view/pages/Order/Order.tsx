import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "src/modules/record/list/recordListActions";
import selectors from "src/modules/record/list/recordListSelectors";
import LoadingModal from "src/shared/LoadingModal";
import Calcule from "src/view/shared/utils/Calcule";
import Dates from "src/view/shared/utils/Dates";
import Nodata from "src/view/shared/Nodata";
import SubHeader from "src/view/shared/Header/SubHeader";
import { Rating } from "react-simple-star-rating";
import { i18n } from "../../../i18n";
import { useHistory } from "react-router-dom";

function Order() {
  const [active, setActive] = useState("completed");
  const dispatch = useDispatch();
  const history = useHistory();
  const record = useSelector(selectors.selectRows);
  const loading = useSelector(selectors.selectLoading);
  const total = useSelector(selectors.selectTotal);
  const selectHasRows = useSelector(selectors.selectHasRows);

  useEffect(() => {
    const values = {
      status: active,
    };
    dispatch(actions.doFetch(values, values));
  }, [dispatch, active]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return '#10B981';
      case 'pending':
        return '#F59E0B';
      case 'canceled':
        return '#EF4444';
      default:
        return '#6B7280';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return i18n('order.completed');
      case 'pending':
        return i18n('order.pending');
      case 'canceled':
        return i18n('order.canceled');
      default:
        return status;
    }
  };

  const goBack = () => {
    history.goBack();
  };

  const All = () => (
    <>
      {record.map((item, index) => (
        <div className="order-card" key={`${item.id}-${index}`}>
          <div className="order-header">
            <div className="order-info">
              <div className="order-time">
                <i className="far fa-clock"></i>
                {Dates.currentDate(item?.date)}
              </div>
              <div className="order-number">
                <i className="fas fa-hashtag"></i>
                #{item.number}
              </div>
            </div>
            <div className="order-status" style={{ backgroundColor: getStatusColor(item?.status) }}>
              {getStatusText(item?.status)}
            </div>
          </div>

          <div className="product-section">
            <div className="product-image">
              <img src={item.image || item?.product?.photo[0]?.downloadUrl || item?.product?.image || 'https://via.placeholder.com/70x70/3b82f6/ffffff?text=Product'}
                alt={item.title || item?.product?.title} />
            </div>
            <div className="product-details">
              <div className="product-title">{item?.product?.title}</div>
              <div className="product-rating">
                <Rating
                  initialValue={item?.rating || 0}
                  readonly={true}
                  size={20}
                  fillColor="#FFD700"
                  emptyColor="#CBD5E1"
                />
                <span className="rating-value">{item?.rating?.toFixed(1) || '0.0'}</span>
              </div>
            </div>
          </div>

          <div className="order-summary">
            <div className="summary-item">
              <div className="summary-label">{i18n('order.total')}</div>
              <div className="summary-value">${parseFloat(item?.product?.amount).toFixed(2)}</div>
            </div>
            <div className="summary-item">
              <div className="summary-label">{i18n('order.commission')}</div>
              <div className="summary-value">{item?.product?.commission}%</div>
            </div>
            <div className="summary-item">
              <div className="summary-label">{i18n('order.return')}</div>
              <div className="summary-value highlight">
                ${Calcule.calcule__total(item?.product?.amount, item?.product?.commission)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );

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
          
          /* Main Container */
          .order-app {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: white;
            background: radial-gradient(circle at center top, #0a1c3a, #051122 800px);
            min-height: 100vh;
            max-width: 430px;
            margin: 0 auto;
            position: relative;
            overflow-x: hidden;
          }
          
          .order-container {
            padding: 12px 16px 20px;
          }
          
          /* Header - MATCHING TRANSACTION STYLE */
          .order-header-container {
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
          
          .order-title {
            font-size: 1.2rem;
            font-weight: 700;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          /* Filter Tabs */
          .filter-tabs {
            display: flex;
            background: rgba(255, 255, 255, 0.04);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            padding: 4px;
            margin-bottom: 20px;
            backdrop-filter: blur(8px);
          }
          
          .tab {
            flex: 1;
            padding: 10px 12px;
            cursor: pointer;
            border-radius: 8px;
            font-size: 0.85rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.7);
            transition: all 0.3s ease;
            border: none;
            background: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }
          
          .tab:hover {
            background: rgba(255, 255, 255, 0.05);
          }
          
          .tab.active {
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            color: white;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(0, 198, 255, 0.2);
          }
          
          /* Order Cards */
          .order-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          
          .order-card {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 16px;
            backdrop-filter: blur(8px);
            transition: all 0.2s ease;
          }
          
          .order-card:hover {
            background: rgba(255, 255, 255, 0.08);
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          }
          
          /* Order Header (inside card) */
          .order-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 16px;
            padding-bottom: 12px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }
          
          .order-info {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }
          
          .order-time, .order-number {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.6);
          }
          
          .order-time i, .order-number i {
            font-size: 0.7rem;
          }
          
          .order-status {
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
            color: white;
            text-transform: capitalize;
          }
          
          /* Product Section */
          .product-section {
            display: flex;
            gap: 12px;
            margin-bottom: 16px;
            align-items: center;
          }
          
          .product-image {
            width: 60px;
            height: 60px;
            border-radius: 12px;
            overflow: hidden;
            flex-shrink: 0;
          }
          
          .product-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          .product-details {
            flex: 1;
            min-width: 0;
          }
          
          .product-title {
            font-size: 0.95rem;
            font-weight: 600;
            color: white;
            margin-bottom: 6px;
            line-height: 1.3;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .product-rating {
            display: flex;
            align-items: center;
            gap: 6px;
          }
          
          .rating-value {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.7);
            font-weight: 500;
          }
          
          /* Order Summary */
          .order-summary {
            background: rgba(255, 255, 255, 0.03);
            border-radius: 12px;
            padding: 12px;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
          
          .summary-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 6px 0;
          }
          
          .summary-item:not(:last-child) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          
          .summary-label {
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.6);
          }
          
          .summary-value {
            font-size: 0.9rem;
            font-weight: 600;
            color: white;
          }
          
          .summary-value.highlight {
            color: #10B981;
            font-size: 1rem;
          }
          
          /* Loading State */
          .loading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
            text-align: center;
          }
          
          .loading-spinner {
            width: 40px;
            height: 40px;
            border: 3px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            border-top-color: #00c6ff;
            animation: spin 1s linear infinite;
            margin-bottom: 16px;
          }
          
          .loading-text {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.875rem;
          }
          
          /* Empty State */
          .empty-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
            text-align: center;
          }
          
          .empty-icon {
            font-size: 2.5rem;
            color: rgba(255, 255, 255, 0.1);
            margin-bottom: 16px;
          }
          
          .empty-title {
            font-size: 1rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 8px;
          }
          
          .empty-subtitle {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.5);
            line-height: 1.4;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          /* Responsive */
          @media (max-width: 430px) {
            .order-container {
              padding: 10px 14px 16px;
            }
            
            .order-card {
              padding: 14px;
            }
            
            .product-image {
              width: 56px;
              height: 56px;
            }
            
            .tab {
              padding: 8px 10px;
              font-size: 0.8rem;
            }
          }
          
          @media (max-width: 380px) {
            .order-container {
              padding: 8px 12px 14px;
            }
            
            .order-card {
              padding: 12px;
            }
            
            .product-section {
              gap: 10px;
            }
            
            .product-title {
              font-size: 0.9rem;
            }
          }
        `}
      </style>

      <div className="order-app">
        <div className="order-container">
          {/* Header - Now matches Transaction style */}
          <div className="order-header-container">
            <button className="back-button" onClick={goBack}>
              <i className="fas fa-arrow-left"></i>
              {i18n("buttons.back")}
            </button>
            <h1 className="order-title">{i18n('order.order')}</h1>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button
              className={`tab ${active === "completed" ? "active" : ""}`}
              onClick={() => setActive("completed")}
            >
              <i className="fas fa-check-circle"></i>
              {i18n('order.completed')}
            </button>
            <button
              className={`tab ${active === "pending" ? "active" : ""}`}
              onClick={() => setActive("pending")}
            >
              <i className="fas fa-clock"></i>
              {i18n('order.pending')}
            </button>
            <button
              className={`tab ${active === "canceled" ? "active" : ""}`}
              onClick={() => setActive("canceled")}
            >
              <i className="fas fa-times-circle"></i>
              {i18n('order.canceled')}
            </button>
          </div>

          {/* Order List */}
          <div className="order-list">
            {loading ? (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <div className="loading-text">{i18n('common.loading')}</div>
              </div>
            ) : selectHasRows ? (
              <All />
            ) : (
              <div className="empty-container">
                <div className="empty-icon">
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <div className="empty-title">{i18n('common.nodata')}</div>
                <div className="empty-subtitle">
                  {i18n('order.nodataorder')}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;