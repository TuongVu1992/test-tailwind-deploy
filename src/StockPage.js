import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'; 
import { DataGrid}  from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import InputSearch from './components/InputSearch';
import DeleteButton from './components/DeleteButton';

function StockPage () {

  const[post, setpost] = useState([])
  const[Search, setSearch] = useState("")

  const[selectRows, setSelectedRows] = useState([])
  const[stockCounter, setstockCounter] = useState([])
  
  const columns =[
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'stockSymbols', headerName: 'StockSymbols', width: 110 },
    { field: 'roe', headerName: 'ROE', width: 80 },
    { field: 'roa', headerName: 'ROA', width: 80 },
    { field: 'de', headerName: 'DE', width: 80 },
    { field: 'roi', headerName: 'ROI', width: 80 },
    { field: 'gm', headerName: 'GM', width: 80 },
    { field: 'om', headerName: 'OM', width: 80 },
    { field: 'pm', headerName: 'PM', width: 80 },
    { field: 'industry', headerName: 'Industry', width: 80 },
    { field: 'sector', headerName: 'Sector', width: 80 },
  ]

 const selectStuff = async () =>{
      if (post.length < 5 && !stockCounter.includes(Search)) {
          const returnCALL = await axios.get("http://127.0.0.1:8000/getStock/" + [Search] + "/");
          setpost(prev => [...prev, returnCALL.data]);
          setstockCounter(prev => [...prev, returnCALL.data.stockSymbols]);               
       } 
    }

    const handleDeleteRow =  () => {
      const selectedIDs = new Set(selectRows);
      setpost((selectRows) => selectRows.filter((rowsIDs) => !selectedIDs.has(rowsIDs.id)));
      setstockCounter(post.map(({stockSymbols}) => stockSymbols));
      console.log("test");
   }

  //  // set search button to do something when best enter 
  const searchKey = (event) => {
    if (event.key === "Enter") {
      console.log(Search);
    }
  };

   useEffect(() => {
    setstockCounter(post.map(({stockSymbols}) => stockSymbols));
    }, [post])
    
  return (
    <div>
     <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/> 
      {/* <div className =' bg-light-blue-100'> */}
      <div>
      <div className= " grid h-screen place-content-center bg-white mx-auto max-w-4xl" style={{paddingBottom:"300px"}}>
       <div className ='mx-auto'>
        <h1  style={{ marginBottom : "20px"}}> Investment Analyzer Tool</h1>
       </div>
       <div className = "flex items-center">
      <InputSearch
         Search = {Search}
         setSearch={setSearch}
         searchStuff = {selectStuff}
      />
      <DeleteButton
        onClick ={handleDeleteRow}
      />
       </div>
        <div className= " mt-4">
        <Box sx={{height: 400 , minWidth: 800}}> 
        <DataGrid 
          rows = {post}
          pageSize={5}
          columns={columns}
          checkboxSelection
          onSelectionModelChange={(ids) => {
           setSelectedRows(ids);
        }}
        />  
      </Box> 
        </div> 
       </div> 
      </div>
    </div>
  );
}

export default StockPage;
