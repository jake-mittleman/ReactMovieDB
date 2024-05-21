import MovieCard from "./movie-card/MovieCard";

function MainContent({ searchedMovie }) {
  return (
    <>
      <div className="movie-card">
        <MovieCard searchedMovie={searchedMovie} />
      </div>
    </>
  );
}

export default MainContent;
