import axios from 'axios';
import toDoActionTypes from './toDoActionTypes';

export default function addTask(taskData) {
  return async function createTask(dispatch) {
    try {
      const { data } = await axios.post('http://localhost:4000/todo/', taskData);
      dispatch({
        type: toDoActionTypes.CREATE_TASK,
        data
      });
    } catch {
      dispatch({
        type: toDoActionTypes.CREATE_TASK,
        data: 401
      });
    }
  };
}

export function getAllTasks() {
  return async function createTask(dispatch) {
    try {
      const { data } = await axios.get('http://localhost:4000/todo/');
      dispatch({
        type: toDoActionTypes.GET_TASKS,
        data
      });
    } catch {
      dispatch({
        type: toDoActionTypes.GET_TASKS,
        data: 401
      });
    }
  };
}
