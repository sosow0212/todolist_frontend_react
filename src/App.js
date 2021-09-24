import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const baseUrl = "http://localhost:8080";

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    await axios
      .get(baseUrl + "/todo")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      hello
    </div>
  );
  
}

export default App;
