import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 51px;
  background: rgba(126, 49, 186, 0.8);
  fill: solid;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  opacity: 0.8;
  position: absolute;
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 15px;
  height: 100%;
  nav {
    display: flex;

    ul {
      display: flex;
      list-style: none;
    }

    li, a {
      display: flex;
      align-items: center;
      margin-left: 30px;
      cursor: pointer;
      text-decoration: none;

      font-size: 16px;
      color: #fff;
      font-weight: bold;
    }
  }
`;
