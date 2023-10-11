import React from "react";
import { Container, Form } from "./style";
import { Card, CardHeader, TextField, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";


export default function CadEmpresa() {
    return (
        <Container>
            <div className="container">
                <div className="container1">
                    <Card>
                        <CardHeader
                            title="Cadastro da empresa"
                        />
                    </Card>
                    <br />
                    <Form>
                        <h2>Cadastro de empresa</h2>
                        
                        <Grid container spacing={2} className="input">
                            <Grid item xs={5}>
                                <TextField fullWidth
                                    id="outlined-basic"
                                    label="CNPJ"
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={7}>
                                <TextField fullWidth
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                />
                            </Grid>

                        </Grid>

                        <Grid container spacing={2} className="input">
                            <Grid item xs={6}>
                                <TextField fullWidth

                                    id="outlined-basic"
                                    label="Senha"
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField fullWidth

                                    id="outlined-basic"
                                    label="Repetir senha"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Button className="buttonStyles"
                                    variant="contained"
                                    color="success"
                                    component={Link}
                                    to="/" >
                                    Salvar
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