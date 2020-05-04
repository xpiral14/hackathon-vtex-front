import React from 'react';

import { Container, Banner, Title, BannerMiddle } from './styles';

// import backgroundBanner from '../../assets/background-banner.jpeg';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Title>PechinchAKI, o APP perfeito pra você que deseja aumentar o fluxo de vendas e a rotatividade de seu estoque. </Title>
        <Title>Seja Mais! Seja PechinchAKI!</Title>
      </Banner>
      <BannerMiddle/>

    </Container>
  );
};

export default Dashboard;
