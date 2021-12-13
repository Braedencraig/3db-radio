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
      <DotMagic num={11} />
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