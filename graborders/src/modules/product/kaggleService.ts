import axios, { AxiosInstance } from 'axios';

// Configure Axios instance with Kaggle-specific settings
const createKaggleInstance = (): AxiosInstance => {
  // IMPORTANT: Replace these with your actual Kaggle credentials/session
  const kaggleSessionId = 'e640b3c97cfe71f93dfe325044927bea';
  const xsrfToken = 'CfDJ8MObNv7beYBJjzZT7SO0JVJq1ZvnnogEGJMmSyUeKSKyfva-gE-8p-eKOfeweIXtp0KX50ynCGj-CWbsQ_rUsueHWvN3xppCa5c_NFu8Amx4h0ZcafADsMJ-aA2q6q362ix9tBWrxhZoV_klgWQ3vpw';
  const csrfToken = 'CfDJ8MObNv7beYBJjzZT7SO0JVLt5q1K5G6qUgZX8oUCAWeTmDCPrLwZ5wOqlTplDYjY9YPDoij4GIZSCqssm5W9C6lniqnZyIXKt5f95178gw';

  const instance = axios.create({
    baseURL: 'https://www.kaggle.com',
    timeout: 30000, // 30 second timeout
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'en-US,en;q=0.9',
      'Origin': 'https://www.kaggle.com',
      'Referer': 'https://www.kaggle.com/datasets/disham993/9000-movies-dataset/data',
      'Sec-Ch-Ua': '"Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
      'Sec-Ch-Ua-Mobile': '?0',
      'Sec-Ch-Ua-Platform': '"Windows"',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36',
      'X-Kaggle-Build-Version': 'fa96478e00c56fddb45b99e93704127b65bb0545',
      'X-Xsrf-Token': xsrfToken,
      'Cookie':"ka_sessionid=e640b3c97cfe71f93dfe325044927bea; _ga=GA1.1.177993782.1768309588; CSRF-TOKEN=CfDJ8MObNv7beYBJjzZT7SO0JVLt5q1K5G6qUgZX8oUCAWeTmDCPrLwZ5wOqlTplDYjY9YPDoij4GIZSCqssm5W9C6lniqnZyIXKt5f95178gw; GCLB=CJ6fvOGOqJKf8wEQAw; build-hash=fa96478e00c56fddb45b99e93704127b65bb0545; searchToken=2c097e8d-72f0-48eb-93ac-93480714ea5a; __Host-KAGGLEID=CfDJ8MObNv7beYBJjzZT7SO0JVLpGbwSl48huryY8xp2CWDviqO4RMLjrIO4_PfzQFjSd3J2r0PUpDmSXfViilrH54_VS8AA1xgqSyPr4g9eJn5TwBDESvKTlJ6F; ACCEPTED_COOKIES=true; ka_db=CfDJ8MObNv7beYBJjzZT7SO0JVK7bIDCCwh4aEnv__gNCxNHOeG6bFKDTLHGPQcUW2x2nQZsjyf6egarwJrkiehE1A70ar0jMFI14s54g1nyzWDLWv3j6IDt15Qmn14; XSRF-TOKEN=CfDJ8MObNv7beYBJjzZT7SO0JVJq1ZvnnogEGJMmSyUeKSKyfva-gE-8p-eKOfeweIXtp0KX50ynCGj-CWbsQ_rUsueHWvN3xppCa5c_NFu8Amx4h0ZcafADsMJ-aA2q6q362ix9tBWrxhZoV_klgWQ3vpw; CLIENT-TOKEN=eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJpc3MiOiJrYWdnbGUiLCJhdWQiOiJjbGllbnQiLCJzdWIiOiJib3VnaGRpcmkiLCJuYnQiOiIyMDI2LTAxLTE2VDE1OjAzOjM0LjIxOTQ1MjlaIiwiaWF0IjoiMjAyNi0wMS0xNlQxNTowMzozNC4yMTk0NTI5WiIsImp0aSI6ImVmNTk0ZjkyLWFhMDItNDQxZi04YTMwLWQ0Mzc3OGViNTMyMiIsImV4cCI6IjIwMjYtMDItMTZUMTU6MDM6MzQuMjE5NDUyOVoiLCJ1aWQiOjI1NjkwMzIsImRpc3BsYXlOYW1lIjoiTW9vdHNzYW0iLCJlbWFpbCI6Im1vb3Rhc3NhbWVAZ21haWwuY29tIiwidGllciI6ImNvbnRyaWJ1dG9yIiwidmVyaWZpZWQiOmZhbHNlLCJwcm9maWxlVXJsIjoiL2JvdWdoZGlyaSIsInRodW1ibmFpbFVybCI6Imh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9rYWdnbGUtYXZhdGFycy90aHVtYm5haWxzL2RlZmF1bHQtdGh1bWIucG5nIiwiZmZoIjoiZmYzZTliNTRkMTkzZjcwMzkwZTQwMzYyYjljZjNhNWUyMzU4NmUxNWQ2OTA1ZDQzZWI5NDg5NjQzZTVlMWIzMiIsInBpZCI6ImthZ2dsZS0xNjE2MDciLCJzdmMiOiJ3ZWItZmUiLCJzZGFrIjoiQUl6YVN5QTRlTnFVZFJSc2tKc0NaV1Z6LXFMNjU1WGE1SkVNcmVFIiwiYmxkIjoiZmE5NjQ3OGUwMGM1NmZkZGI0NWI5OWU5MzcwNDEyN2I2NWJiMDU0NSJ9.; _ga_T7QHS60L4Q=GS2.1.s1768575813$o5$g1$t1768575815$j58$l0$h0"
    }
  });

  // Set cookies for authentication
  instance.defaults.headers.common['Cookie'] = 
    `ka_sessionid=${kaggleSessionId}; ` +
    `CSRF-TOKEN=${csrfToken}; ` +
    `XSRF-TOKEN=${xsrfToken}; ` +
    `GCLB=CJ6fvOGOqJKf8wEQAw; ` +
    `build-hash=fa96478e00c56fddb45b99e93704127b65bb0545`;

  return instance;
};

