import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../UI/Button";
import Nav from "../UI/Nav";
import Logo from "src/assets/images/Logo";
import { NEUTRAL_COLORS } from "src/global-styles";

const DesktopNavStyled = styled.header`
  z-index: 999;
  position: fixed;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  background-color: ${NEUTRAL_COLORS.white};
`;

export default function NavbarDesktop({ links }) {
  return (
    <DesktopNavStyled>
      <Logo />
      <Nav.Root id="main-nav" underlineEffect={true} $gridCols={links.length}>
        {links.map((link) => {
          if (link?.current) {
            return (
              <Nav.Item key={link.title} path={link.path} aria-current="page">
                {link.title}
              </Nav.Item>
            );
          }
          return (
            <Nav.Item key={link.title} path={link.path}>
              {link.title}
            </Nav.Item>
          );
        })}
      </Nav.Root>
      <Button.CallToAction>Request Invite</Button.CallToAction>
    </DesktopNavStyled>
  );
}

NavbarDesktop.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, path: PropTypes.string })
  ),
};
