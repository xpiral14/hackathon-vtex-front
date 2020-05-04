import React, { useCallback, useRef } from 'react';

import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Container} from './styles';

import Input from '../../components/Input';
// import Button from '../../components/Button';

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

const Profile: React.FC = () => {
  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="teste" placeholder="Digite Seu Nome"></Input>
      </Form>
    </Container>
  );
};

export default Profile;
