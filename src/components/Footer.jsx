import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__redes'>
        <h2>Nuestras redes :</h2>
        <nav className='footer__nav'>
          <a className='bi bi-facebook' href=""></a>
          <a className='bi bi-youtube' href=""></a>
          <a className='bi bi-twitter' href=""></a>
          <a className='bi bi-linkedin' href=""></a>
        </nav>
      </div>
      <div className='footer__copy'>
        <p>Copyright © 2021, JORAS | All Right Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;