import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 30px;
    color: red;
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
`;

export const BannerPrincipal = styled.div`
  padding: 0;
  margin: 0 auto;
  div {
    strong {
      text-align: center;
      font-size: 30px;
      display: block;
      position: absolute;
      color: #fff;
      margin-top: -1200px;
    }
  }
  img {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;
