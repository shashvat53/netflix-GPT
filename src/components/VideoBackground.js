import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  if (!trailerVideo) return;

  return (
    <div className="w-full aspect-[16/9] ">
      <iframe
        className="w-full h-full "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        // allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
    // <div>hii</div>
  );
};

export default VideoBackground;
// hXzcyx9V0xw
