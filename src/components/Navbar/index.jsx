import { useState } from "react";
import PropTypes from "prop-types";
import { ActionBtnStyled } from "../../global-styles";
import useMediaQuery from "../../hooks/useMediaQuery";
import logoImg from "../../assets/images/logo.svg";
import { motion } from "framer-motion";
import {
  HeaderStyled,
  NavUlStyled,
  NavStyled,
  MenuBtnStyled,
} from "./Navbar.styled";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isMobile) {
    return (
      <HeaderStyled>
        <div className="wrapper">
          <img src={logoImg} alt="Easybank" />
          <div className="nav-container">
            <Navigation isMenuOpen={isOpen} />
            <MenuBtnStyled
              type="button"
              title={isOpen ? "Close" : "Menu"}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <div className="bar" aria-hidden="true"></div>
              <div className="bar" aria-hidden="true"></div>
              <div className="bar" aria-hidden="true"></div>
            </MenuBtnStyled>
          </div>
        </div>
      </HeaderStyled>
    );
  }

  return (
    <HeaderStyled>
      <div className="wrapper">
        <img src={logoImg} alt="Easybank" />
        <Navigation isMenuOpen={true} />
        <ActionBtnStyled type="button">Request Invite</ActionBtnStyled>
      </div>
    </HeaderStyled>
  );
}

const variants = {
  open: {
    opacity: 1,
    display: "block",
    transition: { duration: 0.4 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.3 },
    transitionEnd: { display: "none" },
  },
};

const ulVariants = {
  open: {
    x: "0%",
    transition: {
      duration: 0.5,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    x: "100%",
    transition: { duration: 0.3, staggerChildren: 0.07 },
  },
};

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -15,
    opacity: 0,
  },
};

const Navigation = ({ isMenuOpen }) => {
  return (
    <NavStyled
      as={motion.nav}
      animate={isMenuOpen ? "open" : "closed"}
      variants={variants}
    >
      <NavUlStyled as={motion.ul} variants={ulVariants}>
        <motion.li variants={liVariants}>
          <a href="#">Home</a>
        </motion.li>
        <motion.li variants={liVariants}>
          <a href="#">About</a>
        </motion.li>
        <motion.li variants={liVariants}>
          <a href="#">Contact</a>
        </motion.li>
        <motion.li variants={liVariants}>
          <a href="#">Blog</a>
        </motion.li>
        <motion.li variants={liVariants}>
          <a href="#">Careers</a>
        </motion.li>
      </NavUlStyled>
    </NavStyled>
  );
};

Navigation.propTypes = {
  isMenuOpen: PropTypes.bool,
};
