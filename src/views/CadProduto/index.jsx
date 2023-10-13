import { Button, Card, CardHeader, Grid, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Form } from "./style";
import { Header } from '../components/header';


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
                                <TextField fullWidth
                                    id="outlined-basic"
                                    label="Categoria"
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={5}>
                                <TextField fullWidth
                                    id="outlined-basic"
                                    label="Preco"
                                    variant="outlined"
                                />
                            </Grid>

                        </Grid>

                        <Grid container spacing={2} className="input">
                            <Grid item xs={6}>
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