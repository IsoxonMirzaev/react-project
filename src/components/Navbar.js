import React from "react";
import logo from "../images/logo.png";
import {
  FaInstagram,
  FaFacebook,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

function Navbar({ toggleMenu }) {
  return (
    <div className="flex justify-around items-center py-20">
      <div className="flex items-center">
        <img src={logo} alt="" className="w-16 h-16 object-fill" />
        <h1 className="text-[#F1F2F2] font-black text-4xl">COIN</h1>
      </div>
      <div className="flex items-center gap-6">
        <p className="text-[#8E8E8E]">Algoritm O'quv Markazi</p>
        <ul className="flex gap-2">
          <li className="w-11 h-11 bg-white/10 rounded-xl px-2.5 py-2.5 group hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] transition duration-150 ease-in-out">
            <FaInstagram className="w-6 h-6 text-white/50 group-hover:text-white" />
          </li>
          <li className="w-11 h-11 bg-white/10 rounded-xl px-2.5 py-2.5 group hover:bg-[#1877F2] transition duration-150 ease-in-out">
            <FaFacebook className="w-6 h-6 text-white/50 group-hover:text-white" />
          </li>
          <li className="w-11 h-11 bg-white/10 rounded-xl px-2.5 py-2.5 group hover:bg-[#0088cc] transition duration-150 ease-in-out">
            <FaTelegramPlane className="w-6 h-6 text-white/50 group-hover:text-white" />
          </li>
          <li className="w-11 h-11 bg-white/10 rounded-xl px-2.5 py-2.5 group hover:bg-[#FF0000] transition duration-150 ease-in-out">
            <FaYoutube className="w-6 h-6 text-white/50 group-hover:text-white" />
          </li>
        </ul>
        <div className="gap-3 flex">
          <button
            onClick={toggleMenu}
            className="w-52 h-14 rounded-2xl bg-white/10 text-white"
          >
            Parolni unutdingizmi?
          </button>
          <button className="w-52 h-14 bg-[#E3CA5C]/20 rounded-2xl text-[#E3CA5C] border-solid border-2 border-[#E3CA5C]">
            Natijani ko'rish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
