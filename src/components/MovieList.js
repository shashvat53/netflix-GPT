import { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  //   const [movie, setMovie] = useState(null);
  //   setMovie(movies);
  if (!movies) return;
  //   console.log(movies);
  return (
    <div>
      <div className="py-4 ">
        <h1 className="text-2xl md:text-4xl text-white pl-6 pb-2 md:pb-4">
          {title}
        </h1>
        <div className="flex overflow-x-scroll no-scrollbar  gap-4 px-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
