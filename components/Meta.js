import Head from 'next/head'

export const Meta = ({ seo }) => {
  return (
    <Head>
      <title>{seo[0].title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta property='og:type' content='website' />
      <meta name='description' content={seo[0].description}/>
      <meta property='og:title' content={seo[0].title}/>
      <meta name='keywords' content={seo[0].keywords}/>
      <meta property='og:image' content={seo[0].fields.image.fields.file.url}/>
      <link rel='icon' href='/favicon.ico' />
      <link rel='stylesheet' type='text/css' charset='UTF-8' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' /> 
<link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' />
    </Head>
  )
}
