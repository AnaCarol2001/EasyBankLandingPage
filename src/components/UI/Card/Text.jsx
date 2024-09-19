import PropTypes from "prop-types";
import styled from "styled-components";
import { FontSizes } from "src/global-styles";

export default function Text({ children, ...props }) {
  return <PStyled {...props}>{children}</PStyled>;
}

const PStyled = styled.p`
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : FontSizes[400])};
`;

Text.propTypes = {
  children: PropTypes.node,
};
