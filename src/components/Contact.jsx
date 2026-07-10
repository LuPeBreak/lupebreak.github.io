import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Mail, ArrowUp } from "lucide-react";

const CONTACTS = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/luisfelipedepaulacosta/",
    handle: "/luisfelipedepaulacosta",
    color: "from-blue-500 to-blue-700",
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/LuPeBreak",
    handle: "@LuPeBreak",
    color: "from-gray-600 to-gray-800",
    glow: "hover:shadow-[0_0_30px_rgba(156,163,175,0.5)]",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://wa.me/5524981694833",
    handle: "(24) 98169-4833",
    color: "from-green-500 to-green-700",
    glow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:lfbmrj15@gmail.com",
    handle: "lfbmrj15@gmail.com",
    color: "from-red-500 to-red-700",
    glow: "hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]",
  },
];

export default function Contact() {
  return (
    <div
      name="contact"
      className="relative w-full bg-transparent py-20 sm:py-32"
    >
      <div className="cosmic-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-cosmic-cyan text-sm mb-2 tracking-wider">
            04. Contato
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-cosmic-white mb-3">
            Vamos <span className="gradient-text">conversar</span>?
          </h2>
          <p className="text-cosmic-lightText max-w-2xl mx-auto">
            Disponível para novos desafios, freelance ou só trocar uma ideia
            sobre tecnologia. Escolhe o canal que preferir 👇
          </p>
        </motion.div>

        {/* Grid de contatos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {CONTACTS.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.name}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group glass-card p-6 flex items-center gap-5 hover:neon-border transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={
                    "flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br " +
                    contact.color +
                    " flex items-center justify-center text-white text-2xl shadow-lg transition-all duration-300 group-hover:scale-110 " +
                    contact.glow
                  }
                >
                  <Icon />
                </div>
                {/* Texto */}
                <div className="flex-1 min-w-0">
                  <p className="text-cosmic-white font-semibold group-hover:gradient-text transition-all">
                    {contact.name}
                  </p>
                  <p className="text-cosmic-muted text-sm truncate group-hover:text-cosmic-cyan transition-colors">
                    {contact.handle}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-24 pt-8 border-t border-cosmic-border/50 flex flex-col items-center gap-4"
        >
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="flex flex-col items-center gap-2 text-cosmic-muted hover:text-cosmic-cyan transition-colors group"
          >
            <span className="text-xs uppercase tracking-widest font-mono">
              Voltar ao topo
            </span>
            <ArrowUp
              size={20}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
          <p className="text-xs text-cosmic-muted font-mono">
            © {new Date().getFullYear()} LuPeBreak · Feito com{" "}
            <span className="text-cosmic-magenta">♥</span> e React
          </p>
        </motion.div>
      </div>
    </div>
  );
}
