import React from "react";

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-fit sm:h-screen my-6 bg-brand-background flex justify-center items-center"
    >
      <form method="POST" action="https://getform.io/f/dd53d163-f246-4e30-8815-081dda452cd3" className="px-4 flex flex-col max-w-[600px] w-full">
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
          className="bg-brand-whiteTitleText p-2 rounded-md"
          type="text"
          placeholder="Nome"
          name="name"
        />
        <input
          className="my-4 p-2 bg-brand-whiteTitleText rounded-md"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-brand-whiteTitleText p-2 rounded-md"
          name="message"
          rows="10"
          placeholder="Mensagem"
        />
        <button className="shadow-brand-cardBg  shadow-xl rounded-sm text-white border-2 hover:bg-brand-highlighted hover:border-brand-highlighted px-4 py-3 my-8 mx-auto flex items-center">
          Vamos Trabalhar juntos
        </button>
      </form>
    </div>
  );
}
