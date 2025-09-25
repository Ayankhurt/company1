import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Zap,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";

export default function Contact() {
  // ------------------ STATE ------------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    urgency: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ------------------ HANDLERS ------------------
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
        urgency: "",
      });
    }, 3000);
  };

  // ------------------ DATA ------------------
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+92 311 2070329", "+92 348 2179016"],
      color: "purple",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["codezyra9@gmail.com"],
      color: "teal",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Block 3 Nazimabad, Karachi, 74600, Pakistan"],
      color: "purple",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Mon - Fri: 9:00 AM - 6:00 PM PKT",
        "Weekend: Emergency only",
      ],
      color: "teal",
    },
  ];

  const services = [
    "SEO (Search Engine Optimization)",
    "Graphic Design",
    "Social Media Marketing",
    "Web Development",
    "UI/UX Design",
    'Digital Marketing',
    "App Development",
    "Video Editing",
  ];

  const budgetRanges = [
    "Under $5,000/month",
    "$5,000 - $10,000/month",
    "$10,000 - $25,000/month",
    "$25,000 - $50,000/month",
    "$50,000+/month",
    "One-time project",
    "Not sure yet",
  ];

  const urgencyOptions = [
    "ASAP - Need to start immediately",
    "Within 2 weeks",
    "Within 1 month",
    "Within 3 months",
    "Just exploring options",
  ];

  // ------------------ ANIMATIONS ------------------
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  // ------------------ RETURN ------------------
  return React.createElement(
    "section",
    {
      className:
        "py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden",
    },

    // Container
    React.createElement(
      "div",
      { className: "max-w-7xl mx-auto" },

      // Title
      React.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center mb-12 sm:mb-14 lg:mb-16",
        },
        React.createElement(
          "h1",
          { className: "text-4xl lg:text-5xl font-bold mb-4" },
          React.createElement(
            "span",
            {
              className:
                "bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent",
            },
            "Contact Us"
          )
        ),
        React.createElement(
          "p",
          { className: "text-gray-300 max-w-2xl mx-auto" },
          "We'd love to hear about your project. Fill out the form and we'll get back to you."
        )
      ),

      // Grid
      React.createElement(
        motion.div,
        {
          variants: containerVariants,
          initial: "hidden",
          animate: "visible",
          className:
            "grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12",
        },

        // LEFT: Contact Info
        React.createElement(
          motion.div,
          { variants: itemVariants, className: "space-y-6" },
          contactInfo.map((item, idx) =>
            React.createElement(
              Card,
              {
                key: idx,
                className:
                  "bg-slate-800/50 border-slate-700 p-4 hover:scale-[1.02] transition-transform duration-200",
              },
              React.createElement(
                CardHeader,
                null,
                React.createElement(
                  "div",
                  { className: "flex items-center space-x-3 mb-2" },
                  React.createElement(item.icon, {
                    className: `w-6 h-6 text-${item.color}-400`,
                  }),
                  React.createElement(CardTitle, { className: "text-white" }, item.title)
                ),
                React.createElement(
                  CardDescription,
                  { className: "text-gray-300 leading-relaxed" },
                  item.details.join(" • ")
                )
              )
            )
          )
        ),

        // RIGHT: Form
        React.createElement(
          motion.div,
          { variants: itemVariants, className: "lg:col-span-2" },
          React.createElement(
            Card,
            { className: "bg-slate-800/50 border-slate-700 p-6" },

            // Header
            React.createElement(
              CardHeader,
              null,
              React.createElement(
                CardTitle,
                { className: "text-white text-xl mb-2" },
                "Tell us about your project"
              ),
              React.createElement(
                CardDescription,
                { className: "text-gray-300" },
                "Our team will respond within 1 business day."
              )
            ),

            // Form
            React.createElement(
              CardContent,
              null,
              React.createElement(
                "form",
                { onSubmit: handleSubmit, className: "space-y-8" },

                // Input fields row 1
                React.createElement(
                  "div",
                  { className: "grid grid-cols-1 md:grid-cols-2 gap-8 pb-2" },
                  React.createElement(
                    "div",
                    null,
                    React.createElement(Label, { htmlFor: "name" }, "Name"),
                    React.createElement(Input, {
                      id: "name",
                      placeholder: "John Doe (Required)",
                      value: formData.name,
                      onChange: (e) =>
                        handleInputChange("name", e.target.value),
                      className: "mt-2 border-gray-600 focus:border-teal-500",
                    })
                  ),
                  React.createElement(
                    "div",
                    null,
                    React.createElement(Label, { htmlFor: "email" }, "Email"),
                    React.createElement(Input, {
                      id: "email",
                      type: "email",
                      placeholder: "john@example.com",
                      value: formData.email,
                      onChange: (e) =>
                        handleInputChange("email", e.target.value),
                      className: "mt-2 border-gray-600 focus:border-teal-500",
                    })
                  ),
                  React.createElement(
                    "div",
                    null,
                    React.createElement(Label, { htmlFor: "phone" }, "Phone"),
                    React.createElement(Input, {
                      id: "phone",
                      placeholder: "+1 555 000 0000",
                      value: formData.phone,
                      onChange: (e) =>
                        handleInputChange("phone", e.target.value),
                      className: "mt-2 border-gray-600 focus:border-teal-500",
                    })
                  ),
                  React.createElement(
                    "div",
                    null,
                    React.createElement(Label, { htmlFor: "company" }, "Company"),
                    React.createElement(Input, {
                      id: "company",
                      placeholder: "Company Inc.",
                      value: formData.company,
                      onChange: (e) =>
                        handleInputChange("company", e.target.value),
                      className: "mt-2 border-gray-600 focus:border-teal-500",
                    })
                  )
                ),

                // Service, Budget, Urgency
                React.createElement(
                  "div",
                  { className: "grid grid-cols-1 md:grid-cols-3 gap-8" },
                  React.createElement(
                    "div",
                    null,
                    React.createElement(Label, null, "Service"),
                    React.createElement(
                      Select,
                      {
                        value: formData.service,
                        onValueChange: (v) =>
                          handleInputChange("service", v),
                      },
                      React.createElement(
                        SelectTrigger,
                        { className: "mt-2" },
                        React.createElement(SelectValue, {
                          placeholder: "Select a service",
                        })
                      ),
                      React.createElement(
                        SelectContent,
                        null,
                        services.map((s, i) =>
                          React.createElement(SelectItem, { key: i, value: s }, s)
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    null,
                    React.createElement(Label, null, "Budget"),
                    React.createElement(
                      Select,
                      {
                        value: formData.budget,
                        onValueChange: (v) =>
                          handleInputChange("budget", v),
                      },
                      React.createElement(
                        SelectTrigger,
                        { className: "mt-2" },
                        React.createElement(SelectValue, {
                          placeholder: "Monthly budget",
                        })
                      ),
                      React.createElement(
                        SelectContent,
                        null,
                        budgetRanges.map((b, i) =>
                          React.createElement(SelectItem, { key: i, value: b }, b)
                        )
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    null,
                    React.createElement(Label, null, "Urgency"),
                    React.createElement(
                      Select,
                      {
                        value: formData.urgency,
                        onValueChange: (v) =>
                          handleInputChange("urgency", v),
                      },
                      React.createElement(
                        SelectTrigger,
                        { className: "mt-2" },
                        React.createElement(SelectValue, {
                          placeholder: "How soon?",
                        })
                      ),
                      React.createElement(
                        SelectContent,
                        null,
                        urgencyOptions.map((u, i) =>
                          React.createElement(SelectItem, { key: i, value: u }, u)
                        )
                      )
                    )
                  )
                ),

                // Message
                React.createElement(
                  "div",
                  null,
                  React.createElement(Label, { htmlFor: "message" }, "Message"),
                  React.createElement(Textarea, {
                    id: "message",
                    placeholder: "Tell us about your goals...",
                    rows: 6,
                    value: formData.message,
                    onChange: (e) =>
                      handleInputChange("message", e.target.value),
                    className:
                      "mt-2 border-gray-600 focus:border-teal-500 resize-none",
                  })
                ),

                // Submit
                React.createElement(
                  "div",
                  { className: "flex items-center justify-between flex-wrap gap-3" },
                  React.createElement(
                    "div",
                    { className: "flex items-center gap-2 text-gray-400" },
                    React.createElement(Zap, { className: "w-4 h-4 text-yellow-400" }),
                    React.createElement("span", { className: "text-sm" }, "Response within 24 hours")
                  ),
                  React.createElement(
                    Button,
                    {
                      type: "submit",
                      className:
                        "bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white",
                      disabled: isSubmitting,
                    },
                    isSubmitting ? "Sending..." : "Send Message",
                    React.createElement(Send, { className: "ml-2 w-4 h-4" })
                  )
                ),

                // Thank you message
                isSubmitted &&
                  React.createElement(
                    "div",
                    { className: "flex items-center gap-2 text-teal-400" },
                    React.createElement(CheckCircle, { className: "w-5 h-5" }),
                    React.createElement("span", null, "Thanks! We'll be in touch.")
                  )
              )
            )
          )
        )
      )
    )
  );
}
