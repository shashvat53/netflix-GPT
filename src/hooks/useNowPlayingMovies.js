import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowplayingMovies } from "../utils/MoviesSlice";
import { API_Option } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_Option
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowplayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
