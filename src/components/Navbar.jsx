import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Navbar() {
  const [navShow, setNavShow] = useState(false);
  const handleNavShow = () => setNavShow(!navShow);

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-brand-background text-gray-300">
      {/* logo */}
      <div>
        <img src={Logo} alt="imagem de logo" className="w-[150px]" />
      </div>

      {/* desktop menu */}
      <div>
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>Sobre</li>
          <li>Techs</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
      </div>

      {/* burguer menu icon */}
      <div onClick={handleNavShow} className="md:hidden z-10">
        {!navShow ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !navShow
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-brand-background flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">Sobre</li>
        <li className="py-6 text-4xl">Techs</li>
        <li className="py-6 text-4xl">Projetos</li>
        <li className="py-6 text-4xl">Contato</li>
      </ul>
      {/* social icons */}
      <div className=" hidden md:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0073B0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/luisfelipedepaulacosta/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0D1117]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/LuPeBreak"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:lfbmrj15@gmail.com"
            >
              E-mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1TpvByF7YJkf-cre05aKNjR-aa_qqUHaY/view?usp=share_link"
            >
              Curriculo <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
}
