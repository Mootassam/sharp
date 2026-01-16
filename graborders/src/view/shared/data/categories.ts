export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 'all', name: 'All', icon: '🎬' },
  { id: 'action', name: 'Action', icon: '💥' },
  { id: 'drama', name: 'Drama', icon: '🎭' },
  { id: 'comedy', name: 'Comedy', icon: '😂' },
  { id: 'sci-fi', name: 'Sci-Fi', icon: '🚀' },
  { id: 'fantasy', name: 'Fantasy', icon: '✨' },
];