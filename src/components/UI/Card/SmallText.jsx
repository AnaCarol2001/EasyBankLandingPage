import PropTypes from "prop-types";
import styled from "styled-components";
import { FontSizes } from "src/global-styles";

const SmTextStyled = styled.p`
  font-size: ${FontSizes[100]};
`;

export default function SmallText({ children, ...props }) {
  return <SmTextStyled {...props}>{children}</SmTextStyled>;
}

SmallText.propTypes = {
  children: PropTypes.node,
};
