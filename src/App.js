import React from "react"
import ReactDOM from "react-dom"

import AppHeader from "./components/Header"
import CenteredGrid from "./components/BodyContainer"
import './App.css';

const App = () => {
  return (
    <div className="App">
      <AppHeader/>
      <CenteredGrid/>
    </div>
  );
}

export default App;
