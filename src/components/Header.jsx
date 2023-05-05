import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full py-4 bg-slate-950 text-emerald-400 font-extrabold text-4xl px-8 flex justify-between items-center">
      <div onClick={() => navigate("/")} className="cursor-pointer">
        TvMaze
      </div>
    </div>
  );
};

export default Header;
