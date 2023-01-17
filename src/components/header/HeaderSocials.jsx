import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import './header.css'

export default function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/marcos-vila-obarrio/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Markanight" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/marcos-vila-obarrio/"  target='_blank' rel="noreferrer"><FiDribbble/></a>
    </div>
  )
}
