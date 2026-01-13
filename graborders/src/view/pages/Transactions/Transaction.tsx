import React, { useEffect, useState } from "react";
import SubHeader from "src/view/shared/Header/SubHeader";
import action from 'src/modules/transaction/list/transactionListActions'
import selector from 'src/modules/transaction/list/transactionListSelectors'
import { useDispatch, useSelector } from 'react-redux';
import Dates from "src/view/shared/utils/Dates";
import LoadingModal from "src/shared/LoadingModal";
import Nodata from "src/view/shared/Nodata";
import { i18n } from "../../../i18n";
import { useHistory } from "react-router-dom";

function Transaction() {
  const [active, setActive] = useState("withdraw");
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(selector.selectLoading);
  const selectHasRows = useSelector(selector.selectHasRows);

  const fetchAll = () => {
    const values = {
      type: active
    };
    dispatch(action.doFetchByUser(values, values));
  };

  useEffect(() => {
    fetchAll();
  }, [dispatch, active]);

  const record = useSelector(selector.selectRows);

  const deposit = () => {
    setActive("deposit");
    const values = {
      type: 'deposit'
    };
    dispatch(action.doFetchByUser(values));
  };

  const withdraw = () => {
    setActive("withdraw");
    const values = {
      type: 'withdraw'
    };
    dispatch(action.doFetchByUser(values, values));
  };

  const allTransactions = () => {
    setActive("");
    const values = {
      type: ''
    };
    dispatch(action.doFetchByUser(values, values));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return '#4CAF50';
      case 'pending':
        return '#FFA000';
      case 'canceled':
        return '#F44336';
      case 'approved':
        return '#2196F3';
      case 'failed':
        return '#9C27B0';
      default:
        return '#757575';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return 'fa-check-circle';
      case 'pending':
        return 'fa-clock';
      case 'canceled':
        return 'fa-times-circle';
      case 'approved':
        return 'fa-check';
      case 'failed':
        return 'fa-exclamation-circle';
      default:
        return 'fa-circle';
    }
  };

  const getTransactionIcon = (type) => {
    switch (type) {
      case 'deposit':
        return 'fa-arrow-down';
      case 'withdraw':
        return 'fa-arrow-up';
      default:
        return 'fa-exchange-alt';
    }
  };

  const all = (item) => {
    return (
      <div className="transaction-item" key={item.id}>
        <div className="transaction-icon">
          <i className={`fas ${getTransactionIcon(item.type)} ${item.type === 'deposit' ? 'deposit-icon' : 'withdraw-icon'}`}></i>
        </div>
        <div className="transaction-details">
          <div className="transaction-info">
            <div className="transaction-type">{item.type === 'deposit' ? i18n('transaction.deposit') : i18n('transaction.withdraw')}</div>
          </div>
          <div className="transaction-status">
            <span className="status-badge" style={{ backgroundColor: getStatusColor(item.status) }}>
              <i className={`fas ${getStatusIcon(item.status)}`}></i>
              {item.status}
            </span>
          </div>
        </div>
        <div className="transaction-amount">
          
          <span className={`amount ${item.type === 'deposit' ? 'positive' : 'negative'}`}>
            {item.type === 'deposit' ? '+' : '-'}${parseFloat(item?.amount).toFixed(2)}
          </span>
                      <div className="transaction-date">{Dates.Date(item?.createdAt)}</div>

        </div>
      </div>
    );
  };

  const goBack = () => {
    history.goBack();
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
          
          /* Main Container */
          .transaction-app {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: white;
            background: radial-gradient(circle at center top, #0a1c3a, #051122 800px);
            min-height: 100vh;
            max-width: 430px;
            margin: 0 auto;
            position: relative;
            overflow-x: hidden;
          }
          
          .transaction-container {
            padding: 12px 16px 20px;
          }
          
          /* Header */
          .transaction-header {
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
          
          .transaction-title {
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
            display:flex; 
            gap:10px;
            text-align: center;
            padding: 10px 12px;
            cursor: pointer;
            border-radius: 8px;
            font-size: 0.85rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.7);
            transition: all 0.3s ease;
            border: none;
            background: transparent;
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
          
          /* Transaction List */
          .transaction-list {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(8px);
            overflow: hidden;
          }
          
          .transaction-item {
            display: flex;
            align-items: center;
            padding: 14px 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            transition: all 0.2s ease;
            cursor: pointer;
          }
          
          .transaction-item:hover {
            background: rgba(255, 255, 255, 0.03);
          }
          
          .transaction-item:last-child {
            border-bottom: none;
          }
          
          /* Transaction Icon */
          .transaction-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 14px;
            flex-shrink: 0;
          }
          
          .deposit-icon {
            color: #4CAF50;
            background: rgba(76, 175, 80, 0.15);
            padding: 10px;
            border-radius: 10px;
            font-size: 0.9rem;
          }
          
          .withdraw-icon {
            color: #FF416C;
            background: rgba(255, 65, 108, 0.15);
            padding: 10px;
            border-radius: 10px;
            font-size: 0.9rem;
          }
          
          /* Transaction Details */
          .transaction-details {
            flex: 1;
            min-width: 0;
          }
          
          .transaction-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 4px;
          }
          
          .transaction-type {
            font-size: 0.95rem;
            font-weight: 600;
            color: white;
          }
          
          .transaction-date {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.5);
          }
          
          .transaction-status {
            display: flex;
            align-items: center;
          }
          
          .status-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 500;
            color: white;
          }
          
          .status-badge i {
            font-size: 0.7rem;
          }
          
          /* Transaction Amount */
          .transaction-amount {
            margin-left: 12px;
            text-align: right;
            flex-shrink: 0;
          }
          
          .amount {
            font-size: 1rem;
            font-weight: 700;
          }
          
          .amount.positive {
            color: #4CAF50;
          }
          
          .amount.negative {
            color: #FF416C;
          }
          
          /* Loading & Empty States */
          .loading-container,
          .empty-container {
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
            .transaction-container {
              padding: 10px 14px 16px;
            }
            
            .transaction-item {
              padding: 12px 14px;
            }
            
            .tab {
              padding: 8px 10px;
              font-size: 0.8rem;
            }
            
            .amount {
              font-size: 0.95rem;
            }
          }
          
          @media (max-width: 380px) {
            .transaction-container {
              padding: 8px 12px 14px;
            }
            
            .transaction-item {
              padding: 10px 12px;
            }
            
            .transaction-icon {
              width: 36px;
              height: 36px;
              margin-right: 12px;
            }
            
            .transaction-type {
              font-size: 0.9rem;
            }
            
            .amount {
              font-size: 0.9rem;
            }
          }
        `}
      </style>

      <div className="transaction-app">
        <div className="transaction-container">
          {/* Header */}
          <div className="transaction-header">
            <button className="back-button" onClick={goBack}>
              <i className="fas fa-arrow-left"></i>
              {i18n("buttons.back")}
            </button>
            <h1 className="transaction-title">{i18n("transaction.transaction")}</h1>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button
              className={`tab ${active === "" ? "active" : ""}`}
              onClick={allTransactions}
            >
              <i className="fas fa-list"></i>
              {i18n("transaction.all")}
            </button>
            <button
              className={`tab ${active === "withdraw" ? "active" : ""}`}
              onClick={withdraw}
            >
              <i className="fas fa-arrow-up"></i>
              {i18n("transaction.withdraw")}
            </button>
            <button
              className={`tab ${active === "deposit" ? "active" : ""}`}
              onClick={deposit}
            >
              <i className="fas fa-arrow-down"></i>
              {i18n("transaction.deposit")}
            </button>
          </div>

          {/* Transaction List */}
          <div className="transaction-list">
            {loading ? (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <div className="empty-title">{i18n("common.loading")}</div>
              </div>
            ) : selectHasRows ? (
              record && record.map((item) => all(item))
            ) : (
              <div className="empty-container">
                <div className="empty-icon">
                  <i className="fas fa-receipt"></i>
                </div>
                <div className="empty-title">{i18n("common.nodata")}</div>
                <div className="empty-subtitle">
                  {i18n("transaction.notransaction")}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Transaction;