import React from 'react';
import './Header.css';

export default function Header({ view }) {
  return (
    <header>
      <section className="header--top">
        <div className="header__logo-container">
          <p className="logo-container__logo">DODONE</p>
        </div>
        <nav>
          <a href="/">POR HACER</a>
          <a href="/done">HECHO</a>
        </nav>
      </section>
      {
          view === 'toDo'
            ? <h1>TO DO</h1>
            : <h1>DONE</h1>
      }
    </header>
  );
}
