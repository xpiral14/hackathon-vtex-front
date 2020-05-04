import React from 'react';

import { Container, Content, Logo, Form, ApoiadoresText, ApoiadoresImg} from './styles';

import LogoImg from '../../assets/logo.svg';
import LogoShawee from '../../assets/logo-shawee.svg'
import LogoVtex from '../../assets/logo-vtex.svg'

const Logon: React.FC = () => {
  return (
    <Container>
      <Content>

        <Logo>
          <img src={LogoImg} alt="pexinxa"></img> 
        </Logo>
        
        <Form>
          <input placeholder="Digite Seu E-mail" type="text"/>
          <input placeholder="Digite Sua Senha" type="password"/>
          <button>Logar</button>
        </Form>
        
        <ApoiadoresText>
          <strong>Apoio:</strong>
        </ApoiadoresText>

        <ApoiadoresImg>
          <img src={LogoShawee} alt="logo-Shawee"/>
          <img src={LogoVtex} alt="logo-vtex" />
        </ApoiadoresImg>


      </Content>
    </Container>
  );
};

export default Logon;
