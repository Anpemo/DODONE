/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './toDo.css';
import Header from '../../Components/Header';
import Table from '../../Components/Table';
import addTask, { getAllTasks } from '../../redux/actions/toDoActionsCreators';

export default function ToDo() {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.tasks);
  const [newTask, setNewTask] = useState(false);
  const [taskName, setTaskName] = useState(null);
  const [priority, setPriority] = useState(null);
  const [taskGroup, setTaskGroup] = useState(null);
  const [expiration, setExpiration] = useState(null);

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  function sendData() {
    dispatch(addTask({
      taskName, priority, taskGroup, expiration
    }));
  }
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
                onChange={(event) => {
                  setTaskName(event.target.value);
                }}
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
                onChange={(event) => setPriority(event.target.value)}

              />
            </label>
            <label htmlFor="taskGroup">
              ¿A qué grupo pertenece esta tarea?
              <input
                type="text"
                name="taskGroup"
                id="taskGroup"
                className="form__input"
                placeholder="¿A qué grupo pertenece?"
                onChange={(event) => setTaskGroup(event.target.value)}

              />
            </label>
            <label htmlFor="expiration">
              ¿Cuándo vence la tarea?
              <input
                type="date"
                name="expiration"
                id="expiration"
                className="form__input"
                onChange={(event) => setExpiration(event.target.value)}
              />
            </label>
            <button
              type="submit"
              className="form__input-button"
              onClick={() => sendData()}
            >
              ENVIAR

            </button>
          </div>
          )
        }
      </section>
      {
        tasks
          ? !newTask
      && (
      <Table tasks={tasks} />
      )
          : <p>Cargando tareas</p>
     }
    </>
  );
}
