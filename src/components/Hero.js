import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Users, Award, Zap } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero({ onNavigate }) {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Users },
    { number: "250%", label: "Average ROI Increase", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Zap }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [stats.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return React.createElement(
    "section",
    { className: "relative min-h-screen flex items-center justify-center overflow-hidden pt-16" },

    /* ------- Gradient background circles ------- */
    React.createElement(
      "div",
      { className: "absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" },
      React.createElement(motion.div, {
        animate: { x: [0, 100, 0], y: [0, -100, 0], rotate: [0, 180, 360] },
        transition: { duration: 20, repeat: Infinity, ease: "linear" },
        className: "absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-full blur-xl"
      }),
      React.createElement(motion.div, {
        animate: { x: [0, -150, 0], y: [0, 100, 0], rotate: [360, 0, 360] },
        transition: { duration: 25, repeat: Infinity, ease: "linear" },
        className: "absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-teal-500/15 to-purple-500/15 rounded-full blur-2xl"
      }),
      React.createElement(motion.div, {
        animate: { x: [0, 80, 0], y: [0, -80, 0], scale: [1, 1.2, 1] },
        transition: { duration: 15, repeat: Infinity, ease: "easeInOut" },
        className: "absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-teal-400/25 to-purple-600/25 rounded-full blur-lg"
      })
    ),

    /* ------- SVG Background ------- */
    React.createElement("div", {
      className:
        "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"
    }),

    /* ------- Content Wrapper ------- */
    React.createElement(
      "div",
      { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
      React.createElement(
        "div",
        { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-16" },

        /* Left Side - Text Content */
        React.createElement(
          motion.div,
          { variants: containerVariants, initial: "hidden", animate: "visible", className: "space-y-8 text-center lg:text-left" },

          /* Heading */
          React.createElement(
            motion.div,
            { variants: itemVariants, className: "space-y-4" },
            React.createElement(
              motion.h1,
              { className: "text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" },
              React.createElement(
                "span",
                { className: "block mt-2" },
                React.createElement(
                  motion.span,
                  {
                    initial: { opacity: 0, x: -50 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: 0.8, duration: 0.8 },
                    className: "bg-gradient-to-r from-purple-400 via-teal-400 to-purple-400 bg-clip-text text-transparent"
                  },
                  "Empowering Digital"
                )
              ),
              React.createElement("span", { className: "block mt-2 text-white" }, "Growth Without"),
              React.createElement(
                motion.span,
                {
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { delay: 1.2, duration: 0.8 },
                  className: "block mt-2 bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent"
                },
                "Limits"
              )
            )
          ),

          /* Subheading */
          React.createElement(
            motion.p,
            { variants: itemVariants, className: "text-xl sm:text-1xl lg:text-2xl text-gray-300 leading-relaxed" },
            "We craft digital experiences that drive real impact and limitless growth.",
            React.createElement("span", { className: "text-purple-400 font-semibold" }, " Let's push boundaries and build what's next, together"),
          ),

          /* Buttons */
          React.createElement(
            motion.div,
            { variants: itemVariants, className: "flex flex-col sm:flex-row items-center lg:items-start justify-between lg:justify-start gap-4 pt-8" },
            React.createElement(
              Button,
              {
                className:
                  "group relative overflow-hidden bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25",
                onClick: () => onNavigate("contact")
              },
              React.createElement(
                motion.span,
                {
                  className: "relative z-10 flex items-center",
                  whileHover: { x: 5 },
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                },
                "Get Free Strategy Call",
                React.createElement(ArrowRight, { className: "ml-2 w-5 h-5" })
              ),
              React.createElement(motion.div, {
                className:
                  "absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                initial: false
              })
            )
          ),

          /* Stats */
          React.createElement(
            motion.div,
            { variants: itemVariants, className: "flex justify-c w-full  gap-27" },
            stats.map((stat, index) => {
              const Icon = stat.icon;
              return React.createElement(
                motion.div,
                {
                  key: index,
                  initial: { opacity: 0.5, scale: 0.8 },
                  animate: {
                    opacity: currentStatIndex === index ? 1 : 0.7,
                    scale: currentStatIndex === index ? 1.1 : 1
                  },
                  transition: { duration: 0.5 },
                  className:
                    "text-center p-4 rounded-2xl backdrop-blur-sm transition-all duration-500 " +
                    (currentStatIndex === index
                      ? "bg-gradient-to-br from-purple-500/20 to-teal-500/20 border border-purple-500/30"
                      : "bg-slate-800/30 border border-slate-700/50")
                },
                React.createElement(Icon, {
                  className:
                    "w-8 h-8 mx-auto mb-3 " +
                    (currentStatIndex === index ? "text-purple-400" : "text-gray-400")
                }),
                React.createElement(
                  "div",
                  {
                    className:
                      "text-2xl lg:text-3xl font-bold mb-1 " +
                      (currentStatIndex === index
                        ? "bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
                        : "text-white")
                  },
                  stat.number
                ),
                React.createElement("div", { className: "text-sm text-gray-400" }, stat.label)
              );
            })
          )
        ),

        React.createElement(
          motion.div,
          {
            initial: { opacity: 0, x: 50 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: 0.5, duration: 1 },
            className: "relative z-10"
          },
          React.createElement(
            "div",
            { className: "relative" },
            React.createElement(
              motion.div,
              {
                initial: { y: -64 }, // Move image up initially
                animate: { y: [-64, -74, -64] }, // Floating effect
                transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                className: "relative z-10"
              },
              React.createElement("img", {
                src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
                alt: "Digital Growth",
                className: "w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              })
            ),

            
          )
        )
      ),

     
      
    )
  );
}
