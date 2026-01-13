import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Vipactions from "src/modules/vip/list/vipListActions";
import selector from "src/modules/vip/list/vipListSelectors";
import authSelectors from "src/modules/auth/authSelectors";
import actions from "src/modules/auth/authActions";
import listactions from "src/modules/company/list/companyListActions";
import selectors from "src/modules/company/list/companyListSelectors";
import { i18n } from "../../../i18n";
import { Link } from 'react-router-dom'

function Home() {
  const dispatch = useDispatch();
  const record = useSelector(selector.selectRows);
  const logorecord = useSelector(selectors.selectRows);
  const loadingImage = useSelector(selectors?.selectLoading);
  const [now, setNow] = useState('now');
  const [activeCategory, setActiveCategory] = useState('all');
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const marqueeRef = useRef(null);

  useEffect(() => {
    dispatch(listactions.doFetch());
    dispatch(Vipactions.doFetch());
  }, [dispatch]);

  // Marquee text with improved performance
  const marqueeText = "🎬 Special Announcement: Book 2 Tickets, Get 1 Free Popcorn! • Weekend Offer: 40% Off for Students • New Blockbuster 'Deadpool & Wolverine' Coming Soon • Family Bundle: 4 Tickets + Combo Meals = 25% Off • Experience IMAX 3D for Only $5 Extra! 🍿";

  // Movie categories
  const categories = [
    { id: 'all', name: 'All', icon: '🎬' },
    { id: 'action', name: 'Action', icon: '💥' },
    { id: 'drama', name: 'Drama', icon: '🎭' },
    { id: 'comedy', name: 'Comedy', icon: '😂' },
    { id: 'sci-fi', name: 'Sci-Fi', icon: '🚀' },
    { id: 'fantasy', name: 'Fantasy', icon: '✨' },
  ];

  // Top Films Horizontal Scroll Section
  const topFilms = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/S/pv-target-images/e517ef1200967f6a07bad241d66d0c59a2941e54110fcd7ed4926a9d83cdc636.jpg",
      rating: 8.5,
      title: "Dune: Part Two",
      genre: "Sci-Fi",
      isTrending: true,
      category: 'sci-fi'
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/M/MV5BMTc2Mzg0NjA2N15BMl5BanBnXkFtZTcwOTc5NjQzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 8.2,
      title: "The Fall Guy",
      genre: "Action",
      isTrending: true,
      category: 'action'
    },
    {
      id: 3,
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQCT9i0V7Ihj2aX0jyVdwAD0zfGlBexc0UJjvUW7ZgK5n1Fipc",
      rating: 9.1,
      title: "Kingdom of the Planet",
      genre: "Fantasy",
      isTrending: false,
      category: 'fantasy'
    },
    {
      id: 4,
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQP0OM70mTj4VVIbAqoDaqiNWVcZZyCR_bdxTaAH6bcYT8Yjshb",
      rating: 8.8,
      title: "Furiosa",
      genre: "Action",
      isTrending: true,
      category: 'action'
    },
    {
      id: 5,
      image: "https://contentserver.com.au/assets/491602_p11214341_p_v8_ap.jpg",
      rating: 7.9,
      title: "Ghostbusters",
      genre: "Comedy",
      isTrending: false,
      category: 'comedy'
    },
    {
      id: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVcsf2bpo5cKHGk4HRob4v6M0IFiyZdPuRGXUvxHiHhDdAOYh7",
      rating: 8.4,
      title: "Kung Fu Panda 4",
      genre: "Animation",
      isTrending: false,
      category: 'comedy'
    },
    {
      id: 7,
      image: "https://m.media-amazon.com/images/M/MV5BODI0YjNhNjUtYzE2MC00ZDI1LWE3ZjQtODU1MmI1ZmU2YzM5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      rating: 8.7,
      title: "Oppenheimer",
      genre: "Drama",
      isTrending: true,
      category: 'drama'
    },
    {
      id: 8,
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQKYT4J1T_y_0QukK4G_pnX3x8vS5Nt1l1MJCg24Be-FSL07D-y",
      rating: 7.8,
      title: "The Batman",
      genre: "Action/Drama",
      isTrending: false,
      category: 'drama'
    }
  ];

  const nowShowingFilms = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/S/pv-target-images/e517ef1200967f6a07bad241d66d0c59a2941e54110fcd7ed4926a9d83cdc636.jpg",
      rating: 7.5,
      title: "Dune: Part Two",
      genre: "Sci-Fi/Action",
      duration: "2h 46m",
      imax: true,
      category: 'sci-fi'
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/M/MV5BMTc2Mzg0NjA2N15BMl5BanBnXkFtZTcwOTc5NjQzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 8.2,
      title: "The Fall Guy",
      genre: "Action/Comedy",
      duration: "2h 5m",
      imax: false,
      category: 'action'
    },
    {
      id: 3,
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQCT9i0V7Ihj2aX0jyVdwAD0zfGlBexc0UJjvUW7ZgK5n1Fipc",
      rating: 9.1,
      title: "Kingdom of the Planet",
      genre: "Fantasy/Adventure",
      duration: "2h 25m",
      imax: true,
      category: 'fantasy'
    },
    {
      id: 4,
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQP0OM70mTj4VVIbAqoDaqiNWVcZZyCR_bdxTaAH6bcYT8Yjshb",
      rating: 6.8,
      title: "Furiosa: A Mad Max Saga",
      genre: "Action/Adventure",
      duration: "2h 28m",
      imax: true,
      category: 'action'
    },
    {
      id: 5,
      image: "https://contentserver.com.au/assets/491602_p11214341_p_v8_ap.jpg",
      rating: 7.3,
      title: "Ghostbusters: Frozen Empire",
      genre: "Comedy/Fantasy",
      duration: "1h 55m",
      imax: false,
      category: 'comedy'
    },
    {
      id: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVcsf2bpo5cKHGk4HRob4v6M0IFiyZdPuRGXUvxHiHhDdAOYh7",
      rating: 8.0,
      title: "Kung Fu Panda 4",
      genre: "Animation/Comedy",
      duration: "1h 34m",
      imax: false,
      category: 'comedy'
    }
  ];

  const comingSoonFilms = [
    {
      id: 1,
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS7BVyY3gGvbkvGInfa6HMVTlHuaIC2WgSfWPZM6kb-YlWB8Vl0",
      rating: 9.0,
      title: "Deadpool & Wolverine",
      genre: "Action/Comedy",
      release: "July 26",
      category: 'action'
    },
    {
      id: 2,
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSR6pgVhfkZKNEgcYj1W480V2rFeF1Yov8M5O2b0CSC7L4Mdgkj",
      rating: 6.8,
      title: "Moana 2",
      genre: "Animation/Adventure",
      release: "Nov 27",
      category: 'fantasy'
    },
    {
      id: 3,
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNjatfQ7yNx3Ejq1snXteHf9TeOUmaaWjxlXnssAI6y2IE138x",
      rating: 9.3,
      title: "Joker: Folie à Deux",
      genre: "Crime/Drama",
      release: "Oct 4",
      category: 'drama'
    },
    {
      id: 4,
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSAfbQzvGKy0oUKX3tKXOKirveHpqNU8fUxWNq6ghdDDLxeYxfw",
      rating: 6.9,
      title: "Gladiator II",
      genre: "Action/Drama",
      release: "Nov 22",
      category: 'drama'
    }
  ];

  // Updated featuredPromotions array - replace the existing one
  // Updated featuredPromotions array in your Market page
  const featuredPromotions = [
    {
      title: "Experiences",
      icon: "🎬",
      desc: "IMAX, 4DX & VIP Cinemas",
      link: "/experience" // NEW: Link to Experience page
    },
    {
      title: "Membership",
      icon: "👑",
      desc: "Loyalty Programs & Perks",
      link: "/membership" // NEW: Link to Membership page
    },
    {
      title: "Offers & Gifts",
      icon: "🎁",
      desc: "Special Deals & Gift Cards",
      link: "/gifts" // NEW: Link to Gifts page
    },
    {
      title: "Family",
      icon: "👨‍👩‍👧‍👦",
      desc: "Family Packages & Kids Shows",
      link: "/family" // NEW: Link to Family page
    }
  ];

  // Filter top films based on selected category
  const filteredTopFilms = activeCategory === 'all'
    ? topFilms
    : topFilms.filter(film => film.category === activeCategory);

  // Filter movies based on category
  const filteredMovies = (now === 'now' ? nowShowingFilms : comingSoonFilms)
    .filter(movie => activeCategory === 'all' || movie.category === activeCategory);

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
          
          .cinema-app {
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
          
          .app-content {
            padding: 10px 16px 80px;
          }
          
          /* Enhanced News Ticker */
          .news-ticker-container {
            background: linear-gradient(135deg, #0068c8, #0a1c3a);
            margin-bottom: 15px;
            border-radius: 10px;
            padding: 8px 12px;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 4px 12px rgba(0, 104, 200, 0.2);
          }
          
          .ticker-icon {
            background: rgba(255, 255, 255, 0.1);
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .marquee-container {
            flex: 1;
            overflow: hidden;
            position: relative;
            height: 22px;
          }
          
          .marquee-text {
            position: absolute;
            white-space: nowrap;
            animation: marquee 15s linear infinite;
            font-size: 0.85rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.95);
            will-change: transform;
            padding-left: 100%;
          }
          
          .marquee-container:hover .marquee-text {
            animation-play-state: paused;
          }
          
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          
          /* User Profile Header */
          .user-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding: 0 5px;
          }
          
          .user-info h2 {
            font-size: 1.4rem;
            font-weight: 700;
            background: linear-gradient(135deg, #0068c8, #00c6ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .user-info p {
            font-size: 0.85rem;
            opacity: 0.8;
            margin-top: 2px;
          }
          
          .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(135deg, #0068c8, #00c6ff);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.1rem;
            border: 2px solid rgba(255, 255, 255, 0.2);
          }
          
          /* Hero Section */
          .hero-section {
            margin-bottom: 20px;
            border-radius: 16px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
            cursor: pointer;
          }
          
          .hero-image {
            width: 100%;
            display: block;
            height: 180px;
            object-fit: cover;
            transition: transform 0.5s;
          }
          
          .hero-section:hover .hero-image {
            transform: scale(1.02);
          }
          
          /* Category Filter */
          .category-filter {
            display: flex;
            gap: 8px;
            margin: 20px 0;
            overflow-x: auto;
            padding-bottom: 10px;
            scrollbar-width: none;
          }
          
          .category-filter::-webkit-scrollbar {
            display: none;
          }
          
          .category-btn {
            flex: 0 0 auto;
            padding: 10px 18px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 25px;
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.85rem;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 6px;
            white-space: nowrap;
          }
          
          .category-btn.active {
            background: #0068c8;
            border-color: #0068c8;
            color: white;
            box-shadow: 0 4px 15px rgba(0, 104, 200, 0.3);
          }
          
          /* Top Films Section */
          .top-films-section {
            margin-bottom: 25px;
          }
          
          .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
          }
          
          .section-title {
            font-size: 1.2rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          
          .section-title i {
            color: #0068c8;
            font-size: 1rem;
          }
          
          .view-all {
            font-size: 0.85rem;
            color: #0068c8;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 5px;
          }
          
          .top-films-scroll {
            display: flex;
            overflow-x: auto;
            gap: 15px;
            padding-bottom: 10px;
            scrollbar-width: none;
            min-height: 250px;
          }
          
          .top-films-scroll::-webkit-scrollbar {
            display: none;
          }
          
          .top-film-card {
            flex: 0 0 auto;
            width: 150px;
            border-radius: 12px;
            overflow: hidden;
            position: relative;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.08);
            transition: all 0.3s;
            cursor: pointer;
          }
          
          .top-film-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          }
          
          .trending-badge {
            position: absolute;
            top: 8px;
            left: 8px;
            background: linear-gradient(135deg, #ff416c, #ff4b2b);
            color: white;
            padding: 4px 10px;
            border-radius: 12px;
            font-size: 0.7rem;
            font-weight: 600;
            z-index: 2;
          }
          
          .top-film-poster {
            width: 100%;
            display: block;
            aspect-ratio: 2/3;
            object-fit: cover;
          }
          
          .top-film-rating {
            position: absolute;
            top: 8px;
            right: 8px;
            background: rgba(0, 0, 0, 0.85);
            color: #ffd700;
            padding: 4px 8px;
            border-radius: 10px;
            font-size: 0.75rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 4px;
          }
          
          .top-film-info {
            padding: 12px;
          }
          
          .top-film-title {
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 5px;
            line-height: 1.2;
          }
          
          .top-film-genre {
            font-size: 0.75rem;
            opacity: 0.7;
          }
          
          .no-films-message {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
            text-align: center;
            color: rgba(255, 255, 255, 0.5);
          }
          
          .no-films-message i {
            font-size: 2rem;
            margin-bottom: 10px;
            opacity: 0.5;
          }
          
          /* Enhanced Promotions */
          .promotions-section {
            margin-bottom: 25px;
          }
          
          .promotions-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          
          .promotion-card {
            background: linear-gradient(135deg, rgba(0, 104, 200, 0.15), rgba(0, 198, 255, 0.1));
            border-radius: 12px;
            padding: 15px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s;
            cursor: pointer;
          }
          
          .promotion-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(0, 104, 200, 0.2);
          }
          
          .promotion-icon {
            font-size: 2rem;
            margin-bottom: 10px;
            display: block;
          }
          
          .promotion-title {
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 5px;
          }
          
          .promotion-desc {
            font-size: 0.75rem;
            opacity: 0.8;
          }
          
          /* Movie Tabs with Counter */
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
            background: #0068c8;
            border-radius: 10px;
            transition: transform 0.3s;
            width: calc(50% - 6px);
            z-index: 0;
          }
          
          .tab-indicator.now {
            transform: translateX(0);
          }
          
          .tab-indicator.soon {
            transform: translateX(100%);
          }
          
          /* Movies Grid */
          .movies-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }
          
          .movie-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s;
            cursor: pointer;
          }
          
          .movie-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          }
          
          .movie-poster-container {
            position: relative;
          }
          
          .movie-poster {
            width: 100%;
            display: block;
            aspect-ratio: 2/3;
            object-fit: cover;
          }
          
          .movie-rating {
            position: absolute;
            top: 8px;
            right: 8px;
            background: rgba(0, 0, 0, 0.85);
            color: #ffd700;
            padding: 5px 10px;
            border-radius: 12px;
            font-size: 0.8rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 4px;
            backdrop-filter: blur(5px);
          }
          
          .imax-badge {
            position: absolute;
            top: 8px;
            left: 8px;
            background: linear-gradient(135deg, #ff8a00, #ff5252);
            color: white;
            padding: 4px 10px;
            border-radius: 12px;
            font-size: 0.7rem;
            font-weight: 600;
          }
          
          .movie-info {
            padding: 15px;
          }
          
          .movie-title {
            font-size: 0.95rem;
            font-weight: 600;
            margin-bottom: 8px;
            line-height: 1.2;
            height: 2.4em;
            overflow: hidden;
          }
          
          .movie-meta {
            font-size: 0.8rem;
            opacity: 0.7;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 5px;
          }
          
          .book-btn {
            width: 100%;
            background: linear-gradient(135deg, #0068c8, #00c6ff);
            border: none;
            color: white;
            padding: 10px;
            border-radius: 10px;
            font-size: 0.85rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }
          
          .book-btn:hover {
            background: linear-gradient(135deg, #005bb5, #00b8ff);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 104, 200, 0.3);
          }
          
          /* Coming Soon Badge */
          .coming-soon-badge {
            position: absolute;
            top: 8px;
            left: 8px;
            background: linear-gradient(135deg, #ff8a00, #ff5252);
            color: white;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 0.7rem;
            font-weight: 600;
            backdrop-filter: blur(5px);
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
            .cinema-app {
              box-shadow: none;
            }
            
            .app-content {
              padding: 8px 12px 80px;
            }
            
            .promotions-grid {
              grid-template-columns: 1fr;
            }
          }

          /* Add this to your Market page CSS */

.promotion-card-link {
  text-decoration: none;
  display: block;
  color: inherit;
}

.promotion-card-link:hover .promotion-card {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 104, 200, 0.2);
}

/* Ensure the Link doesn't break the grid layout */
.promotion-card-link .promotion-card {
  height: 100%;
}
        `}
      </style>

      <div className="cinema-app">
        <div className="app-content">
          {/* User Header */}
          <div className="user-header">
            <div className="user-info">
              <h2>Welcome back!</h2>
              <p>What movie are you watching today?</p>
            </div>
            <div className="user-avatar">
              {currentUser?.email?.[0]?.toUpperCase() || 'U'}
            </div>
          </div>

          {/* Enhanced News Ticker */}
          <div className="news-ticker-container">
            <div className="ticker-icon">
              <i className="fas fa-bullhorn"></i>
            </div>
            <div className="marquee-container" ref={marqueeRef}>
              <div className="marquee-text">
                {marqueeText} • {marqueeText}
              </div>
            </div>
          </div>

          {/* Hero Section - Simplified */}
          <div className="hero-section">
            <img
              src="/images/home/movie.gif"
              alt="Featured Movie"
              className="hero-image"
              loading="lazy"
            />
          </div>

          {/* Category Filter - Now Filters Trending Films */}
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Top Films Horizontal Scroll - Now Filtered by Category */}
          <div className="top-films-section">
            <div className="section-header">
              <h3 className="section-title">
                <i className="fas fa-fire"></i>
                Trending Now
              </h3>
              <div className="view-all">
                View All <i className="fas fa-chevron-right"></i>
              </div>
            </div>
            <div className="top-films-scroll">
              {filteredTopFilms.length > 0 ? (
                filteredTopFilms.map((film) => (
                  <div key={film.id} className="top-film-card">
                    {film.isTrending && (
                      <div className="trending-badge">🔥 Trending</div>
                    )}
                    <div className="movie-poster-container">
                      <img
                        src={film.image}
                        alt={film.title}
                        className="top-film-poster"
                          loading="lazy"
                      />
                      <div className="top-film-rating">
                        <i className="fas fa-star"></i>
                        {film.rating}
                      </div>
                    </div>
                    <div className="top-film-info">
                      <div className="top-film-title">{film.title}</div>
                      <div className="top-film-genre">{film.genre}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-films-message">
                  <i className="fas fa-film"></i>
                  <p>No films found in this category</p>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Promotions Section */}
          <div className="promotions-section">
            <div className="section-header">
              <h3 className="section-title">
                <i className="fas fa-gift"></i>
                Exclusive Offers
              </h3>
              <div className="view-all">
                See All <i className="fas fa-chevron-right"></i>
              </div>
            </div>
            <div className="promotions-grid">
              {featuredPromotions.map((promo, index) => (
                <Link
                  key={index}
                  to={promo.link}
                  className="promotion-card-link"
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <div className="promotion-card">
                    <span className="promotion-icon">{promo.icon}</span>
                    <div className="promotion-title">{promo.title}</div>
                    <div className="promotion-desc">{promo.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Movie Tabs with Animated Indicator */}
          <div className="movie-tabs">
            <div
              className={`movie-tab ${now === 'now' ? 'active' : ''}`}
              onClick={() => setNow('now')}
            >
              Now Showing
            </div>
            <div
              className={`movie-tab ${now === 'soon' ? 'active' : ''}`}
              onClick={() => setNow('soon')}
            >
              Coming Soon
            </div>
            <div className={`tab-indicator ${now}`}></div>
          </div>

          {/* Movies Grid - Also Filtered by Category */}
          <div className="movies-grid">
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <div key={movie.id} className="movie-card">
                  <div className="movie-poster-container">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="movie-poster"
                        loading="lazy"
                    />
                    <div className="movie-rating">
                      <i className="fas fa-star"></i>
                      {movie.rating}
                    </div>
                    {movie.imax && now === 'now' && (
                      <div className="imax-badge">IMAX</div>
                    )}
                    {now === 'soon' && (
                      <div className="coming-soon-badge">
                        {movie.release}
                      </div>
                    )}
                  </div>
                  <div className="movie-info">
                    <div className="movie-title">{movie.title}</div>
                    <div className="movie-meta">
                      {movie.genre}
                      {now === 'now' && ` • ${movie.duration}`}
                    </div>
                    <button className="book-btn">
                      {now === 'now' ? (
                        <>
                          <i className="fas fa-ticket-alt"></i>
                          Book Tickets
                        </>
                      ) : (
                        <>
                          <i className="fas fa-bell"></i>
                          Notify Me
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-films-message" style={{ gridColumn: 'span 2' }}>
                <i className="fas fa-film"></i>
                <p>No movies found in this category</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bottom-nav">
          <div className="nav-item active">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </div>
          <div className="nav-item">
            <i className="fas fa-film"></i>
            <span>Movies</span>
          </div>
          <div className="nav-item">
            <i className="fas fa-ticket-alt"></i>
            <span>Tickets</span>
          </div>
          <div className="nav-item">
            <i className="fas fa-user"></i>
            <span>Profile</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home