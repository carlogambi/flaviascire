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
`;
const SubTitleEl = styled.h3`
  position: absolute;
  z-index: 2;
  top: 80px;
  left: 30px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: underline;
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
const Button = styled.a`
  all: unset;
  /* border: solid; */
  z-index: 2;
  font-size: 2em;
  cursor: pointer;
`;

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
      <Button
        onClick={() => {
          window.location.replace("/works");
        }}
        style={{ position: "absolute", top: "28vh", left: "53vw" }}
      >
        {worksButton}
      </Button>
      <Button
        onClick={() => {
          window.location.replace("/about");
        }}
        style={{ position: "absolute", top: "89vh", left: "16vw" }}
      >
        {aboutButton}
      </Button>
      <BgImage />
    </Wrapper>
  );
};
