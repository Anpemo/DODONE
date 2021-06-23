/* eslint-disable react/jsx-props-no-spreading */
//  faTrashAlt, faCheck,
import React from 'react';
import './toDo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { useTable } from 'react-table';
import Header from '../../Components/Header';

export default function ToDo() {
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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <>
      <Header view="toDo" />
      <section className="new-task">
        <p>
          add a new task
        </p>
      </section>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  if (cell.column.id === 'name') {
                    return (
                      <td {...cell.getCellProps()}>
                        {' '}
                        {cell.render('Cell')}
                        {' '}
                        <FontAwesomeIcon icon={faPencilAlt} onClick={() => console.log('edit')} />

                      </td>
                    );
                  } if (cell.column.id === 'state') {
                    return (
                      <td {...cell.getCellProps()}>
                        <FontAwesomeIcon icon={faCheck} />
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </td>
                    );
                  }
                  return (
                    <td {...cell.getCellProps()}>
                      {' '}
                      {cell.render('Cell')}
                      {' '}

                    </td>
                  );
                })}

              </tr>
            );
          })}
        </tbody>
      </table>

    </>
  );
}