export interface KaggleMovie {
  release_date: string;
  title: string;
  overview: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
  original_language: string;
  genres: string;
  poster_url: string;
}

export interface KaggleResponse {
  dataView: {
    dataTable: {
      totalRows: number;
      rowsReturned: number;
      rows: Array<{
        text: string[];
      }>;
    };
  };
}

// Convert Kaggle API response to our movie format
const transformKaggleData = (response: KaggleResponse): KaggleMovie[] => {
  if (!response.dataView?.dataTable?.rows) {
    return [];
  }

  return response.dataView.dataTable.rows.map(row => ({
    release_date: row.text[0] || '',
    title: row.text[1] || '',
    overview: row.text[2] || '',
    popularity: parseFloat(row.text[3]) || 0,
    vote_count: parseInt(row.text[4]) || 0,
    vote_average: parseFloat(row.text[5]) || 0,
    original_language: row.text[6] || '',
    genres: row.text[7] || '',
    poster_url: row.text[8] || ''
  }));
};

// Main function to fetch movies from Kaggle
export const fetchKaggleMovies = async (): Promise<KaggleMovie[]> => {
  try {
    const kaggleClient = createKaggleInstance();
    
    const payload = {
      verificationInfo: {
        datasetId: 1986577,
        databundleVersionId: 3335159
      },
      firestorePath: "Gap0YmT29w4UG00W0VXE/versions/J2SkH4KJ9X1IYvjS6kMc/files/mymoviedb.csv"
    };

    const response = await kaggleClient.post<KaggleResponse>(
      '/api/i/datasets.DatasetService/GetDataViewExternal',
      payload
    );

    return transformKaggleData(response.data);
  } catch (error) {
    console.error('Error fetching Kaggle movies:', error);
    throw error;
  }
};