import PropTypes from "prop-types";
import styled from "styled-components";

const ImgStyled = styled.img`
  width: 100%;
`;

export default function Image({ src }) {
  return <ImgStyled src={src} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
};
