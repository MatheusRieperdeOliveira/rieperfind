import { useContext } from "react";
import UserContext from "../../store/UserContext";
import TitleAndSwitch from "../TitleAndSwitch/TitleAndSwitch.component";
import Header from "../Header/Header.component";
import UserCard from "../UserCard/UserCard.component";
import DownloadBar from "../DownloadBar/DownloadBar.component";
import {
  Body,
  Monitor,
  Pane,
  StatusBar,
  StatusMeta,
  Titlebar,
  Window,
} from "./Shell.styles";

const Shell = () => {
  const { isOnError, userdata } = useContext(UserContext);
  const status = isOnError ? "not found" : userdata ? "ok" : "idle";

  return (
    <Monitor>
      <Window>
        <Titlebar>
          <TitleAndSwitch />
        </Titlebar>
        <Body>
          <Pane>
            <Header />
          </Pane>
          <Pane>
            <UserCard />
          </Pane>
        </Body>
        <StatusBar>
          <StatusMeta>
            <span>host: localhost</span>
            <span>status: {status}</span>
          </StatusMeta>
          <DownloadBar />
        </StatusBar>
      </Window>
    </Monitor>
  );
};

export default Shell;
