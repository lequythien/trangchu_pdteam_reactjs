import React from "react";
import { motion, easeOut } from "framer-motion";
import { GrFormNextLink } from "react-icons/gr";
import RecentBlog1 from "../../../assets/images/recentblog1.png";
import RecentBlog2 from "../../../assets/images/recentblog2.png";
import RecentBlog3 from "../../../assets/images/recentblog3.png";

const blogs = [
  {
    image: RecentBlog1,
    title: "Transforming businesses, one pixel at a time",
    slug: "transforming-businesses-one-pixel-at-a-time",
  },
  {
    image: RecentBlog2,
    title: "The Importance of a Strong Digital for Strategy",
    slug: "importance-strong-digital-strategy",
  },
  {
    image: RecentBlog3,
    title: "Creating Engaging Content: A Guide for Digital",
    slug: "creating-engaging-content-guide",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
      delay: index * 0.15,
    },
  }),
};

export default function RecentBlog() {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <span className="inline-block mb-4 rounded-full bg-white shadow px-5 py-1 text-sm font-medium tracking-wider text-black">
            RECENT BLOG
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold leading-tight text-gray-900">
            Transforming <span className="text-blue-600">Businesses</span>{" "}
            Through Software Innovation
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-md shadow relative group overflow-hidden"
            >
              <div className="relative h-[220px] sm:h-[260px] lg:h-[300px]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-md
                             transition-transform duration-500 ease-out
                             group-hover:scale-110 z-0"
                />

                <span
                  className="absolute -bottom-5 sm:-bottom-6 right-0 z-20
                             bg-blue-600 text-white text-sm sm:text-base
                             font-semibold px-4 py-2 sm:py-3
                             rounded-l-md shadow-sm"
                >
                  NEWS
                </span>
              </div>

              <div className="relative z-10 p-5 sm:p-6 pt-7 sm:pt-8 bg-white">
                <p className="text-sm sm:text-base font-semibold text-[#737588] mb-2">
                  11 january, 2023
                </p>

                <a
                  href={`/blog/${blog.slug}`}
                  className="block text-lg sm:text-xl font-semibold text-gray-900 mb-4 leading-snug
                             hover:text-blue-600 transition-colors duration-300"
                >
                  {blog.title}
                </a>

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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}