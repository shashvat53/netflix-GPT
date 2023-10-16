import { IMG_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  //   console.log(posterPath);
  return (
    <div>
      <div className="w-[150px]">
        <img src={IMG_URL + posterPath} alt="card_photo" />
      </div>
    </div>
  );
};

export default MovieCard;
