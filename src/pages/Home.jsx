import styled from "styled-components";
import ArticleSection from "src/components/ArticlesSection";
import Features from "src/components/Features";
import Footer from "src/components/Footer";
import Hero from "src/components/Hero";
import Navbar from "src/components/Navbar";
import GlobalStyle, { gridContainerStyle } from "src/global-styles";

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
