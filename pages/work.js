import { createClient } from 'contentful'
import { PodcastInfoWrapper } from '../components/PodcastInfoWrapper'
import { PodcastThumbnailWrapper } from '../components/PodcastThumbnailWrapper'
import { Meta } from '../components/Meta'
import { DotMagic } from '../components/DotMagic'


function Work({ podcasts, seo }) {
  return (
    <>
      <Meta seo={seo} />
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
      <h1 style={{display: 'none'}}>3dB</h1>
      <PodcastThumbnailWrapper podcasts={podcasts} />
      <div className='divider' />
      <div className="margin-bottom">
        <PodcastInfoWrapper podcasts={podcasts} />
      </div>
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