import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggetions = () => {
  const { movieName, gptMoviesResult } = useSelector((store) => store.gpt);
  if (!movieName) return null;
  return (
    <div className="text-white  md:p-[18px]">
      <div>
        {movieName.map((moviename, index) => (
          <MovieList title={moviename} movies={gptMoviesResult[index]} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default GptSuggetions;
// funny indian retro movies
