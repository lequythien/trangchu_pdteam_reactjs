import React from "react";
import Header from "../../components/Header";
import AboutUs from "./AboutUs";
import WhatWeOffer from "./WhatWeOffer";
import YourAnswer from "./YourAnswer";
import MeetOurExperts from "./MeetOurExperts";
import AboutUs2 from "./AboutUs2";
import GalleryHere from "./GelleryHere";
import GetInTouch from "./GetInTouch";
import Testimonial from "./Testimonial";
import RecentBlog from "./RecentBlog";
import ClientSlider from "./ClientSlider";

const Home = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <WhatWeOffer />
      <YourAnswer />
      <MeetOurExperts />
      <AboutUs2 />
      <GalleryHere />
      <GetInTouch />
      <Testimonial />
      <RecentBlog />
      <ClientSlider />
    </div>
  );
};

export default Home;
