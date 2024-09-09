import { useHeadingLevelContext } from "src/context/HeadingLevelContext";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontSizes, PRIMARY_COLORS } from "src/global-styles";

const Heading = styled(HeadingComponent)`
  font-weight: 400;
  color: ${PRIMARY_COLORS.darkBlue};
  font-size: ${(props) => props.$fontSize || FontSizes[400]};

  & > a {
    text-decoration: none;
  }

  & > a:is(:hover, :focus) {
    color: ${PRIMARY_COLORS.limeGreen};
  }
`;

export default Heading;

function HeadingComponent({ children, ...props }) {
  const level = useHeadingLevelContext();

  const isValidLevel = (level) => {
    const validLevel = [1, 2, 3, 4, 5, 6];
    return validLevel.includes(level);
  };

  const H = isValidLevel(level) ? "h" + level : "p";

  return <H {...props}>{children}</H>;
}

HeadingComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
