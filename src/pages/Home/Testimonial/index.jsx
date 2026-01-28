import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import ImgUser1 from "../../../assets/images/img-testimonial1.png";
import ImgUser2 from "../../../assets/images/img-testimonial2.png";
import ImgBg from "../../../assets/images/img-bg-testimonial.png";
import Icon1 from "../../../assets/icons/icon-testimonial1.svg";
import Icon2 from "../../../assets/icons/icon-testimonial2.svg";
import Icon3 from "../../../assets/icons/icon-testimonial3.svg";
import TestimonialQuote from "../../../assets/images/testimonial.png";
import "./index.css";

const TESTIMONIALS = [
  { id: 1, user: ImgUser1, name: "Devon Lane 1" },
  { id: 2, user: ImgUser2, name: "Devon Lane 2" },
  { id: 3, user: ImgUser1, name: "Devon Lane 3" },
  { id: 4, user: ImgUser2, name: "Devon Lane 4" },
];

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function CountUpNumber({ value, duration = 1200 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const current = Math.floor(progress * value);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function Testimonial() {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
      setPage(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(TESTIMONIALS.length / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) =>
    TESTIMONIALS.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage),
  );

  return (
    <>
      <section className="bg-testimonial">
        <div className="max-w-7xl mx-auto px-4 pb-24 md:pb-0">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="inline-block mb-4 px-6 py-2 rounded-full bg-white text-[#101a29] shadow-sm text-sm font-medium">
                Testimonial
              </span>
              <h2 className="text-[32px] md:text-[40px] font-semibold mb-3">
                What Client <span className="text-blue-500">Think</span> About
                Us?
              </h2>
            </motion.div>
          </motion.div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((pageItems, pageIndex) => (
                <div
                  key={pageIndex}
                  className="w-full shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 md:gap-x-20"
                >
                  {pageItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col lg:flex-row items-start gap-6"
                    >
                      <div className="relative w-[180px] h-[220px] shrink-0">
                        <img
                          src={ImgBg}
                          alt=""
                          className="absolute bg-white py-8 w-full h-full object-contain"
                        />

                        <div className="absolute -right-14 top-1/2 -translate-y-1/2">
                          <img
                            src={item.user}
                            alt={item.name}
                            className="rounded-lg p-3"
                          />
                        </div>
                      </div>

                      <div className="relative pt-6 md:pt-4 md:ml-10 text-left">
                        <img
                          src={TestimonialQuote}
                          alt=""
                          className="absolute top-2"
                        />

                        <div className="relative z-10">
                          <p className="text-gray-500 text-[15px] mb-4 leading-relaxed">
                            Let us be a part of your personal and professional
                            growth by providing effective way to learn. Let us
                            be a part of your growth by a fun and effective way.
                          </p>

                          <h3 className="font-bold text-blue-600 text-lg mb-1">
                            {item.name}
                          </h3>

                          <div className="flex py-2 justify-start text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} size={14} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-10 md:mt-14">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer
                  ${page === i ? "w-4 h-4 border border-blue-500" : "w-2 h-2 bg-black"}
                `}
              >
                {page === i && (
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="testimonial-cta">
          <div className="bg-[#246bfd] rounded-2xl px-0 py-10 md:px-10 shadow-xl">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 items-center text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              <motion.div
                variants={iconVariants}
                className="bg-[#FFFFFF1A] w-52 py-8 px-6 md:px-8 md:-ml-10 h-auto md:h-full flex items-center"
              >
                <h5 className="text-xl font-semibold leading-snug py-1">
                  ALWAYS <br /> HAPPY !
                </h5>
              </motion.div>

              {[
                {
                  icon: Icon1,
                  number: 10,
                  text: "Team member",
                  suffix: "k+",
                },
                { icon: Icon2, number: 200, text: "Team member" },
                { icon: Icon3, number: 200, text: "Team member" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={iconVariants}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center px-4 md:px-0 gap-10 md:gap-8"
                >
                  <div className="icon-wrapper shrink-0 px-4 md:px-0">
                    <div className="icon-flip flex items-center justify-center">
                      <div className="icon-face icon-front">
                        <img src={item.icon} alt="" />
                      </div>
                      <div className="icon-face icon-back">
                        <img src={item.icon} alt="" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-semibold leading-none">
                      <CountUpNumber value={item.number} />
                      {item.suffix}
                    </h4>
                    <p className="text-base opacity-90 mt-1">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <div className="hidden md:block bg-white h-40" />
    </>
  );
}
