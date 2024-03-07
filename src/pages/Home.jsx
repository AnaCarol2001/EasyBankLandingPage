import styled from "styled-components";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import GlobalStyle, { gridContainerStyle } from "../global-styles";
import ArticleSection from "../components/ArticlesSection";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <MainStyled>
        <Hero />
        <Features />
        <ArticleSection />
      </MainStyled>
      <Footer />
    </>
  );
}

const MainStyled = styled.main`
  ${gridContainerStyle}
`;
