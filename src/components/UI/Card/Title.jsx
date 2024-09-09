import Heading from "../Heading";
import PropTypes from "prop-types";

export default function Title({ children, ...props }) {
  return <Heading {...props}>{children}</Heading>;
}

Title.propTypes = {
  children: PropTypes.node,
};
