import React, { useContext, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
    MyContext,
    MyDispatchContext,
} from '../store/MyContextProvider';

export default function CustomizedTables(props) {
    const data = useContext(MyContext);
    const setData = useContext(MyDispatchContext);
    const [sortState, setSortState] = useState({ price: 0, stock: 0, title: 0 })

    useEffect(() => { }, [data])

    const onSort = (e) => {
        const datas = data.sort(function (a, b) {
            if (e.currentTarget.innerText == "Price $") {
                setSortState({ ...sortState, price: sortState.price == 0 ? 1 : 0 })
                return sortState.price == 1 ? a.price - b.price : b.price - a.price;
            }
            else if (e.currentTarget.innerText == "Stack") {
                setSortState({ ...sortState, stock: sortState.stock == 0 ? 1 : 0 })
                return sortState.stock == 1 ? a.stock - b.stock : b.stock - a.stock;
            }
            else {
                setSortState({ ...sortState, title: sortState.title == 0 ? 1 : 0 })
                return sortState.title == 1 ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
            }
        })
        console.log(datas)
        setData([...datas])
    }

    const onClickStock = (e) => {
        const datas = data.map((el, i) => ({
            ...el,
            stock: i == e ? el.stock - 1 : el.stock
        }))
        setData(datas.map((el, i) => ({
            ...el,
            stock: el.stock == 0 ? 'NOT AVAILABLE' : el.stock
        })))

    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }}>
                <TableHead>
                    <TableRow>
                        <TableCell name="title" onClick={onSort}>Title</TableCell>
                        <TableCell name="price" onClick={onSort}>Price $</TableCell>
                        <TableCell name="stack" onClick={onSort}>Stack</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, el) => (
                        <TableRow key={row.name}>
                            <TableCell>{row.title}</TableCell>
                            <TableCell>{row.price}</TableCell>
                            {row.stock == 'NOT AVAILABLE' ?
                                <TableCell value={el}>NOT AVAILABLE</TableCell>
                                :
                                <TableCell value={el} onClick={() => onClickStock(el)}>{row.stock}  {"           -----"} </TableCell>
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
