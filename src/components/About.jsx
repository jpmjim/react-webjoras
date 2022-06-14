import React from 'react';
import user from '../assets/img/not-found.png';

const About = () => {
  return (
    <section className='about'>
      <h2>Sobre Nosotros</h2>
      <section className='miembros'>
        <p className='miembros__description'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo quaerat recusandae aut ipsa dolorum esse adipisci excepturi officiis quod aliquid reiciendis magni quo, consequuntur iusto eius hic laudantium corporis"</p>
        <section className='about__miembro'>
          <img src={user} alt="" />
          <p>Jimmy Joel Pecho Malqui</p>
        </section>
        <section className='about__miembro'>
          <img src={user} alt="" />
          <p>Jimmy Joel Pecho Malqui</p>
        </section>
        <section className='about__miembro'>
          <img src={user} alt="" />
          <p>Jimmy Joel Pecho Malqui</p>
        </section>
      </section>
    </section>
  );
}

export default About;
