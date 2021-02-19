import React, { useState } from "react"
import ReactDOM from "react-dom"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Header from "./components/Header/Header"
import CenteredGrid from "./components/BodyContainer"
import Footer from './components/Footer'
import { Provider } from 'react-redux';
import store from './lib/redux'

import About from './components/About'
import Contact from './components/Contact'
import HomeWrapper from './components/Home/HomeWrapper'
import './App.css';
import {routes, RouteWithSubRoutes} from './lib/routing';

const App = () => {
  const [globalAppName, setGlobalAppName] = useState("global");

  const handleButtonClick = () =>{
    setGlobalAppName("Hame")
  }
  return (
    <Router>
    <div className="App">
      <Router>
        <Header/>
      
        <div>
          <Switch>
            {routes.map((route, i) => (
           
                (i == 0) 
                ? <RouteWithSubRoutes key={i} {...route} isFirst={true} />
                : <RouteWithSubRoutes key={i} {...route} isFirst={false} />
              
            ))}
          </Switch>
        </div>
      </Router>
      
      <Footer onButtonClick={handleButtonClick}/>
    </div>
</Router>
    
    
  );
}

export default App;
