import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './Components/About/About/About';
import Project from './Components/Project/Project/Project';
import Contact from './Components/Contact/Contact/Contact';
import Blog from './Components/Blog/Blog/Blog';
import Portfolio from './Components/Portfolio/Portfolio/Portfolio';
function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
