import React from 'react';
import Header from '../../Components/Header';
import Table from '../../Components/Table';

export default function Done() {
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
      <Header component="done" />
      <Table columns={columns} data={data} />

    </>
  );
}
