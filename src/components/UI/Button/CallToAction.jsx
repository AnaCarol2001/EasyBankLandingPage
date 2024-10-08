import { LINEAR_GRADIENTS } from "src/global-styles";
import styled from "styled-components";

const CallToActionStyled = styled.button`
  font-size: 0.875rem;
  font-weight: 400;
  border: none;
  padding: 0.8rem 1.8rem;
  border-radius: 2em;
  background: ${LINEAR_GRADIENTS.greenBlue};
  background-size: 200%;
  background-position: right;
  color: white;
  transition: background-position linear 500ms;

  &:is(:hover, :focus) {
    background-position: left;
  }

  &:active {
    opacity: 0.5;
  }
`;

export default function CallToAction({ ...props }) {
  return <CallToActionStyled {...props} />;
}
