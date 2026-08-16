import styled from "styled-components";

const DumpLine = styled.div`
  display: grid;
  grid-template-columns: 11ch 1fr;
  gap: 0.8rem;
  align-items: baseline;

  dt {
    color: ${(props) => props.theme.colors.wrd600};
    letter-spacing: 0.06ch;
  }

  dd,
  a {
    color: ${(props) => props.theme.colors.wrd400};
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  a:hover {
    color: ${(props) => props.theme.colors.acc900};
  }
`;

const InfoHeaderH2 = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.2;
`;

const HeaderDate = styled.small`
  font-size: 1rem;
`;

export { DumpLine, InfoHeaderH2, HeaderDate };
