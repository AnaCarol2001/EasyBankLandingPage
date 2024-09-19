import PropTypes from "prop-types";
import styled from "styled-components";

const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
`;

export default function Image({ src }) {
  return <ImgStyled src={src} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
};
