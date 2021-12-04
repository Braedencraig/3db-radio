import { useEffect, useState } from 'react'
import { PodcastInfo } from "../components/PodcastInfo"
import Slider from "react-slick"

export const PodcastInfoWrapper = ({ podcasts }) => {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if(window.innerWidth < 1200) {
      setMobile(true)
    }
  }, [])

  const settings = {
    centerMode: true,
    centerPadding: "60px",
    className: "slides",
    variableWidth: true,
  };

  if (mobile) {
    console.log(mobile)
    return (
      <div className="mobile-work">
        {podcasts.map((podcast, i) => (
          <PodcastInfo index={i} podcast={podcast} />
        ))}
      </div>
    );
  }
  return (
    <Slider {...settings}>
      {podcasts.map((podcast, i) => (
        <PodcastInfo index={i} podcast={podcast} />
      ))}
    </Slider>
  );
};
