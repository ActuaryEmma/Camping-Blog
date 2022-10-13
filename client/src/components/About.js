import React, {Component} from 'react';
import './App.css';



function About() {
    return (  
        <div className="major">
            <div className="head">
                <h1>About CampKe</h1>
            </div>
            <div className="body">
                
                    <p>
                    CampKe is a PLA camping enthusiasts who, for over 10 years, have joined together to share  knowledge and experience and to ensure the quality of camp programs in line with the Tembea Kenya Initiative. Because of the diverse membership and exceptional programs, children and adults have the opportunity to learn powerful lessons in community, character-building, skill development, and healthy living - lessons that can be learned nowhere else. Find the latest blog postings for camp and youth development professionals, including updates on our 5-year Magical Kenya Campaign.
                    </p>
                

            </div>
            <div className='cont'>
                <h2>
                    Contact us
                </h2>
                <ul className="social">
                    <li>
                    <a href="youtube">
  <img src="../images/youtube(1).png" alt="youtube">
  </img></a> 
                    </li>
                    <li>
                    <a href="twitter">
  <img src="../images/twiter.png" alt="twitter" >
  </img></a>   
                    </li>
                    <li>
                    <a href="instagram">
  <img src="../images/instagram(2).png" alt="instagram" >
  </img></a>   
                    </li>
                    

                </ul>
            </div>
            
        </div>
       
    );
}
 
export default About;