import React from 'react';
import market from '../../assets/market.png';
import integration from '../../assets/integration.png';
import estoqueFim from '../../assets/estoque-fim.png';
import bannerBackground from '../../assets/commerce.png';
import notebookBackground from '../../assets/background-notebook.png';
import pechinchaAiCicle from '../../assets/pechinchaAi-cicle.png';
import principaisVantagens from '../../assets/principais-vantagens.png';

import Header from '../../components/Header';
import quemSomos from '../../assets/quem-somos.png';
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
  alt: string;
}
const infos: infoInterface[] = [
  {
    text:
      'Primeiro de tudo, é necessário ter um E-Commerce. Caso você não possua esse serviço, providenciamos pra você!',
    image: market,
    alignText: 'right',
    alt: "Comércio"
  },
  {
    text:
      'Com a integração realizada, o APP armazena os produtos e a quantidade em estoque, de cada produto.',
    image: integration,
    alignText: 'left',
    alt: "integração"
  },
  {
    text:
      'Assim que o estoque do produto chega ao fim, muitos lojistas param de vendê-lo até realizarem o próximo pedido e tê-lo em estoque.&#013;Assim, é perdida a fidelização do cliente, e consequentemente o lucro das vendas!',
    image: estoqueFim,
    alignText: 'right',
    alt: "estoque"
  },
];
const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
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
                    <img src={info.image} alt = {info.alt}/>
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
                    <img src={info.image} alt = {info.alt}/>
                  </InfoImageContent>
                </>
              )}
            </InfoContainer>
          ))}
        </HowWork>

        <Banner bg={notebookBackground}>
          <img src={cicle} style = {{marginTop: -200, width: "100%", maxWidth: "700px"}} alt  ="Ciclo"/>
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
          <img src={pechinchaAiCicle} alt = "pechincha Aí Circulo"/>
        </ImageContent>
        <ImageContent>
          <img src={principaisVantagens} alt = "Principais vantagens"/>
        </ImageContent>
        <ImageContent id = "como-somos">
          <img src={quemSomos}  alt = "Como somos"/>
        </ImageContent>
       
      </Content>
    </Container>
  );
};

export default Dashboard;