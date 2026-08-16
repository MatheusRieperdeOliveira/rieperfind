import styled from "styled-components";

const DLButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.acc900};
  letter-spacing: 0.04ch;
  border-radius: 0;

  &:hover {
    color: ${(props) => props.theme.colors.wrd400};
  }
`;

export { DLButton };
