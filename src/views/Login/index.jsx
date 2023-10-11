import React from "react";
import { Container, Form, Logo } from "./styles";
import FilledInput from "@mui/material/FilledInput";
import { Button, InputAdornment } from "@mui/material";
import { HiOutlineUser } from "react-icons/hi";
import { SlLock } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function Login() {

    return (
        <Container>
            <div className="container">
                <div className="container1">
                    <div className="image">
                        <img src="imageVapt.jpg"
                            width={500}
                            height={500}
                            className="img-banner"
                            alt="banner" />
                    </div>
                </div>
                <div className="container2">
                    <Form>
                        <Logo>
                            <p>Login</p>

                        </Logo>
                        <FilledInput
                            id="filled-adorment-weigth"
                            className="input"
                            placeholder="Login"
                            endAdornment={<InputAdornment position="end">
                                <HiOutlineUser
                                    style={{
                                        color: "#0563e7a",
                                        fontSize: "i.3ren"

                                    }}
                                />

                            </InputAdornment>
                            }
                        />
                        <FilledInput
                            id="filled-adorment-weigth"
                            className="input"
                            type="password"
                            placeholder="Senha"
                            endAdornment={<InputAdornment position="end">
                                <SlLock
                                    style={{
                                        color: "#0563e7a",
                                        fontSize: "i.3ren"

                                    }}
                                />

                            </InputAdornment>
                            }

                        />
                        <div className="bottom">
                        <Button className="buttonStyles"
                                    variant="contained"
                                    component={Link}
                                    to="/dados-empresa" >
                                    Login
                                </Button>
                            <div className="checkbox">
                                <span>
                                    <input type="checkbox" className="input-checkbox" />
                                </span>
                                <p>Lembrar senha.</p>
                            </div>
                        </div>
                        <div className="cad">
                            <p>
                                Cadastre seu restaurante. <a href="/cad-empresa">Cadastrar</a>
                            </p>
                            <p>
                                Area do adiministrador. <a href="/">Entrar</a>
                            </p>
                        </div>
                    </Form>

                </div>
            </div>
        </Container>
    )
}