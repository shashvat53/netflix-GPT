const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video absolute text-white bg-gradient-to-r from-black">
      <div className="pt-[25%] md:pt-[18%] pl-[25px]">
        <h1 className=" w-[500px] md:text-5xl text-3xl font-bold">{title}</h1>
        <p className="hidden md:inline-block text-lg py-4 w-1/3">{overview}</p>
        <div className="flex gap-3 mt-3 md:mt-0">
          <button className="text-[14px] md:text-lg font-semibold p-[1px_14px] md:p-[4px_18px] bg-white rounded text-black">
            <i className="fa-solid fa-play"></i> Play
          </button>
          <button className="text-[14px] md:text-lg font-semibold p-[1px_14px] md:p-[4px_18px] bg-transparent border rounded">
            <i className="fa-solid fa-circle-info"></i> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
