import styled from "styled-components";

const UFooter = styled.div`
  display: grid;
  gap: 0.35rem;
`;

const UFooterItem = styled.div`
  display: grid;
  grid-template-columns: 11ch 1fr;
  gap: 0.8rem;

  dt {
    color: ${(props) => props.theme.colors.wrd600};
    letter-spacing: 0.06ch;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.wrd400};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }

  a:hover {
    color: ${(props) => props.theme.colors.acc900};
  }

  &.disabled {
    a {
      pointer-events: none;
      color: ${(props) => props.theme.colors.wrd600};
    }
  }
`;

export { UFooter, UFooterItem };
