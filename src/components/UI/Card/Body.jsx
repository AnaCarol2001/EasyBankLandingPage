import styled from "styled-components";

export default function Body({ children }) {
  return <BodyStyled className="card__body">{children}</BodyStyled>;
}

const BodyStyled = styled.div`
  padding: 1rem;
  display: grid;
  gap: 0.5rem;
  text-align: left;

  > * {
    text-wrap: pretty;
  }
`;
