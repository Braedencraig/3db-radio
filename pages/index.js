import { createClient } from 'contentful'
import { Manifesto } from '../components/Manifesto'
import { Meta } from '../components/Meta'
import { PodcastInfoWrapper } from '../components/PodcastInfoWrapper'
import { PodcastThumbnailWrapper } from '../components/PodcastThumbnailWrapper'
import { TeamMembers } from '../components/TeamMembers'
import { Contact } from '../components/Contact'
import { DotMagic } from '../components/DotMagic'



export default function Homepage({ podcasts, teamMembers, information, seo, contactInfo }) {
  return (
    <>
      <Meta seo={seo} />
      <DotMagic 
        num={30} 
        positionArr={[
          {top: '4%', right: '26%'},
          {top: '8%', left: '22%'},
          {top: '12%', right: '18%'},
          {top: '16%', left: '33%'},
          {top: '20%', left: '25%'},
          {top: '24%', left: '4%'},
          {top: '28%', right: '41%'},
          {top: '32%', right: '31%'},
          {top: '36%', right: '6%'},
          {top: '40%', left: '20%'},
          {top: '44%', left: '8%'},
          {top: '48%', right: '26%'},
          {top: '52%', right: '18%'},
          {top: '56%', left: '33%'},
          {top: '60%', left: '45%'},
          {top: '64%', left: '11%'},
          {top: '68%', right: '41%'},
          {top: '72%', right: '31%'},
          {top: '76%', right: '6%'},
          {top: '80%', left: '20%'},
          {top: '84%', left: '50%'},
          {top: '88%', left: '40%'},
          {top: '92%', left: '80%'},
          {top: '96%', left: '610%'},
        ]} 
      />
      <h1 style={{display: 'none'}}>3dB</h1>
      <Manifesto information={information} />
      <div className='divider special-top' />
      <PodcastInfoWrapper podcasts={podcasts} />
      <div className='divider special-bottom' />
      <PodcastThumbnailWrapper podcasts={podcasts} />
      <div className='divider' />
      <TeamMembers teamMembers={teamMembers} />
      <div className='divider' />
      <Contact contactInfo={contactInfo} />
    </>
  )
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })

  const data = await client.getEntries()

  return {
    props: {
      podcasts: data.items.filter(item => item.sys.contentType.sys.id === 'podcast'),
      teamMembers: data.items.filter(item => item.sys.contentType.sys.id === 'teamMember'),
      information: data.items.filter(item => item.sys.contentType.sys.id === 'information'),
      seo: data.items.filter(item => item.sys.contentType.sys.id === 'seo'),
      contactInfo: data.items.filter(item => item.sys.contentType.sys.id === 'contact')
    },
    revalidate: 1
  }
}