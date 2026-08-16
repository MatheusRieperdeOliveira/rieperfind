import { DumpLine, HeaderDate, InfoHeaderH2 } from "./UserHeader.styles";

interface UserHeaderProps {
  username: string | undefined;
  login: string | undefined;
  data: string | undefined;
  link: string | undefined;
}

const UserHeader = ({ username, login, data, link }: UserHeaderProps) => {
  return (
    <>
      <DumpLine>
        <dt>USER</dt>
        <dd>
          <InfoHeaderH2>
            <a href={link} target="_blank" rel="noreferrer">
              {username ? username : login}
            </a>
          </InfoHeaderH2>
        </dd>
      </DumpLine>
      <DumpLine>
        <dt>LOGIN</dt>
        <dd>
          <a href={link} target="_blank" rel="noreferrer">
            @{login}
          </a>
        </dd>
      </DumpLine>
      <DumpLine>
        <dt>JOINED</dt>
        <HeaderDate as="dd">{data}</HeaderDate>
      </DumpLine>
    </>
  );
};

export default UserHeader;
