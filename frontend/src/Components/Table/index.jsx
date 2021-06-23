/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { useTable } from 'react-table';
import PropTypes from 'prop-types';
import './Table.css';

export default function Table({ tasks }) {
  const data = React.useMemo(() => tasks,
    []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nombre',
        accessor: 'taskName'
      },
      {
        Header: 'Prioridad',
        accessor: 'priority'
      },
      {
        Header: 'Grupo',
        accessor: 'taskGroup'
      },
      {
        Header: 'Fecha de vencimiento',
        accessor: 'expiration'
      },
      {
        Header: 'Estado',
        accessor: 'state'
      }
    ], []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className="toDo-table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              column.Header === 'Nombre'
                ? <th {...column.getHeaderProps()} className="toDo__headers-name--big">{column.render('Header').toUpperCase()}</th>
                : <th {...column.getHeaderProps()} className="toDo__headers-name">{column.render('Header').toUpperCase()}</th>

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
                if (cell.column.id === 'taskName') {
                  return (
                    <td {...cell.getCellProps()} className="item__data--big">
                      {cell.render('Cell') }
                      {' '}
                      <FontAwesomeIcon icon={faPencilAlt} className="data__icon" />

                    </td>
                  );
                } if (cell.column.id === 'state') {
                  return (
                    <td {...cell.getCellProps()} className="item__data">
                      <FontAwesomeIcon icon={faCheck} className="data__icon" />
                      <FontAwesomeIcon icon={faTrashAlt} className="data__icon" />
                    </td>
                  );
                }
                return (
                  <td {...cell.getCellProps()} className="item__data">
                    {cell.render('Cell')}

                  </td>
                );
              })}

            </tr>
          );
        })}
      </tbody>
    </table>

  );
}
Table.propTypes = {
  tasks: PropTypes.shape([]).isRequired
};
