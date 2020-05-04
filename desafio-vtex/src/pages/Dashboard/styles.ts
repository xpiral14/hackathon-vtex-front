import styled from 'styled-components';
import Bg from '../../assets/commerce.png';
import Bg2 from '../../assets/phone.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 525px;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #fff;
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  background: rgba(16, 15, 15, 0.3);

`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const Banner = styled.div`
  background: url(${Bg}) no-repeat center;
  background-size: cover;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const BannerMiddle = styled.div`
  background: url(${Bg2}) no-repeat;
  float: left;
  height: 500px;

  `;


// pega ela com alta resolução no figma pera
