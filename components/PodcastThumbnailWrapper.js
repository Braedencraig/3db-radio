import { PodcastThumbnail } from '../components/PodcastThumbnail'

export const PodcastThumbnailWrapper = ({ podcasts }) => {
  const newImgArr = [...podcasts, ...podcasts, ...podcasts, ...podcasts, ...podcasts, ...podcasts, ...podcasts,]

  return (
    <div className='slider'>
      <ul>
        {newImgArr.map((podcast) => (
          <PodcastThumbnail podcast={podcast} />
        ))}
      </ul>
    </div>
  );
};
