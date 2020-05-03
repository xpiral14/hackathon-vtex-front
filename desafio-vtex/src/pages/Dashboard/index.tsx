import React from 'react';

import { BannerPrincipal } from './styles';

import backgroundBanner from '../../assets/background-banner.jpeg';

const Dashboard: React.FC = () => {
    return <div> 
    <BannerPrincipal>

        <div>
            <img src={backgroundBanner} alt="bannerPrincipal">
            </img>

            <strong>Pexinxaí, o APP perfeito pra você que deseja aumentar o fluxo de vendas e a rotatividade de seu estoque. Seja mais! Seja Pexinxaí!</strong>

        </div>
        
    
    </BannerPrincipal> </div>;

};

export default Dashboard;
