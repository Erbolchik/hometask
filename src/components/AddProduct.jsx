import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {
  MyDispatchContext,
  MyContext
} from '../store/MyContextProvider';

export default function TextFieldSizes() {
  const data = useContext(MyContext);
  const setData = useContext(MyDispatchContext);
  const [product, setProduct] = useState({
    title: null,
    price: null,
    stock: null
  });

  const createProduct = () => {
    const datas =
      data.map((el) => ({
        ...el,
        stock: product.title == el.title && !!product.stock ?
          el.stock == 'NOT AVAILABLE' ? product.stock : parseInt(el.stock) + parseInt(product.stock) : parseInt(el.stock),
        price: product.title == el.title ? product.price : el.price,
      }))
    console.log(datas)
    if (!datas.some(e => product.title == e.title && product.price == e.price)) {
      setData([...datas, product])
    }
    else {
      setData([...datas])
    }
  }

  const onChangeProductItem = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    })
  }


  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Create new product</h1>
      <TextField id="outlined-basic" name="title" label="Title" variant="outlined" value={product.title} onChange={onChangeProductItem} />
      <TextField id="filled-basic" name="price" label="Price" variant="outlined" value={product.price} onChange={onChangeProductItem} />
      <TextField id="standard-basic" name="stock" label="Stack availability" variant="outlined" value={product.stock} onChange={onChangeProductItem} />
      <Button variant="contained" onClick={createProduct} >Create product</Button>
    </Box >
  );
}
