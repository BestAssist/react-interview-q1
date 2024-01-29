import React from 'react';
import { Table } from 'reactstrap';

const TableComponent = ({ entries }) => (
  <Table striped responsive>
    <thead>
      <tr>
        <th>Name</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      {
        entries.length === 0 ? (
          <tr>
            <td colSpan={2} className="text-center text-danger">No data</td>
          </tr>
        ) : entries.map((entry) => (
          <tr key={entry.name}>
            <td>{entry.name}</td>
            <td>{entry.location}</td>
          </tr>
        ))
      }
    </tbody>
  </Table>
);

export default TableComponent;
