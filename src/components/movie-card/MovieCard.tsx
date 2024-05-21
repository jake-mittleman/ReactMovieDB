import { useEffect, useState } from "react";
import "./MovieCard.css";
import imdbLogo from "../../../public/imdb.png";
import rottenTomatoesLogo from "../../../public/rotten-tomatoes.png";

interface movieCard {
  title: string;
  poster: string;
  year: string;
  plot: string;
  imdbScore: string;
  rottenTomatoesScore: string;
}

function buildMovieCard(movieData: { [x: string]: { [x: string]: any }[] }) {
  var imdbScore = "--";
  var rottenTomatoesScore = "--";
  if (movieData["Ratings"][0]) {
    imdbScore = movieData["Ratings"][0]["Value"];
  }
  if (movieData["Ratings"][1]) {
    rottenTomatoesScore = movieData["Ratings"][1]["Value"];
  }
  const movieCard: movieCard = {
    title: movieData["Title"],
    poster: movieData["Poster"],
    year: movieData["Year"],
    plot: movieData["Plot"],
    imdbScore: imdbScore,
    rottenTomatoesScore: rottenTomatoesScore,
  };
  return movieCard;
}

function MovieCard({ searchedMovie }) {
  const [movieData, setMovieData] = useState({});
  const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
  // const IMAGE_BASE_URL = `http://img.omdbapi.com/?apikey=${apiKey}&`;
  const DATA_BASE_URL = `http://www.omdbapi.com/?apikey=${apiKey}&`;
  useEffect(() => {
    async function fetchData() {
      searchedMovie = searchedMovie.replace(" ", "+");
      fetch(DATA_BASE_URL + `t=${searchedMovie}`)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setMovieData(buildMovieCard(data));
        });
    }
    fetchData();
  });

  return (
    <div className="movie-card-container">
      <div className="movie-card-content">
        <div className="movie-card-title">
          {movieData.title} ({movieData.year})
        </div>
        <img src={movieData.poster} className="movie-poster"></img>
        <h4 className="plot-details">{movieData.plot}</h4>
        <div className="ratings-container">
          <div className="imdb-rating">
            <img src={imdbLogo} className="imdb-icon" />
            {movieData.imdbScore}
          </div>
          -
          <div className="rotten-tomatoes-rating">
            <img src={rottenTomatoesLogo} className="rotten-tomatoes-icon" />
            {movieData.rottenTomatoesScore}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
