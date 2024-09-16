import Images from "src/assets/images";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 60vh 40vh;
  place-items: start center;

  @media screen and (min-width: 768px) {
    padding-top: 5rem;
    padding-left: 2rem;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 500px;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 10rem;
    grid-template-rows: 600px;
    place-items: center;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url(${Images.file.bgMobile}) no-repeat bottom 2rem left -5rem;
  background-size: cover;

  div {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      max-width: 500px;
      margin-inline: auto;
      object-fit: cover;
      object-position: bottom center;
    }
  }

  @media screen and (min-width: 768px) {
    order: 2;
    background-position: left center;

    div {
      position: relative;
      overflow: hidden;

      img {
        width: unset;
        position: absolute;
        left: 6rem;
        bottom: 0;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    background: unset;
    width: 100%;
    height: 860px;

    div {
      height: 100%;

      img {
        min-width: 740px;
        left: 5rem;
      }

      svg {
        width: unset;
        height: unset;
        scale: 0.9;
        position: absolute;
        z-index: -1;
        left: -8rem;
        bottom: 3rem;
      }
    }
  }
`;

export const HeroContent = styled.div`
  align-self: center;
  max-width: 25rem;
  display: grid;
  gap: 1rem;
  justify-items: center;
  margin-inline: 1rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    order: 1;
    justify-items: start;
    text-align: left;
  }

  @media screen and (min-width: 1024px) {
    max-width: 28rem;
    gap: 1.5rem;
  }
`;
