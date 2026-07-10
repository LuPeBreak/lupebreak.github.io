import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import profilePic from "../assets/profile-pic.png";
import blob from "../assets/blob.svg";

export default function Home() {
  const scrollTo = (id) => {
    const el = document.getElementsByName(id)[0];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      name="home"
      className="relative h-fit sm:min-h-screen w-full bg-transparent"
    >
      <div className="cosmic-container flex flex-col justify-center min-h-screen pt-24 pb-12">
        {/* Blob/neon area */}
        <div
          id="blobImg"
          style={{ backgroundImage: `url(${blob})` }}
          className="mt-4 lg:mt-20 mb-6 py-8 lg:bg-[length:700px_280px] bg-[length:500px_260px] bg-no-repeat bg-center h-[300px] sm:h-[500px] flex items-center justify-center"
        >
          <img
            src={profilePic}
            alt=" foto de perfil"
            className="w-[180px] mx-auto my-8 rounded-full ring-4 ring-cosmic-purple/40"
            style={{
              filter: "drop-shadow(0 0 20px rgba(124, 58, 237, 0.6))",
            }}
          />
        </div>

        {/* Greeting + name */}
        <p className="text-cosmic-cyan font-mono text-sm tracking-widest uppercase mb-2 animate-fade-in">
          Olá, meu nome é
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-cosmic-white mb-2 animate-fade-up glow-text-purple">
          Luis Felipe de Paula Costa
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
          Dev Full Stack
        </h2>

        <p className="text-cosmic-lightText py-4 max-w-[700px] text-justify leading-relaxed">
          Sou um profissional com formação em Sistemas de Informação e
          conhecimento em Desenvolvimento Full Stack. Procuro sempre ter um
          perfil dinâmico e proativo, com foco no aprendizado constante e no
          trabalho em equipe. Atualmente busco novos desafios para ganhar
          experiencia e me aprimorar como Desenvolvedor.
        </p>

        <div className="flex gap-4 mt-4 flex-wrap">
          <button
            onClick={() => scrollTo("projects")}
            className="rounded-md group text-white bg-gradient-to-r from-cosmic-purple to-cosmic-cyan px-6 py-3 flex items-center hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all duration-300"
          >
            Ver Projetos
            <span className="ml-2 group-hover:translate-x-1 duration-300">
              <HiArrowNarrowRight />
            </span>
          </button>
          <button className="rounded-md group text-cosmic-white border-2 border-cosmic-purple/50 px-6 py-3 flex items-center hover:border-cosmic-cyan hover:text-cosmic-cyan transition-all duration-300">
            <a
              href="https://wa.me/5524981694833"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Fale Comigo
              <span className="ml-2">💬</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
