import React from 'react'
import './Header.css'
import logoastro from '../assets/logoastro.png';

const Header = () => {
  return (
    <header>
      <div className='nav-start'>
       
       <h3>Hello, <span>Shruti</span> 👋</h3>
      </div>
      <div className='pro-div'>
        <div className='date'>9 July 2025</div>
         <div className='profile'></div>
      </div>
      
    </header>
  )
}

export default Header