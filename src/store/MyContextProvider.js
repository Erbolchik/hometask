import React, { createContext, useState } from 'react';

const MyContext = createContext();
const MyDispatchContext = createContext();

function MyContextProvider({ children }) {
  const [data, setData] = useState([
    {
      title: 'HDD Seagate 2TB',
      price: 200,
      stock: 20,
    },
    {
      title: 'Adata RAM 8GB',
      price: 120,
      stock: 50,
    },
    {
      title: 'Acer Predator',
      price: 1500,
      stock: 2,
    },
    {
      title: 'ASUS Zenbook',
      price: 1200,
      stock: 4,
    },
  ]);

  return (
    <MyContext.Provider value={data}>
      <MyDispatchContext.Provider value={setData}>{children}</MyDispatchContext.Provider>
    </MyContext.Provider>
  );
}

export { MyContextProvider, MyContext, MyDispatchContext };
