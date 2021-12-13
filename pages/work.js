import { createClient } from 'contentful'
import { PodcastInfoWrapper } from '../components/PodcastInfoWrapper'
import { PodcastThumbnailWrapper } from '../components/PodcastThumbnailWrapper'
import { Meta } from '../components/Meta'

function Work({ podcasts, seo }) {
  return (
    <>
      <Meta seo={seo} />
      <h1 style={{display: 'none'}}>3dB</h1>
      <PodcastThumbnailWrapper podcasts={podcasts} />
      <div className='divider' />
      <PodcastInfoWrapper podcasts={podcasts} />
      <div className='divider' />
    </>
  )
}

export default Work

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })

  const data = await client.getEntries()

  return {
    props: {
        podcasts: data.items.filter(item => item.sys.contentType.sys.id === 'podcast'),
        seo: data.items.filter(item => item.sys.contentType.sys.id === 'seo')
    },
    revalidate: 1
  }
}