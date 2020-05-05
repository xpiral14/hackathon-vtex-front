import React, { useCallback, useRef } from 'react';

import { Container, Background} from './styles';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';





import LeftMenu from '../../components/LeftMenu'
import Input from '../../components/Input';
import Button from '../../components/Button';

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
          <Background>
              <>
               <Form ref={formRef} onSubmit={handleSubmit}>

                 <h1>Editar Perfil</h1>


                 <div>
                  <Input name="nome" value="Nike" disabled type="text"/>
                  <Input name="email" value="nike@nike.com" type="password"/>
                 </div>

                 <div>
                    <Input name="senha" value="123456" disabled type="password"/>
                    <Input name="senha" value="123456" disabled type="text"/>
                 </div>



                <h1>Localização</h1>

                 <div>
                    <Input name="rua" placeholder="Rua das Olivias" disabled type="password"/>
                    <Input name="numero" placeholder="1400" disabled type="text"/>
                 </div>

                 <div>
                    <Input name="bairro" placeholder="Centro" disabled type="password"/>
                    <Input name="cep" placeholder="58000000" disabled type="text"/>
                 </div>
                  <Button type="submit">Atualizar</Button>
                </Form>
              </>
          </Background>
            

        </Container>
    </>
  );
};

export default Profile;
