import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    span {
      background: #445CAE;
      color: #fff;
      padding: 8px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      opacity: 0;
      transition: opacity 0.4s; 
      bottom: calc(100% + 12px);
      width: 170px;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      visibility: hidden;

      &::before {
        content: '';
        border-style: solid;
        border-color:  #445CAE transparent;
        border-width: 8px 8px 0 8px; 
        bottom: 20px; 
        top: 100%;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
      }
    }


    &:hover span {
      opacity: 1;
      visibility: visible;
    }
 `;
