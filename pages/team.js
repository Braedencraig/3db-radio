import { createClient } from 'contentful'
import { TeamMembers } from '../components/TeamMembers'
import { DotMagic } from '../components/DotMagic'


const Team = ({ teamMembers }) => {
  return (
    <div>
      <DotMagic num={16} positionArr={[
          {top: '6%', right: '26%'},
          {top: '12%', left: '22%'},
          {top: '18%', right: '18%'},
          {top: '24%', left: '33%'},
          {top: '30%', left: '25%'},
          {top: '36%', left: '4%'},
          {top: '42%', right: '41%'},
          {top: '48%', right: '31%'},
          {top: '54%', right: '6%'},
          {top: '60%', left: '20%'},
          {top: '66%', left: '8%'},
          {top: '72%', right: '26%'},
          {top: '78%', right: '18%'},
          {top: '84%', left: '33%'},
          {top: '90%', left: '45%'},
          {top: '96%', left: '11%'},
        ]} />
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
