import React from "react";
import "./App.css";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <container>
        <SearchEngine />
        <Footer />
      </container>
    </div>
  );
}

export default App;
