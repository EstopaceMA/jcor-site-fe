import videoBg from "/assets/videos/jcor_vid_cover.mp4";

export const HeaderSection = () => {
  return (
    <>
      <div className="h-screen w-full">
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        />
        <div className="px-1 flex flex-col justify-center items-center absolute top-0 w-full h-full text-center">
          <h1 className="text-white mb-6 text-5xl font-bold uppercase md:text-7xl font-Poppins">
            Jesus Christ our <span className="text-emerald-500">Redeemer</span>
          </h1>

          <h3 className="text-2xl text-white font-Poppins">
            I know that my redeemer lives - Job 19:25
          </h3>
          <button className="mt-6 ml-3 px-6 py-3 bg-gray-800 bg-opacity-0 border-2 border-gray-300 text-white text-sm uppercase font-medium rounded-lg hover:bg-gray-400 focus:outline-none focus:bg-blue-100">
            Prayer request
          </button>
        </div>
      </div>
    </>
  );
};
