import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
      font-size: 18px;
      line-height: 21px;
      width: 600px;
      height: 50px;
      margin-top: 33px;
      border-radius: 20px;
      padding: 0 12px;
      opacity: 0.7;
      background: rgba(254, 254, 254, 0.7);
      display: flex;
      align-items: center;

      color: #9B9B9B;
      border: 1px solid #E6ECF0;

      ${props => props.isErrored && css`
        border-color: #C53030;
      ` }

      ${props => props.isFocused && css`
        color: #445CAE;
        border-color: #445CAE;
      ` }

      ${props => props.isFilled && css`
        color: #445CAE;
      ` }

      input {
        background: transparent;
        border: 0;
        flex: 1;
      }`;

export const Error = styled(Tooltip)`
  margin-left: 16px;

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
