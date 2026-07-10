import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const NAV_ITEMS = [
  { name: "Home", target: "home" },
  { name: "Sobre", target: "about" },
  { name: "Techs", target: "techs" },
  { name: "Projetos", target: "projects" },
  { name: "Contato", target: "contact" },
];

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/luisfelipedepaulacosta/",
    color: "from-blue-500 to-blue-700",
    hover: "hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/LuPeBreak",
    color: "from-gray-600 to-gray-800",
    hover: "hover:shadow-[0_0_25px_rgba(156,163,175,0.6)]",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://wa.me/5524981694833",
    color: "from-green-500 to-green-700",
    hover: "hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:lfbmrj15@gmail.com",
    color: "from-red-500 to-red-700",
    hover: "hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (target) => {
    setIsOpen(false);
    const el = document.getElementsByName(target)[0];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 " +
          (scrolled
            ? "bg-cosmic-bg/70 backdrop-blur-xl border-b border-cosmic-border/50 shadow-[0_4px_30px_rgba(124,58,237,0.05)]"
            : "bg-transparent border-b border-transparent")
        }
      >
        <div className="cosmic-container flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => handleClick("home")}
            className="font-display text-xl font-bold tracking-wider"
          >
            <span className="gradient-text">LF</span>
            <span className="text-cosmic-white">.</span>
            <span className="text-cosmic-cyan">dev</span>
          </motion.button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.target}>
                <button
                  onClick={() => handleClick(item.target)}
                  className="relative px-4 py-2 text-cosmic-lightText hover:text-cosmic-white transition-colors duration-200 group font-medium"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cosmic-purple to-cosmic-cyan group-hover:w-3/4 transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cosmic-white p-2 hover:text-cosmic-cyan transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Social sidebar (esquerda, fixa) — desktop apenas */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="hidden lg:flex fixed left-6 top-[30%] z-40 flex-col gap-3"
      >
        {SOCIAL_LINKS.map((link, i) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, x: 4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={
                "group relative w-11 h-11 rounded-full bg-gradient-to-br " +
                link.color +
                " flex items-center justify-center text-white shadow-lg transition-all duration-300 " +
                link.hover
              }
              title={link.name}
              aria-label={link.name}
            >
              <Icon size={18} />
            </motion.a>
          );
        })}
        {/* Linha decorativa */}
        <div className="w-px h-16 bg-gradient-to-b from-cosmic-purple/60 to-transparent mx-auto" />
      </motion.aside>

      {/* Vertical "Vamos conectar" (esquerda, embaixo) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="hidden lg:flex fixed bottom-0 left-6 z-40 flex-col items-center gap-2 pb-6"
      >
        <a
          href="mailto:lfbmrj15@gmail.com"
          className="text-cosmic-lightText hover:text-cosmic-cyan transition-colors font-mono text-xs tracking-widest uppercase [writing-mode:vertical-rl] hover:-translate-y-1 duration-300"
        >
          lfbmrj15@gmail.com
        </a>
        <div className="w-px h-16 bg-gradient-to-b from-cosmic-cyan/60 to-transparent" />
      </motion.div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-cosmic-bg/95 backdrop-blur-lg pt-16"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07 } },
              }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {NAV_ITEMS.map((item) => (
                <motion.li
                  key={item.target}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <button
                    onClick={() => handleClick(item.target)}
                    className="text-3xl font-display text-cosmic-white hover:gradient-text transition-all"
                  >
                    {item.name}
                  </button>
                </motion.li>
              ))}

              {/* Mobile socials dentro do overlay */}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="flex gap-4 mt-8"
              >
                {SOCIAL_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-cosmic-bgCard border border-cosmic-border flex items-center justify-center text-cosmic-lightText hover:text-cosmic-cyan hover:border-cosmic-cyan transition-all"
                      aria-label={link.name}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
