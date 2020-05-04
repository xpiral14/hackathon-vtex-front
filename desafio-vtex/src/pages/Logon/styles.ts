import styled from 'styled-components';

import BackGroundLogin from '../../assets/background-login.svg';


export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background:  url(${BackGroundLogin}) no-repeat center;
  background-size: cover;

`;

export const Content = styled.div`
  width: 100%;
  text-align: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
    img {
        height: 30vh;
        width: 20vw;
      }
`;

export const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
    img {
      align-items: center;
      justify-content: center;
      height: 30vh;
      width: 20vw;
      margin-top: -30vh;
    }
`;


export const ApoiadoresText = styled.div`
  margin-top: 30px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
    strong {
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 33px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #F9E9E9;
    }
`


export const ApoiadoresImg = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
    img {
      justify-content: center;
    }
`




