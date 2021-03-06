import { createClient } from 'contentful'
import { TeamMembers } from '../components/TeamMembers'
import { DotMagic } from '../components/DotMagic'


const Team = ({ teamMembers }) => {
  return (
    <div>
      <DotMagic num={20} />
      <TeamMembers teamMembers={teamMembers} />
    </div>
  )
}

export default Team

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })

  const data = await client.getEntries()

  return {
    props: {
      teamMembers: data.items.filter(
        (item) => item.sys.contentType.sys.id === 'teamMember'
      ),
    },
    revalidate: 1,
  }
}
