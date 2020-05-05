import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <nav>
          <ul>
            <li>
              <a href="/">Pagina Inicial</a>
            </li>
            <li>
              <a href="#como-funciona">Como Funciona</a>
            </li>
            <li>
              <a href="#como-somos">Quem Somos</a>
            </li>
            <li>
              <Link to="/auth">Area do Lojista</Link>
            </li>
          </ul>
        </nav>
      </Content>
    </Container>
  );
};

export default Header;
