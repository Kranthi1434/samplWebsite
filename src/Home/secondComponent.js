import { Table, TableBody, TableCell, TableHead, TableRow,Button } from '@mui/material';
import React from 'react'
import { Outlet } from 'react-router-dom';

const SecondComponenet = () => {
  return (
    <React.Fragment>
        <Table sx={{maxWidth:'1000px',margin:'auto',marginTop:'50px'}}>
            <TableHead sx={{backgroundColor:'pink',color:'red'}} >
                <TableRow >
                    <TableCell>ID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Description</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Jeans</TableCell>
                    <TableCell>2000</TableCell>
                    <TableCell>no</TableCell>
                </TableRow>
            </TableBody>
        </Table>

    </React.Fragment>
  )
}

export default SecondComponenet;