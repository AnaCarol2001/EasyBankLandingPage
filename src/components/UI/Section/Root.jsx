import {
  HeadingLevelContext,
  useHeadingLevelContext,
} from "src/context/HeadingLevelContext";
import styled from "styled-components";

const RootStyled = styled.section`
  background-color: ${(props) => props.$bgColor || "transparent"};
  display: grid;
  gap: 4rem;
  justify-content: space-around;
  padding: 5rem 2rem;

  @media screen and (max-width: 550px) {
    gap: 3rem;
    padding: 3rem 2rem;
  }
`;

export default function Root({ children, ...props }) {
  const headingLevel = useHeadingLevelContext();

  return (
    <HeadingLevelContext.Provider value={headingLevel + 1}>
      <RootStyled {...props}>{children}</RootStyled>
    </HeadingLevelContext.Provider>
  );
}
