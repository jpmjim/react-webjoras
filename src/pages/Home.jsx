import React from 'react';
import About from '../components/About';
import Service from '../components/Service';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';

const Home = () => {
  return (
    <main>
      <section className='inicio'>
        <div className='inicio__title'>
          <h2>JORAS</h2>
        </div>
        <div className='inicio__description'>
          <p>" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem vel recusandae placeat accusantium reiciendis minus aperiam laborum iste quisquam iusto blanditiis, nemo aspernatur incidunt, temporibus voluptas, natus architecto est ut! "</p>
        </div>
      </section>
      <About />
      <Service />
      <Portfolio />
      <Blog />
    </main>
  );
}

export default Home;