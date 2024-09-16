import { HeadingLevelContext } from "src/context/HeadingLevelContext";
import Navbar from "src/components/Navbar";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeadingLevelContext.Provider value={1}>
        <Hero />
      </HeadingLevelContext.Provider>
    </>
  );
}
