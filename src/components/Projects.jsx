import React from "react";
import SiteBarraMansa from "../assets/site-barra-mansa.PNG";
import SitePortalTransparencia from "../assets/site-portal-transaparencia-barra-mansa.PNG";
import SiteFrutaEFruto from "../assets/site-fruta-e-fruto.PNG";
import SiteFlexTurismo from "../assets/site-flex-turismo.PNG";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-brand-background"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-brand-highlighted">
            Projetos
          </p>
          <p className="py-4 font-semibold">
            Da uma olhada em alguns
            dos meus projetos!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          <ProjectCard title={"Site de Barra Mansa"} img={SiteBarraMansa} link={'https://www.barramansa.rj.gov.br/'}  />
          <ProjectCard title={"Site Fruta e Fruto"} img={SiteFrutaEFruto} link={'https://lupebreak.github.io/Fruta-e-Fruto/'} codigo={'https://github.com/LuPeBreak/Fruta-e-Fruto'} />
          <ProjectCard title={"Portal da Transparencia"} img={SitePortalTransparencia} link={'https://portaltransparencia.barramansa.rj.gov.br/'} />
          <ProjectCard title={"Site Flex Turismo"} img={SiteFlexTurismo} link={'https://lupebreak.github.io/flex-turismo/'} codigo={'https://github.com/LuPeBreak/flex-turismo'} />

          
        </div>
      </div>
    </div>
  );
}
