import { HeadingLevelContext } from "src/context/HeadingLevelContext";
import Navbar from "src/components/Navbar";
import Hero from "./Hero";
import FeaturesSection from "./Features";
import ArticleSection from "./ArticlesSection";
import Footer from "src/components/Footer";
import styled from "styled-components";
import { NEUTRAL_COLORS, PRIMARY_COLORS } from "src/global-styles";

const AttributionStyled = styled.div`
  background-color: ${PRIMARY_COLORS.darkBlue};
  color: ${NEUTRAL_COLORS.lightGray};
  border-top: 1px solid ${NEUTRAL_COLORS.lightGray};
  padding: 1rem;
  text-align: center;
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <HeadingLevelContext.Provider value={1}>
        <main>
          <Hero />
          <FeaturesSection />
          <ArticleSection />
        </main>
        <Footer />
        <AttributionStyled>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/AnaCarol2001"
            target="_black"
          >
            AnaCarolina
          </a>
          .
        </AttributionStyled>
      </HeadingLevelContext.Provider>
    </>
  );
}
