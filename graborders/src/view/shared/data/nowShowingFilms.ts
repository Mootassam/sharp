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
  {
    id: 28,
    image: "https://image.tmdb.org/t/p/original/pSh8MyYu5CmfyWEHzv8FEARH2zq.jpg",
    rating: 6.6,
    title: "The Commando",
    genre: "Action, Crime, Thriller",
    duration: "1h 34m",
    imax: false,
    category: 'action'
  },
  {
    id: 29,
    image: "https://image.tmdb.org/t/p/original/kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg",
    rating: 6.8,
    title: "Scream",
    genre: "Horror, Mystery, Thriller",
    duration: "1h 54m",
    imax: false,
    category: 'drama'
  },
  {
    id: 30,
    image: "https://image.tmdb.org/t/p/original/3cccEF9QZgV9bLWyupJO41HSrOV.jpg",
    rating: 5.3,
    title: "Fistful of Vengeance",
    genre: "Action, Crime, Fantasy",
    duration: "1h 36m",
    imax: false,
    category: 'action'
  },
  {
    id: 31,
    image: "https://image.tmdb.org/t/p/original/wYihSXWYqN8Ejsdut2P1P0o97N0.jpg",
    rating: 5.9,
    title: "Pursuit",
    genre: "Action, Crime, Thriller",
    duration: "1h 35m",
    imax: false,
    category: 'action'
  },
  {
    id: 32,
    image: "https://image.tmdb.org/t/p/original/aw4GGsRwhQtyLsjzC7dsAahfCDY.jpg",
    rating: 5.9,
    title: "Restless",
    genre: "Action, Thriller, Crime",
    duration: "1h 41m",
    imax: false,
    category: 'action'
  },
  {
    id: 33,
    image: "https://image.tmdb.org/t/p/original/680klE0dIreQQOyWKFgNnCAJtws.jpg",
    rating: 7.1,
    title: "Nightmare Alley",
    genre: "Crime, Drama, Thriller",
    duration: "2h 30m",
    imax: false,
    category: 'drama'
  },
  {
    id: 34,
    image: "https://image.tmdb.org/t/p/original/zzXFM4FKDG7l1ufrAkwQYv2xvnh.jpg",
    rating: 7.1,
    title: "The Ice Age Adventures of Buck Wild",
    genre: "Animation, Comedy, Adventure, Family",
    duration: "1h 22m",
    imax: false,
    category: 'comedy'
  },
  {
    id: 35,
    image: "https://image.tmdb.org/t/p/original/i0z8g2VRZP3dhVvvSMilbOZMKqR.jpg",
    rating: 4.6,
    title: "The Requin",
    genre: "Thriller",
    duration: "1h 29m",
    imax: false,
    category: 'drama'
  },
  {
    id: 36,
    image: "https://image.tmdb.org/t/p/original/onGdT8sYi89drvSJyEJnft97rOq.jpg",
    rating: 6.0,
    title: "Looop Lapeta",
    genre: "Action, Comedy, Crime",
    duration: "2h 07m",
    imax: false,
    category: 'action'
  },
  {
    id: 37,
    image: "https://image.tmdb.org/t/p/original/3Ib8vlWTrAKRrTWUrTrZPOMW4jp.jpg",
    rating: 5.4,
    title: "The Jack in the Box: Awakening",
    genre: "Horror",
    duration: "1h 31m",
    imax: false,
    category: 'drama'
  },
  {
    id: 38,
    image: "https://image.tmdb.org/t/p/original/8c4a8kE7PizaGQQnditMmI1xbRp.jpg",
    rating: 6.8,
    title: "The Matrix Resurrections",
    genre: "Science Fiction, Action, Adventure",
    duration: "2h 28m",
    imax: true,
    category: 'sci-fi'
  },
  {
    id: 39,
    image: "https://image.tmdb.org/t/p/original/7uRbWOXxpWDMtnsd2PF3clu65jc.jpg",
    rating: 6.1,
    title: "Resident Evil: Welcome to Raccoon City",
    genre: "Horror, Action, Science Fiction",
    duration: "1h 47m",
    imax: false,
    category: 'sci-fi'
  },
  {
    id: 40,
    image: "https://image.tmdb.org/t/p/original/4B7liCxNCZIZGONmAMkCnxVlZQV.jpg",
    rating: 6.3,
    title: "Last Man Down",
    genre: "Action, Thriller",
    duration: "1h 28m",
    imax: false,
    category: 'action'
  },
  {
    id: 41,
    image: "https://image.tmdb.org/t/p/original/daeVrgyj0ue8qb3AHyU3UeCwoZz.jpg",
    rating: 5.4,
    title: "American Siege",
    genre: "Action, Thriller, Crime, Drama",
    duration: "1h 38m",
    imax: false,
    category: 'action'
  },
  {
    id: 42,
    image: "https://image.tmdb.org/t/p/original/sqLowacltbZLoCa4KYye64RvvdQ.jpg",
    rating: 7.1,
    title: "Uncharted",
    genre: "Action, Adventure",
    duration: "1h 56m",
    imax: true,
    category: 'action'
  },
  {
    id: 43,
    image: "https://image.tmdb.org/t/p/original/sg4xJaufDiQl7caFEskBtQXfD4x.jpg",
    rating: 7.7,
    title: "Ghostbusters: Afterlife",
    genre: "Fantasy, Comedy, Adventure",
    duration: "2h 04m",
    imax: true,
    category: 'fantasy'
  },
  {
    id: 44,
    image: "https://image.tmdb.org/t/p/original/uQt2dJFMnJmAp9zLAWNfGilK0BW.jpg",
    rating: 6.1,
    title: "The 355",
    genre: "Action, Thriller",
    duration: "2h 02m",
    imax: false,
    category: 'action'
  },
  {
    id: 45,
    image: "https://image.tmdb.org/t/p/original/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
    rating: 7.7,
    title: "Shang-Chi and the Legend of the Ten Rings",
    genre: "Action, Adventure, Fantasy",
    duration: "2h 12m",
    imax: true,
    category: 'action'
  },
  {
    id: 46,
    image: "https://image.tmdb.org/t/p/original/ko1JVbGj4bT8IhCWqjBQ6ZtF2t.jpg",
    rating: 6.9,
    title: "Marry Me",
    genre: "Romance, Comedy, Music",
    duration: "1h 52m",
    imax: false,
    category: 'drama'
  },
  {
    id: 47,
    image: "https://image.tmdb.org/t/p/original/kvhrltQIRp1u84ao9uj52YPaWNY.jpg",
    rating: 5.8,
    title: "The Hunting",
    genre: "Horror",
    duration: "1h 35m",
    imax: false,
    category: 'drama'
  },
  {
    id: 48,
    image: "https://image.tmdb.org/t/p/original/yfz3IUoYYSY32tkb97HlUBGFsnh.jpg",
    rating: 7.4,
    title: "West Side Story",
    genre: "Drama, Romance, Crime",
    duration: "2h 36m",
    imax: false,
    category: 'drama'
  },
  {
    id: 49,
    image: "https://image.tmdb.org/t/p/original/6gg7fvKc1ZxP9yCczweSxIGYp4S.jpg",
    rating: 7.8,
    title: "Through My Window",
    genre: "Romance, Drama",
    duration: "1h 56m",
    imax: false,
    category: 'drama'
  },
  {
    id: 50,
    image: "https://image.tmdb.org/t/p/original/k0ThmZQl5nHe4JefC2bXjqtgYp0.jpg",
    rating: 8.0,
    title: "The Seven Deadly Sins: Cursed by Light",
    genre: "Animation, Fantasy",
    duration: "1h 19m",
    imax: false,
    category: 'fantasy'
  },
  {
    id: 51,
    image: "https://image.tmdb.org/t/p/original/3OxiTjU30gWtqxmx4BU9RVp2OTv.jpg",
    rating: 6.8,
    title: "One Shot",
    genre: "Action",
    duration: "1h 36m",
    imax: false,
    category: 'action'
  },
  {
    id: 52,
    image: "https://image.tmdb.org/t/p/original/muIaHotSaSUQr0KZCIJOYQEe7y2.jpg",
    rating: 7.1,
    title: "Tom and Jerry: Cowboy Up!",
    genre: "Animation, Comedy, Family, Western",
    duration: "1h 12m",
    imax: false,
    category: 'comedy'
  },
  {
    id: 53,
    image: "https://image.tmdb.org/t/p/original/AmJLuHjxPdIJO6vmymeWADG6jK5.jpg",
    rating: 6.2,
    title: "Chernobyl: Abyss",
    genre: "Drama, History, Adventure",
    duration: "2h 16m",
    imax: false,
    category: 'drama'
  },
  {
    id: 54,
    image: "https://image.tmdb.org/t/p/original/7pYYGm1dWZGkbJuhcuaHD6nE6k7.jpg",
    rating: 6.8,
    title: "Desperate Riders",
    genre: "Western, Action",
    duration: "1h 47m",
    imax: false,
    category: 'action'
  },
  {
    id: 55,
    image: "https://image.tmdb.org/t/p/original/oifhfVhUcuDjE61V5bS5dfShQrm.jpg",
    rating: 7.3,
    title: "Clifford the Big Red Dog",
    genre: "Family, Adventure, Comedy, Fantasy",
    duration: "1h 37m",
    imax: false,
    category: 'comedy'
  },
  {
    id: 56,
    image: "https://image.tmdb.org/t/p/original/vzX5GNRTXsAltdU1tfASmZbzYmv.jpg",
    rating: 6.7,
    title: "Tyler Perry's A Madea Homecoming",
    genre: "Comedy",
    duration: "1h 57m",
    imax: false,
    category: 'comedy'
  },
  {
    id: 57,
    image: "https://image.tmdb.org/t/p/original/kv2Qk9MKFFQo4WQPaYta599HkJP.jpg",
    rating: 7.6,
    title: "The Boss Baby: Family Business",
    genre: "Animation, Comedy, Adventure, Family",
    duration: "1h 47m",
    imax: false,
    category: 'comedy'
  },
  {
    id: 58,
    image: "https://image.tmdb.org/t/p/original/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
    rating: 8.6,
    title: "Turning Red",
    genre: "Animation, Family, Comedy, Fantasy",
    duration: "1h 40m",
    imax: true,
    category: 'comedy'
  },
  {
    id: 59,
    image: "https://image.tmdb.org/t/p/original/7e4n1GfC9iky9VQzH3cDQz9wYpO.jpg",
    rating: 4.8,
    title: "Brazen",
    genre: "Thriller, Mystery, Drama",
    duration: "1h 34m",
    imax: false,
    category: 'drama'
  },
  {
    id: 60,
    image: "https://image.tmdb.org/t/p/original/iZjMFSKCrleKolC1gYcz5Rs8bk1.jpg",
    rating: 7.1,
    title: "The House",
    genre: "Animation, Drama, Comedy, Horror",
    duration: "1h 37m",
    imax: false,
    category: 'comedy'
  },
  {
    id: 61,
    image: "https://image.tmdb.org/t/p/original/bv9dy8mnwftdY2j6gG39gCfSFpV.jpg",
    rating: 5.1,
    title: "Blacklight",
    genre: "Action, Thriller",
    duration: "1h 48m",
    imax: false,
    category: 'action'
  },
  {
    id: 62,
    image: "https://image.tmdb.org/t/p/original/7M0uwPgwvPONdFG0jk8TPK09xJU.jpg",
    rating: 8.1,
    title: "Ron's Gone Wrong",
    genre: "Animation, Science Fiction, Family, Comedy",
    duration: "1h 47m",
    imax: false,
    category: 'sci-fi'
  },
  {
    id: 63,
    image: "https://image.tmdb.org/t/p/original/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
    rating: 7.7,
    title: "Free Guy",
    genre: "Comedy, Action, Adventure, Science Fiction",
    duration: "1h 55m",
    imax: true,
    category: 'comedy'
  },
  {
    id: 64,
    image: "https://image.tmdb.org/t/p/original/p5jzbffrXuBTjsiwrQ3aOMTrvCj.jpg",
    rating: 6.6,
    title: "The Simpsons in Plusaversary",
    genre: "Animation, Comedy, Fantasy",
    duration: "4m",
    imax: false,
    category: 'comedy'
  },
  {
    id: 65,
    image: "https://image.tmdb.org/t/p/original/4RYZSHM3eaxXAnjbgNiVaqmekL8.jpg",
    rating: 6.3,
    title: "Forgive Us Our Trespasses",
    genre: "Drama, War",
    duration: "18m",
    imax: false,
    category: 'drama'
  },
  {
    id: 66,
    image: "https://image.tmdb.org/t/p/original/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg",
    rating: 7.2,
    title: "Mortal Kombat",
    genre: "Action, Fantasy, Adventure",
    duration: "1h 50m",
    imax: true,
    category: 'action'
  },
  {
    id: 67,
    image: "https://image.tmdb.org/t/p/original/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
    rating: 8.3,
    title: "Zack Snyder's Justice League",
    genre: "Action, Adventure, Fantasy, Science Fiction",
    duration: "4h 2m",
    imax: true,
    category: 'action'
  },
  {
    id: 68,
    image: "https://image.tmdb.org/t/p/original/rO3nV9d1wzHEWsC7xgwxotjZQpM.jpg",
    rating: 5.8,
    title: "Mother/Android",
    genre: "Science Fiction, Thriller",
    duration: "1h 50m",
    imax: false,
    category: 'sci-fi'
  },
  {
    id: 69,
    image: "https://image.tmdb.org/t/p/original/oZvMcGvyTfrFLny6i3RJONQb5C9.jpg",
    rating: 5.5,
    title: "Exploits of a Young Don Juan",
    genre: "Comedy, Drama",
    duration: "1h 33m",
    imax: false,
    category: 'comedy'
  },
  {
    id: 70,
    image: "https://image.tmdb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    rating: 7.9,
    title: "Dune",
    genre: "Science Fiction, Adventure",
    duration: "2h 35m",
    imax: true,
    category: 'sci-fi'
  },
  {
    id: 71,
    image: "https://image.tmdb.org/t/p/original/4qE7mvUYGY5epfcgeJpM6EfHgq5.jpg",
    rating: 7.1,
    title: "The Last Warrior: Root of Evil",
    genre: "Fantasy, Adventure, Comedy",
    duration: "1h 44m",
    imax: false,
    category: 'fantasy'
  },
  {
    id: 72,
    image: "https://image.tmdb.org/t/p/original/qBLi3Nd5JMQGMiOmmfuPgLw5SzD.jpg",
    rating: 5.1,
    title: "The Privilege",
    genre: "Horror",
    duration: "1h 43m",
    imax: false,
    category: 'drama'
  },
  {
    id: 73,
    image: "https://image.tmdb.org/t/p/original/4IKBzVBPLXu9p5cfEfdJjHdlafV.jpg",
    rating: 6.4,
    title: "Queen of Spades",
    genre: "Horror",
    duration: "1h 28m",
    imax: false,
    category: 'drama'
  },
  {
    id: 74,
    image: "https://image.tmdb.org/t/p/original/cMch3tiexw3FdOEeZxMWVel61Xg.jpg",
    rating: 6.4,
    title: "Antlers",
    genre: "Drama, Horror, Mystery",
    duration: "1h 39m",
    imax: false,
    category: 'drama'
  },
  {
    id: 75,
    image: "https://image.tmdb.org/t/p/original/vTtkQGC7qKlSRQJZYtAWAmYdH0A.jpg",
    rating: 6.4,
    title: "Dangerous",
    genre: "Action, Thriller",
    duration: "1h 39m",
    imax: false,
    category: 'action'
  },
  {
    id: 76,
    image: "https://image.tmdb.org/t/p/original/dU4HfnTEJDf9KvxGS9hgO7BVeju.jpg",
    rating: 7.2,
    title: "After We Fell",
    genre: "Romance, Drama",
    duration: "1h 39m",
    imax: false,
    category: 'drama'
  },
  {
    id: 77,
    image: "https://image.tmdb.org/t/p/original/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
    rating: 7.5,
    title: "No Time to Die",
    genre: "Adventure, Action, Thriller",
    duration: "2h 43m",
    imax: true,
    category: 'action'
  },
  {
    id: 78,
    image: "https://image.tmdb.org/t/p/original/8p3mhjyLjHKtaAv8tFKfvEBtir0.jpg",
    rating: 5.8,
    title: "Sooryavanshi",
    genre: "Action, Crime, Thriller",
    duration: "2h 25m",
    imax: false,
    category: 'action'
  },
  {
    id: 79,
    image: "https://image.tmdb.org/t/p/original/jKuDyqx7jrjiR9cDzB5pxzhJAdv.jpg",
    rating: 8.1,
    title: "Finch",
    genre: "Science Fiction, Drama, Adventure",
    duration: "1h 55m",
    imax: false,
    category: 'sci-fi'
  },
  {
    id: 80,
    image: "https://image.tmdb.org/t/p/original/5P7QwmoYl70tsRZ8e0VnI9RI1MF.jpg",
    rating: 5.4,
    title: "Two",
    genre: "Thriller, Horror",
    duration: "1h 52m",
    imax: false,
    category: 'drama'
  }
];