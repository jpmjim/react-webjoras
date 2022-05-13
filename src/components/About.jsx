import React from 'react';
import user from '../assets/img/not-found.png';

const About = () => {
  return (
    <section className='about'>
      <h2>Sobre Nosotros</h2>
      <section className='about__miembro'>
        <img src={user} alt="" />
        <p>Jimmy Joel Pecho Malqui</p>
      </section>
    </section>
  );
}

export default About;
