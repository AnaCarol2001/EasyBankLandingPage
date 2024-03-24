import { NEUTRAL_COLORS, gridContainerStyle } from "src/global-styles";
import styled from "styled-components";

export const FeaturesSectionStyled = styled.section`
  grid-column: full-width !important;
  ${gridContainerStyle}

  background-color: ${NEUTRAL_COLORS.lightGrayBlue};
  padding-block: 4rem;
  justify-items: center;
  text-align: center;
  row-gap: 4rem;

  > .features__text {
    max-width: 47ch;
  }

  > .features__text h2 {
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: 1024px) {
    text-align: left;
    justify-items: start;
  }
`;

export const FeaturesItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  > div {
    display: grid;
    gap: 1.5rem;
    max-width: 30ch;
    justify-items: center;

    p {
      font-size: 0.875rem;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    justify-content: space-between;
    > div {
      justify-items: start;
      max-width: 23ch;
    }
  }
`;
