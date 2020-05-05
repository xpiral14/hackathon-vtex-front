import React from 'react';

import {
  Container,
  Background,
  SupplierHeader,
  PerfilSupplierImage,
  SupplierInfo,
  Content,
  SolictedProductContent,
  ProductImageContent,
  ProductContent,
} from './styles';

import LeftMenu from '../../components/LeftMenu';

const Suppliers: React.FC = () => {
  return (
    <>
      <Container>
        <LeftMenu />
        <Background>
          <Content>
            <SupplierHeader>
              <PerfilSupplierImage>
                <img src="https://api.adorable.io/avatars/285/abott@adorable.png" />
              </PerfilSupplierImage>
              <SupplierInfo>
                <div>
                  <h1>Logista A</h1>
                </div>
                <div>
                  <span>Cidade</span>
                  <p>
                    Rua tal | Número tal | bairro tal | CEP tal
                    <br />
                  </p>
                  <span>
                    <strong>Você está a 6Km de distância</strong>
                  </span>
                </div>
              </SupplierInfo>
            </SupplierHeader>
            <SolictedProductContent>
              <div>Produtos solicitados</div>
              <div>
                <ProductImageContent>
                  <img src="https://api.adorable.io/avatars/285/abott@adorable.png" />
                </ProductImageContent>

                <ProductContent>
                  <h3>Nome do produto</h3>
                  <br/>
                  <p>R$ 130, 00</p>
                  <br/>
                  <p>10 unidades</p>
                </ProductContent>
              </div>
            </SolictedProductContent>
          </Content>
        </Background>
      </Container>
    </>
  );
};

export default Suppliers;
