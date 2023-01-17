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
              <h5>Experience</h5>
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
              <small>3+ Completed Projects</small>
            </article>
          </div>

          <p>
          I am a fullstack developer with a lot of passion for web 
          development and mobile applications. I have a charismatic 
          profile and am constantly looking for ways to progress in 
          my career. I have five years of work experience as a business 
          manager, which has given me a solid foundation in leadership 
          skills and project management. I am committed to providing 
          high-quality solutions and working as a team to achieve the 
          goals of my clients and companies.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}
