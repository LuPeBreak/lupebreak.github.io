import React from "react";
import SiteBarraMansa from "../assets/projects/site-barra-mansa.png";
import SitePortalTransparencia from "../assets/projects/site-portal-transaparencia-barra-mansa.png";
import SiteFrutaEFruto from "../assets/projects/site-fruta-e-fruto.png";
import SiteFlexTurismo from "../assets/projects/site-flex-turismo.png";
import SiteCoffeeDelivery from "../assets/projects/site-coffee-delivery.png";
import SiteToDoList from "../assets/projects/site-to-do-list.png";
import SiteValidatedLogin from "../assets/projects/site-react-validated-login.png";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <div
      name="projects"
      className="w-full h-fit sm:h-screen my-6 text-gray-300 bg-brand-background"
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
          
          <ProjectCard title={"Coffee Delivery"} img={SiteCoffeeDelivery} link={'https://lupebreak.github.io/coffee-delivery/'} codigo={'https://github.com/LuPeBreak/coffee-delivery'} />
          <ProjectCard title={"Site de Barra Mansa"} img={SiteBarraMansa} link={'https://www.barramansa.rj.gov.br/'}  />
          <ProjectCard title={"Portal da Transparencia"} img={SitePortalTransparencia} link={'https://portaltransparencia.barramansa.rj.gov.br/'} />
          <ProjectCard title={"Site Fruta e Fruto"} img={SiteFrutaEFruto} link={'https://lupebreak.github.io/Fruta-e-Fruto/'} codigo={'https://github.com/LuPeBreak/Fruta-e-Fruto'} />
          <ProjectCard title={"To Do List"} img={SiteToDoList} link={'https://lupebreak.github.io/To-Do-List-Ignite-challenge/'} codigo={'https://github.com/LuPeBreak/To-Do-List-Ignite-challenge'} />
          <ProjectCard title={"Site Flex Turismo"} img={SiteFlexTurismo} link={'https://lupebreak.github.io/flex-turismo/'} codigo={'https://github.com/LuPeBreak/flex-turismo'} />
          <ProjectCard title={"React Validated Login"} img={SiteValidatedLogin} link={'https://lupebreak.github.io/react-validated-login-desafio-4/'} codigo={'https://github.com/LuPeBreak/react-validated-login-desafio-4'} />
          
        </div>
      </div>
    </div>
  );
}
