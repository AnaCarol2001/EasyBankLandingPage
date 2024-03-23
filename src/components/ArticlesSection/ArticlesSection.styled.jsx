import { NEUTRAL_COLORS, PRIMARY_COLORS } from "src/global-styles";
import styled from "styled-components";

export const ArticleSectionStyled = styled.section`
  padding-block: 5rem;

  h2 {
    margin-bottom: 4rem;
    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    h2 {
      text-align: left;
    }
  }
`;

export const ArticlesItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media screen and (min-width: 1024px) {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

export const ArticleStyled = styled.article`
  display: inline-block;
  background-color: ${NEUTRAL_COLORS.white};
  border-radius: 0.3em;
  max-width: 20rem;

  > img {
    object-fit: cover;
    width: 100%;
    max-height: 150px;
    border-radius: 0.3em 0.3em 0 0;
  }

  .article__content {
    padding: 1rem;
    p {
      font-size: 0.875rem;
    }
  }

  .article__content header {
    display: grid;
    gap: 0.5rem;
    margin-bottom: 0.5rem;

    h3 {
      font-size: 1rem;
      line-height: 1.2;
      order: 2;

      :is(:hover, :focus) {
        color: ${PRIMARY_COLORS.limeGreen};
      }

      a {
        text-decoration: none;
      }
    }

    p {
      order: 1;
      font-size: 0.625rem;
    }
  }
`;
