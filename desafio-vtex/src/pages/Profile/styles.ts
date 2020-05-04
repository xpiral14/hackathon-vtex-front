import styled from 'styled-components';

import BackGroundLogin from '../../assets/background-login.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;

  background: url(${BackGroundLogin}) no-repeat center;
  background-size: cover;
`;
