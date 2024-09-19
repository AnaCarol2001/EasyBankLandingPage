import { HeadingLevelContext } from "src/context/HeadingLevelContext";
import Navbar from "src/components/Navbar";
import Hero from "./Hero";
import FeaturesSection from "./Features";
import ArticleSection from "./ArticlesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeadingLevelContext.Provider value={1}>
        <Hero />
        <FeaturesSection />
        <ArticleSection />
      </HeadingLevelContext.Provider>
    </>
  );
}
