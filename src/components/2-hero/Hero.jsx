import React from 'react'
import './hero.css'

function Hero() {
  return (
    <section className='hero flex'>
      <div className='left-section '>
        <div className="parent-avatar flex">
          <img src="./me.jpg" className='avatar' alt="" />
          <div className='icon-verified'></div>
        </div>

        <h1 className='title'>Full Stack Web Developer, Coach Fitness and Personal Trainer </h1>
        <p className='sub-title'>My name is Amer Mhiri, a 24-year-old from Sousse, Tunisia, with a diverse background and a passion for continuous growth.
           I bring 12 years of experience as a dedicated handball player, including 3 years with my first club and 2 years representing the national U19 team. 
           My career has also encompassed various customer-facing roles, such as working in a café for 2 years, managing reception at a gym for 1 year,
            and serving as an animator in the hospitality industry for 4 years. Currently, I am embarking on new ventures as a fitness coach and web developer, 
            where I aim to combine my athletic experience and technical skills to inspire and innovate.
        </p>
        <div className="all-icons flex">
          <div className="icon icon-instagram"></div>
          <div className="icon icon-twitter"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>

      </div>
      <div className='right-section animation '>
        animation

      </div>
    </section>
  )
}

export default Hero