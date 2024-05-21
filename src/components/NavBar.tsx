import { useState } from "react";
import "./NavBar.css";
import { FaSearch } from "react-icons/fa";

// function getMovieDetails(searchedMovie: string) {
//   this.props.parentCallBack(searchedMovie);
// }

function NavBar({ setSearchedMovie }) {
  const [searchClicked, setSearchClicked] = useState(false);
  const [desiredMovie, setDesiredMovie] = useState("");
  return (
    <div className="nav-bar-container">
      <h1 className="header-welcome">
        Welcome to my Movie Database React Project!
      </h1>
      <input
        type="text"
        className="searchbox"
        value={desiredMovie}
        onChange={(event) => setDesiredMovie(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            setSearchedMovie(desiredMovie);
          }
        }}
      ></input>
      <button className="search-button" onClick={() => setSearchClicked(true)}>
        <FaSearch color="white" size="2em" />
      </button>
    </div>
  );
}

export default NavBar;
