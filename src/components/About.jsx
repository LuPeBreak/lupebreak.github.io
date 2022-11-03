import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-brand-background text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className=" text-4xl font-bold inline border-b-4 border-brand-highlighted">
              Sobre
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Ola, sou o Luis, prazer em te conhecer, fique à vontade para dar
              uma olhada
            </p>
          </div>
          <div>
            <p className="text-justify">
              Amo tecnologia desde que me lembro por gente, por esse motivo
              cursei bacharelado em sistemas de informação, durante a faculdade
              participei de diversos eventos de tecnologia como GDG ( Google
              developer Group ) e até um Hackathon onde com alguns amigos sai
              vitorioso. Tenho como passatempo ler mangás, assistir series,
              jogar e sair com os amigos. Adoro me desafiar e principalmente a
              sensação de vitória após vencer uma grande dificuldade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
