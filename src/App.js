import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// elements
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Technology from "./pages/Technology";
import Contact from "./pages/Contact";




function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/technology" component={Technology} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
