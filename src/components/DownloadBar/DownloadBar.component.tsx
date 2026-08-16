import { DLButton } from "./DownloadBar.styles";

import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import { useContext } from "react";
import UserContext from "../../store/UserContext";

const DownloadBar = () => {
  const { userdata } = useContext(UserContext);

  const onButtonClick = () => {
    const domElement = document.getElementById("user-card") as HTMLElement;

    htmlToImage
      .toJpeg(domElement, {
        style: {
          borderRadius: "0",
        },
      })
      .then((dataUrl) => download(dataUrl, `${userdata?.login}-rieperfind`))
      .catch((error) => console.error("oops, something went wrong!", error));
  };

  return (
    <DLButton type="button" onClick={onButtonClick}>
      export --image
    </DLButton>
  );
};

export default DownloadBar;
