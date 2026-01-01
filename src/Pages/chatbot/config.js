// import { createChatBotMessage } from "react-chatbot-kit";

// const config = {
//   botName: "CRM Helper",
//   initialMessages: [
//     createChatBotMessage(
//       "Hi 👋 I’m your CRM Assistant. How can I help you today?"
//     ),
//   ],
//   customStyles: {
//     botMessageBox: {
//       backgroundColor: "#1d4ed8",
//     },
//     chatButton: {
//       backgroundColor: "#1d4ed8",
//     },
//   },
// };

// export default config;

import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../chatbot/BotAvatar.jsx";
import React from "react";

const config = {
  botName: "CRM Helper",
  initialMessages: [
    createChatBotMessage(
      "Hi 👋 I’m your CRM Assistant. How can I help you today?"
    ),
  ],
  customComponents: {
   botAvatar: () => React.createElement(BotAvatar), // ✅ replaces "B" we use this file this way because config is .js file
    header: () => null,             // optional: removes default header
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#1d4ed8",
    },
    chatButton: {
      backgroundColor: "#1d4ed8",
    },
  },
};

export default config;

