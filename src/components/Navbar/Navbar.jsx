import React from 'react'
import './Navbar.css'
import logo1 from '../../assets/img/logo1.png'
// import logo1 from '../../assets/img/logo-white.png'
import search_icon_light from '../../assets/img/search-w.png'
import search_icon_black from '../../assets/img/search-b.png'
import toggle_light from '../../assets/img/night.png'
import toggle_dark from '../../assets/img/day.png'
import { Link } from 'react-router-dom'


function Navbar({theme,setTheme}) {

    const toggle_mode = ()=>{
        theme == 'light'? setTheme('dark') : setTheme('light');
    }

  return (
    <div className='navbar'>
       <img src={logo1} alt="" className='logo' /><span className='logo-title'>BIO MATERIALS</span>
        <ul>
            <li> <a href="/">Home</a></li>
            <li> <a href="/">About</a></li>
            <li> <a href="/database">Database</a></li>
            <li> <a href="/contactus">Contact Us</a> </li>
        </ul>

        
        

    </div>
  )
}

export default Navbar