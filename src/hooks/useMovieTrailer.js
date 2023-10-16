import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_Option } from "../utils/constant";
import { addTrailerVideo } from "../utils/MoviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_Option
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type == "Trailer");

    const trailer = filterData.length ? filterData[0] : json.results[0];

    // console.log(trailer.key);
    dispatch(addTrailerVideo(trailer));
    // setVideoKey(trailer.key);

    // console.log(json.results);
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};
export default useMovieTrailer;
