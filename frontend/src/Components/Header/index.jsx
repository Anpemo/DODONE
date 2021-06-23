import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

export default function Header({ view }) {
  return (
    <header>
      <section className="header--top">
        <div className="header__logo-container">
          <p className="logo-container__logo">DODONE</p>
        </div>
        <nav>
          <a href="/"> HACER</a>
          <a href="/done">HECHO</a>
        </nav>
      </section>
      {
          view === 'toDo'
            ? <h1>POR HACER</h1>
            : <h1>HECHO</h1>
      }
    </header>
  );
}
Header.propTypes = {
  view: PropTypes.shape('').isRequired
};
