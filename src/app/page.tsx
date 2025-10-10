'use client';

import KeyServices from "@/components/keyServices";
import { Carousel, MiddleComponent } from "@/components/home";
import ServiceList from "@/components/services";
import { AboutUs } from "@/components/about";
import { Finance } from "@/components/finance";
import { Feedback } from "@/components/customerFeedback";
import { Announcement } from "@/components/announcement";
import { Contact } from "@/components/contact";

export default function Home() {


  return (
    <>
      <Carousel />
      <MiddleComponent />
      <KeyServices />
      <AboutUs />
      {/* <ServiceList /> */}
      {/* <Finance /> */}
      {/* <Feedback /> */}
      {/* <Announcement /> */}
      {/* <Contact /> */}
    </>
  );
}
