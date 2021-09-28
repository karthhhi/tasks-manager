import React from 'react';
import MaterialTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Table = ({headers, data}) => (
    <TableContainer component={Paper}>
        <MaterialTable sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    {headers.map((header) => <TableCell>{header.label}</TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((d) => {
                    return (
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {headers.map((header) => <TableCell>{header.content ? header.content(d.taskId) : d[header.key]}</TableCell>)}
                        </TableRow>
                    );
                })}
            </TableBody>
        </MaterialTable>
    </TableContainer>
);

export default Table;
