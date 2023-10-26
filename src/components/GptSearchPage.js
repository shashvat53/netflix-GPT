import GptSearchbar from "./GptSearchbar";
import GptSuggetions from "./GptSuggetions";

const GptSearchPage = () => {
  return (
    <div className="h-auto min-h-full w-full absolute bg-gradient-to-b from-blue-700 to-red-700 flex pt-[35%] md:pt-[8%] flex-col">
      <GptSearchbar />
      <GptSuggetions />
    </div>
  );
};

export default GptSearchPage;
