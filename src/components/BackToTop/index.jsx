import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import "./index.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 900);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleToTop}
      className={`fixed bottom-5 md:bottom-10 right-4 md:right-16 z-50 
        w-11 h-11 bg-blue-600 text-white flex items-center justify-center 
        shadow-lg cursor-pointer animate-floatY transition-all duration-1000 ease-in-out 
        ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <FaChevronUp />
    </button>
  );
}
