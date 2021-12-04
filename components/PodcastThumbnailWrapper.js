import { PodcastThumbnail } from '../components/PodcastThumbnail'

export const PodcastThumbnailWrapper = ({ podcasts }) => {
  const newImgArr = [...podcasts, ...podcasts, ...podcasts, ...podcasts, ...podcasts, ...podcasts, ...podcasts,]

  return (
    <div className='slider'>
      <ul>
        {newImgArr.map((podcast, i) => (
          <PodcastThumbnail podcast={podcast} key={`${podcast.sys.id}${i}`} />
        ))}
      </ul>
    </div>
  )
}
