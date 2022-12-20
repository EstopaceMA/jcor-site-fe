// import Link from "next/link";
import bg from "../../assets/images/bgwhite.jpeg";

export const Header = () => {
  return (
    <>
      <div
        className="flex flex-col items-center bg-cover bg-center justify-center min-h-screen bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgb(0 0 0 / 30%), rgb(0 0 0 / 90%)), url(${bg})`,
        }}
      >
        <div className="text-center px-3">
          <h1 className=" text-white mb-6 text-5xl font-bold uppercase md:text-7xl font-Poppins">
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
