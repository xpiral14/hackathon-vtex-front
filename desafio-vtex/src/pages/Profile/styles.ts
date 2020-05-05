import styled from 'styled-components';

import BackGroundLogin from '../../assets/background-login.png';


export const Container = styled.div<any>`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Content = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`



export const Background = styled.div`
  flex: 1;
  background: url(${BackGroundLogin}) no-repeat center;
  background-size: cover;
    form {
      margin-top: 300px;
      text-align: center;

      h1 {
        color: #F9F3F3;
        font-weight: bold;
      }
      div {
        display: flex;
        margin-left: 15px;
        text-align: center;
        place-content: center;
      }
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
