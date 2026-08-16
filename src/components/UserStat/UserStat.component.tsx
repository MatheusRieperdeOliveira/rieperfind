import { StatsBody, StatsItem } from "./UserStat.styles";

interface UserStatProps {
  repos: number | undefined;
  followers: number | undefined;
  following: number | undefined;
  html_url: string | undefined;
}

const UserStat = ({
  repos = 0,
  followers = 0,
  following = 0,
  html_url,
}: UserStatProps) => {
  return (
    <StatsBody>
      <StatsItem
        target="_blank"
        rel="noreferrer"
        href={repos ? html_url + "?tab=repositories" : "#"}
      >
        <dt>REPOS</dt>
        <dd>{repos}</dd>
      </StatsItem>
      <StatsItem
        target="_blank"
        rel="noreferrer"
        href={followers ? html_url + "?tab=followers" : "#"}
      >
        <dt>FOLLOWERS</dt>
        <dd>{followers}</dd>
      </StatsItem>
      <StatsItem
        target="_blank"
        rel="noreferrer"
        href={following ? html_url + "?tab=following" : "#"}
      >
        <dt>FOLLOWING</dt>
        <dd>{following}</dd>
      </StatsItem>
    </StatsBody>
  );
};

export default UserStat;
