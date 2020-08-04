import React from "react";
import Tabs from "./components/Tabs/Tabs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Tabs tabNames={["Hello", "World", "Again"]} />
    </div>
  );
}

export default App;
