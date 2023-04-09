const API_KEY = '1c7f375f97686effda4b4c3d3e58166d';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&width_networks=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorroMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumenataries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;