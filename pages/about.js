import { createClient } from "contentful";
import { Manifesto } from "../components/Manifesto";
import { TeamMembers } from "../components/TeamMembers";
import { DotMagic } from "../components/DotMagic";

function About({ information, teamMembers }) {
  return (
    <>
      <Manifesto information={information} />
      <DotMagic num={20} />
      <div className="divider" />
      <TeamMembers teamMembers={teamMembers} />
      <div className="margin-bottom"></div>
    </>
  );
}

export default About;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const data = await client.getEntries();

  return {
    props: {
      teamMembers: data.items.filter(
        (item) => item.sys.contentType.sys.id === "teamMember"
      ),
      information: data.items.filter(
        (item) => item.sys.contentType.sys.id === "information"
      ),
    },
    revalidate: 1,
  };
}
