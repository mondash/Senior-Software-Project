import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';


// update when database is connected
function createData(id, sdate, name, address, active, type) {
    return { id, sdate, name, address, active, type };
}

const rows = [
    createData(0, '16 Jan, 2018', 'Bill Gates', ' 7400 Northeast 18th Street, Medina, WA', 'Yes', 'Commercial'),
    createData(1, '01 Mar, 2019', 'Paul McCartney', '20 Forthlin Road, Liverpool, UK', 'No', 'Residential'),
    createData(2, '16 Feb, 2020', 'John Rockefeller', '200 Lake Road, Pocantico Hills, NY', 'Yes', 'Industrial'),
    createData(3, '25 Dec, 2019', 'Michael Jackson', '5225 Figueroa Mountain Road, Los Olivos, CA', 'Yes', 'Residential'),
    createData(4, '11 Nov, 2019', 'Elvis Presley', '306 Elvis Presley Dr, Tupelo, MS', 'Yes', 'Residential'),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Clients() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Recent Clients</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Start Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell align="right">Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.sdate}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.address}</TableCell>
                            <TableCell>{row.active}</TableCell>
                            <TableCell align="right">{row.type}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    See more orders
                </Link>
            </div>
        </React.Fragment>
    );
}