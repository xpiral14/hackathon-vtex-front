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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
    input {
      font-size: 18px;
      line-height: 21px;
      width: 600px;
      height: 50px;
      margin-top: 33px;
      border-radius: 20px;
      border: 1px solid #E6ECF0;
      color: #9B9B9B;
      padding: 0 12px;
      opacity: 0.7;
    }
    button {
      align-items: center;
      justify-content: center;

      height: 40px;
      width: 150px;
      background: #445CAE;
      margin: 0 auto;
      margin-top: 30px;
      font-weight: bold;
      font-size: 14px;
      color: #fff;
      border-radius: 16px;
      border: 0;
    }

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




