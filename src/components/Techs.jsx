import React from "react";
import { motion } from "framer-motion";
import { SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiPrisma, SiWordpress, SiGithub } from "react-icons/si";

// Logos oficiais enviadas pelo usuário (servidas via pasta public/)
const BETTER_AUTH_LOGO = "/techs/betterauth.svg";
const SHADCN_LOGO = "/techs/shadcn.svg";

function BetterAuthLogo() {
  return (
    <img
      src={BETTER_AUTH_LOGO}
      alt="Better Auth"
      className="w-14 h-14 object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.7)]"
      style={{ filter: "invert(1) brightness(1.2)" }}
    />
  );
}

function ShadcnLogo() {
  return (
    <img
      src={SHADCN_LOGO}
      alt="Shadcn UI"
      className="w-14 h-14 object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.7)]"
    />
  );
}

const ALL_TECHS = [
  { Icon: SiNextdotjs, name: "Next.js", color: "#fff" },
  { Icon: SiReact, name: "React", color: "#06b6d4" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { Type: "brand", BrandIcon: ShadcnLogo, name: "Shadcn UI" },
  { Icon: SiNodedotjs, name: "Node.js", color: "#539E43" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  { Icon: SiPrisma, name: "Prisma ORM", color: "#5E569B" },
  { Type: "brand", BrandIcon: BetterAuthLogo, name: "Better Auth" },
  { Icon: SiWordpress, name: "WordPress", color: "#21759B" },
  { Icon: SiGithub, name: "GitHub", color: "#e2e8f0" },
];

export default function Techs() {
  return (
    <div
      name="techs"
      className="relative w-full bg-transparent py-20 sm:py-32"
    >
      <div className="cosmic-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-cosmic-cyan text-sm mb-2 tracking-wider">
            02. Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-cosmic-white mb-3">
            O que eu <span className="gradient-text">uso no dia a dia</span>
          </h2>
          <p className="text-cosmic-lightText max-w-2xl">
            Tecnologias que estudo, experimento e que se mostraram realmente
            úteis em projetos reais — da prefeitura a side projects.
          </p>
        </motion.div>

        {/* Grid de techs */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {ALL_TECHS.map((tech) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass-card group flex flex-col items-center justify-center gap-3 p-6 hover:neon-border transition-all duration-300 cursor-default"
            >
              {tech.Type === "brand" ? (
                <tech.BrandIcon />
              ) : (
                <tech.Icon
                  size={56}
                  style={{ color: tech.color }}
                  className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_18px_rgba(124,58,237,0.7)]"
                />
              )}
              <span className="text-xs text-cosmic-muted uppercase tracking-widest font-mono text-center group-hover:text-cosmic-cyan transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
