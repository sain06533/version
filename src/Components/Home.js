import React from 'react'
import './Home.css'
import LetterHead from './Images/LetterHead.jpg'
import { useState } from 'react';
import img2 from './Images/img2.png'
import Carousel from './Carousel'
function Home() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };

  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };

  const toggleVisibility3 = () => {
    setIsVisible3(!isVisible3);
  };

  return (
    <div>
        <div className='home'>
            <h1 className='title'>International Conference on Advances in  Mathematics,  Intelligent Machines and Security</h1>
            <h4>The Registration is open!</h4>
        </div>
        <h1 className='about-vnr'>ABOUT VNR</h1>
        <div className='s_card'>
          
        <p className='s_card_p'>The Philosophy of Vignana Jyothi unravels education as a process of "Presencing" that provides, both individually and collectively, to one's deepest capacity to sense and experience the knowledge and activities to shape the future. Based on a synthesis of direct experience, leading edge thinking and ancient wisdom, it taps into 'deeper levels of LEARNING for discovering new possibilities'.

Today, with this philosophy, Vignana Jyothi has created an edifice that is strong in its foundations, which can only rise higher and higher. Quality and integrity is the essence for achieving excellence at Vignana Jyothi Institutions. This and quest for excellence reflects in the vision and mission. Their passion reflects in the enterprise of education.</p>
        <img src={img2} className='s_card_img2' alt='#'/>
    </div>
        <div className='s_half_elements_main'>
          <div className='s_half_element'>
              <h2>VNR ICAMIMS 2024 - EAI 1st International Conference on Intelligent Systems and Machine Learning</h2>
              <hr></hr>
                
              <h4 className='s_h4'>Venue</h4>
              <img src={LetterHead} alt='' className='s_half_element_image'/>
                
          </div>
          <div className='carou'>
            <Carousel />
          </div>
        </div>

        <div className='unknown_main'>
            <div className='unknown_main_obj1'>
              <h1>Data not loaded</h1>
              <p>data not loaded</p>
              <p>data not loaded</p>
            </div>
            <div className='unknown_dates'>
              <h4>Important Dates</h4>
              <p><strong>Full Paper Submission deadline</strong></p>
              <p><strong>Notification deadline</strong></p>
              <p><strong>Camera-ready deadline</strong></p>
              <p><strong>Start of Conference</strong></p>
              <p><strong>End of Conference</strong></p>
            </div>
        </div>
        <div className='info-button'>
        <button onClick={toggleVisibility1} className='info-buttons'>About ICAMIMS</button>
      {isVisible1 && (
        <div className='about-comp'>
          <p>ICAMIMS 2024 promises to be an intellectually stimulating event, fostering interdisciplinary dialogues between the realms of data science and advanced mathematics. As the world enters an era driven by data-driven decision-making and mathematical innovation, this conference serves as a pivotal platform for shaping the future of these domains, unlocking new possibilities for research, collaboration, and technological advancement.ICETDSAAM 2024 aims to provide a dynamic platform for researchers, practitioners, and scholars from around the globe to engage in robust discussions, share innovative insights, and collectively explore the synergies between data science applications and advanced mathematical methodologies.</p>
        </div>
      )}

      <button onClick={toggleVisibility2} className='info-buttons'>Topics</button>
      {isVisible2 && (
        <div>
          <ul>
            <li>Mathematical Foundations of Data Science</li>
            <li>Mathematical Methods for Big Data Analysis</li>
            <li>Mathematical Modelling and Simulation for Data Science</li>
            <li>Mathematical Approaches for Machine Learning</li>
            <li>Mathematical Techniques for Data Privacy</li>
            <li>Artificial Intelligence and Machine Learning</li>
            <li>Deep Learning</li>
            <li>Mathematical Optimization in Machine Learning</li>
            <li>Network Analysis and Graph Theory in Data Science</li>
            <li>Mathematical Approaches for Big Data Analysis</li>
            <li>Mining text,web & Social Media</li>
            <li>Probabilistic and Statistical Methods for Data Analysis</li>
            <li>Data Science & Analytics</li>
            <li>Big Data Computing</li>
            <li>Natural Language Processing</li>
            <li>Data and information Visualization</li>

          </ul>
        </div>
      )}

      <button onClick={toggleVisibility3} className='info-buttons'>Toggle Info 3</button>
      {isVisible3 && (
        <div>
          <p>Here is the hidden information for Button 3.</p>
        </div>
      )}
      </div>
    </div>
  )
}

export default Home