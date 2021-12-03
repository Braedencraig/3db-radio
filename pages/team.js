import { createClient } from "contentful";
import { TeamMembers } from "../components/TeamMembers";

const Team = ({ teamMembers }) => {
  return (
    <div>
      <TeamMembers teamMembers={teamMembers} />
      <div className="divider" />
    </div>
  );
};

export default Team;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const data = await client.getEntries();

  return {
    props: {
      teamMembers: data.items.filter(
        (item) => item.sys.contentType.sys.id === "teamMember"
      ),
    },
    revalidate: 1,
  };
}
