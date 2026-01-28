import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MdAdd } from "react-icons/md";
import DiscoverMoreButton from "../../../components/Button";
import ImageAbout1 from "../../../assets/images/img-getintouch1.png";
import ImageAbout2 from "../../../assets/images/img-getintouch2.png";

function SkillItem({ skill }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = skill.percent;
    const duration = 800;
    const stepTime = Math.max(Math.floor(duration / end), 15);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, skill.percent]);

  return (
    <div
      ref={ref}
      className="bg-white p-5 rounded-md shadow-lg flex items-center gap-4"
    >
      <div className="flex-shrink-0 flex items-center justify-center rounded-lg">
        <img src={skill.icon} alt={skill.title} className="w-[60px] h-[60px]" />
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <p className="font-medium text-black text-sm sm:text-base">
            {skill.title}
          </p>
          <span className="text-blue-600 font-semibold text-sm sm:text-base">
            {count}%
          </span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isInView ? `${skill.percent}%` : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full bg-blue-600 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default function GetInTouch() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative flex justify-start lg:justify-end order-1 lg:order-2"
          >
            <img
              src={ImageAbout1}
              alt="About background"
              className="w-[300px] sm:w-[340px] md:w-[450px] lg:w-[600px]"
            />

            <img
              src={ImageAbout2}
              alt="About foreground"
              className="absolute z-10 w-[230px] sm:w-[260px] md:w-[320px] lg:w-[450px] top-1/2 left-1/3 lg:left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="px-4 md:px-0 order-2 lg:order-1"
          >
            <span className="inline-block px-6 py-2 mb-4 text-sm font-medium text-[#101a29] bg-white shadow rounded-full">
              GET IN TOUCH
            </span>

            <h2 className="text-[32px] md:text-[40px] font-semibold leading-tight text-[#101a29] mb-4">
              Your Business To <span className="text-blue-600">Growth</span>{" "}
              Please Touch ?
            </h2>

            <p className="text-[#737588] font-medium mb-8 max-w-xl text-base">
              For your car we will do everything advice design in us repairs and
              maintenance. We are the some preferred.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Name Here"
                className="w-full py-3 px-4 rounded-md border border-gray-200 outline-none"
              />
              <input
                type="text"
                placeholder="Contact Here"
                className="w-full py-3 px-4 rounded-md border border-gray-200 outline-none"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Here"
                className="w-full py-3 px-4 rounded-md border border-gray-200 outline-none"
              />
            </div>

            <div className="w-full">
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full py-3 px-4 rounded-md border border-gray-200 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-gray-300 resize-y"
              />
            </div>

            <div className="mt-10">
              <DiscoverMoreButton href="/contact">
                Contact Us <MdAdd className="text-xl" />
              </DiscoverMoreButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
