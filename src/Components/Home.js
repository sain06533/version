import React from 'react'
import './Home.css'
import LetterHead from './Images/LetterHead.jpg'
import Carousel from './Carousel'
function Home() {
  return (
    <div>
        <div className='home'>
            <h1 className='title'>1st VNR ICAMAIDSSA 2024 will be held as an on-site conference in Hyderabad, India with an option to present remotely</h1>
            <h4>The Registration is open!</h4>
        </div>
        <div className='s_half_elements_main'>
          <div className='s_half_element'>
              <h2>VNR ICAMAIDSSA 2024 - EAI 1st International Conference on Intelligent Systems and Machine Learning</h2>
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
    </div>
  )
}

export default Home