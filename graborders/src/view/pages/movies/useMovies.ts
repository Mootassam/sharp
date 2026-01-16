import { useState, useEffect, useCallback, useRef } from 'react';
import { fetchKaggleMovies, KaggleMovie } from 'src/modules/product/kaggleService';

export const useMovies = () => {
  const [allMovies, setAllMovies] = useState<KaggleMovie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<KaggleMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalRows, setTotalRows] = useState<number>(0);
  const [currentFilter, setCurrentFilter] = useState<{
    minRating: number;
    searchQuery: string;
  }>({ minRating: 0, searchQuery: '' });

  const itemsPerPage = 20;
  const isInitialMount = useRef(true);

  const loadMovies = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const movies = await fetchKaggleMovies();
      setAllMovies(movies);
      setFilteredMovies(movies); // Initially show all movies
      setTotalRows(movies.length);
      setTotalPages(Math.ceil(movies.length / itemsPerPage));
      setCurrentFilter({ minRating: 0, searchQuery: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load movies');
      console.error('Failed to load movies:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Apply filters without infinite loop
  const applyFilters = useCallback((minRating: number, searchQuery: string) => {
    if (allMovies.length === 0) return;

    let filtered = [...allMovies];
    
    // Apply rating filter
    if (minRating > 0) {
      filtered = filtered.filter(movie => movie.vote_average >= minRating);
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(movie => 
        movie.title.toLowerCase().includes(query) ||
        movie.genres.toLowerCase().includes(query) ||
        movie.overview.toLowerCase().includes(query)
      );
    }
    
    setFilteredMovies(filtered);
    setPage(1); // Reset to first page when filters change
    setTotalPages(Math.ceil(filtered.length / itemsPerPage));
  }, [allMovies]);

  // Load movies on mount
  useEffect(() => {
    if (isInitialMount.current) {
      loadMovies();
      isInitialMount.current = false;
    }
  }, [loadMovies]);

  // Apply filters when currentFilter changes
  useEffect(() => {
    if (!isInitialMount.current && allMovies.length > 0) {
      applyFilters(currentFilter.minRating, currentFilter.searchQuery);
    }
  }, [currentFilter, allMovies, applyFilters]);

  const getPaginatedMovies = useCallback(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredMovies.slice(startIndex, endIndex);
  }, [filteredMovies, page]);

  const updateFilters = useCallback((updates: Partial<{ minRating: number; searchQuery: string }>) => {
    setCurrentFilter(prev => ({
      ...prev,
      ...updates
    }));
  }, []);

  const nextPage = () => {
    if (page < totalPages) {
      setPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPage(pageNumber);
    }
  };

  return {
    movies: getPaginatedMovies(),
    allMovies: filteredMovies,
    loading,
    error,
    page,
    totalPages,
    totalRows: filteredMovies.length,
    nextPage,
    prevPage,
    goToPage,
    updateFilters, // Use this instead of direct filterByRating
    refresh: loadMovies
  };
};