/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import React, { useState } from "react";
import { Container, Form, Logo } from "./style";
import { Link } from "react-router-dom";

import {
    Button,
    Card,
    CardHeader,
    Grid,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Box,
    Collapse,
    IconButton,
    Typography,
} from "@mui/material";
import { KeyboardArrowUp as KeyboardArrowUpIcon, KeyboardArrowDown as KeyboardArrowDownIcon } from "@mui/icons-material";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';





function createData(nomeRestaurante, propietario, cnpj, dataEntrada, history) {
    return {
        nomeRestaurante,
        propietario,
        cnpj,
        dataEntrada,
        history
    }
}
const rows = [
    createData('Sanduiches bom', "Manoel", "15567.9977.88", "2023-10-23", [
        {
            date: '2020-01-05',
            amount: 224,
        },
        {
            date: '2020-01-02',
            amount: 1,
        },
        {
            date: '2021-02-10',
            amount: 56,
        },
    ]),
    // Adicione mais linhas com dados diferentes aqui
    createData('Ice cream sandwich', 237, 9.0, 37, [
        {
            date: '2020-01-06',
            amount: 100,
        },
        {
            date: '2020-01-03',
            amount: 5,
        },
    ]),
    createData('Eclair', 262, 16.0, 24, [
        {
            date: '2020-01-07',
            amount: 50,
        },
        {
            date: '2020-01-04',
            amount: 10,
        },
    ]),
    // Adicione mais linhas com dados diferentes aqui
];


function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.nomeRestaurante}
                </TableCell>
                <TableCell align="right">{row.propietario}</TableCell>
                <TableCell align="right">{row.cnpj}</TableCell>
                <TableCell align="right">{row.dataEntrada}</TableCell>
                <Stack spacing={1} direction="row">
                    <Button variant="contained" color="success">
                        Validar
                    </Button>
                    <Button variant="outlined" color="error">
                        Remover
                    </Button>
                </Stack>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Historico de pedidos
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Data e hora do pedido</TableCell>
                                        <TableCell>Valor pedido</TableCell>
                                        <TableCell align="right">Percentual administrador = 25%</TableCell>
                                        <TableCell align="right">Percentual restaurante = 75%</TableCell>
                                    </TableRow>

                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.amount}</TableCell>
                                            <TableCell align="right">{historyRow.amount * 0.25}</TableCell>
                                            <TableCell align="right">
                                                {historyRow.amount * 0.75}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>

                                        <TableCell rowSpan={3} />
                                        <Typography variant="h6" gutterBottom component="div">
                                            History
                                        </Typography>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Tax</TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2}>Total</TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

function CollapsibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Nome da empresa</TableCell>
                        <TableCell align="right">Proprietario</TableCell>
                        <TableCell align="right">CNPJ / CPF</TableCell>
                        <TableCell align="right">Data de entrada no APP</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    
                    {rows.map((row) => (
                        <Row key={row.nomeRestaurante} row={row} />
                    ))}
                </TableBody>
            </Table>
            <Grid item xs={12}>
                                <Button className="buttonStyles"
                                    variant="contained"
                                    color="success"
                                    component={Link}
                                    to="/" 
                                     >
                                    Voltar
                                </Button>
                            </Grid>
        </TableContainer>
        
    );
    
}

function Administrador() {
    return (
        <Container>
            <div className="container">
                <div className="container1">
                    <div className="image">
                        <img
                            src="imageVapt.jpg"
                            width={250}
                            height={250}
                            className="img-banner"
                            alt="banner"
                        />
                    </div>
                </div>

                <div className="container2">
                    <Card>
                        <CardHeader title="Area do administrador" />
                    </Card>
                    <CollapsibleTable />

                </div>

            </div>
        </Container>
    );
}

export default Administrador;
