const API_KEY = '6cd12042d59bbfc26b9486c1b0462a27';

const Request = {
  RequestMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1`,
  Requesttv: `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US&page=1`,
  Requestnowplaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  Requestpopulor: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  Requesttoperelated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  Requestupcaming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
};

export default Request;
