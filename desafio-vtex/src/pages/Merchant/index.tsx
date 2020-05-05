import React from 'react';

import LeftMenu from '../../components/LeftMenu';

import { Container, Content, Profile, Solicitations, Description, InfoSolicitations } from './styles';


interface Data {
  name?: string;
  desc?: string;
}

const Merchant: React.FC = () => {

  const mock = [
    {
      name: "Lojista 1",
      desc: "O Lojista 1 solicitou uma proposta de venda."
    },
    {
      name: "Lojista 2",
      desc: "O Lojista 2 solicitou uma proposta de venda."
    },
    {
      name: "Lojista 3",
      desc: "O Lojista 3 solicitou uma proposta de venda."
    },
    {
      name: "Lojista 4",
      desc: "O Lojista 4 solicitou uma proposta de venda."
    },
    {
      name: "Lojista 5",
      desc: "O Lojista 5 solicitou uma proposta de venda."
    },
  ];

  return (
    <Container>
      <LeftMenu />
      <Content>

        <Profile>
          <h1>Bem Vindo(a) Lojista</h1>
          <img src="https://api.adorable.io/avatars/285/idontknowxd.png" alt="img perfil" />
        </Profile>

        <Description>
          <hr />
          <h3>Abaixo se encontram propostas recebidas recentemente.</h3>
          <hr />
        </Description>



        {mock.map(notify => (
          <Solicitations key={notify.name}>
            <div>
              <img src={ notify.name ? `https://api.adorable.io/avatars/285/${notify.name}.png` : 'https://api.adorable.io/avatars/285/idontknowxd.png' } alt="img perfil" />
            </div> 

              <InfoSolicitations>
                <h2>{notify.name}</h2>
                <h4>{notify.desc}</h4>
              </InfoSolicitations>


            <div>
              <button type="button">Ver mais</button>
            </div>
          </Solicitations>
          ))}
      

      </Content>
    </Container>
  );
};

export default Merchant;
