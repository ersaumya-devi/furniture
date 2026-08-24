import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaRegUser,
  FaRegHeart,
  FaShoppingBag,
  FaArrowRight,
} from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div
    className="relative h-screen bg-cover bg-center flex-1"
      style={{
        backgroundImage: "url('/Images/banner2.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/45"></div>

      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-4 py-5">

        <div className="flex flex-wrap ml-10">

          {/* Logo */}

          <div className="flex-shrink-0 ml-5">

            <img
              src="/Images/logo.jpg"
              alt="Logo"
              className="h-5 lg:h-10 mf-2 "
            />

          </div>

          {/* Search */}

          <div className="hidden lg:flex flex-1 max-w-3xl mx-12 gap-5  ">

            <button className="w-25 rounded-sm h-12 border text-white text-sm font-semibold transition flex items-center justify-center gap-3 uppercase ">

              <FaBars />

              Menu

            </button>

            <input
              type="text"
              placeholder="ENTER YOUR KEYWORDS"
              className="flex-1 h-12 bg-white text-black
               px-6 outline-none placeholder:text-gray-500 rounded-sm text-sm"
            />

            <button className="w-32 h-12 bg-yellow-400 rounded-sm text-black 
             flex items-center justify-center gap-2 text-sm font-semibold">

              SEARCH

              <FaSearch />

            </button>

          </div>

          {/* Desktop Icons */}

          <div className="hidden lg:flex  gap-8">

            <div className="flex items-center gap-2 cursor-pointer text-white hover:text-yellow-400">

              <FaRegUser size={20} />

              <span className="text-white ">Account</span>

            </div>

            <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-400">

              <FaRegHeart size={20} />

              <span>Wishlist</span>

            </div>

            <div className="flex gap-4">

              <div className="relative cursor-pointer top-3 right-2">

                <FaShoppingBag size={20} />

                <span className="absolute -top-2 -right-3 bg-yellow-400 text-black rounded-full w-5 h-5 text-xs flex items-center justify-center">

                  1

                </span>

              </div>

              <button className="bg-yellow-400 text-black px-5 h-11 rounded-sm font-bold">

                $135.00

              </button>

            </div>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>

        </div>

      </div>

           
 {/* Bottom Navbar */}
      <nav className="hidden lg:block border-t border-black/20 ">
        <div className="max-w-7xl mx-auto">

          <ul className="flex items-center  justify-center gap-10 text-white py-5
           text-[15px] font-semibold uppercase tracking-wider">

            <li className="relative text-yellow-400 cursor-pointer">
              Home
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-yellow-400"></span>
            </li>

            <li className="cursor-pointer hover:text-yellow-400 transition-all duration-300">
              Collections
            </li>

            <li className="cursor-pointer hover:text-yellow-400 transition-all duration-300">
              Products
            </li>

            <li className="cursor-pointer hover:text-yellow-400 transition-all duration-300">
              Pages
            </li>

            <li className="cursor-pointer hover:text-yellow-400 transition-all duration-300">
              Blog
            </li>

            <li className="cursor-pointer hover:text-yellow-400 transition-all duration-300">
              Contact
            </li>

          </ul>

      

        </div>
        <div className="relative top-85 flex ">
          <button className="w-32 h-13 ml-20 border text-white  rounded-sm hover:bg-yellow-400 hover:border-none
             flex items-center justify-center gap-2 text-sm font-semibold">

              SEARCH

             <FaArrowRight />

            </button>
          
        </div>
      </nav> 

      {/* Mobile Menu */}

      <div
        className={`lg:hidden fixed top-0 ${
          open ? "left-0" : "-left-full"
        } w-[280px] h-screen bg-[#1a1816] transition-all duration-500`}
      >

        <div className="flex justify-between items-center p-5 border-b border-white/20">

          <img
            src="/Images/logo.jpg"
            alt="logo"
            className="h-10"
          />

          <button onClick={() => setOpen(false)} className="text-white">
            <FaTimes size={24} />
          </button>

        </div>

        <ul className="flex flex-col text-white text-lg font-semibold">

          <li className="px-6 py-5 border-b hover:bg-yellow-400 hover:text-black cursor-pointer">
            Home
          </li>

          <li className="px-6 py-5 border-b border-white/10 hover:bg-yellow-400 hover:text-black cursor-pointer">
            Collections
          </li>

          <li className="px-6 py-5 border-b border-white/10 hover:bg-yellow-400 hover:text-black cursor-pointer">
            Products
          </li>

          <li className="px-6 py-5 border-b border-white/10 hover:bg-yellow-400 hover:text-black cursor-pointer">
            Pages
          </li>

          <li className="px-6 py-5 border-b border-white/10 hover:bg-yellow-400 hover:text-black cursor-pointer">
            Blog
          </li>

          <li className="px-6 py-5 border-b border-white/10 hover:bg-yellow-400 hover:text-black cursor-pointer">
            Contact
          </li>

        </ul>

      </div>
   
    </div>



    </>
  );
}