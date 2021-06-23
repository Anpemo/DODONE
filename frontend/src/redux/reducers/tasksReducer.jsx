import actionTypes from '../actions/toDoActionTypes';

export default function tasksReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.CREATE_TASK:
      return [...state, ...action.data];
    case actionTypes.GET_TASKS:
      return [...state, ...action.data];
    default:
      return state;
  }
}
