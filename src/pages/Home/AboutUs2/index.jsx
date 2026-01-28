import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRegCircleCheck } from "react-icons/fa6";
import ImageMission from "../../../assets/images/img-aboutus.png";
import ImageVision from "../../../assets/images/img-aboutus2.png";
import ImageCareers from "../../../assets/images/img-aboutus2.png";
import ImageSolutions from "../../../assets/images/img-aboutus.png";

const TABS = [
  {
    key: "mission",
    label: "Mission",
    image: ImageMission,
    title: "The software development",
    description:
      "A software company is a business that designs, develops, and sells software products to individuals and organizations. These companies use a variety of programming languages and technologies to create custom software solutions for a wide range of industries",
    features: [
      "Mistakes To Avoid to the",
      "Mistakes To Avoid to the",
      "Your Startup industry stan",
      "Your Startup industry stan",
    ],
  },
  {
    key: "vision",
    label: "Vision",
    image: ImageVision,
    title: "The software development",
    description:
      "A software company is a business that designs, develops, and sells software products to individuals and organizations. These companies use a variety of programming languages and technologies to create custom software solutions for a wide range of industries",
    features: [
      "Mistakes To Avoid to the dum",
      "Mistakes To Avoid to the dum",
      "Your Startup industry stan",
      "Your Startup industry stan",
    ],
  },
  {
    key: "careers",
    label: "Careers",
    image: ImageCareers,
    title: "The software development",
    description:
      "A software company is a business that designs, develops, and sells software products to individuals and organizations. These companies use a variety of programming languages and technologies to create custom software solutions for a wide range of industries",
    features: [
      "Mistakes To Avoid to the dum",
      "Mistakes To Avoid to the dum",
      "Your Startup industry stan",
      "Your Startup industry stan",
    ],
  },
  {
    key: "solutions",
    label: "Solutions",
    image: ImageSolutions,
    title: "The software development",
    description:
      "A software company is a business that designs, develops, and sells software products to individuals and organizations. These companies use a variety of programming languages and technologies to create custom software solutions for a wide range of industries",
    features: [
      "Mistakes To Avoid to the dum",
      "Mistakes To Avoid to the dum",
      "Your Startup industry stan",
      "Your Startup industry stan",
    ],
  },
];

export default function AboutUs2() {
  const [activeTab, setActiveTab] = useState("mission");
  const [isChanging, setIsChanging] = useState(false);

  const currentTab = TABS.find((tab) => tab.key === activeTab);

  const handleChangeTab = (key) => {
    if (key === activeTab) return;

    setIsChanging(true);
    setTimeout(() => {
      setActiveTab(key);
      setIsChanging(false);
    }, 200);
  };

  return (
    <section className="bg-white pt-28">
      <div className="max-w-7xl mx-auto px-3">
        <motion.div
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="text-center mb-10 sm:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="inline-block mb-4 px-5 py-2 rounded-full bg-white text-[#101a29] shadow-sm text-sm font-medium tracking-wide">
              ABOUT US
            </span>

            <h2 className="text-[32px] lg:text-[40px] font-semibold text-[#101a29] leading-tight lg:leading-[50px]">
              The Power Of <span className="text-blue-600">Software</span> The
              <br className="hidden sm:block" />
              Simplicity Of Solutions
            </h2>
          </motion.div>
        </motion.div>

        <div className="bg-[#f8fafc] rounded-sm overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-gray-200">
            {TABS.map((tab, index) => (
              <button
                key={tab.key}
                onClick={() => handleChangeTab(tab.key)}
                className={`
                  py-4
                  text-base
                  font-semibold
                  transition-colors duration-300
                  cursor-pointer
                  ${index !== TABS.length - 1 ? "border-r border-gray-200" : ""}
                  ${
                    activeTab === tab.key
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-8 lg:p-15">
            <div
              className={`transition-opacity duration-300 ${
                isChanging ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6 items-center">
                <div>
                  <img
                    src={currentTab.image}
                    alt={currentTab.label}
                    className="w-full h-auto"
                  />
                </div>

                <div>
                  <h3 className="text-3xl font-semibold text-[#101a29] mb-4">
                    {currentTab.title}
                  </h3>

                  <p className="text-[#737588] text-base font-medium leading-relaxed mb-6">
                    {currentTab.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentTab.features.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-[#101a29] font-semibold text-base"
                      >
                        <FaRegCircleCheck className="text-blue-600 text-lg mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}