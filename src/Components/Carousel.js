import React from 'react'
import './Carousel.css'
function Carousel() {
  return (
    <div>
        <h2>Speakers</h2>
        <div className='card_objects'>
            <div className='main_card1'>
            <div className='card'>
                <img src='https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png' alt='not found'/>
                <h1>Name</h1>
                <p><strong>Designation</strong></p>
            </div>
            <div className='card'>
                <img src='https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png' alt='not found'/>
                <h1>Name</h1>
                <p><strong>Designation</strong></p>
            </div>
            <div className='card'>
                <img src='https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png' alt='not found'/>
                <h1>Name</h1>
                <p><strong>Designation</strong></p>
            </div></div>
            <div className='main_card2'>
            <div className='card2'>
                <img src='https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png' alt='not found'/>
                <h1>Name</h1>
                <p><strong>Designation</strong></p>
            </div>
            <div className='card2'>
                <img src='https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png' alt='not found'/>
                <h1>Name</h1>
                <p><strong>Designation</strong></p>
            </div></div>
        </div>
    </div>
  )
}

export default Carousel