import React from "react";
import styled from "styled-components";
import { getCurrentLang } from "../../langPack";
import { SubTitle, Title } from "../Main";

const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 480px) {
    overflow-y: scroll;
  }
`;
const BgImage = styled.div`
  position: absolute;
  left: 10vw;
  background: url(/bg.svg);
  width: 50vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  opacity: 0.6;
  @media (max-width: 480px) {
    left: 25vw;
    filter: blur(20px);
    position: fixed;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1vh;
  @media (max-width: 480px) {
    margin-top: 10vh;
    overflow-y: scroll;
    
  }
`;
const Portrait = styled.img`
  width: 20vw;
  @media (max-width: 480px) {
    min-width: 80vw;
  }
`;
const Description = styled.p`
  max-width: 20vw;
  @media (max-width: 480px) {
    max-width: 80vw;
  }
`;
const Button = styled.a`
  all: unset;
  padding: 5px;
  border: solid;
  @media (max-width: 480px) {
    padding: 2vw;
  }
`;
const PageWrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3vw;
  flex-wrap: wrap;
  max-height: 90vh;
`;

export const AboutPage = () => {
  const lang = getCurrentLang();
  const {
    common: { title },
    aboutPage: { content, downloadCvButton, switchLangButton, portrait },
  } = lang;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SubTitle href={"/"}>home</SubTitle>
      <PageWrapper>
        <DescriptionWrapper>
          <Description>{content}</Description>
          <Button>{downloadCvButton}</Button>
          <Button>{switchLangButton}</Button>
        </DescriptionWrapper>
        <Portrait src={portrait} />
      </PageWrapper>
      <BgImage />
    </Wrapper>
  );
};
