import React from "react";
import { motion } from "framer-motion";
import { Coffee, Code, Heart, Trophy, Zap } from "lucide-react";

const STATS = [
  { icon: Code, value: "11+", label: "Projetos" },
  { icon: Trophy, value: "1º", label: "Hackathon" },
  { icon: Coffee, value: "∞", label: "Cafés" },
  { icon: Heart, value: "100%", label: "Dedicação" },
];

export default function About() {
  return (
    <div
      name="about"
      className="relative w-full bg-transparent py-20 sm:py-32"
    >
      <div className="cosmic-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-cosmic-cyan text-sm mb-2 tracking-wider">
            01. Sobre Mim
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-cosmic-white">
            Quem está por trás do{" "}
            <span className="gradient-text">código</span>
          </h2>
        </motion.div>

        {/* Bento layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card grande — Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 glass-card p-8 hover:neon-border transition-all duration-300"
          >
            <p className="text-cosmic-lightText leading-relaxed text-lg mb-4">
              Amo tecnologia desde que me lembro por gente. Por esse motivo
              cursei bacharelado em Sistemas de Informação na UBM.
            </p>
            <p className="text-cosmic-lightText leading-relaxed text-lg mb-4">
              Durante a faculdade, participei de diversos eventos como GDG (Google
              Developer Group) e de um Hackathon onde, com alguns amigos,
              saí vitorioso. Foi aí que percebi: <span className="gradient-text font-semibold">construir coisas que importam</span> é o que me move.
            </p>
            <p className="text-cosmic-lightText leading-relaxed text-lg">
              Hoje, trabalho na Prefeitura de Barra Mansa com painéis
              administrativos em React/Next.js/TypeScript. Nos tempos livres,
              gosto de mangás, séries, jogos e de estar com amigos. Adoro me
              desafiar — a sensação de vencer uma grande dificuldade é viciante.
              <Zap className="inline ml-1 text-cosmic-cyan" size={18} />
            </p>
          </motion.div>

          {/* Cards de stats */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="glass-card p-6 flex flex-col items-center justify-center text-center hover:neon-border-cyan transition-all duration-300 group"
                >
                  <Icon
                    size={32}
                    className="text-cosmic-purple group-hover:text-cosmic-cyan transition-colors mb-3"
                  />
                  <span className="text-3xl font-bold gradient-text">
                    {stat.value}
                  </span>
                  <span className="text-xs text-cosmic-muted uppercase tracking-wider mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
