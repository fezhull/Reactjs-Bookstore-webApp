//import Footer.css

import './Footer.css'

//import Footerdata..........
import { FootersLinksData } from '../../Data/Data'
import { Link } from 'react-router-dom'


//import copyright and footer social...............
import CopyRight from '../CopyRight/CopyRight'

export default function Footer() {
  return (
    <footer>
      <div className='container footer-container'>
        {/*............About Params.......*/}
        <div>
        <h4>About Us</h4>
      <ul className='about-params param-links'>
        {
          FootersLinksData.Aboutus.map(({link, linkname}, index)=>{
            return(
              <li key={index}><Link to={link}>{linkname}</Link></li>

            )
          })
        }

      </ul>
        </div>
        {/*............Discover Params.......*/}
        <div>
        <h4>Discover</h4>
      <ul className='discover-params param-links'>
        {
          FootersLinksData.Discover.map(({link, linkname}, index)=>{
            return(
              <li key={index}><Link to={link}>{linkname}</Link></li>

            )
          })
        }

      </ul>
        </div>
        {/*............MyAccount Params.......*/}
        <div>
        <h4>Myaccount</h4>
      <ul className='about-params param-links'>
        {
          FootersLinksData.Myaccount.map(({link, linkname}, index)=>{
            return(
              <li key={index}><Link to={link}>{linkname}</Link></li>

            )
          })
        }

      </ul>
        </div>
        {/*............Help Params.......*/}
        <div>
        <h4>Helps</h4>
      <ul className='Help-params param-links'>
        {
          FootersLinksData.Aboutus.map(({link, linkname}, index)=>{
            return(
              <li key={index}><Link to={link}>{linkname}</Link></li>

            )
          })
        }

      </ul>
        </div>
        
       
      </div>
      <CopyRight/>
      
    </footer>
  )
}
