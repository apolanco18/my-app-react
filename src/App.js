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
import { Provider } from 'react-redux';
import store from './lib/redux'

import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home/Home'
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

      <Switch>
        <Route exact path="/">
          <Provider store={store}>
            <Home/>
          </Provider>
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
