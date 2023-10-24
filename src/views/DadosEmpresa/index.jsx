import { Button, Card, CardHeader, Grid, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Form } from "./style";
import { Header } from "../components/header";
//import { MenuItem } from "material-ui";


export default function DadosEmpresa() {
    const categorias = ["Arabe", "Italiana", "Hambugeria", "Tematico", "Brasileira", "Japonesa", "Chinesa"];
    return (
        <Container>
            <Header />
            <div className="container">
                <div className="container1">
                    <Card>
                        <CardHeader
                            title="Dados da empresa"
                        />
                    </Card>
                    <br />
                    <Form>
                        
                        <Grid container spacing={2} className="input">
                            <Grid item xs={6}>
                                <TextField fullWidth
                                    id="outlined-basic"
                                    label="Nome da empresa"
                                    variant="outlined"
                                />
                            </Grid>
                        
                        
                            <Grid item xs={6}>
                                <TextField fullWidth
                                    id="outlined-basic"
                                    label="Nome do proprietário"
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
                            <Grid item xs={5}>
                                <TextField fullWidth
                                    id="outlined-basic"
                                    label="CNPJ / CPF"
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
                                    label="Cidade"
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

                            <Grid item xs={6}>
                                <TextField fullWidth

                                    id="outlined-basic"
                                    label="Horário de funcionamento"
                                    variant="outlined"
                                />
                            </Grid>
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
                                     >
                                    Cadastrar empresa
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