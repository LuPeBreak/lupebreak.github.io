import React, { useState } from "react";
import Logo from "../assets/logo.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

export default function Navbar() {
  const [navShow, setNavShow] = useState(false);
  const handleNavShow = () => setNavShow(!navShow);

  return (
    <div className="z-10 fixed w-full h-20 flex justify-between items-center px-4 bg-brand-background text-gray-300">
      <div>
        <img src={Logo} alt="imagem de logo" className="w-[180px]" />
      </div>

      <div>
        <ul className="hidden md:flex">
          <li>
            <Link to="home" offset={50} smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="techs" offset={-100} smooth={true} duration={500}>
              Techs
            </Link>
          </li>
          <li>
            <Link to="projects" offset={-50} smooth={true} duration={500}>
              Projetos
            </Link>
          </li>
          <li>
            <Link to="contact" offset={-50} smooth={true} duration={500}>
              Contato
            </Link>
          </li>
        </ul>
      </div>

      <div onClick={handleNavShow} className="md:hidden z-20">
        {!navShow ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      <ul
        className={
          !navShow
            ? "hidden"
            : "z-10 absolute top-0 left-0 w-full h-screen bg-brand-background flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleNavShow} offset={50} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleNavShow} offset={70} to="about" smooth={true} duration={500}>
            Sobre
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleNavShow} offset={-80} to="techs" smooth={true} duration={500}>
            Techs
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
          offset={-80}
            onClick={handleNavShow}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projetos
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleNavShow}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contato
          </Link>
        </li>
      </ul>

      <div className="z-10 hidden md:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0] duration-300 bg-[#0073B0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/luisfelipedepaulacosta/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0] duration-300 bg-[#0D1117]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/LuPeBreak"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0] duration-300 bg-green-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://wa.me/5524981694833"
            >
              Whatsapp <FaWhatsapp size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0] duration-300 bg-gray-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1TpvByF7YJkf-cre05aKNjR-aa_qqUHaY/view?usp=share_link"
            >
              Curriculo <BsFillPersonLinesFill size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0] duration-300 bg-[#C5221F]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:lfbmrj15@gmail.com"
            >
              E-mail <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
