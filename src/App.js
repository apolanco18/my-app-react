import React, { useState } from "react"
import ReactDOM from "react-dom"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import AppHeader from "./components/Header"
import CenteredGrid from "./components/BodyContainer"
import Footer from './components/Footer'

import About from './components/About'
import Contact from './components/Contact'
import './App.css';

const App = () => {
  const [globalAppName, setGlobalAppName] = useState("global");

  const handleButtonClick = () =>{
    setGlobalAppName("Hame")
  }
  return (
    <Router>
    <div className="App">
      <AppHeader name={globalAppName}/>
      
      <div>

      <hr />

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/">
          <div>
            Work In Progress
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  <Footer onButtonClick={handleButtonClick}/>
</div>
</Router>
    
    
  );
}

export default App;
