import { UFooter, UFooterItem } from "./UserFooter.styles";

interface UserFooterProps {
  location: string | null | undefined;
  twitter: string | null | undefined;
  site: string | null | undefined;
  company: string | null | undefined;
}

const none = "-- none --";

const UserFooter = ({ location, twitter, site, company }: UserFooterProps) => {
  return (
    <UFooter>
      <UFooterItem className={location ? "" : "disabled"}>
        <dt>LOCATION</dt>
        <dd>
          <a
            href={
              location ? `https://www.google.com/maps/place/${location}` : "#"
            }
            target="_blank"
            rel="noreferrer"
          >
            {location ? location : none}
          </a>
        </dd>
      </UFooterItem>
      <UFooterItem className={site ? "" : "disabled"}>
        <dt>SITE</dt>
        <dd>
          <a href={site ? site : "#"} target="_blank" rel="noreferrer">
            {site ? site : none}
          </a>
        </dd>
      </UFooterItem>
      <UFooterItem className={twitter ? "" : "disabled"}>
        <dt>TWITTER</dt>
        <dd>
          <a
            href={twitter ? `https://twitter.com/${twitter}` : "#"}
            target="_blank"
            rel="noreferrer"
          >
            {twitter ? twitter : none}
          </a>
        </dd>
      </UFooterItem>
      <UFooterItem className={company ? "" : "disabled"}>
        <dt>COMPANY</dt>
        <dd>
          <a>{company ? company : none}</a>
        </dd>
      </UFooterItem>
    </UFooter>
  );
};

export default UserFooter;
