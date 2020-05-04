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
              <Link to="/">Pagina Inicial</Link>
            </li>
            <li>
              <Link to="/">Como Somos</Link>
            </li>
            <li>
              <Link to="/">Quem Somos</Link>
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
