import React from 'react';

const MapComponent = () => {
  return React.createElement(
    "div",
    { className: "w-full max-w-md h-full" },
    React.createElement("iframe", {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805.9034816659553!2d67.02739313727456!3d24.918971011160217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x830c145438f4e52b%3A0x5240266fe20189be!2sCodezyra!5e0!3m2!1sen!2s!4v1758587083887!5m2!1sen!2s",
      width: "100%",
      height: "100%",
      style: { border: 0, borderRadius: '8px'},
      allowFullScreen: "",
      loading: "lazy",
      referrerPolicy: "no-referrer-when-downgrade",
      className: "rounded-lg"
    })
  );
};

export default MapComponent;
