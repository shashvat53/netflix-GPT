import { IMG_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  //   console.log(posterPath);
  return (
    <div>
      <div className="md:w-[150px] w-[120px]">
        <img src={IMG_URL + posterPath} alt="card_photo" />
      </div>
    </div>
  );
};

export default MovieCard;
