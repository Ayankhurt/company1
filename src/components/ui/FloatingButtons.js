import React from "react";
import { MessageCircle, Bot } from "lucide-react";

export default function FloatingButtons() {
  return React.createElement(
    "div",
    { className: "fixed bottom-6 left-6 flex flex-col space-y-4 z-50" },

    // WhatsApp Button
    React.createElement(
      "a",
      {
        href: "https://wa.me/923112070329", // apna WhatsApp number dalna
        target: "_blank",
        rel: "noopener noreferrer",
        className:
          "bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-transform transform hover:scale-110",
      },
      React.createElement(MessageCircle, { className: "w-7 h-7" })
    ),

    // Chatbot Button
    React.createElement(
      "button",
      {
        onClick: () => alert("Chatbot Open Hoga!"), // yahan apna chatbot modal/component call karna
        className:
          "bg-purple-600 hover:bg-purple-700 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-transform transform hover:scale-110",
      },
      React.createElement(Bot, { className: "w-7 h-7" })
    )
  );
}
