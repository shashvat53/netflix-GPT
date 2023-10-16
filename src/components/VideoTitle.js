const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video absolute text-white bg-gradient-to-r from-black">
      <div className="pt-[18%] pl-[25px]">
        <h1 className=" w-[500px] text-5xl font-bold">{title}</h1>
        <p className="text-lg py-4 w-1/3">{overview}</p>
        <div className="flex gap-3">
          <button className="text-lg font-semibold p-[4px_18px] bg-white rounded text-black">
            <i className="fa-solid fa-play"></i> Play
          </button>
          <button className="text-lg font-semibold p-[4px_18px] bg-transparent border rounded">
            <i className="fa-solid fa-circle-info"></i> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
