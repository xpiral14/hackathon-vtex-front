import styled from 'styled-components';
import phoneBackground from '../../assets/phone.png';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 525px;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #fff;
  display: flex;
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

interface BannerInterface {
  bg: string;
}
export const Banner = styled.main<BannerInterface>`
  background: url(${(p) => p.bg}) no-repeat center;
  background-size: cover;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  min-height: 100vh;
`;

interface BannerMiddleInterface {
  bgColor: string;
}
export const BannerMiddle = styled.section<BannerMiddleInterface>`
  background-color: ${(p) => p.bgColor};
  text-align: center;
  padding: 30px;

  width: 100%; 
  h1,
  span {
    font-weight: bold;
    font-size: 28px;
  }
  span {
  }
`;

export const Content = styled.section``;
// pega ela com alta resolução no figma pera

export const HowWork = styled.section`
  padding: 30px 0 200px 0;
  background: url(${phoneBackground}) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: #f2e3e3;
    font-size: 28px;
  }
`;
interface InfoContainerInterface {
  alignText: 'right' | 'left';
}
export const InfoContainer = styled.section<InfoContainerInterface>`
  margin-top: 30px;
  width: 100%;
  display: grid;
  grid-template-columns: ${(p) =>
    p.alignText === 'right' ? '.3fr .7fr' : '.7fr .3fr'};
  grid-column-gap: 30px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const InfoImageContent = styled.div`
  margin: 0 auto;
`;
export const InfoTextContent = styled.section`
  margin: 0 auto;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #133a7560;
  color: #e2e4f1;
  text-align: center;
  font-size: 28px;
  width: 100%;
`;

export const TitleContent = styled.div`
  padding: 10px 20px;
  font-size: 25px;
  font-weight: bold;
  border-radius: 30px;
  background: #1f212680;
`;

export const ImageContent = styled.div`
  img {
    width: 100%;
  }
`;
