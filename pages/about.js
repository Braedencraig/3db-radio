import { createClient } from 'contentful'
import { Manifesto } from '../components/Manifesto'
import { TeamMembers } from '../components/TeamMembers'


function About({ information, teamMembers }) {

  return (
    <>
      <Manifesto information={information} />
      <div className='divider' />
      <TeamMembers teamMembers={teamMembers} />
    </>
  )
}

export default About;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const data = await client.getEntries()

  return {
    props: {
      teamMembers: data.items.filter(item => item.sys.contentType.sys.id === 'teamMember'),
      information: data.items.filter(item => item.sys.contentType.sys.id === 'information'),
    },
    revalidate: 1
  };
}