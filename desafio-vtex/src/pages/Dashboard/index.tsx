import React from 'react';
import market from '../../assets/market.png';
import integration from '../../assets/integration.png';
import estoqueFim from '../../assets/estoque-fim.png';
import bannerBackground from '../../assets/commerce.png';
import phoneBackground from '../../assets/phone.png';
import notebookBackground from '../../assets/background-notebook.png';
import pechinchaAiCicle from '../../assets/pechinchaAi-cicle.png';
import principaisVantagens from '../../assets/principais-vantagens.png';

import quemSomos from '../../assets/quem-somos.png';
import restContent from '../../assets/rest-content.png';
import cicle from '../../assets/cicle.png';
import {
  Container,
  Banner,
  BannerMiddle,
  Content,
  HowWork,
  InfoContainer,
  InfoTextContent,
  InfoImageContent,
  TitleContent,
  ImageContent,
} from './styles';

// import backgroundBanner from '../../assets/background-banner.jpeg';
interface infoInterface {
  text: string;
  image: string;
  alignText: 'right' | 'left';
}
const infos: infoInterface[] = [
  {
    text:
      'Primeiro de tudo, é necessário ter um E-Commerce. Caso você não possua esse serviço, providenciamos pra você!',
    image: market,
    alignText: 'right',
  },
  {
    text:
      'Com a integração realizada, o APP armazena os produtos e a quantidade em estoque, de cada produto.',
    image: integration,
    alignText: 'left',
  },
  {
    text:
      'Assim que o estoque do produto chega ao fim, muitos lojistas param de vendê-lo até realizarem o próximo pedido e tê-lo em estoque.&#013;Assim, é perdida a fidelização do cliente, e consequentemente o lucro das vendas!',
    image: estoqueFim,
    alignText: 'right',
  },
];
const Dashboard: React.FC = () => {
  return (
    <Container>
      <Banner bg={bannerBackground}>
        <BannerMiddle bgColor="#100F0F30">
          <h1>
            PechinchAKI, o APP perfeito pra você que deseja aumentar o fluxo de
            vendas e a rotatividade de seu estoque.
          </h1>
          <span>
            <br />
            Seja mais!
            <br />
            Seja PechinchAí!
          </span>
        </BannerMiddle>
      </Banner>
      <Content>
        <HowWork id = "como-funciona">
          <h2>Como funciona?</h2>

          {infos.map((info) => (
            <InfoContainer alignText={info.alignText}>
              {info.alignText === 'right' ? (
                <>
                  <InfoImageContent>
                    <img src={info.image} />
                  </InfoImageContent>
                  <InfoTextContent>
                    <h1>{info.text}</h1>
                  </InfoTextContent>
                </>
              ) : (
                <>
                  <InfoTextContent>
                    <h1>{info.text}</h1>
                  </InfoTextContent>
                  <InfoImageContent>
                    <img src={info.image} />
                  </InfoImageContent>
                </>
              )}
            </InfoContainer>
          ))}
        </HowWork>

        <Banner bg={notebookBackground}>
          <img src={cicle} style = {{marginTop: -200, width: "100%", maxWidth: "700px"}}/>
          <TitleContent>
            <h2>Sistema de Revenda</h2>
          </TitleContent>
          <br />
          <BannerMiddle bgColor="#133a7560">
            <h1>
              E como o lojista ganha, revendendo o produto de outro lojista?
              <br />
              <br />
              Com a revenda, o lojista que intermediou essa comercialização, por
              falta de estoque, ganha uma comissão por cada venda.
              <br />
              <br />
              Essa comissão é definida previamente, por produto vendido ou pelo
              valor total da compra.
            </h1>
          </BannerMiddle>
        </Banner>

        <ImageContent>
          <img src={pechinchaAiCicle} />
        </ImageContent>
        <ImageContent>
          <img src={principaisVantagens} />
        </ImageContent>
        <ImageContent id = "como-somos">
          <img src={quemSomos} />
        </ImageContent>
       
      </Content>
    </Container>
  );
};

export default Dashboard;
