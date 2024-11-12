import React from "react";
import styled from "styled-components";
import { getCurrentLang } from "../../langPack";
import { useLoaderData, useParams } from "react-router-dom";
import { Gallery } from "../../components/Gallery";
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

const Content = styled.div`
  max-height: 80vh;
  min-width: 80vw;
  max-width: 80vw;
  z-index: 2;
  overflow: scroll;
  backdrop-filter: blur(25px);
  @media (max-width: 480px) {
    margin-top: 10vh;
  }
`;
const PostTitle = styled.h2``;
const MainContent = styled.p``;

export const PostPage = () => {
  const { postId } = useParams();
  const lang = getCurrentLang();
  const {
    common: { title },
    contents,
  } = lang;
  const currentContent = contents[postId];
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SubTitle href={"/works"}>works</SubTitle>
      <Content>
        <PostTitle>{currentContent.title}</PostTitle>
        <Gallery images={currentContent.images} />
        <MainContent>{currentContent.description}</MainContent>
      </Content>
      {/* {postId} */}
      <BgImage />
    </Wrapper>
  );
};
