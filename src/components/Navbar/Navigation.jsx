import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { NavStyled, NavUlStyled } from "./Navigation.styled";

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

export default function Navigation({ isMenuOpen }) {
  return (
    <NavStyled
      as={motion.nav}
      initial={{ display: "none" }}
      animate={isMenuOpen ? "open" : "closed"}
      variants={variants}
    >
      <NavUlStyled as={motion.ul} variants={ulVariants}>
        <motion.li variants={liVariants}>
          <a href="#" data-current="true">
            Home
          </a>
        </motion.li>
        <motion.li variants={liVariants}>
          <a href="#" data-current="false">
            About
          </a>
        </motion.li>
        <motion.li variants={liVariants}>
          <a href="#" data-current="false">
            Contact
          </a>
        </motion.li>
        <motion.li variants={liVariants}>
          <a href="#" data-current="false">
            Blog
          </a>
        </motion.li>
        <motion.li variants={liVariants}>
          <a href="#" data-current="false">
            Careers
          </a>
        </motion.li>
      </NavUlStyled>
    </NavStyled>
  );
}

Navigation.propTypes = {
  isMenuOpen: PropTypes.bool,
};
