import React, { useState } from "react";
import { Link } from "react-router-dom";

function FamilyPage() {
  const [activeTab, setActiveTab] = useState('now-showing');

  const handleExternalRedirect = () => {
    window.open("https://www.odeon.co.uk/experiences/", "_blank", "noopener,noreferrer");
  };

  // Family Movies Data
  const familyMovies = [
    {
      id: 1,
      title: "Avatar: Fire and Ash",
      description: "Taking another technological quantum leap, while tightening the screws of the story, Avatar 3's battle royale between the Sullys, the RDA and the viperous Varang is so blistering on the big screen, it'll leave you with two sooty strips where your eyebrows used to be.",
      image: "https://media.newyorker.com/photos/69405022a811713aae7b6d57/master/w_2560%2Cc_limit/CHANG-AVATAR-FIREANDASH-3046_0115_v0339.L.1076.jpg",
      rating: "PG",
      duration: "2h 48m",
      releaseDate: "Now Showing",
      category: "adventure"
    },
    {
      id: 2,
      title: "The SpongeBob Movie: Search For SquarePants",
      description: "SpongeBob SquarePants has done some stupid things in his time – but signing up as first oarsman for The Flying Dutchman is next-level. Join our porous hero for a pre-Christmas caper.",
      image: "https://ds.static.rtbf.be/article/image/1920x1080/5/8/4/0583d83be69087c3954344c04a12d198.jpg",
      rating: "U",
      duration: "1h 32m",
      releaseDate: "Now Showing",
      category: "animation"
    },
    {
      id: 3,
      title: "Anaconda",
      description: "Jack Black and Paul Rudd team up in this buddy comedy. A midlife crisis pushes two best friends to remake their all-time favourite movie, Anaconda.",
      image: "https://media.pathe.tn/movie/mx/50380/lg/76/media",
      rating: "PG-13",
      duration: "1h 58m",
      releaseDate: "Now Showing",
      category: "comedy"
    }
  ];

  const comingSoonMovies = [
    {
      id: 4,
      title: "Kangaroo",
      description: "Kate Woods' Kangaroo is a heart-warming family comedy about an ex-TV personality Chris Masterman, who becomes stranded in an Outback town after a car accident on his way to Broome.",
      image: "https://variety.com/wp-content/uploads/2023/12/Kangaroo-124725-56-cr-res.jpg?w=1000&h=563&crop=1",
      rating: "U",
      releaseDate: "30 January 2026",
      category: "comedy"
    }
  ];

  const specialScreenings = [
    {
      id: 1,
      title: "ODEON Kids Screenings",
      description: "BIG screen family adventures for as little as £1*. Adults pay kids prices at our special ODEON Kids screenings to see the most spellbinding fairy tales and animated films.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      price: "From £1*",
      tag: "Best Value",
      details: "*Selected cinemas only."
    },
    {
      id: 2,
      title: "ODEON Newbies",
      description: "Cinema made for new parents. ODEON Newbies offers low light and softer sound for your new arrivals. Enjoy the latest films in a baby-friendly atmosphere.",
      image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      price: "Parent Friendly",
      tag: "Baby Welcome",
      details: "Relaxed atmosphere, no one minds if your baby cries."
    }
  ];

  const snackDeals = [
    {
      name: "Kids Mix",
      description: "Get great value on snacks for your little ones with our Kids Mix combo, featuring a small popcorn, two snacks and a delicious drink.",
      price: "£6.99",
      icon: "🍿"
    }
  ];

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
          
          .family-app {
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
          
          .family-content {
            padding: 10px 16px 80px;
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
          
          /* Hero Banner */
          .family-hero {
            position: relative;
            margin-bottom: 25px;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          }
          
          .hero-image {
            width: 100%;
            height: 180px;
            object-fit: cover;
            display: block;
          }
          
          .hero-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.95), transparent);
            padding: 20px;
          }
          
          .hero-overlay h1 {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #ff9800, #ff5722);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .hero-overlay p {
            font-size: 0.9rem;
            opacity: 0.9;
            line-height: 1.5;
          }
          
          .family-tagline {
            background: linear-gradient(135deg, rgba(255, 152, 0, 0.15), rgba(255, 87, 34, 0.15));
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 25px;
            text-align: center;
            border: 1px solid rgba(255, 152, 0, 0.3);
          }
          
          .tagline-text {
            font-size: 1.1rem;
            font-weight: 600;
            color: #ff9800;
            margin-bottom: 10px;
          }
          
          .tagline-subtext {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 15px;
            line-height: 1.5;
          }
          
          /* Movie Tabs */
          .movie-tabs {
            margin-bottom: 20px;
            display: flex;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 6px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
          }
          
          .movie-tab {
            flex: 1;
            text-align: center;
            padding: 12px 0;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 0.95rem;
            position: relative;
            z-index: 1;
          }
          
          .movie-tab.active {
            color: white;
          }
          
          .tab-indicator {
            position: absolute;
            top: 6px;
            height: calc(100% - 12px);
            background: #ff9800;
            border-radius: 10px;
            transition: transform 0.3s;
            width: calc(50% - 6px);
            z-index: 0;
          }
          
          .tab-indicator.now-showing {
            transform: translateX(0);
          }
          
          .tab-indicator.coming-soon {
            transform: translateX(100%);
          }
          
          /* Movies Grid */
          .movies-grid {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 25px;
          }
          
          .family-movie-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s;
            cursor: pointer;
          }
          
          .family-movie-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 10px 25px rgba(255, 152, 0, 0.2);
          }
          
          .movie-image-container {
            position: relative;
            height: 200px;
            overflow: hidden;
          }
          
          .movie-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
          }
          
          .family-movie-card:hover .movie-image {
            transform: scale(1.05);
          }
          
          .movie-rating {
            position: absolute;
            top: 12px;
            left: 12px;
            background: rgba(0, 0, 0, 0.85);
            color: white;
            padding: 6px 12px;
            border-radius: 12px;
            font-size: 0.8rem;
            font-weight: 600;
            z-index: 2;
          }
          
          .coming-soon-badge {
            position: absolute;
            top: 12px;
            right: 12px;
            background: linear-gradient(135deg, #ff9800, #ff5722);
            color: white;
            padding: 6px 12px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 600;
            z-index: 2;
          }
          
          .movie-content {
            padding: 20px;
          }
          
          .movie-title {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: white;
          }
          
          .movie-meta {
            display: flex;
            gap: 15px;
            margin-bottom: 12px;
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.7);
          }
          
          .movie-description {
            font-size: 0.9rem;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 20px;
          }
          
          /* Action Buttons */
          .family-button {
            width: 100%;
            background: linear-gradient(135deg, #ff9800, #ff5722);
            border: none;
            color: white;
            padding: 12px;
            border-radius: 10px;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-top: 10px;
          }
          
          .family-button:hover {
            background: linear-gradient(135deg, #f57c00, #e64a19);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 152, 0, 0.3);
          }
          
          .secondary-button {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .secondary-button:hover {
            background: rgba(255, 255, 255, 0.15);
          }
          
          /* Special Screenings */
          .special-screenings {
            margin-bottom: 25px;
          }
          
          .section-title {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 20px;
            color: white;
            display: flex;
            align-items: center;
            gap: 10px;
            padding-bottom:20px;
          }
          
          .section-title i {
            color: #ff9800;
          }
          
          .screening-card {
            background: linear-gradient(135deg, rgba(255, 152, 0, 0.1), rgba(255, 87, 34, 0.1));
            border-radius: 16px;
            padding: 20px;
            margin-bottom: 15px;
            border: 1px solid rgba(255, 152, 0, 0.2);
            transition: all 0.3s;
          }
          
          .screening-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(255, 152, 0, 0.2);
          }
          
          .screening-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 15px;
          }
          
          .screening-title {
            font-size: 1.2rem;
            font-weight: 700;
            color: #ff9800;
          }
          
          .screening-tag {
            background: linear-gradient(135deg, #ff416c, #ff4b2b);
            color: white;
            padding: 4px 10px;
            border-radius: 12px;
            font-size: 0.7rem;
            font-weight: 600;
          }
          
          .screening-price {
            font-size: 1.1rem;
            font-weight: 800;
            color: #ffd700;
            margin-bottom: 10px;
          }
          
          .screening-description {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.6;
            margin-bottom: 15px;
          }
          
          .screening-details {
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.6);
            font-style: italic;
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          /* Snack Deals */
          .snack-deals {
            margin-bottom: 25px;
          }
          
          .snack-card {
            background: linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(3, 169, 244, 0.1));
            border-radius: 16px;
            padding: 20px;
            border: 1px solid rgba(33, 150, 243, 0.2);
            display: flex;
            align-items: center;
            gap: 20px;
          }
          
          .snack-icon {
            font-size: 3rem;
            flex-shrink: 0;
          }
          
          .snack-info {
            flex: 1;
          }
          
          .snack-name {
            font-size: 1.2rem;
            font-weight: 700;
            color: #03a9f4;
            margin-bottom: 5px;
          }
          
          .snack-price {
            font-size: 1.4rem;
            font-weight: 800;
            color: #ffd700;
            margin-bottom: 10px;
          }
          
          .snack-description {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.5;
          }
          
          /* Terms & Conditions */
          .terms-section {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 20px;
            margin-top: 25px;
          }
          
          .terms-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 15px;
            color: rgba(255, 255, 255, 0.9);
            text-align: center;
          }
          
          .terms-list {
            list-style: none;
          }
          
          .terms-list li {
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 8px;
            padding-left: 20px;
            position: relative;
            line-height: 1.4;
          }
          
          .terms-list li:before {
            content: "•";
            position: absolute;
            left: 0;
            color: #ff9800;
            font-weight: bold;
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
            color: #ff9800;
          }
          
          .nav-item i {
            font-size: 1.2rem;
          }
          
          @media (max-width: 430px) {
            .family-app {
              box-shadow: none;
            }
            
            .family-content {
              padding: 8px 12px 80px;
            }
          }
        `}
      </style>

      <div className="family-app">
        <div className="family-content">
          {/* Back Button */}
          <Link to="/" className="back-button">
            <i className="fas fa-arrow-left"></i>
            Back to Home
          </Link>

          {/* Hero Banner */}
          <div className="family-hero">
            <img 
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=925&q=80"
              alt="Family Cinema"
              className="hero-image"
              loading="lazy"
            />
            <div className="hero-overlay">
              <h1>Family Fun at ODEON</h1>
              <p>Cinema magic for the whole family - for less!</p>
            </div>
          </div>

          {/* Family Tagline */}
          <div className="family-tagline">
            <div className="tagline-text">There's fun for the whole family at ODEON!</div>
            <p className="tagline-subtext">
              With our brilliant value Adult and Child tickets* and ODEON Kids screenings where the adults pay kids' prices, 
              you can look forward to affordable, fun days out, whatever the weather.
            </p>
            <button className="family-button" onClick={handleExternalRedirect}>
              <i className="fas fa-map-marker-alt"></i>
              Find your cinema
            </button>
            <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)', marginTop: '10px' }}>
              *Terms & Conditions apply. Selected cinemas only.
            </div>
          </div>

          {/* Movie Tabs */}
          <div className="movie-tabs">
            <div 
              className={`movie-tab ${activeTab === 'now-showing' ? 'active' : ''}`}
              onClick={() => setActiveTab('now-showing')}
            >
              What's On?
            </div>
            <div 
              className={`movie-tab ${activeTab === 'coming-soon' ? 'active' : ''}`}
              onClick={() => setActiveTab('coming-soon')}
            >
              Coming Soon
            </div>
            <div className={`tab-indicator ${activeTab}`}></div>
          </div>

          {/* Movies Grid */}
          <div className="movies-grid">
            {(activeTab === 'now-showing' ? familyMovies : comingSoonMovies).map((movie) => (
              <div key={movie.id} className="family-movie-card">
                <div className="movie-image-container">
                  <img 
                    src={movie.image} 
                    alt={movie.title}
                    className="movie-image"
                      loading="lazy"
                  />
                  <div className="movie-rating">{movie.rating}</div>
                  {activeTab === 'coming-soon' && (
                    <div className="coming-soon-badge">COMING SOON</div>
                  )}
                </div>
                <div className="movie-content">
                  <h3 className="movie-title">{movie.title}</h3>
                  <div className="movie-meta">
                    <span></span>
                  </div>
                  <p className="movie-description">{movie.description}</p>
                  <button className="family-button" onClick={handleExternalRedirect}>
                    <i className="fas fa-ticket-alt"></i>
                    Book Tickets
                  </button>
                  {movie.id === 4 && (
                    <button className="family-button secondary-button" onClick={handleExternalRedirect} style={{ marginTop: '10px' }}>
                      <i className="fas fa-info-circle"></i>
                      Find out more
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Special Screenings */}
          <div className="special-screenings">
            <h3 className="section-title">
              <i className="fas fa-star"></i>
              Special screenings for the family
            </h3>
            
            {specialScreenings.map((screening) => (
              <div key={screening.id} className="screening-card">
                <div className="screening-header">
                  <h4 className="screening-title">{screening.title}</h4>
                  {screening.tag && <span className="screening-tag">{screening.tag}</span>}
                </div>
                {screening.price && <div className="screening-price">{screening.price}</div>}
                <p className="screening-description">{screening.description}</p>
                <button className="family-button" onClick={handleExternalRedirect}>
                  <i className="fas fa-info-circle"></i>
                  Find out more
                </button>
                {screening.details && (
                  <div className="screening-details">{screening.details}</div>
                )}
              </div>
            ))}
          </div>

          {/* Snack Deals */}
          <div className="snack-deals">
            <h3 className="section-title">
              <i className="fas fa-utensils"></i>
              Family Snack Deals
            </h3>
            
            {snackDeals.map((snack) => (
              <div key={snack.name} className="snack-card">
                <div className="snack-icon">{snack.icon}</div>
                <div className="snack-info">
                  <h4 className="snack-name">Kids Mix</h4>
                  <div className="snack-price">{snack.price}</div>
                  <p className="snack-description">{snack.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Terms & Conditions */}
          <div className="terms-section">
            <h4 className="terms-title">Terms and conditions</h4>
            <ul className="terms-list">
              <li>Standard 2D tickets. Additional upgrades apply.</li>
              <li>Ticket prices vary across cinemas when booked online.</li>
              <li>The in-cinema price has an additional £1.50 fee on top of advertised price.</li>
              <li>Price does not apply to special screenings and events. Additional upgrade costs apply to other film formats and seat types.</li>
              <li>For more details please ask a team member in cinema.</li>
              <li>Price information is correct at time of publication but is subject to change at any time.</li>
            </ul>
          </div>
        </div>

   
      </div>
    </>
  );
}

export default FamilyPage;