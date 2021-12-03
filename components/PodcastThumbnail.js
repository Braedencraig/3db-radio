import Image from 'next/image'

export const PodcastThumbnail = ({ podcast }) => {
    const imageUrl = podcast.fields.thumbnail
    ? podcast.fields.thumbnail.fields.file.url
    : null

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const rndInt = randomIntFromInterval(1, 4)

  return (
    <li className='relative slide'>
      <a href={`/work/${podcast.fields.slug}`}>
        <div className={`border-image border-image${rndInt}`}></div>
        <Image width={240} height={240} src={'https:' + imageUrl} alt={podcast.fields.thumbnail.fields.description} />
      </a>
    </li>
  );
}
