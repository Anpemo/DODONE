import axios from 'axios';
import toDoActionTypes from './toDoActionTypes';

export function addTask(taskData){
    return async function createTask(dispatch){
        try{
            const {data} = await axios.post(, taskData)
            dispatch({
                type: toDoActionTypes.CREATE_TASK, 
                data
            })
        }catch{
            dispatch({
                type: toDoActionTypes.CREATE_TASK, 
                data: 401
            })
        }
    }
}