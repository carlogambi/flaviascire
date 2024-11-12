import React, { useState } from "react";
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
`;

const ContentsWrapper = styled.div`
  max-width: 60vw;
  max-height: 80vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 2;
  gap: 10px;
  overflow: scroll;
  @media (max-width: 480px) {
    min-width: 90vw;
  }
`;
const ContentChunk = styled.div`
  min-width: 20vw;
  min-height: 30vh;
  /* width: 200px;
  min-height: 200px; */
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
  h1 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
  img {
    @media (max-width: 480px) {
      min-width: 90vw;
    }
  }
  h2 {
    visibility: collapse;
    position: absolute;
    @media (max-width: 480px) {
      position: static;
      visibility: visible;
    }
  }
`;

const Chunk = ({ title, preview, index, setHover, hover }) => {
  return (
    <ContentChunk
      onMouseOver={() => setHover(index)}
      onClick={() => {
        window.location.replace("/post/" + index);
      }}
      key={index}
      style={{
        backgroundColor: "rgba(255,255,255,0)",
        backdropFilter: "blur(20px)",
      }}
    >
      <h1 style={{ opacity: hover ? 1 : 0 }}>{title}</h1>
      <img
        style={{ width: "20vw", opacity: hover ? 0 : 1 }}
        src={`${window.location.origin}/${preview}`}
      />
      <h2>{title}</h2>
    </ContentChunk>
  );
};

export const WorksPage = () => {
  const [currentHover, setCurrentHover] = useState(null);
  const lang = getCurrentLang();
  const {
    common: { title },
    contents,
  } = lang;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SubTitle href={"/"}>home</SubTitle>
      <ContentsWrapper>
        {contents.map(({ title, preview }, index) => (
          <Chunk
            {...{
              title,
              preview,
              index,
              setHover: (i) => setCurrentHover(i),
              hover: currentHover === index,
            }}
            key={index}
          />
        ))}
      </ContentsWrapper>
      <BgImage />
    </Wrapper>
  );
};
