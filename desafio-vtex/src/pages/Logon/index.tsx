import React, { useCallback, useRef } from 'react';

import { Container, Content, Logo, Formulario, ApoiadoresText, ApoiadoresImg} from './styles';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';


import Header from '../../components/Header';

import LogoImg from '../../assets/logo.svg';
import LogoShawee from '../../assets/logo-shawee.svg'
import LogoVtex from '../../assets/logo-vtex.svg'

import Input from '../../components/Input';
import Button from '../../components/Button';

const Logon: React.FC = () => {


  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data : object) => {
    try {

      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().required('E-Mail Obrigatório').email('Digite um E-mail válido'),
        password: Yup.string().required('Senha obrigatória')
      });
      await schema.validate(data, {
        abortEarly: false,
      });  


      
    } catch (err) {
      console.log(err);

      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);


  return (
    <>
      <Header />
        <Container>
          <Content>
          

            <Logo>
              <img src={LogoImg} alt="pexinxa"></img>  
            </Logo>

            <div>

            </div>
        

        <Formulario>


            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input name="email" placeholder="Digite Seu E-mail" type="text"/>
              <Input name="password" placeholder="Digite Sua Senha" type="password"/>
              <Button type="submit" >Logar</Button>
            </Form>
        </Formulario>
            
            <ApoiadoresText>
              <strong>Apoio:</strong>
            </ApoiadoresText>

            <ApoiadoresImg>
              <img src={LogoShawee} alt="logo-Shawee"/>
              <img src={LogoVtex} alt="logo-vtex" />
            </ApoiadoresImg>


          </Content>
        </Container>
    </>
  );
};

export default Logon;
