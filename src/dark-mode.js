import React, { useState } from 'react';
import { posts } from './cards';
import './dark-mode.css';

function DarkMode() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'wrapper-dark' : 'wrapper-light'}>
      <div className='container'> 
        <div className='header'>
          <div className='logo'>
              <h1>Hello, soy Mauro </h1>
              <p>Bienvenidos a mi blog !</p>
          </div>
          <div>
            <button type='button' className='btn' onClick={() => setDark(!dark)}>{dark ? 'Light Mode' : 'Dark Mode'}</button>
          </div>
        </div>                               
      </div>
      <div className='hero'>
        <h3>Lo mejor de la tecnologia</h3>
        <h4 className={dark ? 'dark' : 'light'}><b>Lo encontras acá</b></h4>
      </div>
      <div className='container cards-container'>
        {posts.map((post, index) => (
          <div key={index} className='cards'>
            <p className='post-title'>{post.title}</p>
            <p className='post-content'>{post.content}</p>
          </div>
        ))}
      </div>
      <footer className='foot'>
        Hola soy Mauro | Todos los derechos reservados 
      </footer>
    </div>
  );
}

export default DarkMode;
