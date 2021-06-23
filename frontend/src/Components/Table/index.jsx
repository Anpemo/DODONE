/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { useTable } from 'react-table';
import PropTypes from 'prop-types';
import './Table.css';

// eslint-disable-next-line no-unused-vars
export default function Table({ component }) {
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
    <table {...getTableProps()} className="toDo">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className="toDo__headers-name">{column.render('Header').toUpperCase()}</th>
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
                    <td {...cell.getCellProps()} className="item__data--big">
                      {cell.render('Cell') }
                      {' '}
                      <FontAwesomeIcon icon={faPencilAlt} className="data__icon" onClick={() => console.log('edit')} />

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
  component: PropTypes.shape('').isRequired
};
