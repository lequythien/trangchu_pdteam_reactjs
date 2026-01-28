import React, { useState } from "react";
import { motion } from "framer-motion";
import Img1 from "../../../assets/images/gallery-1.png";
import Img2 from "../../../assets/images/gallery-2.png";
import Img3 from "../../../assets/images/gallery-3.png";
import Img4 from "../../../assets/images/gallery-4.png";
import Img5 from "../../../assets/images/gallery-5.png";
import Img6 from "../../../assets/images/gallery-6.png";
import Img7 from "../../../assets/images/gallery-7.png";
import Img8 from "../../../assets/images/gallery-8.png";

// Import các trang
import { ViewAll } from "../../../components/GalleryItem/ViewAll/index";
import { Software } from "../../../components/GalleryItem/Software/index";
import { NewProject } from "../../../components/GalleryItem/NewProject/index";
import { Digitals } from "../../../components/GalleryItem/Digitals/index";
import { Hardware } from "../../../components/GalleryItem/Hardware/index";

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];

export default function GalleryHere() {
  const [tab, setTab] = useState("all");
  const [isChanging, setIsChanging] = useState(false);

  const handleTabChange = (newTab) => {
    if (newTab === tab) return;

    setIsChanging(true);

    setTimeout(() => {
      setTab(newTab);
      setTimeout(() => {
        setIsChanging(false);
      }, 50);
    }, 180);
  };

  return (
    <section className="max-w-7xl mx-auto text-center py-28">
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
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-6 py-2 mb-4 text-sm font-medium bg-white shadow rounded-full">
            Gallery Here
          </span>

          <h2 className="text-[32px] md:text-[40px] font-semibold leading-tight text-[#101a29] mb-12">
            Latest <span className="text-blue-600">Project</span> Are Here
          </h2>
        </motion.div>
      </motion.div>

      <div className="md:inline-flex flex flex-wrap bg-[#f8f9fc] rounded-md mb-12 gap-2">
        {[
          ["all", "View All"],
          ["software", "Software"],
          ["new", "New Project"],
          ["digitals", "Digitals"],
          ["hardware", "Hardware"],
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => handleTabChange(key)}
            className={`
              px-5 py-2 text-base font-semibold rounded-md
              transition-colors duration-300
              whitespace-nowrap cursor-pointer
              ${tab === key ? "text-blue-600" : "text-[#101a29] hover:text-blue-600"}
            `}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        className={`
          transition-opacity duration-200 ease-out
          ${isChanging ? "opacity-0" : "opacity-100"}
        `}
      >
        <div
          className={`
            absolute inset-0 bg-white pointer-events-none z-10
            transition-opacity duration-150
            ${isChanging ? "opacity-60" : "opacity-0"}
          `}
        />

        <div className="relative px-4 lg:px-0">
          {tab === "all" && <ViewAll images={images} />}
          {tab === "software" && <Software images={images} />}
          {tab === "new" && <NewProject images={images} />}
          {tab === "digitals" && <Digitals images={images} />}
          {tab === "hardware" && <Hardware images={images} />}
        </div>
      </div>
    </section>
  );
}
