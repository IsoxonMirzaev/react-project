import coin from "../images/coin.png";
import { IoCloseSharp } from "react-icons/io5";

function Header({ toggleMenu, state }) {
  return (
    <>
      <div className="pl-32 absolute bg-black">
        <div className="flex">
          <div className="relative">
            <h1 className="text-white text-[63px] font-extrabold font-sans w-[800px]">
              ALGORITM <span className="text-[#CFAD4F]">COIN</span>GA <br />{" "}
              XUSH KELIBSIZ!
            </h1>
            <p className="text-white text-3xl">
              добро пожаловать! в алгоритм coin
            </p>
          </div>
          <div>
            <img src={coin} alt="" className="relative" />
          </div>
        </div>
        <div className="bg-white/10 w-[1280px] h-80 rounded-3xl pt-12 pl-14">
          <div>
            <h1 className="text-white text-5xl font-bold">Veb-saytga kirish</h1>
            <p className="text-[#878787] text-lg mt-2">
              Password yoki username xato emasligiga ishonch hosil qiling
            </p>
          </div>
          <div className="flex items-center gap-7 mt-20">
            <input
              type="text"
              placeholder="username"
              className="w-64 h-16 bg-white/10 rounded-3xl pl-6 py-7  text-white placeholder:text-[#878787] outline-none"
            />
            <input
              type="text"
              placeholder="password"
              className="w-64 h-16 bg-white/10 rounded-3xl pl-6 py-7  text-white placeholder:text-[#878787] outline-none"
            />
            <button className="w-52 h-16 bg-amber-300 rounded-3xl text-xl font-semibold hover:bg-black hover:text-amber-300 transition duration-200 ease-in-out">
              Kirish
            </button>
            <p className="text-[#878787] text-xs">
              Tugmani bosib{" "}
              <span className="underline">maxfiylik siyosati</span> va{" "}
              <span className="underline">
                foydalanuvchi <br /> shartnomasining{" "}
              </span>{" "}
              shartlarini qabul qilgan bo'lasiz
            </p>
          </div>
        </div>
      </div>
      {state ? (
        <div className="backdrop-blur-md w-full h-[100vh]">
          <div className="w-[497px] h-80 bg-[#272727]/10 pt-8 pl-9 relative z-50 mx-auto border border-amber-300 rounded-2xl">
            <div className="w-8 h-8 bg-[#A89F9F]/10 text-white rounded-xl pt-1.5 pl-1.5 ml-[400px] ">
              <IoCloseSharp onClick={() => toggleMenu()} className="w-5 h-5" />
            </div>
            <p className="text-white text-sm mt-7">Parolni unutdingizmi?</p>
            <div className="">
              <input
                type="email"
                required
                className="w-96 h-14 bg-white/10 rounded-xl border-solid border-2 border-amber-300 outline-none text-white pl-7 block mt-9"
                placeholder="Email"
              />
              <button className="w-96 h-11 bg-amber-300 rounded-xl mt-5">
                Tayyor
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Header;
