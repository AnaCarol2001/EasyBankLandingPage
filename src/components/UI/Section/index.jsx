import {
  HeadingLevelContext,
  useHeadingLevelContext,
} from "src/context/HeadingLevelContext";
import styled from "styled-components";

const SectionStyled = styled.section`
  background-color: ${(props) => props.$bgColor || "transparent"};
  padding: 4rem 1rem;

  @media screen and (min-width: 1024px) {
    padding: 5rem;
  }
`;

export default function Section({ children, ...props }) {
  const headingLevel = useHeadingLevelContext();

  return (
    <HeadingLevelContext.Provider value={headingLevel + 1}>
      <SectionStyled {...props}>{children}</SectionStyled>
    </HeadingLevelContext.Provider>
  );
}
