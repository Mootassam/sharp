import React, { useState } from "react";
import { Link } from "react-router-dom";

function ExperiencePage() {
  const [activeTab, setActiveTab] = useState('premium');

  const experienceCategories = [
    { id: 'premium', name: 'Premium Experiences', icon: '🎬' },
    { id: 'dining', name: 'Dining', icon: '🍿' },
    { id: 'community', name: 'Community', icon: '❤️' },
    { id: 'private', name: 'Private Events', icon: '🎭' },
  ];

  const handleExternalRedirect = () => {
    window.open("https://www.odeon.co.uk/experiences/", "_blank", "noopener,noreferrer");
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
          
          .experience-app {
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
          
          .experience-content {
            padding: 10px 16px 80px;
          }
          
          /* Hero Banner */
          .experience-hero {
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
          }
          
          /* Category Tabs */
          .category-tabs {
            display: flex;
            gap: 10px;
            margin-bottom: 25px;
            overflow-x: auto;
            padding-bottom: 10px;
            scrollbar-width: none;
          }
          
          .category-tabs::-webkit-scrollbar {
            display: none;
          }
          
          .category-tab {
            flex: 0 0 auto;
            padding: 12px 20px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 25px;
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 8px;
            white-space: nowrap;
          }
          
          .category-tab.active {
            background: #0068c8;
            border-color: #0068c8;
            color: white;
            box-shadow: 0 4px 15px rgba(0, 104, 200, 0.3);
          }
          
          /* Experience Grid */
          .experience-grid {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          
          /* Experience Card with Image */
          .experience-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s;
            cursor: pointer;
          }
          
          .experience-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 10px 25px rgba(0, 104, 200, 0.2);
          }
          
          .card-image-container {
            position: relative;
            height: 180px;
            overflow: hidden;
          }
          
          .card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
          }
          
          .experience-card:hover .card-image {
            transform: scale(1.05);
          }
          
          .card-tag {
            position: absolute;
            top: 12px;
            left: 12px;
            background: linear-gradient(135deg, #ff416c, #ff4b2b);
            color: white;
            padding: 6px 14px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 600;
            z-index: 2;
          }
          
          .card-content {
            padding: 20px;
          }
          
          .card-title {
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: white;
          }
          
          .card-description {
            font-size: 0.9rem;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 15px;
          }
          
          /* Community Card (Text Only) */
          .community-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 25px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            margin-top: 10px;
          }
          
          .community-title {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 20px;
            color: white;
            text-align: center;
          }
          
          .community-section {
            margin-bottom: 25px;
          }
          
          .community-section:last-child {
            margin-bottom: 0;
          }
          
          .community-section h3 {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 10px;
            color: #00c6ff;
          }
          
          .community-section p {
            font-size: 0.9rem;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 15px;
          }
          
          /* Action Button */
          .action-button {
            width: 100%;
            background: linear-gradient(135deg, #0068c8, #00c6ff);
            border: none;
            color: white;
            padding: 14px;
            border-radius: 12px;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-top: 15px;
          }
          
          .action-button:hover {
            background: linear-gradient(135deg, #005bb5, #00b8ff);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 104, 200, 0.3);
          }
          
          .secondary-button {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .secondary-button:hover {
            background: rgba(255, 255, 255, 0.15);
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
          
          @media (max-width: 430px) {
            .experience-app {
              box-shadow: none;
            }
            
            .experience-content {
              padding: 8px 12px 80px;
            }
          }
        `}
      </style>

      <div className="experience-app">
        <div className="experience-content">
          {/* Back Button */}
          <Link to="/" className="back-button">
            <i className="fas fa-arrow-left"></i>
            Back to Home
          </Link>

          {/* Hero Banner */}
          <div className="experience-hero">
            <img 
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=925&q=80"
              alt="Cinema Experience"
              className="hero-image"
            />
            <div className="hero-overlay">
              <h1>Premium Cinema Experiences</h1>
              <p>Discover extraordinary ways to watch movies</p>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="category-tabs">
            {experienceCategories.map(category => (
              <button
                key={category.id}
                className={`category-tab ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Experience Grid */}
          <div className="experience-grid">
            {/* Food & Drinks */}
            <div className="experience-card">
              <div className="card-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  alt="Cinema Food & Drinks"
                  className="card-image"
                />
                <div className="card-tag">Dining</div>
              </div>
              <div className="card-content">
                <h2 className="card-title">Food & Drinks</h2>
                <p className="card-description">
                  Turn your trip to ODEON into a cheerful dining experience with our wide selection of made-for-cinema hot meals. 
                  Treat yourself to nachos, hot dogs or chicken strips or share popcorn and chocolate-covered treats.
                </p>
                <p className="card-description">
                  You can now order your favourite cinema treats ahead via the ODEON app. Browse our delicious menu, save time and order online.
                </p>
                <button className="action-button" onClick={handleExternalRedirect}>
                  <i className="fas fa-utensils"></i>
                  Find out more
                </button>
              </div>
            </div>

            {/* iSense */}
            <div className="experience-card">
              <div className="card-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  alt="iSense Cinema"
                  className="card-image"
                />
                <div className="card-tag">Premium</div>
              </div>
              <div className="card-content">
                <h2 className="card-title">iSense</h2>
                <p className="card-description">
                  When you want your film to be a special occasion, choose an iSense cinema. Even bigger screens, 
                  brighter visuals and double the number of speakers.
                </p>
                <button className="action-button" onClick={handleExternalRedirect}>
                  <i className="fas fa-ticket-alt"></i>
                  Learn more & book iSense films
                </button>
              </div>
            </div>

            {/* IMAX */}
            <div className="experience-card">
              <div className="card-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1564520042768-62b41acc4714?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="IMAX Experience"
                  className="card-image"
                />
                <div className="card-tag">Premium</div>
              </div>
              <div className="card-content">
                <h2 className="card-title">IMAX</h2>
                <p className="card-description">
                  Experience film on an epic scale. Crystal-clear images, earth-shaking surround sound and 
                  high-resolution screens so big the film seems to surround you.
                </p>
                <button className="action-button" onClick={handleExternalRedirect}>
                  <i className="fas fa-ticket-alt"></i>
                  Learn more & book IMAX films
                </button>
              </div>
            </div>

            {/* Dolby Cinema™ */}
            <div className="experience-card">
              <div className="card-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  alt="Dolby Cinema"
                  className="card-image"
                />
                <div className="card-tag">Premium</div>
              </div>
              <div className="card-content">
                <h2 className="card-title">Dolby Cinema™</h2>
                <p className="card-description">
                  See your film in the best possible way. Dolby Cinema combines the most advanced image and 
                  audio technology with a carefully-designed seating layout.
                </p>
                <button className="action-button" onClick={handleExternalRedirect}>
                  <i className="fas fa-ticket-alt"></i>
                  Learn more & book Dolby Cinema films
                </button>
              </div>
            </div>

            {/* XL Screens */}
            <div className="experience-card">
              <div className="card-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=856&q=80"
                  alt="XL Screens"
                  className="card-image"
                />
                <div className="card-tag">Technology</div>
              </div>
              <div className="card-content">
                <h2 className="card-title">XL Screens</h2>
                <p className="card-description">
                  Go XL and experience movies on a bigger scale. Our XL screens are some of the largest 
                  standard screens in our cinemas, perfect for those movies that just need a more immersive experience.
                </p>
                <button className="action-button secondary-button" onClick={handleExternalRedirect}>
                  <i className="fas fa-film"></i>
                  Find out more about XL Screens
                </button>
              </div>
            </div>

            {/* Laser Projection */}
            <div className="experience-card">
              <div className="card-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  alt="Laser Projection"
                  className="card-image"
                />
                <div className="card-tag">Technology</div>
              </div>
              <div className="card-content">
                <h2 className="card-title">Laser Projection</h2>
                <p className="card-description">
                  See the difference with Laser. Laser projection allows you to see your movie in more detail. 
                  With ultra-vivid colours and the maximum picture brightness, every image is bolder and more dynamic.
                </p>
                <button className="action-button secondary-button" onClick={handleExternalRedirect}>
                  <i className="fas fa-film"></i>
                  Find out more about Laser
                </button>
              </div>
            </div>

            {/* ODEON Luxe */}
            <div className="experience-card">
              <div className="card-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1585647347384-2593bc35786b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  alt="ODEON Luxe"
                  className="card-image"
                />
                <div className="card-tag">Luxury</div>
              </div>
              <div className="card-content">
                <h2 className="card-title">ODEON Luxe</h2>
                <p className="card-description">
                  Want to feel what it's like to fly first class? Welcome onboard the ODEON Luxe experience. 
                  Fully-reclining, extra-wide seats, ample legroom and pillowy-soft head and foot rests.
                </p>
                <button className="action-button" onClick={handleExternalRedirect}>
                  <i className="fas fa-star"></i>
                  ODEON Luxe cinemas
                </button>
              </div>
            </div>

            {/* Luxe and Dine */}
            <div className="experience-card">
              <div className="card-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  alt="Luxe and Dine"
                  className="card-image"
                />
                <div className="card-tag">Luxury Dining</div>
              </div>
              <div className="card-content">
                <h2 className="card-title">Luxe and Dine</h2>
                <p className="card-description">
                  Imagine the indulgent first-class comfort of our Luxe seating combined with a restaurant-style 
                  menu and waiter service. Enjoy a sumptuous feast in your cinema seat.
                </p>
                <button className="action-button" onClick={handleExternalRedirect}>
                  <i className="fas fa-utensils"></i>
                  Experience Luxe & Dine
                </button>
              </div>
            </div>

            {/* VIP Beds */}
            <div className="experience-card">
              <div className="card-image-container">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1661923743277-2086a56bc664?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="VIP Beds"
                  className="card-image"
                />
                <div className="card-tag">Ultimate Luxury</div>
              </div>
              <div className="card-content">
                <h2 className="card-title">VIP Beds at ODEON Cinemas</h2>
                <p className="card-description">
                  Experience ultimate luxury with our VIP Beds. Boasting unparalleled comfort and space. 
                  VIP Beds will elevate your cinematic experience and allow you to be transported to another world.
                </p>
                <button className="action-button secondary-button" onClick={handleExternalRedirect}>
                  <i className="fas fa-bed"></i>
                  Find out more about VIP Beds
                </button>
              </div>
            </div>

            {/* Private Cinema Experiences */}
            <div className="experience-card">
              <div className="card-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  alt="Private Cinema"
                  className="card-image"
                />
                <div className="card-tag">Private Events</div>
              </div>
              <div className="card-content">
                <h2 className="card-title">Private Cinema Experiences</h2>
                <p className="card-description">
                  Enjoy a private cinema experience at ODEON. You can book a private film screening with your 
                  friends or family. Or, perhaps you would prefer a to play a game on the big screen with you friends? 
                  Maybe you want to bring your club or school along for a private screening of a film? – Whatever the need, 
                  we have a solution for you! You can also order some tasty food and beverage in advance and even add a 
                  personalised message to the big screen.
                </p>
                <button className="action-button" onClick={handleExternalRedirect}>
                  <i className="fas fa-users"></i>
                  Private Cinema Bookings
                </button>
              </div>
            </div>

            {/* London West End Cinemas */}
            <div className="experience-card">
              <div className="card-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80"
                  alt="London West End Cinemas"
                  className="card-image"
                />
                <div className="card-tag">Location</div>
              </div>
              <div className="card-content">
                <h2 className="card-title">London cinemas in the West End</h2>
                <p className="card-description">
                  Our central London and West End cinemas are perfectly located to make every film fantastic.
                  Whether you want an opulent Art Deco icon fit for royalty or a former West End favourite reborn, 
                  ODEON has a wealth of central London cinemas for film lovers to choose from.
                </p>
                <button className="action-button secondary-button" onClick={handleExternalRedirect}>
                  <i className="fas fa-map-marker-alt"></i>
                  Find out more
                </button>
              </div>
            </div>

            {/* Community Section - Text Only */}
            <div className="community-card">
              <h2 className="community-title">Part of the Community</h2>
              
              <div className="community-section">
                <h3>Autism friendly</h3>
                <p>
                  The typical cinema environment can be stressful for guests with autism, sensory difficulties 
                  or learning impairments. We're delighted to host special autism friendly screenings one Sunday 
                  morning each month at over 90 cinemas. Our hope is that guests with sensory difficulties become 
                  more familiar with the cinema environment.
                </p>
                <button className="action-button secondary-button" onClick={handleExternalRedirect}>
                  <i className="fas fa-heart"></i>
                  Read more
                </button>
              </div>
              
              <div className="community-section">
                <h3>Sight loss</h3>
                <p>
                  To help our blind and partially-sighted guests enjoy their visit to ODEON, we offer audio 
                  description for most of our films. If we've been given this extra narration, you can use our 
                  set of lightweight headphones to hear descriptions of the action, scene changes and actors' 
                  body language, along with the dialogue.
                </p>
                <button className="action-button secondary-button" onClick={handleExternalRedirect}>
                  <i className="fas fa-heart"></i>
                  Read more
                </button>
              </div>
              
              <div className="community-section">
                <h3>Hearing loss</h3>
                <p>
                  We offer open captioning at most of our cinemas to help our hard-of-hearing or deaf audience 
                  enjoy the film. We also show a wide selection of captioned films to give you more choice. To 
                  find these screenings on our website, select the 'Open captions' filter when viewing films 
                  and showtimes at your cinema.
                </p>
                <button className="action-button secondary-button" onClick={handleExternalRedirect}>
                  <i className="fas fa-heart"></i>
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>

 
      </div>
    </>
  );
}

export default ExperiencePage;