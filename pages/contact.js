import { createClient } from 'contentful'

const Contact = ({ contactInfo }) => {
  return (
    <div className='contact contact-page'>
      Get in touch <a href='mailto:'>{contactInfo[0].fields.email}</a>
    </div>
  )
}

export default Contact

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })

  const data = await client.getEntries()

  return {
    props: {
      contactInfo: data.items.filter(
        (item) => item.sys.contentType.sys.id === 'contact'
      ),
    },
    revalidate: 1,
  }
}
