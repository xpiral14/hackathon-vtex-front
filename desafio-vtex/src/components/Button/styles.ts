import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
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
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#445CAE')};
      }
`;
