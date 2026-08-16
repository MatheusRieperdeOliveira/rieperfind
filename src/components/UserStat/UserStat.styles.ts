import styled from "styled-components";

const StatsBody = styled.div`
  display: grid;
  gap: 0.35rem;
`;

const StatsItem = styled.a`
  display: grid;
  grid-template-columns: 11ch 1fr;
  gap: 0.8rem;
  text-decoration: none;
  color: inherit;
  border-radius: 0;

  dt {
    color: ${(props) => props.theme.colors.wrd600};
    letter-spacing: 0.06ch;
  }

  dd {
    color: ${(props) => props.theme.colors.wrd400};
    margin: 0;
  }

  &:hover {
    color: ${(props) => props.theme.colors.acc900};
    cursor: pointer;

    dt,
    dd {
      color: ${(props) => props.theme.colors.acc900};
    }
  }

  &:active {
    filter: grayscale(1);
  }
`;

export { StatsBody, StatsItem };
