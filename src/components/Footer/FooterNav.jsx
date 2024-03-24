import { NEUTRAL_COLORS, PRIMARY_COLORS } from "src/global-styles";
import styled from "styled-components";

const FooterNavStyled = styled.ul`
  width: 100%;
  height: 100%;

  a {
    text-decoration: none;
    color: ${NEUTRAL_COLORS.white};
  }

  ul li {
    margin-bottom: 0.5rem;
    color: ${NEUTRAL_COLORS.grayBlue} !important;
    font-size: clamp(0.875rem, 1.0542rem + -0.2312vi, 1rem);
    text-align: center;

    :is(:hover, :focus, :active) {
      color: ${PRIMARY_COLORS.limeGreen};
    }
  }

  @media screen and (min-width: 1024px) {
    text-align: left;

    ul {
      height: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-content: space-between;

      li {
        margin-bottom: unset;
        text-align: left;
      }
    }
  }
`;

export default function FooterNav() {
  return (
    <FooterNavStyled>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
    </FooterNavStyled>
  );
}
