import styled from "styled-components";

const ScanLog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: ${(props) => props.theme.colors.wrd600};
  margin-bottom: 1.2rem;
  flex: 1;
`;

const LogLine = styled.p`
  word-break: break-word;
`;

const Form = styled.form`
  --invalid: ;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  flex-wrap: wrap;
  color: var(--invalid, ${(props) => props.theme.colors.acc900});
`;

const PromptLabel = styled.label`
  color: ${(props) => props.theme.colors.acc900};
  white-space: nowrap;
  cursor: text;
`;

const Prompt = styled.div`
  flex: 1;
  min-width: 8rem;
`;

const FormInput = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  color: ${(props) => props.theme.colors.wrd400};
  caret-color: ${(props) => props.theme.colors.acc900};
  border-radius: 0;

  &::placeholder {
    color: ${(props) => props.theme.colors.wrd600};
  }
`;

export { Form, FormInput, LogLine, Prompt, PromptLabel, ScanLog };
