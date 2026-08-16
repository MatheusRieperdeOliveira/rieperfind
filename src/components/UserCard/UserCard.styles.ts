import styled from "styled-components";

const UserSection = styled.section`
  background-color: ${(props) => props.theme.colors.bg400};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  animation-fill-mode: backwards;
  animation: scale 200ms ease-in;

  @keyframes scale {
    from {
      transform: scaleY(0);
      transform-origin: top;
    }
    to {
      transform: scaleY(1);
      transform-origin: top;
    }
  }
`;

const InfoIcon = styled.img`
  width: 7rem;
  height: 7rem;
  background-color: ${(props) => props.theme.colors.bg600};
  border-radius: 0;
  border: 1px solid ${(props) => props.theme.colors.acc900};
  object-fit: cover;
`;

const Dump = styled.dl`
  display: grid;
  gap: 0.35rem;
  margin: 0;
  color: ${(props) => props.theme.colors.wrd400};

  dt,
  dd {
    margin: 0;
  }
`;

const InfoBio = styled.div`
  display: grid;
  grid-template-columns: 11ch 1fr;
  gap: 0.8rem;
  align-items: start;
  word-wrap: break-word;

  dt {
    color: ${(props) => props.theme.colors.wrd600};
    letter-spacing: 0.06ch;
  }

  dd {
    color: ${(props) => props.theme.colors.wrd400};
    white-space: pre-wrap;
  }
`;

export { UserSection, Dump, InfoBio, InfoIcon };
