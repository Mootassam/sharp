export interface Film {
  id: number;
  image: string;
  rating: number;
  title: string;
  genre: string;
  category: string;
  isTrending: boolean;
}

export const topFilms: Film[] = [
  {
    id: 1,
    image: "https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    rating: 8.3,
    title: "Spider-Man: No Way Home",
    genre: "Action, Adventure, Science Fiction",
    isTrending: true,
    category: 'action'
  },
  {
    id: 2,
    image: "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    rating: 8.1,
    title: "The Batman",
    genre: "Crime, Mystery, Thriller",
    isTrending: true,
    category: 'drama'
  },
  {
    id: 3,
    image: "https://image.tmdb.org/t/p/original/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
    rating: 8.4,
    title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
    genre: "Animation, Action, Adventure, Fantasy",
    isTrending: true,
    category: 'fantasy'
  },
  {
    id: 4,
    image: "https://image.tmdb.org/t/p/original/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
    rating: 8.2,
    title: "Sing 2",
    genre: "Animation, Comedy, Family, Music",
    isTrending: true,
    category: 'comedy'
  },
  {
    id: 5,
    image: "https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    rating: 8.3,
    title: "Avengers: Infinity War",
    genre: "Adventure, Action, Science Fiction",
    isTrending: false,
    category: 'action'
  },
  {
    id: 6,
    image: "https://image.tmdb.org/t/p/original/wToO8opxkGwKgSfJ1JK8tGvkG6U.jpg",
    rating: 8.2,
    title: "Cruella",
    genre: "Comedy, Crime",
    isTrending: true,
    category: 'comedy'
  },
  {
    id: 7,
    image: "https://image.tmdb.org/t/p/original/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
    rating: 8.0,
    title: "Luca",
    genre: "Animation, Comedy, Family, Fantasy",
    isTrending: true,
    category: 'comedy'
  },
  {
    id: 8,
    image: "https://image.tmdb.org/t/p/original/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
    rating: 8.3,
    title: "Zack Snyder's Justice League",
    genre: "Action, Adventure, Fantasy, Science Fiction",
    isTrending: true,
    category: 'action'
  },
  {
    id: 9,
    image: "https://image.tmdb.org/t/p/original/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
    rating: 8.0,
    title: "The Tomorrow War",
    genre: "Action, Science Fiction, Adventure",
    isTrending: true,
    category: 'sci-fi'
  },
  {
    id: 10,
    image: "https://image.tmdb.org/t/p/original/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
    rating: 8.0,
    title: "Raya and the Last Dragon",
    genre: "Family, Fantasy, Animation, Action, Adventure",
    isTrending: true,
    category: 'fantasy'
  },
  {
    id: 11,
    image: "https://image.tmdb.org/t/p/original/4NUzcKtYPKkfTwKsLjwNt8nRIXV.jpg",
    rating: 7.3,
    title: "My Hero Academia: World Heroes' Mission",
    genre: "Animation, Action, Fantasy, Adventure",
    isTrending: true,
    category: 'fantasy'
  },
  {
    id: 12,
    image: "https://image.tmdb.org/t/p/original/k0ThmZQl5nHe4JefC2bXjqtgYp0.jpg",
    rating: 8.0,
    title: "The Seven Deadly Sins: Cursed by Light",
    genre: "Animation, Fantasy",
    isTrending: false,
    category: 'fantasy'
  },
  {
    id: 13,
    image: "https://image.tmdb.org/t/p/original/9YbyvcrHmY2SVbdfXpb8mC4Fy0g.jpg",
    rating: 8.3,
    title: "Miraculous World: New York, United HeroeZ",
    genre: "Animation, Family, Comedy, Adventure, TV Movie",
    isTrending: true,
    category: 'fantasy'
  },
  {
    id: 14,
    image: "https://image.tmdb.org/t/p/original/zGVbrulkupqpbwgiNedkJPyQum4.jpg",
    rating: 8.4,
    title: "My Hero Academia: Heroes Rising",
    genre: "Animation, Action, Fantasy, Adventure",
    isTrending: true,
    category: 'fantasy'
  },
  {
    id: 15,
    image: "https://image.tmdb.org/t/p/original/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
    rating: 7.5,
    title: "Black Widow",
    genre: "Action, Adventure, Science Fiction",
    isTrending: true,
    category: 'action'
  },
  {
    id: 16,
    image: "https://image.tmdb.org/t/p/original/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
    rating: 7.8,
    title: "Godzilla vs. Kong",
    genre: "Action, Fantasy, Science Fiction",
    isTrending: true,
    category: 'action'
  },
  {
    id: 17,
    image: "https://image.tmdb.org/t/p/original/ic0intvXZSfBlYPIvWXpU1ivUCO.jpg",
    rating: 7.5,
    title: "PAW Patrol: The Movie",
    genre: "Animation, Family, Adventure, Comedy",
    isTrending: true,
    category: 'comedy'
  },
  {
    id: 18,
    image: "https://image.tmdb.org/t/p/original/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
    rating: 7.7,
    title: "Shang-Chi and the Legend of the Ten Rings",
    genre: "Action, Adventure, Fantasy",
    isTrending: true,
    category: 'action'
  },
  {
    id: 19,
    image: "https://image.tmdb.org/t/p/original/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
    rating: 7.6,
    title: "Jungle Cruise",
    genre: "Action, Adventure, Comedy, Fantasy",
    isTrending: true,
    category: 'action'
  },
  {
    id: 20,
    image: "https://image.tmdb.org/t/p/original/M7SUK85sKjaStg4TKhlAVyGlz3.jpg",
    rating: 7.7,
    title: "Wrath of Man",
    genre: "Action, Crime, Thriller",
    isTrending: false,
    category: 'action'
  },
  {
    id: 21,
    image: "https://image.tmdb.org/t/p/original/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
    rating: 7.3,
    title: "F9",
    genre: "Action, Crime, Thriller, Adventure",
    isTrending: true,
    category: 'action'
  },
  {
    id: 22,
    image: "https://image.tmdb.org/t/p/original/qQ0VKsGRQ2ofAmswGNzZnvC1xPE.jpg",
    rating: 7.9,
    title: "Miraculous World: Shanghai – The Legend of Ladydragon",
    genre: "Animation, Comedy, Family, Adventure",
    isTrending: true,
    category: 'fantasy'
  },
  {
    id: 23,
    image: "https://image.tmdb.org/t/p/original/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg",
    rating: 7.7,
    title: "The Suicide Squad",
    genre: "Action, Adventure, Fantasy",
    isTrending: true,
    category: 'action'
  },
  {
    id: 24,
    image: "https://image.tmdb.org/t/p/original/kv2Qk9MKFFQo4WQPaYta599HkJP.jpg",
    rating: 7.6,
    title: "The Boss Baby: Family Business",
    genre: "Animation, Comedy, Adventure, Family",
    isTrending: true,
    category: 'comedy'
  },
  {
    id: 25,
    image: "https://image.tmdb.org/t/p/original/jlJ8nDhMhCYJuzOw3f52CP1W8MW.jpg",
    rating: 7.6,
    title: "The SpongeBob Movie: Sponge on the Run",
    genre: "Family, Animation, Fantasy, Adventure, Comedy",
    isTrending: true,
    category: 'comedy'
  },
  {
    id: 26,
    image: "https://image.tmdb.org/t/p/original/sg4xJaufDiQl7caFEskBtQXfD4x.jpg",
    rating: 7.7,
    title: "Ghostbusters: Afterlife",
    genre: "Fantasy, Comedy, Adventure",
    isTrending: true,
    category: 'fantasy'
  },
  {
    id: 27,
    image: "https://image.tmdb.org/t/p/original/oifhfVhUcuDjE61V5bS5dfShQrm.jpg",
    rating: 7.3,
    title: "Clifford the Big Red Dog",
    genre: "Family, Adventure, Comedy, Fantasy",
    isTrending: true,
    category: 'comedy'
  },
  {
    id: 28,
    image: "https://image.tmdb.org/t/p/original/1UCOF11QCw8kcqvce8LKOO6pimh.jpg",
    rating: 6.8,
    title: "Monster Hunter",
    genre: "Action, Fantasy, Adventure",
    isTrending: false,
    category: 'fantasy'
  },
  {
    id: 29,
    image: "https://image.tmdb.org/t/p/original/tbVZ3Sq88dZaCANlUcewQuHQOaE.jpg",
    rating: 7.6,
    title: "The Croods: A New Age",
    genre: "Animation, Family, Adventure, Fantasy, Comedy",
    isTrending: true,
    category: 'comedy'
  },
  {
    id: 30,
    image: "https://image.tmdb.org/t/p/original/zjrJE0fpzPvX8saJXj8VNfcjBoU.jpg",
    rating: 7.6,
    title: "The Last Duel",
    genre: "Action, Drama, History",
    isTrending: false,
    category: 'action'
  },
  {
    id: 31,
    image: "https://image.tmdb.org/t/p/original/6gg7fvKc1ZxP9yCczweSxIGYp4S.jpg",
    rating: 7.8,
    title: "Through My Window",
    genre: "Romance, Drama",
    isTrending: true,
    category: 'drama'
  },
  {
    id: 32,
    image: "https://image.tmdb.org/t/p/original/kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
    rating: 7.3,
    title: "After We Collided",
    genre: "Romance, Drama",
    isTrending: true,
    category: 'drama'
  },
  {
    id: 33,
    image: "https://image.tmdb.org/t/p/original/u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg",
    rating: 7.2,
    title: "After",
    genre: "Romance, Drama",
    isTrending: true,
    category: 'drama'
  },
  {
    id: 34,
    image: "https://image.tmdb.org/t/p/original/8p3mhjyLjHKtaAv8tFKfvEBtir0.jpg",
    rating: 5.8,
    title: "Sooryavanshi",
    genre: "Action, Crime, Thriller",
    isTrending: false,
    category: 'action'
  },
  {
    id: 35,
    image: "https://image.tmdb.org/t/p/original/vzX5GNRTXsAltdU1tfASmZbzYmv.jpg",
    rating: 6.7,
    title: "Tyler Perry's A Madea Homecoming",
    genre: "Comedy",
    isTrending: false,
    category: 'comedy'
  },
  {
    id: 36,
    image: "https://image.tmdb.org/t/p/original/wYihSXWYqN8Ejsdut2P1P0o97N0.jpg",
    rating: 5.9,
    title: "Pursuit",
    genre: "Action, Crime, Thriller",
    isTrending: false,
    category: 'action'
  },
  {
    id: 37,
    image: "https://image.tmdb.org/t/p/original/uIXF0sQGXOxQhbaEaKOi2VYlIL0.jpg",
    rating: 6.8,
    title: "Snake Eyes: G.I. Joe Origins",
    genre: "Action, Adventure",
    isTrending: false,
    category: 'action'
  },
  {
    id: 38,
    image: "https://image.tmdb.org/t/p/original/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg",
    rating: 7.1,
    title: "Space Jam: A New Legacy",
    genre: "Family, Animation, Comedy, Science Fiction",
    isTrending: true,
    category: 'comedy'
  },
  {
    id: 39,
    image: "https://image.tmdb.org/t/p/original/ld7YB9vBRp1GM1DT3KmFWSmtBPB.jpg",
    rating: 7.2,
    title: "The Addams Family 2",
    genre: "Animation, Adventure, Comedy, Family",
    isTrending: true,
    category: 'comedy'
  },
  {
    id: 40,
    image: "https://image.tmdb.org/t/p/original/7M0uwPgwvPONdFG0jk8TPK09xJU.jpg",
    rating: 8.1,
    title: "Ron's Gone Wrong",
    genre: "Animation, Science Fiction, Family, Comedy",
    isTrending: true,
    category: 'sci-fi'
  }
];