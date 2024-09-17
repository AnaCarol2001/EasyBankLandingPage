import styled from "styled-components";

const HeaderStyled = styled.header`
  display: grid;
  gap: 1.5rem;
  justify-items: center;
  text-align: center;

  p {
    max-width: 60ch;
  }

  @media screen and (min-width: 1024px) {
    justify-items: start;
    text-align: left;
  }
`;

export default function Header({ children, ...props }) {
  return <HeaderStyled {...props}>{children}</HeaderStyled>;
}
