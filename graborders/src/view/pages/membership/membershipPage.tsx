import React, { useState } from "react";
import { Link } from "react-router-dom";

function MembershipPage() {
  const [selectedPlan, setSelectedPlan] = useState('limitless');

  const membershipPlans = [
    {
      id: 'extras',
      name: 'ODEON Extras',
      price: 'Free',
      period: 'to join',
      tag: 'Most Popular',
      color: '#00c6ff',
      features: [
        'Earn 25 points for every £1',
        'Free birthday treat – large popcorn',
        'Pay less on Saver Mondays, with tickets from as little as £4.50*',
        'Fuss-free refunds and flexible bookings',
      ],
      buttonText: 'Join ODEON Extras'
    },
    {
      id: 'extras-plus',
      name: 'ODEON Extras Plus',
      price: 'Free',
      period: 'Watch 2 movies to upgrade',
      tag: 'Premium',
      color: '#0068c8',
      features: [
        'Double points every time – 50 points for every £1',
        'Extra special birthday treat – large Classic Combo',
        'Pay less on Saver Mondays, with tickets from as little as £4.50*',
        'PLUS: Get 10% off tickets every time you book online',
        'PLUS: Invites to exclusive member screenings',
        'PLUS: Large popcorn for medium prices',
      ],
      buttonText: 'Join Extras Plus'
    },
    {
      id: 'limitless',
      name: 'myLIMITLESS',
      price: '£16.99',
      period: '/ month',
      tag: 'Best Value',
      color: '#9c27b0',
      features: [
        'See as many movies as you like',
        'Extra special birthday treat',
        'Enjoy 10% off food and drink',
        'Get 10% off tickets for friends and family',
        'Invites to exclusive member screenings',
        'Additional charges for Luxe cinemas will apply',
      ],
      buttonText: 'Sign up'
    },
    {
      id: 'limitless-plus',
      name: 'myLIMITLESS Plus',
      price: '£19.99',
      period: '/ month',
      tag: 'Ultimate',
      color: '#ff9800',
      features: [
        'See as many movies as you like',
        'Extra special birthday treat',
        'Enjoy 10% off food and drink',
        'Get 10% off tickets for friends and family',
        'Exclusive invites to see movies before they\'re released',
        'PLUS: Access to Luxe cinemas included',
        'PLUS: Infinite premium screen upgrades to iSense and 3D',
      ],
      buttonText: 'Sign up'
    }
  ];

  const studentOffer = {
    title: "20% off myLIMITLESS Plus | Exclusive to students",
    description: "We're offering a whopping 20% off myLIMITLESS Plus* for students when verified through Student Beans.",
    deal: "Now only £15.99/month",
    savings: "Saving you £4/month",
    buttonText: "Collect code from Student Beans"
  };

  const membershipBenefits = [
    { name: 'ODEON Extras', icon: '🎁', available: true },
    { name: 'ODEON Extras Plus', icon: '👑', available: 'Visit twice to earn' },
    { name: 'myLIMITLESS (£16.99)', icon: '🎬', available: true },
    { name: 'myLIMITLESS Plus (£19.99)', icon: '⭐', available: true }
  ];

  const comparisonFeatures = [
    { feature: 'Flexible film bookings', extras: true, extrasPlus: true, limitless: true, limitlessPlus: true },
    { feature: 'Special birthday treat', extras: true, extrasPlus: true, limitless: true, limitlessPlus: true },
    { feature: 'Exclusive member screenings', extras: false, extrasPlus: true, limitless: true, limitlessPlus: true },
    { feature: '10% off online tickets*', extras: false, extrasPlus: true, limitless: false, limitlessPlus: false },
    { feature: 'Medium to large popcorn upgrades', extras: false, extrasPlus: true, limitless: false, limitlessPlus: false },
    { feature: 'Watch as many films as you like', extras: false, extrasPlus: false, limitless: true, limitlessPlus: true },
    { feature: 'Enjoy 10% off Food and Drink', extras: false, extrasPlus: false, limitless: true, limitlessPlus: true },
    { feature: 'Premium seat and screen upgrades included', extras: false, extrasPlus: false, limitless: false, limitlessPlus: true },
    { feature: 'No extra charge for ODEON Luxe cinemas', extras: false, extrasPlus: false, limitless: false, limitlessPlus: true }
  ];

  const handleJoinClick = () => {
    window.open("https://www.odeon.co.uk/memberships/", "_blank", "noopener,noreferrer");
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
          
          .membership-app {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: white;
            background: radial-gradient(circle at center top, #0a1c3a, #051122 800px);
            min-height: 100vh;
            max-width: 430px;
            margin: 0 auto;
            position: relative;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
            overflow-x: hidden;
          }
          
          .membership-content {
            padding: 10px 16px 80px;
          }
          
          /* Hero Banner */
          .membership-hero {
            position: relative;
            margin-bottom: 25px;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          }
          
          .hero-image {
            width: 100%;
            object-fit: cover;
            display: block;
          }
          
          .hero-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
            padding: 20px;
          }
          
          .hero-overlay h1 {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .hero-overlay p {
            font-size: 0.9rem;
            opacity: 0.9;
            line-height: 1.5;
          }
          
          /* Back Button */
          .back-button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #00c6ff;
            text-decoration: none;
            font-size: 0.9rem;
            margin-bottom: 20px;
            transition: all 0.3s;
          }
          
          .back-button:hover {
            gap: 12px;
          }
          
          /* Membership Plans Grid */
          .plans-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-bottom: 30px;
          }
          
          .plan-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s;
            cursor: pointer;
            position: relative;
          }
          
          .plan-card.selected {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(0, 198, 255, 0.5);
            box-shadow: 0 8px 25px rgba(0, 104, 200, 0.2);
            transform: translateY(-5px);
          }
          
          .plan-tag {
            position: absolute;
            top: 12px;
            right: 12px;
            background: linear-gradient(135deg, #ff416c, #ff4b2b);
            color: white;
            padding: 4px 10px;
            border-radius: 12px;
            font-size: 0.7rem;
            font-weight: 600;
            z-index: 2;
          }
          
          .plan-name {
            font-size: 1.1rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: white;
          }
          
          .plan-price {
            font-size: 2rem;
            font-weight: 800;
            margin-bottom: 5px;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .plan-period {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 15px;
          }
          
          .plan-features {
            list-style: none;
            margin-top: 15px;
          }
          
          .plan-features li {
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 8px;
            padding-left: 20px;
            position: relative;
            line-height: 1.4;
          }
          
          .plan-features li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #00c6ff;
            font-weight: bold;
          }
          
          .plan-button {
            width: 100%;
            background: linear-gradient(135deg, #0068c8, #00c6ff);
            border: none;
            color: white;
            padding: 12px;
            border-radius: 10px;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 15px;
          }
          
          .plan-button:hover {
            background: linear-gradient(135deg, #005bb5, #00b8ff);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 104, 200, 0.3);
          }
          
          /* Student Offer */
          .student-offer {
            background: linear-gradient(135deg, rgba(156, 39, 176, 0.2), rgba(255, 152, 0, 0.2));
            border-radius: 16px;
            padding: 20px;
            margin-bottom: 25px;
            border: 1px solid rgba(156, 39, 176, 0.3);
            position: relative;
            overflow: hidden;
          }
          
          .student-offer:before {
            content: "🎓";
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 2rem;
            opacity: 0.2;
          }
          
          .student-title {
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: white;
          }
          
          .student-description {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 15px;
            line-height: 1.5;
          }
          
          .student-deal {
            font-size: 1.4rem;
            font-weight: 800;
            color: #ff9800;
            margin-bottom: 5px;
          }
          
          .student-savings {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 15px;
          }
          
          /* Comparison Table */
          .comparison-section {
            background: rgba(255, 255, 255, 0.03);
            border-radius: 16px;
            padding: 20px;
            margin-bottom: 25px;
            overflow-x: auto;
          }
          
          .comparison-title {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 20px;
            color: white;
            text-align: center;
          }
          
          .comparison-table {
            width: 100%;
            border-collapse: collapse;
            min-width: 600px;
          }
          
          .comparison-table th {
            text-align: center;
            padding: 12px 8px;
            font-size: 0.8rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.9);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .comparison-table td {
            padding: 12px 8px;
            text-align: center;
            font-size: 0.8rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          
          .feature-cell {
            text-align: left !important;
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.85rem;
          }
          
          .check-mark {
            color: #00c6ff;
            font-size: 1rem;
          }
          
          .cross-mark {
            color: rgba(255, 255, 255, 0.3);
            font-size: 1rem;
          }
          
          /* Membership Cards */
          .membership-cards {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 25px;
          }
          
          .membership-detail-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 25px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .membership-detail-title {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: white;
          }
          
          .membership-detail-subtitle {
            font-size: 1.1rem;
            color: #00c6ff;
            margin-bottom: 10px;
            font-weight: 600;
          }
          
          .membership-detail-description {
            font-size: 0.95rem;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.6;
            margin-bottom: 20px;
          }
          
          /* Bottom Navigation */
          .bottom-nav {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(10, 28, 58, 0.95);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: space-around;
            padding: 12px 0;
            max-width: 430px;
            margin: 0 auto;
            z-index: 100;
            backdrop-filter: blur(10px);
          }
          
          .nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
            color: rgba(255, 255, 255, 0.6);
            text-decoration: none;
            font-size: 0.75rem;
            transition: all 0.3s;
            padding: 5px;
          }
          
          .nav-item.active {
            color: #0068c8;
          }
          
          .nav-item i {
            font-size: 1.2rem;
          }
          
          .disclaimer {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.5);
            text-align: center;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            line-height: 1.4;
          }
          
          @media (max-width: 430px) {
            .membership-app {
              box-shadow: none;
            }
            
            .membership-content {
              padding: 8px 12px 80px;
            }
            
            .plans-grid {
              grid-template-columns: 1fr;
            }
            
            .comparison-section {
              padding: 15px;
            }
          }
        `}
      </style>

      <div className="membership-app">
        <div className="membership-content">
          {/* Back Button */}
          <Link to="/" className="back-button">
            <i className="fas fa-arrow-left"></i>
            Back to Home
          </Link>

          {/* Hero Banner */}
          <div className="membership-hero">
            <img 
              src="https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cinema Membership"
              className="hero-image"
            />
            <div className="hero-overlay">
              <h1>Movie perks. More savings. More movie magic.</h1>
              <p>Whether it's ODEON EXTRAS or myLIMITLESS, we have the perfect membership for every movie lover.</p>
              <p>Join today to start enjoying bigger savings, unbeatable rewards and exclusive member benefits.</p>
            </div>
          </div>

          {/* Our Memberships */}
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px', color: 'white' }}>
            Our Memberships
          </h2>

          {/* Membership Plans Grid */}
          <div className="plans-grid">
            {membershipPlans.map((plan) => (
              <div 
                key={plan.id}
                className={`plan-card ${selectedPlan === plan.id ? 'selected' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <div className="plan-name">{plan.name}</div>
                <div className="plan-price">{plan.price}</div>
                <div className="plan-period">{plan.period}</div>
                <ul className="plan-features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="plan-button" onClick={handleJoinClick}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>

          {/* Student Offer */}
          <div className="student-offer">
            <h3 className="student-title">{studentOffer.title}</h3>
            <p className="student-description">{studentOffer.description}</p>
            <div className="student-deal">{studentOffer.deal}</div>
            <div className="student-savings">{studentOffer.savings}</div>
            <button className="plan-button" onClick={handleJoinClick}>
              <i className="fas fa-graduation-cap"></i> {studentOffer.buttonText}
            </button>
          </div>

          {/* Membership Details */}
          <div className="membership-cards">
            <div className="membership-detail-card">
              <h3 className="membership-detail-title">ODEON Extras</h3>
              <div className="membership-detail-subtitle">EXTRA DISCOUNTS. EXTRA TREATS. EXTRA PERKS.</div>
              <p className="membership-detail-description">
                Earn points with every purchase and unlock even greater rewards the more you visit.
              </p>
              <button className="plan-button" onClick={handleJoinClick}>
                Discover ODEON Extras
              </button>
            </div>

            <div className="membership-detail-card">
              <h3 className="membership-detail-title">ODEON Extras Plus</h3>
              <div className="membership-detail-subtitle">MORE DISCOUNTS • MORE TREATS • MORE POINTS*</div>
              <p className="membership-detail-description">
                Become an EXTRA-special member and unlock even more perks, including 10% off online bookings.
              </p>
              <button className="plan-button" onClick={handleJoinClick}>
                Discover ODEON Extras Plus
              </button>
            </div>

            <div className="membership-detail-card">
              <h3 className="membership-detail-title">myLIMITLESS</h3>
              <div className="membership-detail-subtitle">Infinite movies, bigger discounts, and our best partner offers</div>
              <p className="membership-detail-description">
                All from just £16.99 a month. Watch unlimited movies whenever you like.
              </p>
              <button className="plan-button" onClick={handleJoinClick}>
                Discover myLIMITLESS
              </button>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="comparison-section">
            <h3 className="comparison-title">Membership Comparison</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Features</th>
                    {membershipBenefits.map((benefit) => (
                      <th key={benefit.name}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <span style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{benefit.icon}</span>
                          <span style={{ fontSize: '0.7rem' }}>{benefit.name}</span>
                          {typeof benefit.available === 'string' && (
                            <span style={{ fontSize: '0.6rem', color: '#00c6ff', marginTop: '3px' }}>
                              {benefit.available}
                            </span>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index}>
                      <td className="feature-cell">{item.feature}</td>
                      <td>{item.extras ? <span className="check-mark">✓</span> : <span className="cross-mark">✗</span>}</td>
                      <td>{item.extrasPlus ? <span className="check-mark">✓</span> : <span className="cross-mark">✗</span>}</td>
                      <td>{item.limitless ? <span className="check-mark">✓</span> : <span className="cross-mark">✗</span>}</td>
                      <td>{item.limitlessPlus ? <span className="check-mark">✓</span> : <span className="cross-mark">✗</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="disclaimer">
            *Minimum age applies. Extra discounts refer to Saver Mondays discounted tickets for ODEON Extras members. 
            Criteria for earning additional benefits applies. Points are earned at a rate of 25 points per £1 spent 
            (category exclusions for points earning and redemptions apply). For full terms and conditions and details 
            of membership benefits, visit ODEON.co.uk/extras.
          </div>
        </div>

 
      </div>
    </>
  );
}

export default MembershipPage;