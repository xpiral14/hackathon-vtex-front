import styled from 'styled-components';

import BackGroundLogin from '../../assets/background-login.png';

export const Container = styled.div<any>`
  display: flex;
  background: url(${BackGroundLogin}) no-repeat center;
  background-size: cover;
`

 export const Formulario = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 80px;

    strong {
      justify-content: center;
      align-items: center;
      color: #FFFF;
      font-size:25px;
    }
    
     img {
       align-items: center;
       justify-content: center;
       height: 30vh;
       width: 20vw;
       margin-top: -30vh;
     }
 `;
