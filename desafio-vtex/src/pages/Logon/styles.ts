import styled from 'styled-components';

import BackGroundLogin from '../../assets/background-login.png';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${BackGroundLogin}) no-repeat center;
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
  flex: 1;
  img {
    height: 30vh;
    width: 20vw;
  }
`;

export const Formulario = styled.form`
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
    color: #f9e9e9;
  }
`;

export const ApoiadoresImg = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    justify-content: center;
  }
`;

export const A = styled.a`
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 150px;
  background: #445cae;
  margin: 0 auto;

  margin-top: 60px;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  border-radius: 16px;
  border: 0;
  transition: background-color 0.2s;
  padding: 10px 20px;
  &:hover {
    background: ${shade(0.2, '#445CAE')};
  }
`;
