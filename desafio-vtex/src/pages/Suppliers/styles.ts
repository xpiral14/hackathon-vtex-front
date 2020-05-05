import styled from 'styled-components';

import BackGroundLogin from '../../assets/background-login.png';

export const Container = styled.div<any>`
  height: 100vh;

  display: flex;
  align-items: stretch;
`



export const Background = styled.div`
  flex: 1;
  background: url(${BackGroundLogin}) no-repeat center;
  background-size: cover;
      div {
        background: #F9F3F3;
        width: 80px;
        height: 50px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        button {
          align-items: center;
          justify-content: center;
          display: flex;
        }
    }

` ;

//  export const Formulario = styled.div`
//    display: flex;
//    align-items: center;
//    justify-content: center;
//    font-size: 80px;

//     strong {
//       justify-content: center;
//       align-items: center;
//       color: #FFFF;
//       font-size:25px;
//     }
    
//      img {
//        align-items: center;
//        justify-content: center;
//        height: 30vh;
//        width: 20vw;
//        margin-top: -30vh;
//      }
//  `;
