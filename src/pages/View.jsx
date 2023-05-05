import React, { useState } from "react";
import { useSingleMovieQuery } from "../features/api";
import { useParams } from "react-router-dom";
import noImage from "../images/no_image.png";
import parse from "html-react-parser";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import PopupForm from "../components/PopupForm";

const View = () => {
  const { id } = useParams();

  const { data: singleMovie, isLoading, isSuccess } = useSingleMovieQuery(id);

  const [popup, setPopup] = useState(false);

  return (
    <div className="w-full flex justify-center items-center bg-slate-900 gap-8 px-28 py-10 relative">
     {popup && <PopupForm singleMovie={singleMovie} setPopup={setPopup} />}
      {!isLoading && isSuccess ? (
        <div className="flex justify-center items-center">
          <div className="w-1/3 flex flex-col justify-center items-center gap-8">
            <div className="w-[14rem] h-[20rem] overflow-hidden bg-slate-800 border border-emerald-400 rounded-xl">
              {singleMovie?.image !== null ? (
                <img
                  src={singleMovie?.image?.medium}
                  alt="image not available"
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <img
                  src={noImage}
                  alt="image not available"
                  className="w-full h-full object-contain object-center bg-transparent"
                />
              )}
            </div>
            <button className="text-gray-800 h-14 hover:text-black hover:border hover:border-emerald-700 hover:rounded-lg bg-yellow-400 font-bold text-xl px-6 py-3 rounded-md transition-all ease-linear flex justify-center items-center" onClick={()=>setPopup(true)}>
              Book Ticket
            </button>
          </div>
          <div className="w-2/3 flex flex-col justify-center items-start gap-4">
            <div className="text-3xl font-bold text-emerald-400 flex justify-center items-end">
              <span>{singleMovie?.name}</span>&nbsp;
              <span className="font-medium text-lg">
                {singleMovie?.premiered === null
                  ? "(N/A)"
                  : `(${singleMovie.premiered?.slice(0, 4)})`}
              </span>
            </div>
            <div className="flex items-center justify-center">
              <div className=" text-lg font-bold text-white">
                Rating :&nbsp;
              </div>
              <div className="text-yellow-400 top-2 right-2 text-md bg-black/50 rounded-lg px-3 py-2 font-bold flex justify-center items-center gap-1">
                <AiFillStar className="text-yellow-400" />
                {singleMovie?.rating?.average !== null
                  ? singleMovie?.rating?.average
                  : "N/A"}
              </div>
            </div>
            <div className="text-xl font-md text-white flex justify-center items-center">
              <div className="font-semibold">Genres : &nbsp;</div>
              <div>
                {singleMovie?.genres?.map(
                  (p, index) => (index ? ", " : "") + p
                )}
              </div>
            </div>
            <div className=" text-white font-medium text-xl">
              {parse(`${singleMovie?.summary}`)}
            </div>
            <div className=" text-white text-lg font-normal flex gap-1 justify-center items-center">
              <div>
                <span className="font-medium">Language :&nbsp;</span>
                <span>{singleMovie?.language}</span>
              </div>
              {singleMovie?.network?.country?.name && (
                <div>
                  <span className="font-medium">/ Country :&nbsp;</span>
                  <span>{singleMovie?.network?.country?.name}</span>
                </div>
              )}
              {singleMovie?.network?.name && (
                <div>
                  <span className="font-medium">/ Network :&nbsp;</span>
                  <span>{singleMovie?.network?.name}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 absolute top-[40%]">
          <AiOutlineLoading3Quarters className="animate-spin font-extrabold text-6xl text-emerald-500" />
          <div className="font-bold text-xl text-emerald-500">
            Loading Details . . .
          </div>
        </div>
      )}
    </div>
  );
};
export default View;
