import styled from "styled-components";

const TitlebarRow = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
  color: ${(props) => props.theme.colors.wrd400};
`;

const Host = styled.p`
  font-weight: 700;
  letter-spacing: 0.08ch;
`;

const ToggleButton = styled.button`
  cursor: pointer;
  color: ${(props) => props.theme.colors.acc900};
  background: transparent;
  border: 0;
  outline: 0;
  padding: 0;
  letter-spacing: 0.04ch;

  &:hover {
    color: ${(props) => props.theme.colors.wrd400};
  }
`;

export { TitlebarRow, Host, ToggleButton };
