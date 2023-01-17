import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {TbBooks} from 'react-icons/tb'
import {AiFillProject} from 'react-icons/ai'
import ME from '../../assets/aboutmepicture.jpeg'

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Financial Experience</h5>
              <small>5+ Years Working</small>
            </article>
            <article className='about__card'>
              <TbBooks className='about__icon'/>
              <h5>Education</h5>
              <small>7+ Years Studying</small>
            </article>
            <article className='about__card'>
              <AiFillProject className='about__icon'/>
              <h5>Projects</h5>
              <small>4+ Completed Projects</small>
            </article>
          </div>

          <p>
          Hello, my name is Marcos. I am 26 years old. 
          I graduated in Business Administration and 
          worked in the finance area for 5 years. 
          My last experience was at Price Waterhouse Coopers. 
          During that process, I learned to work in a team, 
          adapt and be reliable. Today, I want to learn from 
          a good boss in the world of web/app development.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}
