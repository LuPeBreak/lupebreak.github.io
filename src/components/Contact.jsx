import React from "react";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-brand-background flex justify-center items-center p-4"
    >
      <form method="POST" action="https://getform.io/f/fc0877f5-65ed-4328-9e2f-ff6132b59971" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-brand-highlighted text-gray-300">
            Contato
          </p>
          <p className="text-gray-300 py-4">
            Preencha o formulario abaixo ou me manda uma mensagem no Whatsapp{" "}
            <a
              className="duration-300 hover:animate-pulse font-bold text-brand-highlighted"
              href="https://wa.me/5524981694833"
            >
              5524981694833
            </a>
            , pode tambem me enviar um email{" "}
            <a
              className="duration-300 hover:animate-pulse font-bold text-brand-highlighted"
              href="mailto:lfbmrj15@gmail.com"
            >
              lfbmrj15@gmail.com
            </a>
          </p>
        </div>

        <input
          className="bg-brand-whiteTitleText p-2"
          type="text"
          placeholder="Nome"
          name="name"
        />
        <input
          className="my-4 p-2 bg-brand-whiteTitleText"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-brand-whiteTitleText p-2"
          name="message"
          rows="10"
          placeholder="Mensagem"
        />
        <button className="text-white border-2 hover:bg-brand-highlighted hover:border-brand-highlighted px-4 py-3 my-8 mx-auto flex items-center">
          Vamos Trabalhar juntos
        </button>
      </form>
    </div>
  );
}
