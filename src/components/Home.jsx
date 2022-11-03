import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
// import profilePic from "../assets/profile-pic.png";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div name="home" className="w-full h-screen bg-brand-background">
      <div className=" max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-brand-highlighted">Ola, meu nome é</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-brand-whiteTitleText md:animate-focus">
          Luis Felipe de Paula Costa
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-brand-whiteSubtitleText md:animate-pulse">
          Dev Full Stack
        </h2>
        <p className="text-brand-whiteSubtitleText py-4 max-w-[700px] text-justify">
          Sou um profissional com formação em Sistemas de Informação e
          conhecimento em Desenvolvimento Full Stack. Procuro sempre ter um
          perfil dinâmico e proativo, com foco no aprendizado constante e no
          trabalho em equipe. Atualmente busco novos desafios para ganhar
          experiencia e me aprimorar como Desenvolvedor.
        </p>
        <div>
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-brand-highlighted hover:border-brand-highlighted duration-300">
            <Link offset={-50} className="flex justify-center items-center" to="projects" smooth={true} duration={500}>
              Ver Projetos
              <span className="group-hover:rotate-90 group-hover:mt-[-10px]  duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
