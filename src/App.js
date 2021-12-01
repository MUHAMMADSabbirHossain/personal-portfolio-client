import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import About from './Components/About/About/About';
import Project from './Components/Project/Project/Project';
import Contact from './Components/Contact/Contact/Contact';
import Blog from './Components/Blog/Blog/Blog';
import Portfolio from './Components/Portfolio/Portfolio/Portfolio';
function App() {
  const [loading, SetLoading] = useState(false);
  useEffect(()=>{
    SetLoading(true);
    setTimeout(() =>{
       SetLoading(false);
    }, 4000);
  },[]);
  return (
    <div className="App">
      {loading ? 
      
      <div className="display-loading">
        <HashLoader
        color={"#ff014f"} 
        loading={loading}
        size={100} />
      </div>

      :
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
      </Router>
}
    </div>
  );
}

export default App;
