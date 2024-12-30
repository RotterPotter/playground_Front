import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Schedule from "./Schedule";
import Bot from "./Bot";
import Contact from "./Contact";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const dfMessengerBubble = document.querySelector("df-messenger-chat-bubble");

  return (
    <div className="relative ">
      {contactOpen && (
        <Contact contactOpen={contactOpen} setContactOpen={setContactOpen} />
      )}
      <Navbar contactOpen={contactOpen} setContactOpen={setContactOpen} />
      <Bot></Bot>
      <div className="absolute -z-50">
        <div className="absolute hidden lg:block top-[600px] left-[1000px] w-32 h-32 bg-orange-400 rounded-full blur-3xl opacity-80 animate-pulse animate-oscillate"></div>
        <div className="absolute top left-[10px] lg:left-24 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-80 animate-pulse animate-oscillate"></div>
        <div className="absolute top-[450px] left-[320px] lg:-left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl opacity-80 animate-pulse animate-oscillate"></div>
        <div className="absolute hidden lg:block top-16 left-[1350px] bottom-0 w-32 h-32 bg-purple-400 rounded-full blur-3xl opacity-80 animate-pulse animate-oscillate"></div>
      </div>

      <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row-reverse lg:justify-center w-full w-max-[1440px] gap-10 mt-10 lg:mt-20 px-10">
        <div className="flex flex-col justify-start items-start gap-3">
          <div>
            <p className="text-5xl  font-extrabold">Assistente Vocale AI</p>
          </div>
          <div className="text-2xl flex flex-col">
            <p className="text-gray-700 font-semibold">Cosa può fare:</p>
            <ul className="list-disc pl-10 text-gray-700 text-lg pb-10">
              <li className="mb-1 text-lg">
                Pianificazione degli appuntamenti
              </li>
              <li className="mb-1 text-lg">
                Suggerimenti per gli orari disponibili
              </li>
              <li className="mb-1 text-lg">Cancellazione degli appuntamenti</li>
            </ul>
          </div>
          <p className="text-3xl font-semibold text-gray-700">Prova ora</p>
          <div className="flex flex-col gap-1 pb-1">
            <p className="text-lg text-gray-700">
              Chiama l'Assistente AI a questo numero:
            </p>
            <p className="text-gray-700 sm:flex-none sm:justify-normal flex justify-center italic text-lg">
              +39 000 000 0000{" "}
              <span className="text-gray-500 not-italic pl-2">
                Coming soon...
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-lg text-gray-700">
              Oppure puoi scrivergli tramite chat.
            </p>
            <div className="font-semibold flex w-full justify-center lg:justify-normal">
              <button
                onClick={() =>
                  document.querySelector("df-messenger-chat-bubble").openChat()
                }
                className="rounded-xl px-8 py-3 lg:py-4 bg-black/90 hover:bg-black/80 text-white hover:shadow-xl active:shadow-none transition-colors"
              >
                Apri Chat
              </button>
            </div>
          </div>
        </div>

        <Schedule />
      </div>
    </div>
  );
}
