import React from 'react'
import './Header.css'
import LetterHead from './Images/LetterHead.jpg'
import conflogo from './Images/conf_logo.jpeg'
function Header() {
  return (
    <div>
        <div className='imgs'>
            <img src={conflogo} alt='' />
            <img src={LetterHead} alt='' />
        </div>
        <div className='s_head'>
            <button className='s_navbar_button'>Home</button>
            <button className='s_navbar_button'>Committees</button>
            <button className='s_navbar_button'>Registration</button>
            <button className='s_navbar_button'>Program</button>
            <button className='s_navbar_button'>Submisssion</button>
            <button className='s_navbar_button'>Calls</button>
            <button className='s_navbar_button'>Practical Info</button>
            <button className='s_navbar_button'>Sponsorship</button>
            <button className='s_navbar_button'>Help & Contact</button>
        </div>
    </div>
  )
}

export default Header