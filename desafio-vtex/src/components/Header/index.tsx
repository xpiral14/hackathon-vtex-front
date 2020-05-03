import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Menu } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
      <Content>
        <nav>
          <img src="" alt="PEXINXA" />
        </nav> 

        <Menu>
            <div>
              <Link to="/">Pagina Inicial</Link>
            </div>
            <div>
              <Link to="/profile">Como Funciona</Link>
            </div>
            <div>
              <Link to="/profile">Quem Somos</Link>
            </div>
          </Menu>
        
      </Content>
    </Container>
      );
    }


export default Header;
