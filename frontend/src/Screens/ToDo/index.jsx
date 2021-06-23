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
    ]
  );
  return (
    <>
      <Header component="toDo" />
      <section className="new-task">
        <p> AÑADIR TAREA </p>
        <FontAwesomeIcon icon={faPlusCircle} className="new-task__icon" onClick={() => { setNewTask(!newTask); }} />
        {
          newTask
          && (
          <div className="new-task__form">
            <p>hola</p>
          </div>
          )
        }
      </section>
      <Table component="ToDo" columns={columns} data={data} />
    </>
  );
}
