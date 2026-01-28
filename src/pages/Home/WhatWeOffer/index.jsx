import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GrFormNextLink } from "react-icons/gr";
import IconWeb from "../../../assets/icons/icon-web.svg";
import IconBigData from "../../../assets/icons/icon-bigdata.svg";
import IconCyberSecurity from "../../../assets/icons/icon-cybersecurity.svg";
import IconMobileApp from "../../../assets/icons/icon-mobileapp.svg";
import "./index.css";

const services = [
  {
    icon: IconWeb,
    title: "Web Development",
    desc: "Research ipsum dolor sit consec tetur sed diam in the aliquam tempor",
  },
  {
    icon: IconBigData,
    title: "Big Data Analytics",
    desc: "Create ipsum dolor sit consec tetur sed diam in the aliquam tempor",
  },
  {
    icon: IconCyberSecurity,
    title: "Cyber security",
    desc: "Develope ipsum dolor sit consec tetur sed diam in the aliquam tempor",
  },
  {
    icon: IconMobileApp,
    title: "Mobile App",
    desc: "Shop ipsum dolor sit consec tetur Malesuada sed diam in the aliquam tempor",
  },
];

export default function WhatWeOffer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section
      ref={ref}
      className="bg-whatweoffer py-28 lg:py-36"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4"
      >
        <div className="text-center mb-14">
          <span className="inline-block mb-4 px-5 py-2 rounded-full bg-white text-[#101a29] shadow-sm text-sm font-medium tracking-wide">
            WHAT WE OFFER
          </span>

          <h1 className="text-[32px] md:text-[40px] font-semibold text-gray-900 leading-tight">
            It <span className="text-blue-600">Service</span> Refers To The{" "}
            <br className="hidden sm:block" />
            Provision Of Support
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.5,
              }}
              className="bg-gray-50 rounded-sm px-5 py-6 shadow offer-card"
            >
              <div className="icon-flip-wrapper mb-6">
                <div className="icon-flip">
                  <div className="icon-face icon-front">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="icon-face icon-back">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#101a29] mb-4">
                {item.title}
              </h3>

              <p className="text-[#737588] text-base font-medium leading-relaxed mb-6">
                {item.desc}
              </p>

              <button
                className="
                  relative
                  flex items-center gap-1
                  text-sm sm:text-base font-semibold text-gray-900
                  transition-colors duration-300
                  hover:text-blue-600
                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[1px]
                  after:w-0
                  after:bg-blue-600
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                Read More <GrFormNextLink className="text-xl" />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}