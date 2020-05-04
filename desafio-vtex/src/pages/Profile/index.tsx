import React, { useCallback, useRef } from 'react';

import { Container,  Formulario} from './styles';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';





import LeftMenu from '../../components/LeftMenu'
import Input from '../../components/Input';
// import Button from '../../components/Button';

const Profile: React.FC = () => {


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
        <Container>
            <LeftMenu />
            <Formulario>
                <Form ref={formRef} onSubmit={handleSubmit}>
                  <strong>Nome</strong><Input name="nome" value="Nike "/>
                  <strong>E-mail</strong><Input name="email" value="nike@nike.com "/>
                  <strong>Senha</strong><Input name="password" type="password" value="123456" />
                  <strong>Confirmação da Senha</strong><Input name="password" value="123456" type="password" />
                  <strong>Rua</strong><Input name="rua" value="Rua São Paulo" />
                  <strong>Número</strong><Input name="number" value="1400"/>
                  <strong>Bairro</strong><Input name="bairro" value="Centro"/>
                  <strong>CEP</strong><Input name="cep" value="58100000"/>
                </Form>
            </Formulario>  

        </Container>
    </>
  );
};

export default Profile;
