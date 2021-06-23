import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
export default function Header({ component }) {
  return (
    <header>
      <section className="header--top">
        <div className="header__logo-container">
          <p className="logo-container__logo">DODONE</p>
        </div>
        {component === 'toDo'
          ? (
            <nav>
              <a href="/" className="nav__a--active"> HACER</a>
              <a href="/done">HECHO</a>
            </nav>
          )
          : (
            <nav>
              <a href="/"> HACER</a>
              <a href="/done" className="nav__a--active">HECHO</a>
            </nav>
          )}

      </section>

    </header>
  );
}
Header.propTypes = {
  component: PropTypes.shape('').isRequired
};
