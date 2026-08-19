import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

import SiteBarraMansa from "../assets/projects/site-barra-mansa.png";
import SitePortalTransparencia from "../assets/projects/site-portal-transaparencia-barra-mansa.png";
import SiteFrutaEFruto from "../assets/projects/site-fruta-e-fruto.png";
import SiteFlexTurismo from "../assets/projects/site-flex-turismo.png";
import SiteCoffeeDelivery from "../assets/projects/site-coffee-delivery.png";
import SiteToDoList from "../assets/projects/site-to-do-list.png";
import SiteValidatedLogin from "../assets/projects/site-react-validated-login.png";
import SiteGip from "../assets/projects/site-gip.png";
import SitePortalServidor from "../assets/projects/site-portal-servidor.png";
import SiteAdit from "../assets/projects/site-adit.png";
import SiteFabricaOculos from "../assets/projects/site-fabrica-oculos.png";
import SiteNBPSAdminTemplate from "../assets/projects/site-nbps-admin-template.png";
import SiteApfam from "../assets/projects/site-apfam.webp";
import SiteApoiaDev from "../assets/projects/site-apoia-dev.png";

const PROJECTS = [
  {
    title: "Fábrica de Óculos",
    subtitle: "Gestão de produção e pedidos • Uso diário pela equipe",
    img: SiteFabricaOculos,
    link: "https://fabricadeoculos.barramansa.rj.gov.br/",
    codigo: null, // repo privado
    category: "Profissionais",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Better Auth"],
    featured: true,
  },
  {
    title: "GIP",
    subtitle: "Processos de licitação • Desenvolvimento colaborativo",
    img: SiteGip,
    link: "https://gip.barramansa.rj.gov.br/",
    codigo: null, // repo privado
    category: "Profissionais",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Better Auth"],
    featured: true,
  },
  {
    title: "Portal do Servidor",
    subtitle: "Acesso a sistemas e serviços públicos",
    img: SitePortalServidor,
    link: "https://portaldoservidor.barramansa.rj.gov.br/",
    codigo: null, // repo privado
    category: "Profissionais",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
    featured: true,
  },
  {
    title: "ADIT",
    subtitle: "Ativos e serviços de TI • Aguardando implantação",
    img: SiteAdit,
    link: "https://ti.barramansa.rj.gov.br/",
    codigo: null, // repo privado
    category: "Profissionais",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Better Auth"],
    featured: true,
  },
  {
    title: "Site de Barra Mansa",
    subtitle: "Desenvolvimento e manutenção institucional",
    img: SiteBarraMansa,
    link: "https://www.barramansa.rj.gov.br/",
    codigo: null, // repo cliente
    category: "Profissionais",
    tech: ["WordPress", "PHP", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Portal da Transparência",
    subtitle: "Desenvolvimento e manutenção em WordPress",
    img: SitePortalTransparencia,
    link: "https://portaltransparencia.barramansa.rj.gov.br/",
    codigo: null,
    category: "Profissionais",
    tech: ["WordPress", "PHP", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "NBPS Admin Template",
    subtitle: "Experimental admin starter em evolução",
    img: SiteNBPSAdminTemplate,
    link: null,
    codigo: "https://github.com/LuPeBreak/nbps-admin-template",
    category: "Pessoais / Experimentos",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Better Auth"],
  },
  {
    title: "APFAM",
    subtitle: "Portal de divulgação — projeto pessoal",
    img: SiteApfam,
    link: null,
    codigo: "https://github.com/LuPeBreak/apfam",
    category: "Pessoais / Experimentos",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Better Auth"],
  },
  {
    title: "Apoia.dev",
    subtitle: "Projeto de estudo — plataforma de apoio financeiro",
    img: SiteApoiaDev,
    link: null,
    codigo: "https://github.com/LuPeBreak/apoia-dev",
    category: "Estudos",
    tech: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind CSS"],
  },
  {
    title: "Coffee Delivery",
    subtitle: "Projeto de estudo — delivery de café",
    img: SiteCoffeeDelivery,
    link: "https://lupebreak.github.io/coffee-delivery/",
    codigo: "https://github.com/LuPeBreak/coffee-delivery",
    category: "Estudos",
    tech: ["React", "TypeScript"],
  },
  {
    title: "Fruta e Fruto",
    subtitle: "Projeto de estudo — site de receitas",
    img: SiteFrutaEFruto,
    link: "https://lupebreak.github.io/Fruta-e-Fruto/",
    codigo: "https://github.com/LuPeBreak/Fruta-e-Fruto",
    category: "Estudos",
    tech: ["HTML", "CSS"],
  },
  {
    title: "To Do List",
    subtitle: "Projeto de estudo — lista de tarefas",
    img: SiteToDoList,
    link: "https://lupebreak.github.io/To-Do-List-Ignite-challenge/",
    codigo: "https://github.com/LuPeBreak/To-Do-List-Ignite-challenge",
    category: "Estudos",
    tech: ["React", "JavaScript"],
  },
  {
    title: "Flex Turismo",
    subtitle: "Projeto de estudo — site de turismo",
    img: SiteFlexTurismo,
    link: "https://lupebreak.github.io/flex-turismo/",
    codigo: "https://github.com/LuPeBreak/flex-turismo",
    category: "Estudos",
    tech: ["HTML", "CSS"],
  },
  {
    title: "React Validated Login",
    subtitle: "Projeto de estudo — login com validação",
    img: SiteValidatedLogin,
    link: "https://lupebreak.github.io/react-validated-login-desafio-4/",
    codigo: "https://github.com/LuPeBreak/react-validated-login-desafio-4",
    category: "Estudos",
    tech: ["React", "JavaScript"],
  },
];

const CATEGORIES = ["Todos", "Profissionais", "Pessoais / Experimentos", "Estudos"];

export default function Projects() {
  const [filter, setFilter] = useState("Todos");

  const filtered =
    filter === "Todos"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter);

  return (
    <div
      name="projects"
      className="relative w-full bg-transparent py-20 sm:py-32"
    >
      <div className="cosmic-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-cosmic-cyan text-sm mb-2 tracking-wider">
            03. Projetos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-cosmic-white mb-3">
            Coisas que eu <span className="gradient-text">construí</span>
          </h2>
          <p className="text-cosmic-lightText max-w-2xl mb-8">
            Da gestão pública a projetos pessoais — cada um com um desafio
            diferente. Filtre por categoria pra explorar.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex gap-3 flex-wrap"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 " +
                (filter === category
                  ? "bg-gradient-to-r from-cosmic-purple to-cosmic-cyan text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                  : "glass-card text-cosmic-lightText hover:text-cosmic-white hover:border-cosmic-purple/30")
              }
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Bento grid */}
      <div className="cosmic-container">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => {
              const hasSite = Boolean(project.link);
              const hasCode = Boolean(project.codigo);

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -8 }}
                  className={
                    "group relative glass-card overflow-hidden hover:neon-border transition-all duration-300 " +
                    (project.featured ? "sm:col-span-2 lg:col-span-1" : "")
                  }
                >
                  {/* Imagem com aspect ratio fixo */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Overlay gradient no hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cosmic-bg via-cosmic-bg/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    {/* Botões que aparecem no hover */}
                    <div
                      className={
                        "absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cosmic-bg/60 backdrop-blur-sm " +
                        (hasSite && hasCode ? "" : "px-4")
                      }
                    >
                      {hasSite && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            "flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-cosmic-purple to-cosmic-cyan text-white font-medium text-sm hover:scale-105 transition-transform " +
                            (hasCode ? "" : "mx-auto")
                          }
                        >
                          <ExternalLink size={16} />
                          Ver site
                        </a>
                      )}
                      {hasCode && (
                        <a
                          href={project.codigo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-card text-cosmic-white font-medium text-sm hover:border-cosmic-cyan hover:text-cosmic-cyan transition-all"
                        >
                          <Code2 size={16} />
                          {hasSite ? "Código" : "Ver código"}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-display font-bold text-cosmic-white mb-1 group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-sm text-cosmic-muted mb-3">
                      {project.subtitle}
                    </p>
                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((technology) => (
                        <span
                          key={technology}
                          className="text-xs px-2.5 py-1 rounded-full bg-cosmic-purple/10 text-cosmic-cyan border border-cosmic-purple/20 font-mono"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
