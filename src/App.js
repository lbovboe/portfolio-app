import React from "react";
import AboutMe from "./Pages/AboutMe"
import GlobalStyle from "./components/GlobalStyle"
// Using packages 
// react-router-dom 
// framer-motion 
// react-intersection-observer 
// styled-components for javascript way of styling css
function App() {
  return (
    <div className="className">
      <GlobalStyle/>
      <AboutMe></AboutMe>
    </div>
    
  );
}

export default App;
