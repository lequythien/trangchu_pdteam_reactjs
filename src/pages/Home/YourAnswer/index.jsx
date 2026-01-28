import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IoMdAdd, IoIosRemove } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import ImageYourAnswer from "../../../assets/images/img-youranswer.png";

const FAQS = [
  {
    question: "What services do you offer?",
    answer:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, search for 'lorem ipsum' will uncover",
  },
  {
    question: "How experienced is your team?",
    answer:
      "Our team has many years of experience working on enterprise and startup projects across many industries.",
  },
  {
    question: "Can you provide of past projects?",
    answer:
      "Yes, we can provide case studies and examples of our previous successful projects upon request.",
  },
];

export default function YourAnswer() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [openVideo, setOpenVideo] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <>
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-8 items-center"
          >
            {/* phần nội bên trái */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block mb-4 px-5 py-2 rounded-full bg-white text-[#101a29] shadow-sm text-sm font-medium tracking-wide">
                YOUR ANSWER
              </span>

              <h2 className="text-[32px] md:text-[40px] font-semibold text-[#101a29] mb-10 sm:mb-12 md:mb-20 leading-tight">
                Have Any <span className="text-blue-600">Question</span> Please?
              </h2>

              <div className="space-y-4">
                {FAQS.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center gap-4 text-left font-semibold text-lg sm:text-xl leading-[28px] cursor-pointer focus:outline-none"
                    >
                      <span className="flex items-center justify-center p-2 rounded-md bg-blue-600 text-white shrink-0">
                        {activeIndex === index ? (
                          <IoIosRemove size={18} />
                        ) : (
                          <IoMdAdd size={18} />
                        )}
                      </span>

                      <span
                        className={`transition-colors duration-300 ${
                          activeIndex === index
                            ? "text-blue-600"
                            : "text-[#101a29]"
                        }`}
                      >
                        {item.question}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeIndex === index ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <p className="text-[#737588] py-6 text-base font-medium leading-[27px]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ảnh, video bên phải */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={ImageYourAnswer}
                alt="Your Answer"
                className="w-full h-auto"
              />

              <button
                onClick={() => setOpenVideo(true)}
                className="absolute top-4 sm:top-8 right-4 sm:right-16 p-3 sm:p-4 rounded-full bg-white flex items-center justify-center"
              >
                <FaPlay className="text-blue-600 ml-1" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal video overlay */}
      {openVideo && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
          onClick={() => setOpenVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenVideo(false)}
              className="absolute top-3 right-3 text-white text-2xl z-10"
            >
              <IoClose />
            </button>

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/V7LJR_u85tg?si=GG-zXaB_LNG9Dc8v"
              title="Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}