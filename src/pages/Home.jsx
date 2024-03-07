import styled from "styled-components";
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
      </MainStyled>
    </>
  );
}

const MainStyled = styled.main`
  ${gridContainerStyle}
`;
