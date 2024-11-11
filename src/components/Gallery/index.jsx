import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* border: solid; */
  min-width: 79vw;
  min-height: 50vh;
  max-width: 79vw;
  max-height: 50vh;
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  z-index: 2;
  position: relative;
`;
const Scroller = styled.div``;
const Image = styled.img`
  max-height: 50vh;
`;

const Button = styled.div`
  position: absolute;
  top: 50%;
  z-index: 5;
  cursor: pointer;
  background-color: black;
  padding: 10px;
  color: white;
  cursor: pointer;
`;
export const Gallery = ({ images = [] }) => {
  const nextBtn = useRef(null);
  const prevBtn = useRef(null);
  const scrollRef = useRef(null);
  const onscrtoll = ({ target: { scrollLeft } }) => {
    prevBtn.current.style.left = scrollLeft + "px";
    nextBtn.current.style.right = -scrollLeft + "px";
  };
  const moveScroll = (leftOrRight) => {
    scrollRef.current.scrollTo({
      left: leftOrRight
        ? scrollRef.current.scrollLeft + scrollRef.current.clientWidth
        : scrollRef.current.scrollLeft - scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };
  return (
    <Wrapper onScroll={onscrtoll} ref={scrollRef}>
      <Button
        onClick={() => moveScroll(true)}
        ref={nextBtn}
        style={{ right: "0px" }}
      >
        next
      </Button>
      <Button
        onClick={() => moveScroll(false)}
        ref={prevBtn}
        style={{ left: "0px" }}
      >
        prev
      </Button>
      {images.map((src, index) =>
        src.includes(".mp4") ? (
          <video
            style={{ minHeight: "50vh" }}
            key={index}
            width="320"
            height="240"
            autoplay
            autoPlay={true}
            muted
            controls="false"
          >
            <source src={window.location.origin + "/" + src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image src={window.location.origin + "/" + src} key={index} />
        )
      )}
    </Wrapper>
  );
};
