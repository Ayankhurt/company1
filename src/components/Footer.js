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
import { Separator } from "./ui/separator";
import MapComponent from "./ui/MapComponent.js";

export default function Footer({ currentPage, onNavigate }) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", page: "home" },
    { name: "Services", page: "services" },
    { name: "Case Studies", page: "case-studies" },
    { name: "About Us", page: "about" },
    { name: "Pricing", page: "pricing" },
    { name: "Blog", page: "blog" },
    { name: "Contact", page: "contact" }
  ];

  const services = [
    "SEO Optimization",
    "Graphic Designing",
    "Social Media Marketing",
    "Email Marketing",
    "Web Development",
    "UI/UX Design",
  ];


  const legalLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Data Protection",
    "Refund Policy",
    "Disclaimer"
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
    { icon: Mail, text: "codezyra9@gmail.com", href: "mailto:codezyra9@gmail.com" }
  ];

  return React.createElement(
    "footer",
    { className: "relative bg-slate-900 border-t border-slate-800 overflow-hidden" },
    /* ---------------- BACKGROUND ANIMATED DIVS ---------------- */
    React.createElement(
      "div",
      { className: "absolute inset-0" },
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

    /* ---------------- MAIN CONTENT ---------------- */
    React.createElement(
      "div",
      { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },

      /* ---------------- MAIN FOOTER CONTENT ---------------- */
      React.createElement(
        "div",
        { className: "pt-4 pb-8" },
        React.createElement(
          "div",
          { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center lg:justify-items-start" },
          
          /* QUICK LINKS */
          React.createElement(
            "div",
            { className: "lg:col-span-1 text-center lg:text-left" },
            React.createElement("h4", { className: "text-lg font-semibold text-white mb-4" }, "Quick Links"),
            React.createElement(
              "ul",
              { className: "space-y-3" },
              quickLinks.map((link, index) =>
                React.createElement(
                  "li",
                  { key: index },
                  React.createElement(
                    "button",
                    {
                      onClick: () => onNavigate(link.page),
                      className: `text-gray-300 hover:text-white transition-colors duration-200 text-left ${
                        currentPage === link.page ? "text-purple-400" : ""
                      }`
                    },
                    link.name
                  )
                )
              )
            )
          ),

          /* SERVICES */
        React.createElement(
          "div",
            { className: "lg:col-span-1 text-center lg:text-left" },
            React.createElement("h4", { className: "text-lg font-semibold text-white mb-4" }, "Services"),
            React.createElement(
              "ul",
              { className: "space-y-3" },
              services.map((service, index) =>
                React.createElement(
                  "li",
                  { key: index },
                  React.createElement(
                    "a",
                    {
                      href: "#",
                      className: "text-gray-300 hover:text-white transition-colors duration-200"
                    },
                    service
                  )
                )
              )
            )
          ),


          /* CONTACT INFO */
          React.createElement(
            "div",
            { className: "lg:col-span-2 text-center lg:text-left" },
            React.createElement("h4", { className: "text-lg font-semibold text-white mb-4" }, "Get In Touch"),
            React.createElement(
              "div",
              { className: "space-y-4" },
              contactInfo.map((contact, index) =>
                React.createElement(
                  "div",
                  { key: index, className: "flex items-center space-x-3 justify-center lg:justify-start" },
                  React.createElement(contact.icon, { className: "w-5 h-5 text-purple-400 flex-shrink-0" }),
                  React.createElement(
                    "a",
                    {
                      href: contact.href,
                      className: "text-gray-300 hover:text-white transition-colors duration-200"
                    },
                    contact.text
                  )
                )
              )
            ),
            
            /* MAP COMPONENT */
            React.createElement(
              "div",
              { className: "mt-6" },
              React.createElement("h5", { className: "text-white font-semibold mb-3" }, "Our Location"),
              React.createElement(
                "div",
                { className: "w-full h-48 rounded-lg overflow-hidden flex justify-center" },
                React.createElement(MapComponent)
              )
            ),
            
            React.createElement(
              "div",
              { className: "mt-8" },
              React.createElement("h5", { className: "text-white font-semibold mb-4" }, "Follow Us"),
              React.createElement(
                "div",
                { className: "flex space-x-4 justify-center lg:justify-start" },
                socialLinks.map((social, index) =>
                  React.createElement(
                    "a",
                    {
                      key: index,
                      href: social.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: `w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:scale-110`
                    },
                    React.createElement(social.icon, { className: "w-5 h-5" })
                  )
                )
              )
            )
          )
        )
      ),

      /* ---------------- SEPARATOR ---------------- */
      React.createElement(Separator, { className: "bg-slate-800" }),

      /* ---------------- FOOTER BOTTOM ---------------- */
      React.createElement(
        "div",
        { className: "py-8" },
        React.createElement(
          "div",
          { className: "flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-center md:text-left" },
          
          /* COPYRIGHT */
          React.createElement(
            "div",
            { className: "flex items-center space-x-2 text-gray-400" },
            React.createElement("span", null, "© " + currentYear + " Codezyra. All rights reserved."),
            React.createElement(Heart, { className: "w-4 h-4 text-red-400" })
          ),



          /* BRANDING */
          React.createElement(
            "div",
            { className: "flex items-center space-x-2 text-gray-400" },
            React.createElement(Zap, { className: "w-4 h-4 text-yellow-400" }),
            React.createElement("span", { className: "text-sm" }, "Powered by Codezyra")
          )
        )
      )
    )
  );
}
