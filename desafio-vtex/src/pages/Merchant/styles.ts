import styled from 'styled-components';
import Bg from '../../assets/background-login.png';

export const Container = styled.div<any>`
  display: flex;
  background: url(${Bg}) no-repeat center;
  background-size: cover;
`


export const Content = styled.div<any>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

`;

export const Profile = styled.div<any>`
  margin-top: 23px;
  display: flex;
  align-items: center;
    


    h1 {
      color #222;
      font-weight: bold;
      font-size: 32px;
      line-height: 37px;
    }

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      margin-left: 30px;
`;

export const Description = styled.div<any>`
  width: 100%;
  text-align: center;
  margin-top: 32px;
  hr {
    border: 1px solid rgba(255, 255, 255, 0.6);
  }

  h3 {
    padding: 17px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 19px;
    color: #333;
  }
`;

export const Solicitations = styled.div<any>`
  margin-top: 35px;
  max-width: 560px;
  width: 100%;
  height: 100px;
  background: #F3E7E7;
  opacity: 0.7;
  display: flex;
  align-items: center;

  div {
    padding: 0 20px;

    display: flex;
    justify-content: space-between;
    list-style: none;

    img {
      
      width: 78px;
      height: 79px;
      border-radius: 50%;
    }

  }

  button {
    width: 91px;
    height: 32px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    border: none;
    border-radius: 20px;
    background-color: #3A6CED;
    opacity: 1;
    
  }
`;

export const InfoSolicitations = styled.div<any>`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #3A6CED;


    h2 {
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;
    }

    h4 {
      margin-top: 8px;
      font-weight: bold;
      font-size: 17px;
      line-height: 16px;
    }
`;
