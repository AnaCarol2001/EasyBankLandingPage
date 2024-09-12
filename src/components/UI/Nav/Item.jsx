import PropTypes from "prop-types";
import { FontSizes } from "src/global-styles";
import styled from "styled-components";

const LinkStyled = styled.a`
  display: inline-block;
  width: 100%;
  color: inherit;
  padding: 0.5rem;
  text-decoration: none;
  font-size: ${FontSizes[200]};
`;

export default function Item({ children, path, ...props }) {
  return (
    <li>
      <LinkStyled href={path} {...props}>
        {children}
      </LinkStyled>
    </li>
  );
}

Item.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};
