import styled from "styled-components";

const Monitor = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0.8rem;
`;

const Window = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.bg400};
  border: 1px solid ${(props) => props.theme.colors.acc900};
  overflow: hidden;
`;

const Titlebar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 0.9rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.acc900};
  color: ${(props) => props.theme.colors.wrd400};
  min-height: 2.6rem;
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  min-height: 0;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const Pane = styled.section`
  min-width: 0;
  min-height: 0;
  overflow: auto;
  padding: 1rem 1.1rem;

  &:first-child {
    border-right: 1px solid ${(props) => props.theme.colors.acc900};
  }

  @media screen and (max-width: 800px) {
    &:first-child {
      border-right: 0;
      border-bottom: 1px solid ${(props) => props.theme.colors.acc900};
      max-height: 40%;
    }
  }
`;

const StatusBar = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.35rem 0.9rem;
  border-top: 1px solid ${(props) => props.theme.colors.acc900};
  color: ${(props) => props.theme.colors.wrd600};
  font-size: 0.8rem;
  min-height: 2.2rem;
`;

const StatusMeta = styled.span`
  display: flex;
  gap: 1.2rem;
  text-transform: lowercase;
`;

export { Monitor, Window, Titlebar, Body, Pane, StatusBar, StatusMeta };
