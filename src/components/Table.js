import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90 },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 100,
      renderCell: (params) => (
        <IconButton
          onClick={() => handleDelete(params.row.id)}
          color="secondary"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

const rows = [
  { id: 1, name: 'John Doe', age: 28 },
  { id: 2, name: 'Jane Smith', age: 35 },
  // Add more rows as needed
];

function App() {
  const [dataRows, setDataRows] = useState(rows);

  const handleDelete = (id) => {
    const updatedRows = dataRows.filter((row) => row.id !== id);
    setDataRows(updatedRows);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={dataRows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

export default App;
