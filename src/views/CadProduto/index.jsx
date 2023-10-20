import { Button, Card, CardHeader, Grid, Select, TextField, MenuItem, TextareaAutosize } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Textarea } from "./style";
import { Header } from '../components/header';
//import styled, { keyframes } from "styled-components";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

export default function CadastroProduto() {
    const categorias = ["Bebida", "Salgado", "Doce"];
    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
      };
    
      const grey = {
        50: '#f6f8fa',
        100: '#eaeef2',
        200: '#d0d7de',
        300: '#afb8c1',
        400: '#8c959f',
        500: '#6e7781',
        600: '#57606a',
        700: '#424a53',
        800: '#32383f',
        900: '#24292f',
      };
    
      const Textarea = styled(TextareaAutosize)(
        ({ theme }) => `
        width: 320px;
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 12px;
        border-radius: 12px 12px 0 12px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    
        &:hover {
          border-color: ${blue[400]};
        }
    
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
      )
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
                                    label="Categoria"
                                    variant="outlined"
                                    fullWidth
                                >
                                    {categorias.map((categoria, index) => (
                                        <MenuItem key={index} value={categoria}>
                                            {categoria}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Grid>

                            <Grid item xs={5}>
                                <TextField fullWidth
                                    id="outlined-basic"
                                    label="Preço"
                                    variant="outlined"
                                />
                            </Grid>

                        </Grid>

                        <Grid container spacing={2} className="input">
                            <Grid item xs={12}>
                        <Textarea aria-label="Descrição" minRows={3} placeholder="Descrição" />
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