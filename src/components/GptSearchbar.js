import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
const GptSearchbar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="h-[100%] w-full absolute bg-gradient-to-b from-blue-700 to-red-700 flex items-center justify-center">
      <div className="text-center ">
        <h1 className="text-6xl text-white ">{lang[langKey].heading}</h1>
        <p className="text-[#ccc] py-[14px] text-[18px]">
          {lang[langKey].paragraph}
        </p>
        <form className="grid grid-cols-12 relative">
          <input
            className="col-span-9 p-[28px_22px] pl-[40px] outline-none text-lg "
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <i className="fa-solid fa-magnifying-glass absolute top-[42%] left-[10px] text-[#555]"></i>
          <button className="col-span-3 bg-black text-white text-lg ">
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchbar;
