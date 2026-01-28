import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ImageAbout1 from "../../../assets/images/img-about1.png";
import ImageAbout2 from "../../../assets/images/img-about2.png";
import IconWeb from "../../../assets/images/web.svg";
import IconCloud from "../../../assets/images/cloud.svg";

const SKILLS = [
  {
    title: "Web Development",
    percent: 90,
    icon: IconWeb,
  },
  {
    title: "Cloud Solutions",
    percent: 80,
    icon: IconCloud,
  },
];

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

export default function AboutUs() {
  return (
    <section className="relative py-32 pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto md:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Phần ảnh bên trái */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-start"
          >
            <img
              src={ImageAbout1}
              alt="About background"
              className="w-[360px] md:w-[450px] lg:w-[600px]"
            />

            <img
              src={ImageAbout2}
              alt="About foreground"
              className="
                absolute z-10
                w-[300px] md:w-[360px] lg:w-[450px]
                top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
              "
            />
          </motion.div>

          {/* Phần nội dung bên phải */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="md:px-0 px-4"
          >
            <span className="inline-block px-5 py-2 mb-4 text-sm font-medium text-[#101a29] bg-white shadow rounded-full">
              ABOUT US
            </span>

            <h2 className="text-[32px] md:text-[40px] font-semibold leading-tight text-[#101a29] mb-6">
              Transforming Businesses Through{" "}
              <span className="text-blue-600">Software</span> Innovation
            </h2>

            <p className="text-[#737588] font-medium mb-8 lg:mb-10 max-w-xl text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </p>

            <div className="space-y-5">
              {SKILLS.map((skill) => (
                <SkillItem key={skill.title} skill={skill} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
