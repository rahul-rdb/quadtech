import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import noImage from "../images/no_image.png";

const Card = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-1">
      <div className="w-[14rem] h-[20rem] overflow-hidden bg-slate-800 border border-emerald-400 rounded-xl relative group">
        {movie?.show?.image === null ? (
          <img
            src={noImage}
            alt="noimage"
            className="w-full h-full object-contain object-center bg-transparent"
          />
        ) : (
          <img
            src={movie?.show?.image?.medium}
            alt="Image Not Available"
            className="w-full h-full object-center object-cover"
          />
        )}
        <div className="absolute text-yellow-400 top-2 right-2 text-sm bg-black/50 rounded-lg px-2 py-1 font-bold flex justify-center items-center gap-1">
          <AiFillStar className="text-yellow-400" />
          {movie?.show?.rating?.average !== null
            ? movie?.show?.rating?.average
            : "N/A"}
        </div>
        <div className=" w-full h-full flex items-center justify-center flex-col absolute top-0 bg-black/75 scale-0 group-hover:scale-100 transition-all delay-100 origin-bottom ease-in-out space-y-10">
          <div className="text-white flex flex-col justify-center items-center gap-4">
            <div className="flex flex-wrap justify-center items-center">
              <div className="text-lg font-bold">Genres :&nbsp;</div>
              <div className="font-semibold flex">
                {movie?.show?.genres?.map(
                  (p, index) => (index ? ", " : "") + p
                )}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-lg font-bold">Language :&nbsp;</div>
              <div className="font-semibold">{movie?.show?.language}</div>
            </div>
          </div>
          <button
            className="bg-yellow-500 text-gray-800 h-14 px-4 py-2.5 rounded-lg text-lg font-semibold hover:text-black transition-all ease-in-out "
            onClick={() => navigate(`/${movie?.show?.id}`)}
          >
            More Details
          </button>
        </div>
      </div>
      <div className="text-white flex justify-center">
        <div className="font-bold px-1">{movie?.show?.name}</div>
        <div className="text-gray-400">
          {movie?.show?.premiered === null
            ? "(N/A)"
            : `(${movie?.show?.premiered?.slice(0, 4)})`}
        </div>
      </div>
    </div>
  );
};

export default Card;
