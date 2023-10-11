import React from "react";
import { Route, Routes } from "react-router-dom";
import CadastroProduto from "./views/produto/CadastroProduto";
import  Login  from "./views/Login/index";
import Home from "./views/home/home";
import Pedido from "./views/pedido/pedido";
import CadEmpresa from "./views/CadEmpresa/index"

function Rotas(){
    return (
  <>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cad" element={<CadastroProduto/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/pedido" element={<Pedido/>}/>
        <Route path="/cad-empresa" element={<CadEmpresa/>}/>


    </Routes>
    </>
    )
  
}

export default Rotas