import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import DevonLane from "../../../assets/images/DevonLane.png";
import FalconLane from "../../../assets/images/FalconLane.png";
import WilsonJac from "../../../assets/images/WilsonJac.png";
import "./index.css";

const TEAM = [
  {
    name: "Devon Lane",
    role: "Marketing Department",
    image: DevonLane,
  },
  {
    name: "Falcon Lane",
    role: "Marketing Department",
    image: FalconLane,
  },
  {
    name: "Wilson Jac",
    role: "Marketing Department",
    image: WilsonJac,
  },
];

export default function MeetOurExperts() {
  return (
    <section className="bg-[#101929] md:bg-meetourpage py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-6 py-2 rounded-full bg-white text-[#101a29] shadow-sm text-sm font-medium tracking-wide">
              MEET OUR EXPERTS
            </span>

            <h2 className="text-[32px] md:text-[40px] font-semibold text-white">
              Your Partner In <span className="text-blue-500">Digital</span>{" "}
              Success
            </h2>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((item, index) => (
            <motion.div
              key={index}
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="group rounded-xl overflow-hidden shadow-xl transition-all duration-300"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-auto transition-transform duration-1000 ease-in-out group-hover:scale-105"
                  />
                </div>

                <div className="px-4">
                  <div className="bg-[#cfd1d4] text-center px-6 py-6 rounded-t-2xl relative z-10">
                    <a
                      href="#"
                      className="text-xl font-semibold text-blue-600 hover:text-black"
                    >
                      {item.name}
                    </a>

                    <p className="text-[#101a29] font-medium text-base mt-2">
                      {item.role}
                    </p>

                    <ul className="flex justify-center items-center mt-6">
                      <li className="rounded-l-md overflow-hidden">
                        <a
                          href="#"
                          className="p-3 flex items-center justify-center bg-white border border-gray-300"
                        >
                          <FaFacebookF className="text-[#737588] hover:text-blue-500 duration-700" />
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="p-3 flex items-center justify-center bg-white border-t border-b border-gray-300"
                        >
                          <FaTwitter className="text-[#737588] hover:text-blue-500 duration-700" />
                        </a>
                      </li>

                      <li className="rounded-r-md overflow-hidden">
                        <a
                          href="#"
                          className="p-3 flex items-center justify-center bg-white border border-gray-300"
                        >
                          <FaInstagram className="text-[#737588] hover:text-blue-500 duration-700" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}