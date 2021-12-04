import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const PodcastInfo = ({ podcast, className = '', key }) => {
  if (!podcast) return <p>redirecting...</p>

  const imageUrl = podcast.fields.thumbnail
    ? podcast.fields.thumbnail.fields.file.url
    : null

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const rndInt = randomIntFromInterval(1, 4)

  return (
    <div className={`border-info mobile-work-border ${className}`}>
      <div className='flex-1'>
        <div className='relative'>
          <a href={`/work/${podcast.fields.slug}`}>
            <div className={`border-image border-image${rndInt}`}></div>
            <img
              loading='lazy'
              src={imageUrl}
              alt={podcast.fields.thumbnail.fields.description}
            />
          </a>
        </div>
      </div>
      <div className='flex-2'>
        <h3>{podcast.fields.title}</h3>
        {podcast.fields.description.content.map((text, i) => (
          <div key={`${text}${i}`}>{documentToReactComponents(text)}</div>
        ))}
      </div>
    </div>
  )
}
