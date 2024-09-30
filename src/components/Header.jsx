

import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className='cabeçalho'>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'} {/* Ícone do menu hambúrguer (alterna entre abrir e fechar) */}
        </div>
        <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Cadastro</a></li>
          <li><a href="#">Hamburguers</a></li>
        </ul>
      </nav>

      <div className='informacoes'>
        <h1>Hamburgueria DEV</h1>
        <div className='ajuste'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio saepe, minus dolorum ut eveniet neque quas blanditiis ea cumque excepturi repellat, vitae tempora itaque alias quam nemo recusandae, facilis sed.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;









/*
  import './Header.css'

const Header = () => {

  return (
    <div>

        <nav className='cabeçalho'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="">Login</a></li>
                <li><a href="">Cadastro</a></li>
                <li><a href="">Hamburguers</a></li>
            </ul>
        </nav>

        <div className='informacoes'>
                <h1>Hamburgueria DEV</h1>
                <div className='ajuste'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio saepe, minus dolorum ut eveniet neque quas blanditiis ea cumque excepturi repellat, vitae tempora itaque alias quam nemo recusandae, facilis sed.</p>
                </div>
        </div>

    </div>
  )
}

export default Header
*/