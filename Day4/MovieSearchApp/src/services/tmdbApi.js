const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjAyYjA5Yjg5OWJkZDZlYjlhMmM4MzNmMDAyODY4ZiIsIm5iZiI6MTc4MjQ4OTYyNC42ODYsInN1YiI6IjZhM2VhMjE4ZmQyMGQzMmNmN2M4ZjRjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1_LRNJ-vofitq8e23qKdbviYQjVJnBT14VYwmtzGuBs";
const BASE_URL = "https://api.themoviedb.org/3/";

const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/all/day?language=en-US`,
      OPTIONS,
    );
    if (!response.ok) throw new Error("Failed to fetch trending movies");
    const data = await response.json();
    // console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("error fetching movies", error);
  }
};
export const fetchMovieImage = async (movie_id, file_path) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movie_id}/images/${file_path}`,
      OPTIONS,
    );
    if (!response.ok) throw new Error("Failed to fetch movie image");
    const data = await response.json();
    console.log("image working");
    return data;
  } catch (error) {
    console.error("error fetching movies", error);
  }
};
