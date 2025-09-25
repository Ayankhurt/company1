import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
  Zap
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import logoImage from "../images/newlogo.jpg";


export default function Footer({ currentPage, onNavigate }) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", page: "home" },
    { name: "Services", page: "services" },
    { name: "About Us", page: "about" },
    { name: "Pricing", page: "pricing" },
    { name: "Blog", page: "blog" },
    { name: "Contact", page: "contact" }
  ];

  const services = [
    "SEO (Search Engine Optimization)",
    "Graphic Design",
    "Social Media Marketing",
    "Web Development",
    "UI/UX Design",
    "App Development",
    "Digital Marketing",
    "Video Editing"
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/codezyra", color: "hover:text-blue-400" },
    { icon: Twitter, href: "https://twitter.com/codezyra", color: "hover:text-blue-400" },
    { icon: Instagram, href: "https://instagram.com/codezyra", color: "hover:text-pink-400" },
    { icon: Linkedin, href: "https://linkedin.com/company/codezyra", color: "hover:text-blue-500" },
    { icon: Youtube, href: "https://youtube.com/codezyra", color: "hover:text-red-400" }
  ];

  const contactInfo = [
    { icon: Phone, text: "+92 311 2070329", href: "tel:+923112070329" },
    { icon: Mail, text: "codezyra9@gmail.com", href: "mailto:codezyra9@gmail.com" },
    { icon: MapPin, text: "Block 3 Nazimabad, Karachi, 74600, Pakistan", href: "https://maps.app.goo.gl/Yy8toB8C3mwY7dVz9" }
  ];

  return React.createElement(
    "footer",
    { className: "relative bg-slate-900 border-t border-slate-800 overflow-hidden" },

    // Background animated blobs
    React.createElement("div", { className: "absolute inset-0" },
      React.createElement(motion.div, {
        animate: { x: [0, 50, 0], y: [0, -25, 0], rotate: [0, 90, 180] },
        transition: { duration: 30, repeat: Infinity, ease: "linear" },
        className: "absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-teal-500/5 rounded-full blur-xl"
      }),
      React.createElement(motion.div, {
        animate: { x: [0, -30, 0], y: [0, 20, 0], rotate: [360, 0, 360] },
        transition: { duration: 25, repeat: Infinity, ease: "linear" },
        className: "absolute bottom-40 left-16 w-24 h-24 bg-gradient-to-br from-teal-500/5 to-purple-500/5 rounded-full blur-lg"
      })
    ),

    // Content container
    React.createElement("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },

      // Main Footer
      React.createElement("div", { className: "py-16" },
        React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-12" },

          // Company Info (left, 2 columns)
          // Company Info (left, 2 columns)
          React.createElement(motion.div, {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.1 },
            viewport: { once: true },
            className: "lg:col-span-2"
          },
            React.createElement("div", {
              className: "flex items-center mb-6 cursor-pointer",
              onClick: () => onNavigate("home")
            },
              React.createElement("img", {
                src: logoImage,
                className: "w-12 h-12 mr-3 rounded-lg object-contain bg-transparent",
                alt: "Logo"
              }),
              React.createElement("span", {
                className: "text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-teal-200 bg-clip-text text-transparent"
              }, "Codezyra")
            ),

            React.createElement("p", { className: "text-gray-300 mb-6 leading-relaxed" },
              "We're a passionate team of digital marketing experts dedicated to helping businesses achieve extraordinary growth through innovative strategies and cutting-edge technology."
            ),
            React.createElement("div", { className: "space-y-3 mb-6" },
              contactInfo.map((info, index) => {
                const Icon = info.icon;
                return React.createElement(motion.a, {
                  key: index,
                  href: info.href,
                  whileHover: { x: 5 },
                  className: "flex items-center text-gray-300 hover:text-purple-400 transition-colors group"
                },
                  React.createElement(Icon, { className: "w-4 h-4 mr-3 text-purple-400 group-hover:text-teal-400 transition-colors" }),
                  info.text
                );
              })
            ),
            React.createElement("div", { className: "flex items-center space-x-4" },
              socialLinks.map((social, index) => {
                const Icon = social.icon;
                return React.createElement(motion.a, {
                  key: index,
                  href: social.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  whileHover: { scale: 1.2, y: -2 },
                  whileTap: { scale: 0.9 },
                  className: `w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-teal-500/20 border border-slate-700 hover:border-purple-500/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`
                },
                  React.createElement(Icon, { className: "w-5 h-5" })
                );
              })
            )
          ),

          // Quick Links (center left)
          React.createElement(motion.div, {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.2 },
            viewport: { once: true }
          },
            React.createElement("h4", { className: "text-lg font-semibold text-white mb-6" }, "Quick Links"),
            React.createElement("ul", { className: "space-y-3" },
              quickLinks.map((link) =>
                React.createElement("li", { key: link.page },
                  React.createElement(motion.button, {
                    onClick: () => onNavigate(link.page),
                    whileHover: { x: 5 },
                    className: `text-gray-300 hover:text-purple-400 transition-colors ${currentPage === link.page ? "text-purple-400" : ""}`
                  }, link.name)
                )
              )
            )
          ),

          // Services (center right)
          React.createElement(motion.div, {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.3 },
            viewport: { once: true }
          },
            React.createElement("h4", { className: "text-lg font-semibold text-white mb-6" }, "Services"),
            React.createElement("ul", { className: "space-y-3" },
              services.map((service, index) =>
                React.createElement("li", { key: index },
                  React.createElement(motion.button, {
                    onClick: () => onNavigate("services"),
                    whileHover: { x: 5 },
                    className: "text-gray-300 hover:text-teal-400 transition-colors"
                  }, service)
                )
              )
            )
          )
        )
      ),

      React.createElement(Separator, { className: "bg-slate-800" }),

      // Bottom Footer
      React.createElement("div", { className: "py-8" },
        React.createElement("div", { className: "flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0" },

          // Copyright
          React.createElement(motion.div, {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            className: "flex items-center text-gray-400"
          },
            React.createElement("span", null, `© ${currentYear} Codezyra. Made with`),
            React.createElement(motion.div, {
              animate: { scale: [1, 1.2, 1] },
              transition: { duration: 1, repeat: Infinity },
              className: "mx-2"
            }, React.createElement(Heart, { className: "w-4 h-4 text-red-400 fill-current" })),
            React.createElement("span", null, "in Pakistan")
          ),

          // CTA Button
          React.createElement(motion.div, {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.8, delay: 0.4 },
            viewport: { once: true }
          },
            React.createElement(Button, {
              onClick: () => onNavigate("contact"),
              className: "bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white px-6 py-2 font-semibold transition-all duration-300 transform hover:scale-105"
            },
              React.createElement(Zap, { className: "mr-2 w-4 h-4" }),
              "Get Started"
            )
          )
        )
      )
    )
  );
}
