import { PodcastInfo } from "../components/PodcastInfo";
import Slider from "react-slick";
import { useWindowSize } from "use-window-size-hook";

export const PodcastInfoWrapper = ({ podcasts }) => {
  const { width } = useWindowSize();

  const settings = {
    centerMode: true,
    centerPadding: "60px",
    className: "slides",
    variableWidth: true,
  };
  if (width < 1200) {
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
