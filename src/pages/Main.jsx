import React from "react";
import { useMovieListQuery } from "../features/api";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Card from "../components/Card";

const Main = () => {
  const {
    data: movieList,
    isLoading,
    isError,
    isSuccess,
  } = useMovieListQuery();

  // console.log(movieList);

  return (
    <div className="w-full flex flex-wrap justify-center items-center bg-slate-900 gap-8 px-12 py-10 ">
      {isSuccess ? (
        movieList.map((movie, index) => <Card movie={movie} key={index} />)
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 absolute top-[40%]">
          <AiOutlineLoading3Quarters className="animate-spin font-extrabold text-6xl text-emerald-500" />
          <div className="font-bold text-xl text-emerald-500">
            Loading Movies . . .
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
