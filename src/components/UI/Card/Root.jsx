import styled from "styled-components";

const RootStyled = styled.div`
  display: grid;
  gap: 1.5rem;
  max-width: 30ch;
  justify-items: center;
  text-align: center;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${(props) => props.bgColor || "transparent"};

  @media screen and (max-width: 550px) {
    max-width: 40ch;
    gap: 1rem;
  }

  &:has(.card__body) {
    gap: 0.5rem;
  }

  @media screen and (min-width: 500px) and (max-width: 1023px) {
    &:has(img + .card__body) {
      max-width: 60ch;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 20ch;
    }
  }

  @media screen and (min-width: 1024px) {
    justify-items: start;
    max-width: 27ch;
    text-align: left;
  }
`;

export default function Root({ children, ...props }) {
  return <RootStyled {...props}>{children}</RootStyled>;
}
