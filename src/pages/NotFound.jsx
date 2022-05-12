import React from 'react';
import error from '../assets/img/not-found.png';


const NotFound = () => {
  return (
    <div className='error'>
      <p>No encontrado, error 404</p>
      <img className='error__logo' src={error} alt="error" />
    </div>
  );
}

export default NotFound;