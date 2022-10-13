import React from "react";
import Blog from "./Blog";
import image1 from '../images/image1.jpeg';

function Home() {
  return (
    <div className="page">
        
      <div className= "homepage"></div><br/>
      <h4 className="titlepage">THE CAMPING</h4><br/><br/>
      <div>
        <Blog />
      </div>
    </div>
  );
}

export default Home;
