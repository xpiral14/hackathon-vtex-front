import styled from 'styled-components';

export const Container = styled.header`
    background: #7E31BA;
    padding: 0 30px;
    opacity: 0.8;
`;

export const Content = styled.section`
    height: 51px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
        display: flex;
        align-items: center;
        img {
            margin-right: 20px;
            padding-right: 20px;
            border-right: 1px solid #eee;
        }
        a {
            font-weight: bold;
            color: #7159c1;
        }
    }
    aside {
        display: flex;
        align-items: center;
    }
`;

export const Menu = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  div {
    text-align: right;
    margin-right: 60px;
    strong {
      display: block;
      color: #333;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 16px;
      color: #fff;
      text-decoration: none;
      font-weight: 700;
    }
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 32px;
  }
`;
