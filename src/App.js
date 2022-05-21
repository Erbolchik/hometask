import React from 'react';
import './App.css';
import { AddProduct, Table } from './components';
import { MyContextProvider } from './store/MyContextProvider';
import Container from '@mui/material/Container';

function App() {
  return (
    <MyContextProvider>
      <Container maxWidth="lg">
        <Table></Table>
        <AddProduct></AddProduct>
      </Container>
    </MyContextProvider>
  );
}

export default App;
