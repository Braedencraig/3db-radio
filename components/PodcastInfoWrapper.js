import { PodcastInfo } from '../components/PodcastInfo'
import Slider from 'react-slick'

export const PodcastInfoWrapper = ({ podcasts }) => {

  const settings = {
    centerMode: true,
    centerPadding: '60px',
    className: 'slides',
    variableWidth: true,
  }

  return (
    <Slider {...settings}>
      {podcasts.map((podcast) => (
        <div className='margin-slide'>
          <PodcastInfo key={podcast.sys.id} podcast={podcast} />
        </div>
      ))}
    </Slider>
  )
}
