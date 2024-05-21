import { useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";

function App() {
  const [searchedMovie, setSearchedMovie] = useState("");
  return (
    <div className="app-container">
      <NavBar setSearchedMovie={setSearchedMovie} />
      <div className="main-content-container">
        <MainContent searchedMovie={searchedMovie} />
      </div>
    </div>
  );
}

export default App;
