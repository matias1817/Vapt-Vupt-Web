import React from "react";
import { Container, Form } from "./style";
import { Card, CardHeader, TextField, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";


export default function DadosEmpresa() {
    return (
        <Container>
            <div className="container">
                <div className="container1">
                    <Card>
                        <CardHeader
                            title="Dados da empresa"
                        />
                    </Card>
                    <br />
                    <Form>
                        <h2>Dados da empresa</h2>
                        <Grid container spacing={2} className="input">
                            <Grid item xs={12}>
                                <TextField fullWidth
                                    id="outlined-basic"
                                    label="Nome da empresa"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} className="input">
                            <Grid item xs={7}>
                                <TextField fullWidth
                                    id="outlined-basic"
                                    label="Rua"
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={5}>
                                <TextField fullWidth
                                    id="outlined-basic"
                                    label="Bairro"
                                    variant="outlined"
                                />
                            </Grid>

                        </Grid>

                        <Grid container spacing={2} className="input">
                            <Grid item xs={6}>
                                <TextField fullWidth

                                    id="outlined-basic"
                                    label="Cdade"
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField fullWidth

                                    id="outlined-basic"
                                    label="Estado"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} className="input">
                            <Grid item xs={6}>
                                <TextField fullWidth

                                    id="outlined-basic"
                                    label="Cozinha Especifica"
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField fullWidth

                                    id="outlined-basic"
                                    label="Horário de funcionamento"
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
                                    to="/" >
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