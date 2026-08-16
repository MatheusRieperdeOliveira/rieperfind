import { DefaultTheme, ThemeContext } from "styled-components";
import { useContext } from "react";
import { Host, ToggleButton, TitlebarRow } from "./TitleAndSwitch.styles";
import UserContext from "../../store/UserContext";

const TitleAndSwitch = () => {
  const { title } = useContext<DefaultTheme>(ThemeContext);
  const { toggleTheme } = useContext(UserContext);
  const nextTheme = title === "dark" ? "light" : "dark";

  return (
    <TitlebarRow>
      <Host>rieperfind@localhost:~</Host>
      <ToggleButton type="button" onClick={toggleTheme}>
        theme --{nextTheme}
      </ToggleButton>
    </TitlebarRow>
  );
};

export default TitleAndSwitch;
