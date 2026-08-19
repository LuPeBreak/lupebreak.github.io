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
      className="hero-home relative w-full bg-transparent lg:h-[100svh]"
    >
      <div className="hero-container cosmic-container flex min-h-[100svh] flex-col justify-center pt-20 pb-8 sm:pt-24 lg:min-h-0 lg:pt-20 lg:pb-6">
        {/* Blob/neon area */}
        <div
          id="blobImg"
          style={{ backgroundImage: `url(${blob})` }}
          className="hero-visual mt-2 mb-4 h-[260px] bg-[length:500px_260px] bg-center bg-no-repeat sm:h-[360px] sm:bg-[length:620px_250px] lg:h-[clamp(220px,34vh,360px)] lg:bg-[length:580px_240px] flex items-center justify-center"
        >
          <img
            src={profilePic}
            alt="Foto de perfil de Luis Felipe"
            className="w-[150px] rounded-full ring-4 ring-cosmic-purple/40 sm:w-[170px] lg:w-[180px]"
            style={{
              filter: "drop-shadow(0 0 20px rgba(124, 58, 237, 0.6))",
            }}
          />
        </div>

        {/* Greeting + name */}
        <p className="text-cosmic-cyan font-mono text-sm tracking-widest uppercase mb-1 animate-fade-in">
          Olá, meu nome é
        </p>
        <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2.75rem,4.2vw,4rem)] leading-tight font-bold text-cosmic-white mb-1 animate-fade-up glow-text-purple">
          Luis Felipe de Paula Costa
        </h1>
        <h2 className="hero-subtitle text-3xl sm:text-4xl md:text-5xl lg:text-[clamp(2.75rem,4.2vw,4rem)] leading-tight font-bold gradient-text mb-3">
          Dev Full Stack
        </h2>

        <p className="hero-description text-cosmic-lightText py-3 max-w-[760px] text-justify text-base sm:text-lg lg:text-[clamp(1rem,1.25vw,1.125rem)] leading-relaxed">
          Sou desenvolvedor Full Stack e bacharel em Sistemas de Informação, com
          mais de 6 anos de atuação no setor público desenvolvendo e mantendo
          sistemas web e serviços digitais. Atualmente trabalho principalmente
          com React, Next.js, TypeScript, Node.js, Prisma e PostgreSQL,
          participando desde o levantamento de requisitos até a implementação,
          implantação e manutenção das soluções. Busco novos desafios onde
          possa continuar evoluindo e contribuir com produtos de impacto real.
        </p>

        <div className="hero-actions flex gap-4 mt-2 flex-wrap">
          <button
            onClick={() => scrollTo("projects")}
            className="rounded-md group text-white bg-gradient-to-r from-cosmic-purple to-cosmic-cyan px-6 py-3 flex items-center hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all duration-300"
          >
            Ver Projetos
            <span className="ml-2 group-hover:translate-x-1 duration-300">
              <HiArrowNarrowRight />
            </span>
          </button>
          <a
            href="https://wa.me/5524981694833"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md group text-cosmic-white border-2 border-cosmic-purple/50 px-6 py-3 flex items-center hover:border-cosmic-cyan hover:text-cosmic-cyan transition-all duration-300"
          >
            Fale Comigo
            <span className="ml-2">💬</span>
          </a>
        </div>
      </div>
    </div>
  );
}
