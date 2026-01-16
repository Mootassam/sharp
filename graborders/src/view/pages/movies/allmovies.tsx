import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useMovies } from './useMovies';

const AllMovies: React.FC = () => {
  const {
    movies,
    loading,
    error,
    page,
    totalPages,
    totalRows,
    nextPage,
    prevPage,
    goToPage,
    updateFilters,
    refresh
  } = useMovies();

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>('rating-desc');

  // Debounced search to avoid too many updates
  const debouncedUpdateFilters = useCallback((search: string, rating: number) => {
    updateFilters({
      searchQuery: search,
      minRating: rating
    });
  }, [updateFilters]);

  // Handle search with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      debouncedUpdateFilters(searchTerm, minRating);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, minRating, debouncedUpdateFilters]);

  // Handle rating filter change
  const handleRatingChange = (value: number) => {
    setMinRating(value);
  };

  // Sort movies
  const sortedMovies = [...movies].sort((a, b) => {
    switch (sortBy) {
      case 'rating-desc':
        return b.vote_average - a.vote_average;
      case 'rating-asc':
        return a.vote_average - b.vote_average;
      case 'title-asc':
        return a.title.localeCompare(b.title);
      case 'title-desc':
        return b.title.localeCompare(a.title);
      case 'date-desc':
        return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
      case 'date-asc':
        return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
      default:
        return 0;
    }
  });

  // Render star rating
  const renderStars = (rating: number) => {
    const stars = Math.round(rating / 2);
    return (
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <i 
            key={i} 
            className={`fas fa-star${i < stars ? '' : '-o'}`}
            style={{ 
              color: i < stars ? '#ffd700' : '#666',
              marginRight: '2px'
            }}
          />
        ))}
        <span className="rating-number" style={{ marginLeft: '8px', color: '#ffd700' }}>
          {rating.toFixed(1)}
        </span>
      </div>
    );
  };

  if (error) {
    return (
      <div style={{ 
        padding: '40px 20px', 
        textAlign: 'center',
        color: 'white',
        background: 'radial-gradient(circle at center top, #0a1c3a, #051122 800px)'
      }}>
        <h2 style={{ color: '#ff6b6b' }}>Error Loading Movies</h2>
        <p style={{ margin: '20px 0' }}>{error}</p>
        <button 
          onClick={refresh}
          style={{
            padding: '10px 20px',
            background: '#0068c8',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="all-movies-container">
      {/* Header and Navigation */}
      <div className="movies-header">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
        <h1>All Movies ({totalRows} total)</h1>
        <p>Powered by Kaggle Movies Dataset</p>
      </div>

      {/* Search and Filters */}
      <div className="filters-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search movies by title, genre, or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            style={{
              width: '100%',
              padding: '12px 20px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '25px',
              color: 'white',
              fontSize: '0.9rem'
            }}
          />
        </div>

        <div className="filter-row" style={{ 
          display: 'flex', 
          gap: '20px',
          marginTop: '20px',
          alignItems: 'center'
        }}>
          <div className="rating-filter" style={{ flex: 1 }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              Min Rating: <span style={{ color: '#ffd700' }}>{minRating.toFixed(1)}+</span>
            </label>
            <input
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={minRating}
              onChange={(e) => handleRatingChange(parseFloat(e.target.value))}
              style={{
                width: '100%',
                height: '6px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '3px',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ minWidth: '200px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              Sort By
            </label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                color: 'white',
                fontSize: '0.9rem'
              }}
            >
              <option value="rating-desc">Highest Rated</option>
              <option value="rating-asc">Lowest Rated</option>
              <option value="title-asc">Title A-Z</option>
              <option value="title-desc">Title Z-A</option>
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div style={{ 
          textAlign: 'center', 
          padding: '60px 20px',
          color: 'rgba(255, 255, 255, 0.7)'
        }}>
          <div className="spinner" style={{
            width: '40px',
            height: '40px',
            border: '3px solid rgba(255, 255, 255, 0.1)',
            borderTop: '3px solid #0068c8',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }} />
          <p>Loading movies from Kaggle API...</p>
        </div>
      )}

      {/* Movies Grid */}
      {!loading && sortedMovies.length > 0 && (
        <>
          <div className="movies-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
            marginTop: '30px'
          }}>
            {sortedMovies.map((movie, index) => (
              <div key={`${movie.title}-${index}`} className="movie-card" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'transform 0.3s'
              }}>
                <div className="movie-poster" style={{ position: 'relative' }}>
                  <img 
                    src={movie.poster_url} 
                    alt={movie.title}
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder-poster.jpg';
                    }}
                  />
                  <div className="movie-rating" style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'rgba(0, 0, 0, 0.85)',
                    padding: '5px 10px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    {renderStars(movie.vote_average)}
                  </div>
                  <div className="movie-year" style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    background: 'rgba(0, 104, 200, 0.9)',
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                  }}>
                    {movie.release_date?.substring(0, 4) || 'N/A'}
                  </div>
                </div>
                <div className="movie-info" style={{ padding: '15px' }}>
                  <h3 className="movie-title" style={{
                    margin: '0 0 8px 0',
                    fontSize: '1rem',
                    color: 'white',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {movie.title}
                  </h3>
                  <p className="movie-genre" style={{
                    margin: '0 0 10px 0',
                    fontSize: '0.8rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {movie.genres.split(', ').slice(0, 2).join(', ')}
                  </p>
                  <p className="movie-overview" style={{
                    margin: '0 0 15px 0',
                    fontSize: '0.8rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.4',
                    height: '40px',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                  }}>
                    {movie.overview}
                  </p>
                  <div className="movie-stats" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem',
                    color: 'rgba(255, 255, 255, 0.6)'
                  }}>
                    <span className="stat">
                      <i className="fas fa-fire" style={{ marginRight: '5px' }} />
                      {movie.popularity.toFixed(0)}
                    </span>
                    <span className="stat">
                      <i className="fas fa-thumbs-up" style={{ marginRight: '5px' }} />
                      {movie.vote_count}
                    </span>
                    <span className="stat">
                      <i className="fas fa-globe" style={{ marginRight: '5px' }} />
                      {movie.original_language.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              marginTop: '40px'
            }}>
              <button 
                onClick={prevPage} 
                disabled={page === 1}
                style={{
                  padding: '8px 16px',
                  background: page === 1 ? 'rgba(255, 255, 255, 0.1)' : '#0068c8',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: page === 1 ? 'not-allowed' : 'pointer',
                  opacity: page === 1 ? 0.5 : 1
                }}
              >
                Previous
              </button>
              
              <div className="page-numbers" style={{ display: 'flex', gap: '5px' }}>
                {[...Array(Math.min(5, totalPages))].map((_, i) => {
                  let pageNum;
                  if (totalPages <= 5) pageNum = i + 1;
                  else if (page <= 3) pageNum = i + 1;
                  else if (page >= totalPages - 2) pageNum = totalPages - 4 + i;
                  else pageNum = page - 2 + i;
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => goToPage(pageNum)}
                      style={{
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: page === pageNum ? '#0068c8' : 'rgba(255, 255, 255, 0.05)',
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '0.9rem'
                      }}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
              
              <button 
                onClick={nextPage} 
                disabled={page === totalPages}
                style={{
                  padding: '8px 16px',
                  background: page === totalPages ? 'rgba(255, 255, 255, 0.1)' : '#0068c8',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: page === totalPages ? 'not-allowed' : 'pointer',
                  opacity: page === totalPages ? 0.5 : 1
                }}
              >
                Next
              </button>
            </div>
          )}

          <div className="results-info" style={{
            textAlign: 'center',
            marginTop: '20px',
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.9rem'
          }}>
            Showing {sortedMovies.length} movies on page {page} of {totalPages}
            {minRating > 0 && ` with rating ${minRating.toFixed(1)}+`}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>
        </>
      )}

      {/* No Results */}
      {!loading && sortedMovies.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '60px 20px',
          color: 'rgba(255, 255, 255, 0.5)'
        }}>
          <i className="fas fa-film" style={{ fontSize: '3rem', marginBottom: '15px', opacity: 0.5 }} />
          <h3 style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '10px' }}>No movies found</h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Try adjusting your search or filters</p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setMinRating(0);
            }}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              background: '#0068c8',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Add spinner animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .movie-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          }
          
          select:focus, input:focus {
            outline: none;
            border-color: #0068c8 !important;
          }
        `}
      </style>
    </div>
  );
};

export default AllMovies;