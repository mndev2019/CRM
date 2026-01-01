import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { useState } from "react";

import config from "../Pages/chatbot/config";
import MessageParser from "../Pages/chatbot/MessageParser";
import ActionProvider from "../Pages/chatbot/ActionProvider";

const CRMChatbot = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-[360px] rounded-2xl shadow-2xl overflow-hidden bg-white">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-semibold">Loosy 🤖</h3>
            <button onClick={() => setOpen(false)} className="text-xl">✕</button>
          </div>

          {/* Chatbot */}
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </>
  );
};

export default CRMChatbot;
