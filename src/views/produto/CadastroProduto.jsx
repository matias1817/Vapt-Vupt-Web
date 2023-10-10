import React from 'react';
import styled from 'styled-components';
import { StyledForm, StyledInput, StyledButton, GlobalStyle,  StyledFormWrapper} from './FormComponents';
import { Header } from '../components/header';

const StyledHeader = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  color: #333;
`;

const StyledFormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
`;

const StyledSubmitButton = styled(StyledButton)`
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem; 
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
`;

export default function CadastroProduto(){
    return (
      <>
        <GlobalStyle />
        <Header />
        <StyledFormWrapper>
          <StyledForm>
            <StyledHeader>Cadastro de Produto</StyledHeader>
        
            <StyledLabel htmlFor="name">Nome</StyledLabel>
            <StyledInput
              type="text"
              name="name"
            />
            <StyledLabel htmlFor="category">Categoria</StyledLabel>
            <StyledInput
              type="text"
              name="category"
            />
            <StyledLabel htmlFor="price">Preço</StyledLabel>
            <StyledInput
              type="number"
              name="price"
            />
            <StyledLabel htmlFor="description">Descrição</StyledLabel>
            <StyledInput
              type="text"
              name="description"
            />
       
            <StyledSubmitButton type="submit">Salvar</StyledSubmitButton>
          </StyledForm>
        </StyledFormWrapper>
      </>
    );
}
