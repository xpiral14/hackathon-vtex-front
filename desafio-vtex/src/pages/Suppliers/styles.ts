import styled from 'styled-components';

import BackGroundLogin from '../../assets/background-login.png';

export const Container = styled.div`
  height: 100vh;
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
`;

export const Background = styled.main`
  width: 100%;
  background: url(${BackGroundLogin}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.section`
  /* width: 100%; */
`;

export const SupplierHeader = styled.div`
  display: flex;
  padding: 20px;
`;
export const PerfilSupplierImage = styled.div``;

export const SupplierInfo = styled.div`
  background: #f9f2f2;
  padding: 15px;
  /* flex: 1; */
  width: 100%;
  margin-left: 20px;
  h1 {
    color: #575f89;
    font-size: 28px;
  }
  div:first-child {
    padding: 10px;
    border-bottom: 1px solid #000;
  }
  div:last-child {
    margin-top: 20px;
    text-align: center;
    color: #575f89;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    span:last-child {
      margin-top: 20px;
      font-size: 25px;
    }
  }
`;

export const SolictedProductContent = styled.div`
  padding: 20px;
  background: #f9f2f2;
  display: flex;
  flex-direction: column;
  & > div:first-child {
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid black;
  }

  & > div:last-child {
    display: flex;
  }
`;

export const ProductImageContent = styled.div``;
export const SendDateContent = styled.div``;

export const ProductContent = styled.div`
  text-align: center;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
`;
export const Button = styled.button`
  padding: 5px 10px;
  color: #f1ebeb;
`;
