const API_KEY = import.meta.env.VITE_API_KEY;
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
