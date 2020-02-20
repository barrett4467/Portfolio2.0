import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";


// Background pic needs to be edited to actually show mountains 
function App() {
    const Section = styled.section`
      background-image: url("/backgroundPic_50.jpg");
      height: 100vh;
      width: 100vw;
  `
  return (
    <Router>
      <Section>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
      </Section>
    </Router>
  );
}

export default App;
