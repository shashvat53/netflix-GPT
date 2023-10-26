import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_Option } from "../utils/constant";
import { addGptMoviesResult, addMovieName } from "../utils/GptSlice";

const GptSearchbar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_Option
    );
    const json = await data.json();
    return json.results;
  };

  const hnadleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const searchQuery =
      "Act as a movies recomendation system and and suggest some movies for the query" +
      searchText.current.value +
      "only give me name of 5 movies, coma seperated as example ahead example: sholay, dhamal, golmal";
    const searchResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!searchResult.choices) return;
    // console.log(searchResult.choices[0]?.message?.content);
    const gptMovies = searchResult.choices[0]?.message?.content.split(",");
    console.log(gptMovies);

    const data = gptMovies.map((movie) => searchMoviesTMDB(movie));
    console.log(data);

    const resolvedPromise = await Promise.all(data);
    console.log(resolvedPromise);
    dispatch(addGptMoviesResult(resolvedPromise));
    dispatch(addMovieName(gptMovies));
  };

  return (
    <div className="">
      <div className="text-center ">
        <h1 className="text-4xl md:text-6xl text-white ">
          {lang[langKey].heading}
        </h1>
        <p className="text-[#ccc] py-[14px] md:text-[18px]">
          {lang[langKey].paragraph}
        </p>
        <form
          className="grid grid-cols-12 relative md:w-[50%] w-[90%] mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            className="col-span-9 p-[12px_22px] pl-[40px] md:p-[28px_22px] md:pl-[40px] outline-none text-[14px] md:text-lg "
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <i className="fa-solid fa-magnifying-glass absolute top-[40%] md:top-[42%] left-[10px] text-[#555] text-[12px] md:text-[16px]"></i>
          <button
            onClick={hnadleGptSearchClick}
            className="col-span-3 bg-black text-white md:text-lg text-[14px]"
          >
            {lang[langKey].search}
          </button>
        </form>
        <p className="text-[14px] md:text-[16px] text-white mt-1">
          Note: Movie recommendations powered by GPT are available on request
          due to paid APIs.
          <a
            href="https://www.linkedin.com/in/shashvatsen-422958209/"
            target="_blank"
            rel="noreferrer"
            className="ml-2 text-sm text-gray-400 hover:text-gray-200"
          >
            Request now
          </a>
        </p>
      </div>
    </div>
  );
};

export default GptSearchbar;
