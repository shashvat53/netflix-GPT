import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const Mainmovie = movies[6];

  //   console.log(Mainmovie);
  //   console.log("render MainContainer");

  const { original_title, overview, id } = Mainmovie;
  // console.log(id);

  return (
    <div className="pt-[0px] md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
