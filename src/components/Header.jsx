import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__name'>JORAS</h1>
      <a className='header__icon' href=""><i className="bi bi-list "></i></a>
      <nav className='header__nav'>
        <ul>
          <li><a href=""></a>Inicio</li>
          <li><a href=""></a>Nosotros</li>
          <li><a href=""></a>Servicios</li>
          <li><a href=""></a>Portafolio</li>
          <li><a href=""></a>Blog</li>
          <li><a href=""></a>Contacto</li>
        </ul>
      </nav>
      <section className='header__search'>
        <input type="" placeholder="Buscar" name="" id="" /><span className="bi bi-search logo__search"></span>
      </section>
    </header>
  );
}

export default Header;