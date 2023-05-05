import React from "react";
import noImage from "../images/no_image.png";
import { RxCross2 } from "react-icons/rx";


const PopupForm = ({ singleMovie,setPopup }) => {
  return (
    <div className="w-5/6 h-full absolute bg-black/80 text-white top-5 z-10 rounded-2xl overflow-hidden flex justify-evenly items-center">
      <div className="w-[14rem] h-[20rem] overflow-hidden bg-slate-800 border border-yellow-300 rounded-lg">
        {singleMovie?.image === null ? (
          <img
            src={noImage}
            alt="noimage"
            className="w-full h-full object-contain object-center bg-transparent"
          />
        ) : (
          <img
            src={singleMovie?.image?.medium}
            alt="Image Not Availabel"
            className="w-full h-full object-center object-cover"
          />
        )}
      </div>
      <form className="flex flex-col justify-center items-start gap-8">
        <div className="flex justify-start items-center">
          <div className="text-2xl font-bold text-yellow-400">
            {singleMovie?.name}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <label htmlFor="location" className="text-lg font-semibold">
            Select Theatre :&nbsp; &nbsp;
          </label>
          <input
            id="location"
            type="text"
            placeholder="Location"
            className="rounded-md p-3 text-black font-semibold focus:outline-none"
          />
        </div>
        <div className="flex justify-center items-center">
          <label htmlFor="date" className="text-lg font-semibold">
            Select Date :&nbsp; &nbsp;
          </label>
          <input
            id="date"
            type="date"
            className="rounded-md p-3 text-black font-semibold focus:outline-none"
          />
        </div>
        <div className="flex justify-center items-center">
          <label htmlFor="tickets" className="text-lg font-semibold">
            No. of Tickets :&nbsp; &nbsp;
          </label>
          <select
            id="tickets"
            type="select"
            placeholder="No. of Tickets"
            className="rounded-md w-16 p-3 text-black font-semibold focus:outline-none"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button className="bg-green-500 text-black px-5 py-2.5 rounded-lg text-lg font-bold">
          Confirm Ticket
        </button>
      </form>
      <button className="absolute top-6 right-8 text-4xl text-yellow-400 " onClick={()=>setPopup(false)}>
        <RxCross2 />
      </button>
    </div>
  );
};

export default PopupForm;
