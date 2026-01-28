import { useEffect } from "react";
import FooterLogo from "../../assets/images/logo2.png";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaChevronRight,
} from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0e1a2b] text-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-14">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 lg:gap-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <img
                src={FooterLogo}
                alt="AgileTech Logo"
                className="mb-6 max-w-[150px]"
              />

              <p className="text-white font-medium text-base leading-relaxed mb-6 max-w-sm">
                Melbourne is simply is dumiomy is text <br />
                Lorem Ipsum is simply
              </p>

              <div className="flex gap-2">
                {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
                  (Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-9 h-9 flex items-center justify-center rounded bg-[#1e2a3a] hover:bg-blue-600 transition"
                    >
                      <Icon size={14} />
                    </a>
                  ),
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 sm:gap-y-0 sm:gap-x-10 lg:gap-x-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
                },
              }}
            >
              <div>
                <h4 className="text-xl font-semibold mb-6">Our Service</h4>
                <ul className="space-y-4 text-white font-medium text-base">
                  {[
                    "Digital Marketing",
                    "Video Editing",
                    "Pc Repairs",
                    "Web Development",
                  ].map((item, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="flex items-center gap-2 hover:text-[#246bfd] transition"
                      >
                        <FaChevronRight size={12} className="text-[#333f4d]" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.5 },
                },
              }}
            >
              <div>
                <h4 className="text-xl font-semibold mb-6">Our Service</h4>

                <p className="text-white font-medium text-base mb-6 max-w-sm">
                  Melbourne is simply is dumiomy is text Lorem Ipsum is simply
                </p>

                <form className="flex w-full max-w-md">
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="flex-1 min-w-0 px-4 py-3 rounded-l-lg outline-none border border-gray-600 bg-white text-gray-900 placeholder-gray-500 font-semibold"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 px-3 flex items-center justify-center rounded-r-lg hover:bg-[#101a29] transition-colors duration-200"
                    aria-label="Subscribe"
                  >
                    <MdNavigateNext className="text-2xl sm:text-3xl text-white" />
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="bg-[#2f3b49]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4">
          <p className="text-base text-white font-medium">
            © AgileTech 2025 | All Rights Reserved
          </p>

          <div className="flex flex-wrap gap-4 text-base text-white font-medium">
            <a href="#">Terms & Condition</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
