import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Schedule from "./Schedule";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="relative h-screen w-screen bg-[#F3F2EF]">
      <Navbar contactOpen={contactOpen} setContactOpen={setContactOpen} />
      <div className="absolute -z-50">
        <div className="absolute top-60 left-20 w-32 h-32 bg-red-400 rounded-full blur-3xl opacity-80 animate-pulse"></div>
      </div>

      <div className="flex justify-center w-full w-max-[1440px] mx-auto gap-20 mt-20">
        <Schedule />
        <div className="flex flex-col justify-start items-start gap-3">
          <div>
            <p className="text-5xl font-extrabold">Assistente Vocale AI</p>
          </div>
          <div className="text-2xl flex flex-col">
            <p className="text-gray-700 font-semibold">Cosa può fare:</p>
            <ul className="list-disc pl-10 text-gray-700 text-lg pb-10">
              <li className="mb-1 text-lg">APianificazione degli appuntamenti</li>
              <li className="mb-1 text-lg">Suggerimenti per gli orari disponibili</li>
              <li className="mb-1 text-lg">Cancellazione degli appuntamenti</li>
            </ul>
          </div>
          <p className="text-3xl font-semibold text-gray-700">Prova ora</p>
          <div className="flex flex-col gap-1 pb-1">
            <p className="text-lg text-gray-700">Chiama l'Assistente AI a questo numero:</p>
            <p className="text-gray-700 italic text-lg">+39 000 000 0000</p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-lg text-gray-700">Oppure puoi scrivergli tramite chat.</p>
            <div className="font-semibold flex w-full">
              <button
                
                className="rounded-xl px-8 py-3 bg-black/90 hover:bg-black/80 text-white hover:shadow-xl active:shadow-none transition-colors"
              >
                Apri Chat
              </button>
            </div>
          </div>
        </div>
        <df-messenger
          project-id="playground-ai-voice-assistant"
          agent-id="ba7750f4-da9c-489b-b30f-9125fe9bca2b"
          language-code="it"
          max-query-length="-1"
        >
          <df-messenger-chat-bubble
            expandend="true"
            chat-title="THE-LAST"
            bot-icon-color="#6a994e"
            chat-background-color="#f9f9f9"
            text-color="#1e293b"
            bubble-color="#6a994e"
            bubble-text-color="#ffffff"
          ></df-messenger-chat-bubble>
        </df-messenger>
      </div>
    </div>
  );
}
