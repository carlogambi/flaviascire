import React from "react";
import styled from "styled-components";
import { getCurrentLang } from "../../langPack";

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
`;
const TitleEl = styled.h1`
  position: absolute;
  z-index: 2;
  top: 10px;
  left: 30px;
  text-transform: uppercase;
  cursor: pointer;
  @media (max-width: 480px) {
    top: 0vh;
    left: 4vw;
  }
`;
const SubTitleEl = styled.h3`
  position: absolute;
  z-index: 2;
  top: 80px;
  left: 30px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: underline;
  @media (max-width: 480px) {
    top: 10vh;
    left: 4vw;
    padding-top: 0px;
    margin-top: 0px;
    z-index: 999;
  }
`;

const MainTitle = styled.h1`
  position: absolute;
  z-index: 2;
  top: 40vh;
  left: 24vw;
  text-transform: uppercase;
  cursor: pointer;
  font-family: "Formula";
  font-weight: normal;
  font-size: 70px;
`;

const Button = styled.a`
  all: unset;
  /* border: solid; */
  z-index: 2;
  font-size: 2em;
  cursor: pointer;
`;

const WorksButton = styled(Button)`
  position: absolute;
  top: 28vh;
  left: 53vw;
`;
const AboutButton = styled(Button)`
  position: absolute;
  top: 89vh;
  left: 16vw;
  @media (max-width: 480px) {
    top: 75vh;
  }
`;

export const SubTitle = ({ children, href }) => {
  return (
    <a style={{ all: "unset" }} href={href}>
      <SubTitleEl
        onClick={() => {
          window.location.replace("/");
        }}
      >
        {children}
      </SubTitleEl>
    </a>
  );
};
export const Title = ({ children }) => {
  return (
    <TitleEl
      onClick={() => {
        window.location.replace("/");
      }}
    >
      {children}
    </TitleEl>
  );
};

export const MainPage = () => {
  const lang = getCurrentLang();
  const {
    common: { title },
    mainPage: { worksButton, aboutButton },
  } = lang;

  return (
    <Wrapper>
      <MainTitle
        dangerouslySetInnerHTML={{ __html: title.replace(" ", "<br/>") }}
      />
      <WorksButton
        onClick={() => {
          window.location.replace("/works");
        }}
      >
        {worksButton}
      </WorksButton>
      <AboutButton
        onClick={() => {
          window.location.replace("/about");
        }}
      >
        {aboutButton}
      </AboutButton>
      <BgImage />
    </Wrapper>
  );
};
