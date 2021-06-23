/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './toDo.css';
import Header from '../../Components/Header';
import Table from '../../Components/Table';

export default function ToDo() {
  const [newTask, setNewTask] = useState(false);
  const data = React.useMemo(() => [
    {
      name: 'Hacer la compra',
      priority: 1,
      class: 'Compras',
      vencimiento: '13-oct-2020',
      state: ''
    },
    {
      name: 'Limpiar el cuarto',
      priority: 1,
      class: 'Compras',
      vencimiento: '13-oct-2020',
      state: ''
    }
  ],
  []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nombre',
        accessor: 'name'
      },
      {
        Header: 'Prioridad',
        accessor: 'priority'
      },
      {
        Header: 'Grupo',
        accessor: 'class'
      },
      {
        Header: 'Fecha de vencimiento',
        accessor: 'vencimiento'
      },
      {
        Header: 'Estado',
        accessor: 'state'
      }
    ], []
  );

  return (
    <>
      <Header component="toDo" />
      <section className="new-task">
        <button
          className="new-task__button"
          onClick={() => { setNewTask(!newTask); }}
          type="button"
        >
          AÑADIR TAREA
          <FontAwesomeIcon icon={faPlusCircle} className="new-task__icon" />
        </button>
        {
          newTask
          && (
          <div className="new-task__form">
            <label htmlFor="taskName">
              Escribe el nombre de la tarea:
              <input
                type="text"
                name="taskName"
                id="taskName"
                placeholder="Escribe una tarea."
                className="form__input"
              />
            </label>
            <label htmlFor="priority">
              Escribe un número que determine la prioridad:
              <input
                type="number"
                name="priority"
                id="priority"
                placeholder="Del 1 al 5"
                className="form__input"
              />
            </label>
            <label htmlFor="class">
              ¿A qué grupo pertenece esta tarea?
              <input
                type="text"
                name="class"
                id="class"
                className="form__input"
                placeholder="¿A qué grupo pertenece?"
              />
            </label>
            <label htmlFor="expiration">
              ¿Cuándo vence la tarea?
              <input
                type="date"
                name="expiration"
                id="expiration"
                className="form__input"
              />
            </label>
            <button
              type="submit"
              className="form__input-button"
            >
              ENVIAR

            </button>
          </div>
          )
        }
      </section>
      {
       !newTask
      && <Table columns={columns} data={data} />
     }
    </>
  );
}
