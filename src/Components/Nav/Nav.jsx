import React from 'react'
import './Nav.css'

//Import Router Link.....................
import{Link, NavLink} from 'react-router-dom'

//import Logo............................
import Logo from '../../assets/logo.png'

//import NavData..................................
import {navLinks, navRight} from '../../Data/Data'

//import Menu Icons.................................
import { BiMenuAltLeft } from "react-icons/bi";
import { GrClose } from 'react-icons/gr'

//import use State.................................
import { useState } from 'react'


export default function Nav() {

  //Use State for NavLinks Show And Hide
  const [isNavLinksShowing, setIsNavLinkShowing] = useState(false);

  //..........window Scroll NAv-links |Effects.......
  if(innerWidth < 1024){
    window.addEventListener('scroll', ()=>{
      document.querySelector('.nav-links').classList.add('navLinksHide');
      setIsNavLinkShowing(false);
    })

  };
  window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('navShadow', window.scrollY > 0);
    
  })
  return (
    <nav>
      <div className='container nav-container'>
        {/*..............Logo.....*/}
        <Link to={'/'} className='logo'>
          <img src={Logo} alt="Logo" />
        </Link>

        {/*........Nav-Links......*/}
        <ul className={`nav-links ${isNavLinksShowing ? 'navLinksShow' : 'navLinksHide'}`}>
          {
            navLinks.map(({name,path}, index)=>{
              return(
                <li key={index}>
                  <NavLink to={path} className={({isActive})=>{
                  isActive ? 'active' : ''
                  }}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>
        {/*............Nav-Right........*/}
        <div className='nav-right'>
          {
            navRight.managements.map((item, index)=>{
              return(
                <Link key={index} 
                //target='_blank'
                className='management-icons' to={item.link}>
                  <item.icon/>
                </Link>
              )
            })
          }
          <button className='menu-button' onClick={()=>
            setIsNavLinkShowing(!isNavLinksShowing)}>
              {
                !isNavLinksShowing ? <BiMenuAltLeft /> : <GrClose />
              }                  
            </button>
        </div>
      </div>
    </nav>
  )
}
