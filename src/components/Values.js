import React from "react";
import { motion } from "framer-motion";
import { Heart, Target, ThumbsUp, Shield, Users, Zap } from "lucide-react";

const values = [
  { icon: Heart, title: "Integrity", desc: "We do the right thing even when no one is watching." },
  { icon: Target, title: "Results", desc: "We obsess over outcomes that move your business forward." },
  { icon: Users, title: "Customer-first", desc: "Every decision starts with your audience and your goals." },
  { icon: Shield, title: "Quality", desc: "High standards in craft, performance, and reliability." },
  { icon: Zap, title: "Speed", desc: "Bias to action with fast, iterative delivery." },
  { icon: ThumbsUp, title: "Simplicity", desc: "Make it clear, usable, and delightful." },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Values() {
  return React.createElement(
    "section",
    { className: "py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8" },
    React.createElement(
      "div",
      { className: "max-w-7xl mx-auto" },
      React.createElement(
        motion.div,
        { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, className: "text-center mb-10 sm:mb-14 lg:mb-16" },
        React.createElement("h2", { className: "text-4xl lg:text-5xl font-bold mb-4" },
          React.createElement("span", { className: "bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent" }, "Our Values")
        ),
        React.createElement("p", { className: "text-lg text-gray-300 max-w-3xl mx-auto" }, "Principles that guide how we work and the outcomes we deliver.")
      ),
      React.createElement(
        motion.div,
        { variants: container, initial: "hidden", whileInView: "visible", viewport: { once: true }, className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10" },
        values.map((v, i) => {
          const Icon = v.icon;
          return React.createElement(
            motion.div,
            { key: i, variants: item, className: "group h-full bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-purple-500/40 transition-all" },
            React.createElement("div", { className: "w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-teal-500/20 flex items-center justify-center mb-4" },
              React.createElement(Icon, { className: "w-6 h-6 text-purple-400" })
            ),
            React.createElement("h3", { className: "text-xl font-semibold text-white mb-2" }, v.title),
            React.createElement("p", { className: "text-gray-300" }, v.desc)
          );
        })
      )
    )
  );
}


