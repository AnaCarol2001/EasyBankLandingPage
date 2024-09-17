import {
  HeadingLevelContext,
  useHeadingLevelContext,
} from "src/context/HeadingLevelContext";
import styled from "styled-components";

const BodyStyled = styled.div`
  ${({ $styles }) => $styles}
`;

export default function Body({ children, $styles, ...props }) {
  const headingLevel = useHeadingLevelContext();

  return (
    <HeadingLevelContext.Provider value={headingLevel + 1}>
      <BodyStyled $styles={$styles} {...props}>
        {children}
      </BodyStyled>
    </HeadingLevelContext.Provider>
  );
}
