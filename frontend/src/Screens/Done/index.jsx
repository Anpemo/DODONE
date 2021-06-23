import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Components/Header';
import Table from '../../Components/Table';
import { getAllTasks } from '../../redux/actions/toDoActionsCreators';

export default function Done() {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.tasks);

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  return (
    <>
      <Header component="done" />
      <Table tasks={tasks} />

    </>
  );
}
