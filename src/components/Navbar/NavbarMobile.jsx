import PropTypes from "prop-types";
import { useState } from "react";
import Nav from "../UI/Nav";
import Logo from "src/assets/images/Logo";
import Button from "../UI/Button";
import styled from "styled-components";
import { NEUTRAL_COLORS, PRIMARY_COLORS } from "src/global-styles";
import { AnimatePresence, motion } from "framer-motion";

const MobileNavStyled = styled.header`
  position: fixed;
  width: 100%;
  display: grid;
  grid-template-areas: "logo btn" "nav nav";
  row-gap: 1rem;
  z-index: 999;

  > * {
    padding: 1rem 2rem;
    background-color: ${NEUTRAL_COLORS.white};
    display: grid;
  }

  .logo,
  .btn {
    width: 100%;
    align-items: center;
  }

  .logo {
    grid-area: logo;
    justify-content: start;
  }

  .btn {
    grid-area: btn;
    justify-content: end;
  }

  .nav {
    grid-area: nav;
    width: 90%;
    place-content: center;
    background-color: white;
    margin-inline: auto;
    border-radius: 0.25rem;
    text-align: center;
    overflow: hidden;
  }

  .nav__bg {
    position: absolute;
    top: -1rem;
    left: 0;
    right: 0;
    height: 100vh;
    background: linear-gradient(${PRIMARY_COLORS.darkBlue}, transparent);
    z-index: -1;
  }
`;

export default function NavbarMobile({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MobileNavStyled>
      <div className="logo">
        <Logo />
      </div>
      <div className="btn">
        <Button.Hamburger
          aria-controls="#main-nav"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key={"nav__bg"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="nav__bg"
              aria-hidden="true"
            ></motion.div>
            <motion.div
              key={"nav"}
              className="nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <Nav.Root id="main-nav">
                {links.map((link) => {
                  const linkProps = {
                    path: link.path,
                  };
                  if (link?.current) linkProps["aria-current"] = "page";

                  return (
                    <Nav.Item key={link.title} {...linkProps}>
                      {link.title}
                    </Nav.Item>
                  );
                })}
              </Nav.Root>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </MobileNavStyled>
  );
}

NavbarMobile.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, path: PropTypes.string })
  ),
};
