import React from 'react';
//import styled from 'styled-components';
import { StyledForm, StyledInput, StyledButton, GlobalStyle,  StyledFormWrapper} from './FormComponents';
import { Header } from '../components/header';

export default function CadastroProduto(){
  
  
  
    return (
      <>
        <GlobalStyle />
        <Header/>
        <StyledFormWrapper>
          <StyledForm >
            <h2>Cadastro de produto</h2>
            <label htmlFor="name">Nome</label>
            <StyledInput
              type="text"
              name="name"
             
            />
            <label htmlFor="email">Categoria</label>
            <StyledInput
              type="email"
              name="email"
            
            />
             <label htmlFor="email">preco</label>
            <StyledInput
              type="email"
              name="email"
            
            />
            <label htmlFor="email">descricao</label>
            <StyledInput
              type="email"
              name="email"
            
            />
           
       
           
            <StyledButton type="submit">Salvar</StyledButton>
          </StyledForm>
        </StyledFormWrapper>
      </>
    );
  }