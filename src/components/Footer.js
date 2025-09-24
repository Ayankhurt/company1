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
  ArrowRight,
  Heart,
  Zap
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

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
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: Mail, text: "hello@codezyra.com", href: "mailto:hello@codezyra.com" },
    { icon: MapPin, text: "123 Business Ave, New York, NY 10001", href: "https://maps.google.com" }
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

      /* NEWSLETTER SECTION */
      React.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          className: "py-16 border-b border-slate-800"
        },
        React.createElement(
          "div",
          { className: "text-center mb-8" },
          React.createElement("h3", { className: "text-3xl font-bold text-white mb-4" }, "Stay Ahead of the Digital Curve"),
          React.createElement("p", { className: "text-xl text-gray-300 max-w-2xl mx-auto" },
            "Get exclusive digital marketing insights, industry trends, and growth strategies delivered to your inbox."
          )
        ),
        React.createElement(
          "div",
          { className: "flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto" },
          React.createElement(Input, {
            type: "email",
            placeholder: "Enter your email address",
            className: "bg-slate-800/50 border-slate-700 focus:border-purple-500 text-white"
          }),
          React.createElement(
            Button,
            { className: "bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white px-8 py-2 font-semibold whitespace-nowrap" },
            "Subscribe",
            React.createElement(ArrowRight, { className: "ml-2 w-4 h-4" })
          )
        ),
        React.createElement("p", { className: "text-sm text-gray-400 text-center mt-4" },
          "Join 10,000+ marketers. No spam, unsubscribe anytime."
        )
      ),

      /* ---------------- MAIN FOOTER CONTENT ---------------- */
      React.createElement(
        "div",
        { className: "py-16" },
        React.createElement(
          "div",
          { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" },
          
          /* QUICK LINKS */
          React.createElement(
            "div",
            { className: "lg:col-span-1" },
            React.createElement("h4", { className: "text-lg font-bold font-semibold text-white mb-6" }, "Quick Links"),
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
            { className: "lg:col-span-1" },
            React.createElement("h4", { className: "text-lg font-semibold text-white mb-6" }, "Services"),
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
            { className: "lg:col-span-2" },
            React.createElement("h4", { className: "text-lg font-semibold text-white mb-6" }, "Get In Touch"),
            React.createElement(
              "div",
              { className: "space-y-4" },
              contactInfo.map((contact, index) =>
                React.createElement(
                  "div",
                  { key: index, className: "flex items-center space-x-3" },
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
            React.createElement(
              "div",
              { className: "mt-8" },
              React.createElement("h5", { className: "text-white font-semibold mb-4" }, "Follow Us"),
              React.createElement(
                "div",
                { className: "flex space-x-4" },
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
          { className: "flex flex-col md:flex-row items-center justify-between gap-4" },
          
          /* COPYRIGHT */
          React.createElement(
            "div",
            { className: "flex items-center space-x-2 text-gray-400" },
            React.createElement("span", null, "© " + currentYear + " Codezyra. All rights reserved."),
            React.createElement(Heart, { className: "w-4 h-4 text-red-400" })
          ),

          /* LEGAL LINKS */
          React.createElement(
            "div",
            { className: "flex flex-wrap items-center gap-6" },
            legalLinks.map((legal, index) =>
              React.createElement(
                "a",
                {
                  key: index,
                  href: "#",
                  className: "text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                },
                legal
              )
            )
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
