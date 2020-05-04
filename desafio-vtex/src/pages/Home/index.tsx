import React from 'react';

import Header from '../../components/Header';
import { Container} from './styles';
// import backgroundBanner from '../../assets/background-banner.jpeg';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <h1>Dashboard</h1>
    </Container>
  );
};

export default Home;
