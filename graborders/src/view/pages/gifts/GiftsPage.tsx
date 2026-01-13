import React from "react";
import { Link } from "react-router-dom";

function GiftsPage() {
  // Handler for external link to Odeon
  const handleExternalRedirect = () => {
    window.open("https://www.odeon.co.uk/gift-shop/store/", "_blank", "noopener,noreferrer");
  };

  // Gift Store Products Data
  const giftProducts = [
    {
      id: 1,
      title: "Gift Card",
      description: "Give someone the gift of cinema. They can use it for tickets, snacks, and drinks.",
      price: "From £25.00",
      image: "https://plus.unsplash.com/premium_photo-1728670182314-a8aefbb9d53c?q=80&w=1347&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cta: "Buy Gift Cards Online",
      details: "Can be used online, on the app, or in-cinema for tickets and food. Valid for 2 years from issue.[citation:4]"
    },
    {
      id: 2,
      title: "myLIMITLESS Annual Gift",
      description: "The perfect gift for a cinema fan: endless movies, 10% off food, and exclusive screenings.",
      price: "£139.00 / year",
      image: "https://images.unsplash.com/photo-1647221598276-124ebb861536?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cta: "Gift a Membership",
      badge: "25% OFF"
    },
    {
      id: 3,
      title: "myLIMITLESS Plus",
      description: "Includes access to Luxe cinemas and premium screen upgrades.",
      price: "£164.00 / year",
      image: "https://images.unsplash.com/photo-1585647347384-2593bc35786b?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      cta: "View Details",
      badge: "NEW YEAR SALE"
    }
  ];

  // Offers & Competitions
  const currentOffers = [
    "Saver Mondays - Tickets from £4.50",
    "Family Bundle Deals - Save 25%",
    "Student Discount - 30% off",
    "Weekend Combo Specials",
    "Exclusive App-Only Competitions"
  ];

  return (
    <>
      <style>
        {`
          @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
          
          * { margin: 0; padding: 0; box-sizing: border-box; }
          
          .gifts-app {
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
          
          .gifts-content { padding: 10px 16px 80px; }
          
          /* Back Button */
          .back-button {
            display: inline-flex; align-items: center; gap: 8px;
            color: #00c6ff; text-decoration: none; font-size: 0.9rem;
            margin-bottom: 20px; transition: all 0.3s;
          }
          .back-button:hover { gap: 12px; }
          
          /* Hero Banner */
          .gifts-hero {
            position: relative; margin-bottom: 25px;
            border-radius: 16px; overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          }
          .hero-image {
            width: 100%; height: 180px; object-fit: cover;
            display: block; transition: transform 0.5s;
          }
          .gifts-hero:hover .hero-image { transform: scale(1.02); }
          .hero-overlay {
            position: absolute; bottom: 0; left: 0; right: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.95), transparent);
            padding: 20px;
          }
          .hero-overlay h1 {
            font-size: 1.8rem; font-weight: 700; margin-bottom: 8px;
            background: linear-gradient(135deg, #00c6ff, #0068c8);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .hero-overlay p {
            font-size: 0.9rem; opacity: 0.9; line-height: 1.5;
          }
          
          /* Gift Store Section */
          .gift-store-intro {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 16px; padding: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            margin-bottom: 25px; text-align: center;
          }
          .store-headline {
            font-size: 1.4rem; font-weight: 700;
            margin-bottom: 10px; color: #00c6ff;
          }
          .store-subtitle {
            font-size: 0.95rem; color: rgba(255, 255, 255, 0.8);
            line-height: 1.5;
          }
          
          /* Gift Products Grid */
          .gifts-grid { display: flex; flex-direction: column; gap: 20px; margin-bottom: 25px; }
          
          .gift-card {
            background: rgba(255, 255, 255, 0.05); border-radius: 16px;
            overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s; cursor: pointer;
          }
          .gift-card:hover {
            transform: translateY(-5px); background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 10px 25px rgba(0, 104, 200, 0.2);
          }
          .card-image-container { position: relative; height: 200px; overflow: hidden; }
          .card-image {
            width: 100%; height: 100%; object-fit: cover;
            transition: transform 0.5s;
          }
          .gift-card:hover .card-image { transform: scale(1.05); }
          .card-badge {
            position: absolute; top: 12px; right: 12px;
            background: linear-gradient(135deg, #ff416c, #ff4b2b);
            color: white; padding: 6px 12px; border-radius: 12px;
            font-size: 0.75rem; font-weight: 600; z-index: 2;
          }
          .card-content { padding: 20px; }
          .card-title {
            font-size: 1.3rem; font-weight: 700; margin-bottom: 10px;
            color: white;
          }
          .card-price {
            font-size: 1.4rem; font-weight: 800; margin-bottom: 10px;
            background: linear-gradient(135deg, #ffd700, #ff9800);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .card-description {
            font-size: 0.9rem; line-height: 1.5;
            color: rgba(255, 255, 255, 0.8); margin-bottom: 15px;
          }
          .card-details {
            font-size: 0.8rem; color: rgba(255, 255, 255, 0.6);
            font-style: italic; margin-bottom: 15px;
            padding-left: 15px; border-left: 2px solid #00c6ff;
          }
          .gift-button {
            width: 100%; background: linear-gradient(135deg, #0068c8, #00c6ff);
            border: none; color: white; padding: 12px; border-radius: 10px;
            font-size: 0.9rem; font-weight: 600; cursor: pointer;
            transition: all 0.3s; display: flex; align-items: center;
            justify-content: center; gap: 10px; margin-top: 10px;
          }
          .gift-button:hover {
            background: linear-gradient(135deg, #005bb5, #00b8ff);
            transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0, 104, 200, 0.3);
          }
          .secondary-button {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          .secondary-button:hover {
            background: rgba(255, 255, 255, 0.15);
          }
          
          /* Existing Card Section */
          .existing-card-section {
            background: linear-gradient(135deg, rgba(156, 39, 176, 0.1), rgba(255, 152, 0, 0.1));
            border-radius: 16px; padding: 20px; margin-bottom: 25px;
            text-align: center; border: 1px solid rgba(156, 39, 176, 0.2);
          }
          .existing-card-title {
            font-size: 1.3rem; font-weight: 700; margin-bottom: 15px;
            color: white;
          }
          
          /* New Year Sale Banner */
          .sale-banner {
            background: linear-gradient(135deg, rgba(255, 152, 0, 0.2), rgba(255, 65, 108, 0.2));
            border-radius: 16px; padding: 25px; margin-bottom: 25px;
            border: 1px solid rgba(255, 152, 0, 0.3); position: relative;
            overflow: hidden;
          }
          .sale-banner:before {
            content: "🎉"; position: absolute; top: 15px; right: 15px;
            font-size: 2.5rem; opacity: 0.2;
          }
          .sale-title {
            font-size: 1.5rem; font-weight: 800; margin-bottom: 10px;
            color: #ff9800;
          }
          .sale-subtitle {
            font-size: 0.95rem; color: rgba(255, 255, 255, 0.9);
            margin-bottom: 15px; line-height: 1.5;
          }
          .sale-highlight {
            font-size: 1.8rem; font-weight: 800; color: #ffd700;
            margin: 15px 0; text-align: center;
          }
          .sale-note {
            font-size: 0.8rem; color: rgba(255, 255, 255, 0.6);
            font-style: italic; margin-top: 15px; line-height: 1.4;
          }
          
          /* Offers & Competitions */
          .offers-section {
            background: rgba(255, 255, 255, 0.05); border-radius: 16px;
            padding: 25px; margin-bottom: 25px;
          }
          .section-title {
            font-size: 1.4rem; font-weight: 700; margin-bottom: 20px;
            color: white; text-align: center;
          }
          .offers-list {
            list-style: none; margin-bottom: 20px;
          }
          .offers-list li {
            padding: 12px 15px; margin-bottom: 10px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px; border-left: 3px solid #00c6ff;
            font-size: 0.9rem; display: flex; align-items: center; gap: 10px;
          }
          .offers-list li:before {
            content: "🎬"; font-size: 0.9rem;
          }
          
          /* Bottom Navigation */
          .bottom-nav {
            position: fixed; bottom: 0; left: 0; right: 0;
            background: rgba(10, 28, 58, 0.95);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            display: flex; justify-content: space-around; padding: 12px 0;
            max-width: 430px; margin: 0 auto; z-index: 100;
            backdrop-filter: blur(10px);
          }
          .nav-item {
            display: flex; flex-direction: column; align-items: center; gap: 5px;
            color: rgba(255, 255, 255, 0.6); text-decoration: none;
            font-size: 0.75rem; transition: all 0.3s; padding: 5px;
          }
          .nav-item.active { color: #0068c8; }
          .nav-item i { font-size: 1.2rem; }
          
          @media (max-width: 430px) {
            .gifts-app { box-shadow: none; }
            .gifts-content { padding: 8px 12px 80px; }
          }
        `}
      </style>

      <div className="gifts-app">
        <div className="gifts-content">
          {/* Back Button */}
          <Link to="/" className="back-button">
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>

          {/* Hero Banner */}
          <div className="gifts-hero">
            <img 
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=925&q=80"
              alt="Cinema Gifts"
              className="hero-image"
            />
            <div className="hero-overlay">
              <h1>ODEON Offers & Gifts</h1>
              <p>Treats for them, treats for you. The perfect cinema gift is here.</p>
            </div>
          </div>

          {/* Gift Store Intro */}
          <div className="gift-store-intro">
            <h2 className="store-headline">Treats for them, treats for you.</h2>
            <p className="store-subtitle">
              From ticket bundles through to gift vouchers, there's something for everyone.
            </p>
          </div>

          {/* Gift Cards & Products */}
          <div className="gifts-grid">
            {/* Gift Card Product */}
            <div className="gift-card">
              <div className="card-image-container">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1728670182314-a8aefbb9d53c?q=80&w=1347&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="ODEON Gift Card"
                  className="card-image"
                />
                <div className="card-badge">MOST POPULAR</div>
              </div>
              <div className="card-content">
                <h2 className="card-title">Gift Cards</h2>
                <div className="card-price">From £25.00[citation:4]</div>
                <p className="card-description">
                  Pick up the perfect present that will leave the movie fan in your life on the edge of their seat. 
                  Give someone the gift of cinema and they can use their gift to pay for tickets, snacks and drinks.
                </p>
                <p className="card-details">
                  {giftProducts[0].details}
                </p>
                <button className="gift-button" onClick={handleExternalRedirect}>
                  <i className="fas fa-shopping-cart"></i> Buy Gift Cards Online
                </button>
              </div>
            </div>

            {/* Existing Card Section */}
            <div className="existing-card-section">
              <h3 className="existing-card-title">Already have a Gift Card?</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '15px', fontSize: '0.9rem' }}>
                Check your balance and start planning your next cinema visit.
              </p>
              <button className="gift-button secondary-button" onClick={handleExternalRedirect}>
                <i className="fas fa-credit-card"></i> Check Balance & Use Card
              </button>
            </div>

            {/* New Year's Sale Banner */}
            <div className="sale-banner">
              <h3 className="sale-title">New Year's Sale</h3>
              <p className="sale-subtitle">
                For a limited time only, we're offering a whopping 25% off myLIMITLESS* when you buy a year's membership upfront.
                See all our movies as often as you like, or gift that movie fanatic in your life with back to back blissful entertainment.
              </p>
              <div className="sale-highlight">Now from only £139 for the whole year, saving £46.</div>
              <p className="sale-subtitle" style={{ fontSize: '0.85rem' }}>
                Offer valid between 22 December 2025 - 31 January 2026 (inclusive). *Terms and conditions apply.
              </p>
              <p className="sale-note">
                You can also sign up to myLIMITLESS for yourself and find out more about package options.
              </p>
            </div>

            {/* myLIMITLESS Gifted Subscriptions */}
            <div className="gift-card">
              <div className="card-image-container">
                <img 
                  src={giftProducts[1].image}
                  alt="myLIMITLESS Gift"
                  className="card-image"
                />
                <div className="card-badge" style={{ background: 'linear-gradient(135deg, #9c27b0, #673ab7)' }}>
                  PERFECT GIFT
                </div>
              </div>
              <div className="card-content">
                <h2 className="card-title">myLIMITLESS Gifted Subscriptions</h2>
                <p className="card-description">
                  A myLIMITLESS annual membership is the perfect gift for the cinema fan in your life. 
                  That's endless big screen thrills, 10% off food and drink, and invites to member exclusive screenings.
                </p>
                
                {/* myLIMITLESS Plan */}
                <div style={{ marginBottom: '20px', padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <div>
                      <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>myLIMITLESS</div>
                      <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Annual Membership</div>
                    </div>
                    <div className="card-price" style={{ fontSize: '1.3rem' }}>£139.00</div>
                  </div>
                  <button className="gift-button" onClick={handleExternalRedirect} style={{ padding: '10px' }}>
                    <i className="fas fa-gift"></i> Gift This Subscription
                  </button>
                </div>
                
                {/* myLIMITLESS Plus Plan */}
                <div style={{ padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <div>
                      <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>myLIMITLESS Plus</div>
                      <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Includes Luxe & Premium</div>
                    </div>
                    <div className="card-price" style={{ fontSize: '1.3rem' }}>£164.00</div>
                  </div>
                  <button className="gift-button secondary-button" onClick={handleExternalRedirect} style={{ padding: '10px' }}>
                    <i className="fas fa-crown"></i> Gift Premium Subscription
                  </button>
                </div>
              </div>
            </div>

            {/* Offers & Competitions Section */}
            <div className="offers-section">
              <h3 className="section-title">Offers and Competitions</h3>
              <p style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '20px', fontSize: '0.95rem' }}>
                All the latest ticket offers, food and beverage promotions, and exciting competitions when you book at ODEON.
              </p>
              
              <ul className="offers-list">
                {currentOffers.map((offer, index) => (
                  <li key={index}>{offer}</li>
                ))}
              </ul>
              
              <button className="gift-button" onClick={handleExternalRedirect}>
                <i className="fas fa-tags"></i> See All Our Offers
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default GiftsPage;