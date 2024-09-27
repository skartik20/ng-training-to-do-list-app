import React, { useState } from 'react';
import DataTable from './DataTable';

export const ListToDoComponent = () => {
  // Dummy Data for testing
  const [todos] = useState([
    {
      id: 1,
      title: 'Learn React',
      description: 'Learn React with project',
      status: false,
    },
    {
      id: 2,
      title: 'Learn SLDS',
      description: 'Learn SLDS with project',
      status: false,
    },
    {
      id: 3,
      title: 'Learn Mocha',
      description: 'Learn Mocha with project',
      status: false,
    },
  ]);

  return (
    <>
      {/* Pass the data to DataTable */}
      <DataTable data={todos} />
    </>
  );
};

export default ListToDoComponent;
