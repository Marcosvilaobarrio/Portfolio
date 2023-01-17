import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoInstagram} from 'react-icons/io'
import {BsTwitter} from 'react-icons/bs'

export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Marcos Vila Obarrio</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/marquitos.vila"><IoLogoInstagram/></a>
        <a href="https://www.facebook.com/marcosvila17"><FaFacebookF/></a>
        <a href="https://twitter.com/markanight?t=7cRPrPi34L3_8vSCMWswxQ&s=09"><BsTwitter/></a>
      </div>

    </footer>
  )
}
