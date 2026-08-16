import { useState, useContext, useEffect, useRef } from "react";
import UserContext from "../../store/UserContext";

import {
  Form,
  FormInput,
  LogLine,
  Prompt,
  PromptLabel,
  ScanLog,
} from "./SearchBar.styles";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [log, setLog] = useState<string[]>([
    "rieperfind ready",
    "type a github username and press enter",
  ]);
  const lastScan = useRef("");
  const { requestUserdataAPI, isOnError, userdata } = useContext(UserContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const appendLog = (line: string) => {
    setLog((prev) => [...prev, line].slice(-12));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.length === 0) return;
    const value = inputValue.trim();
    lastScan.current = value;
    appendLog(`scan ${value}`);
    requestUserdataAPI!(value);
    setInputValue("");
  };

  useEffect(() => {
    if (!lastScan.current) return;
    if (isOnError) {
      appendLog("user not found");
    }
  }, [isOnError]);

  useEffect(() => {
    if (!lastScan.current || isOnError || !userdata) return;
    if (userdata.login.toLowerCase() === lastScan.current.toLowerCase()) {
      appendLog("user found");
    }
  }, [userdata, isOnError]);

  return (
    <>
      <ScanLog>
        {log.map((line, index) => (
          <LogLine key={`${line}-${index}`}>{line}</LogLine>
        ))}
      </ScanLog>
      <Form
        className={isOnError ? "invalid" : ""}
        name="username"
        onSubmit={handleSubmit}
      >
        <PromptLabel htmlFor="username">scan@rieperfind:~$</PromptLabel>
        <Prompt>
          <FormInput
            required
            name="username"
            id="username"
            value={inputValue}
            onChange={handleChange}
            placeholder="whois <github-user>"
            autoComplete="off"
            spellCheck={false}
          />
        </Prompt>
      </Form>
    </>
  );
};

export default SearchBar;
