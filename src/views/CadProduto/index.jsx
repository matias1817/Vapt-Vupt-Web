import { Button, Card, CardHeader, Grid, Select, TextField, MenuItem, TextareaAutosize } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Textarea } from "./style";
import { Header } from '../components/header';
//import styled, { keyframes } from "styled-components";
import { styled } from '@mui/system';

export default function CadastroProduto() {
    
    return (
        <Container>
            <Header />
            <div className="container">
                <div className="container1">
                    <Card>
                        <CardHeader
                            title="Cadastro de Produto"
                        />
                    </Card>
                    <br />
                    <Form>
                        <h2>Cadastro de Produto</h2>
                        <Grid container spacing={2} className="input">
                            <Grid item xs={12}>
                                <TextField fullWidth
                                    id="outlined-basic"
                                    label="Nome"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} className="input">
                            <Grid item xs={7}>

                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    
                                    label="Categoria"
                                    fullWidth
                                >
                                
                                    
                                </Select>
                            </Grid>

                            <Grid item xs={5}>
                                <TextField fullWidth
                                    id="outlined-basic"
                                    label="Preço"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth
                                    id="outlined-basic"
                                    label="Descrição"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>

                        



                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Button className="buttonStyles"
                                    variant="contained"
                                    color="success"
                                >
                                    Salvar alterações
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button className="buttonStyles"
                                    variant="contained"

                                    component={Link}
                                    to="/home" >
                                    Voltar
                                </Button>
                            </Grid>

                        </Grid>
                    </Form>
                </div>
                <div className="container2">
                    <div className="image">
                        <img src="imageVapt.jpg"
                            width={250}
                            height={250}
                            className="img-banner"
                            alt="banner" />
                    </div>
                </div>
            </div>




        </Container>
    )
}