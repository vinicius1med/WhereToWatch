import axios from 'axios';

export const fetchMovies = async (title: string) => {
  const options = {
    method: 'GET',
    url: 'https://streaming-availability.p.rapidapi.com/shows/search/title',
    params: {
      series_granularity: 'show',
      show_type: 'movie',
      output_language: 'en',
      title: title,
      country: 'br',
    },
    headers: {
      'x-rapidapi-key': 'c239a14750msh349f7b935787ed0p18025ajsn97dda1475735',
      'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
    },
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
}


