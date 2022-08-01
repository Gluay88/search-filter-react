import React, { useState } from "react";
import "./App.css";
import JSONDATA from "./MOCK_DATA.json";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <h1>Search Filter React</h1>
      <input
        type="text"
        placeholder="Search.."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.username
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div key={key}>
            <p>{val.username}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
