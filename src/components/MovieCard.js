import { IMG_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  //   console.log(posterPath);
  return (
    <div>
      <div className="md:w-[150px] w-[120px] cursor-pointer  transform transition duration-500 hover:scale-110">
        <img src={IMG_URL + posterPath} alt="card_photo " />
      </div>
    </div>
  );
};

export default MovieCard;
