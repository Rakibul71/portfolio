import './App.scss';
// import './styles/_navbar.scss';
import React from "react";
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import { Switch, Route, } from "react-router-dom";
import AboutPage from './Pages/AboutPage';
import PortfoliosPage from './Pages/PortfoliosPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import { useState } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [navToggle, setNavToggle] = useState(false);
  const navClick = () =>{
    setNavToggle(!navToggle)
  }
  return (
    <div className="App">
      {/* <div className="sidebar"> */}
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage></HomePage>
            </Route>
            <Route path="/about" exact>
              <AboutPage></AboutPage>
            </Route>
            <Route path="/portfolios" exact>
              <PortfoliosPage></PortfoliosPage>
            </Route>
            <Route path="/blogs" exact>
              <BlogsPage></BlogsPage>
            </Route>
            <Route path="/contact" exact>
              <ContactPage></ContactPage>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
