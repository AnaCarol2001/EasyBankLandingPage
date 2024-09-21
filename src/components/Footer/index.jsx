import Images from "src/assets/images";
import SocialLinks from "./SocialLinks";
import Nav from "../UI/Nav";
import useMediaQuery from "src/hooks/useMediaQuery";
import Button from "../UI/Button";
import styled from "styled-components";
import { NEUTRAL_COLORS, PRIMARY_COLORS } from "src/global-styles";

const FooterStyled = styled.footer`
  background-color: ${PRIMARY_COLORS.darkBlue};
  color: ${NEUTRAL_COLORS.white};
  display: grid;
  justify-items: center;
  gap: 1rem;
  padding: 3rem 1rem;

  > div {
    display: grid;
    place-items: center;
    gap: 1.5rem;
  }

  p {
    color: ${NEUTRAL_COLORS.grayBlue};
  }

  @media screen and (min-width: 768px) {
    justify-content: space-evenly;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(2, 1fr);

    > * {
      grid-row: span 2;
    }

    ul {
      text-align: left;
    }

    > div {
      align-content: space-between;
    }

    div:first-child {
      justify-items: start;
    }

    div:last-child {
      grid-column: 4/-1;
      justify-items: end;
    }
  }
`;

export default function Footer() {
  const isDesktop = useMediaQuery("(max-width: 767px)");
  const navCols = isDesktop ? 1 : 2;
  const navLinks = [
    { title: "About Us", path: "#" },
    { title: "Contact", path: "#" },
    { title: "Blog", path: "#" },
    { title: "Careers", path: "#" },
    { title: "Support", path: "#" },
    { title: "Privacy Policy", path: "#" },
  ];
  return (
    <FooterStyled>
      <div>
        <Images.component.Logo textFill={"#fff"} />
        <SocialLinks />
      </div>
      <Nav.Root $gridCols={navCols} theme="dark">
        {navLinks.map((link) => (
          <Nav.Item key={link.title} path={link.path}>
            {link.title}
          </Nav.Item>
        ))}
      </Nav.Root>
      <div>
        <Button.CallToAction>Request Invite</Button.CallToAction>
        <p> &copy; Easybank. All Rights Reserved</p>
      </div>
    </FooterStyled>
  );
}
