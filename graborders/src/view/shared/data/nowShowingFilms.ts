export interface NowShowingFilm {
  id: number;
  image: string;
  rating: number;
  title: string;
  genre: string;
  duration: string;
  imax: boolean;
  category: string;
}

export const nowShowingFilms: NowShowingFilm[] = [
  {
    id: 1,
    image: "https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    rating: 8.3,
    title: "Spider-Man: No Way Home",
    genre: "Action, Adventure, Science Fiction",
    duration: "2h 28m",
    imax: true,
    category: 'action'
  },
  {
    id: 2,
    image: "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    rating: 8.1,
    title: "The Batman",
    genre: "Crime, Mystery, Thriller",
    duration: "2h 56m",
    imax: true,
    category: 'drama'
  },
  {
    id: 3,
    image: "https://image.tmdb.org/t/p/original/vHla3Ej2m53rNmvmYkzvennLrKn.jpg",
    rating: 6.8,
    title: "House of Gucci",
    genre: "Drama, Crime, Thriller",
    duration: "2h 38m",
    imax: false,
    category: 'drama'
  },
  {
    id: 4,
    image: "https://image.tmdb.org/t/p/original/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg",
    rating: 7.0,
    title: "Hotel Transylvania: Transformania",
    genre: "Animation, Family, Fantasy, Comedy, Adventure",
    duration: "1h 47m",
    imax: false,
    category: 'comedy'
  },
  {
    id: 5,
    image: "https://image.tmdb.org/t/p/original/meRIRfADEGVo65xgPO6eZvJ0CRG.jpg",
    rating: 5.1,
    title: "Texas Chainsaw Massacre",
    genre: "Horror",
    duration: "1h 23m",
    imax: false,
    category: 'drama'
  },
  {
    id: 6,
    image: "https://image.tmdb.org/t/p/original/okNgwtxIWzGsNlR3GsOS0i0Qgbn.jpg",
    rating: 6.3,
    title: "Kimi",
    genre: "Thriller",
    duration: "1h 29m",
    imax: false,
    category: 'drama'
  },
  {
    id: 7,
    image: "https://image.tmdb.org/t/p/original/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
    rating: 6.8,
    title: "Red Notice",
    genre: "Action, Comedy, Crime, Thriller",
    duration: "1h 57m",
    imax: true,
    category: 'action'
  },
  {
    id: 8,
    image: "https://image.tmdb.org/t/p/original/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    rating: 7.1,
    title: "Venom: Let There Be Carnage",
    genre: "Science Fiction, Action, Adventure",
    duration: "1h 37m",
    imax: true,
    category: 'sci-fi'
  },
  {
    id: 9,
    image: "https://image.tmdb.org/t/p/original/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
    rating: 7.7,
    title: "Encanto",
    genre: "Animation, Comedy, Family, Fantasy",
    duration: "1h 42m",
    imax: true,
    category: 'fantasy'
  },
  {
    id: 10,
    image: "https://image.tmdb.org/t/p/original/zByhtBvX99ZiCQhac1sh9d9r6nb.jpg",
    rating: 7.2,
    title: "Eternals",
    genre: "Science Fiction",
    duration: "2h 37m",
    imax: true,
    category: 'sci-fi'
  },
  {
    id: 11,
    image: "https://image.tmdb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    rating: 7.9,
    title: "Dune",
    genre: "Science Fiction, Adventure",
    duration: "2h 35m",
    imax: true,
    category: 'sci-fi'
  },
  {
    id: 12,
    image: "https://image.tmdb.org/t/p/original/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
    rating: 7.5,
    title: "No Time to Die",
    genre: "Adventure, Action, Thriller",
    duration: "2h 43m",
    imax: true,
    category: 'action'
  },
  {
    id: 13,
    image: "https://image.tmdb.org/t/p/original/M7SUK85sKjaStg4TKhlAVyGlz3.jpg",
    rating: 7.7,
    title: "Wrath of Man",
    genre: "Action, Crime, Thriller",
    duration: "1h 59m",
    imax: false,
    category: 'action'
  },
  {
    id: 14,
    image: "https://image.tmdb.org/t/p/original/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
    rating: 7.6,
    title: "Jungle Cruise",
    genre: "Action, Adventure, Comedy, Fantasy",
    duration: "2h 7m",
    imax: true,
    category: 'action'
  },
  {
    id: 15,
    image: "https://image.tmdb.org/t/p/original/kvhrltQIRp1u84ao9uj52YPaWNY.jpg",
    rating: 5.8,
    title: "The Hunting",
    genre: "Horror",
    duration: "1h 35m",
    imax: false,
    category: 'drama'
  },
  {
    id: 16,
    image: "https://image.tmdb.org/t/p/original/qmJGd5IfURq8iPQ9KF3les47vFS.jpg",
    rating: 6.8,
    title: "Halloween Kills",
    genre: "Horror, Thriller",
    duration: "1h 45m",
    imax: false,
    category: 'drama'
  },
  {
    id: 17,
    image: "https://image.tmdb.org/t/p/original/vclShucpUmPhdAOmKgf3B3Z4POD.jpg",
    rating: 6.6,
    title: "Old",
    genre: "Thriller, Mystery, Horror",
    duration: "1h 48m",
    imax: false,
    category: 'drama'
  },
  {
    id: 18,
    image: "https://image.tmdb.org/t/p/original/lB068qa6bQ0QKYKyC2xnYGvYjl7.jpg",
    rating: 7.3,
    title: "The Forever Purge",
    genre: "Horror, Action, Thriller",
    duration: "1h 43m",
    imax: false,
    category: 'action'
  },
  {
    id: 19,
    image: "https://image.tmdb.org/t/p/original/5xhAPxRr64oQPEFnUOrttuI4ZEU.jpg",
    rating: 6.5,
    title: "The Deep House",
    genre: "Horror",
    duration: "1h 25m",
    imax: false,
    category: 'drama'
  },
  {
    id: 20,
    image: "https://image.tmdb.org/t/p/original/r7HEBkkRN93d3eFBZgPJfRaob5p.jpg",
    rating: 7.4,
    title: "Don't Breathe 2",
    genre: "Thriller, Horror",
    duration: "1h 38m",
    imax: false,
    category: 'drama'
  },
  {
    id: 21,
    image: "https://image.tmdb.org/t/p/original/cMch3tiexw3FdOEeZxMWVel61Xg.jpg",
    rating: 6.4,
    title: "Antlers",
    genre: "Drama, Horror, Mystery",
    duration: "1h 39m",
    imax: false,
    category: 'drama'
  },
  {
    id: 22,
    image: "https://image.tmdb.org/t/p/original/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg",
    rating: 5.9,
    title: "Moonfall",
    genre: "Action, Adventure, Science Fiction",
    duration: "2h 10m",
    imax: true,
    category: 'sci-fi'
  },
  {
    id: 23,
    image: "https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    rating: 6.6,
    title: "Wonder Woman 1984",
    genre: "Action, Adventure, Fantasy",
    duration: "2h 31m",
    imax: true,
    category: 'action'
  },
  {
    id: 24,
    image: "https://image.tmdb.org/t/p/original/1UCOF11QCw8kcqvce8LKOO6pimh.jpg",
    rating: 6.8,
    title: "Monster Hunter",
    genre: "Action, Fantasy, Adventure",
    duration: "1h 44m",
    imax: true,
    category: 'fantasy'
  },
  {
    id: 25,
    image: "https://image.tmdb.org/t/p/original/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg",
    rating: 7.2,
    title: "Mortal Kombat",
    genre: "Action, Fantasy, Adventure",
    duration: "1h 50m",
    imax: true,
    category: 'action'
  },
  {
    id: 26,
    image: "https://image.tmdb.org/t/p/original/vDHsLnOWKlPGmWs0kGfuhNF4w5l.jpg",
    rating: 6.3,
    title: "No Exit",
    genre: "Thriller",
    duration: "1h 35m",
    imax: false,
    category: 'drama'
  },
  {
    id: 27,
    image: "https://image.tmdb.org/t/p/original/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg",
    rating: 7.0,
    title: "The King's Man",
    genre: "Action, Adventure, Thriller, War",
    duration: "2h 11m",
    imax: true,
    category: 'action'
  },

];