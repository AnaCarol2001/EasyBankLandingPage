import styled from "styled-components";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import GlobalStyle, { gridContainerStyle } from "../global-styles";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <MainStyled>
        <Hero />
        <Features />
      </MainStyled>
    </>
  );
}

const MainStyled = styled.main`
  ${gridContainerStyle}
`;
