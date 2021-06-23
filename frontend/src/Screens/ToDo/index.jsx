/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './toDo.css';
import Header from '../../Components/Header';
import Table from '../../Components/Table';

export default function ToDo() {
  return (
    <>
      <Header view="toDo" />
      <section className="new-task">
        <p>
          add a new task
        </p>
      </section>
      <Table component={ToDo} />

    </>
  );
}
