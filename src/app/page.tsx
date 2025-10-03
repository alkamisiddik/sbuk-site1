'use client';

import KeyServices from "@/components/keyServices/KeyService";
import Carousel from "@/components/home/Carousel";
import MiddleComponent from "@/components/home/MiddleComponent";
import AboutUs from "@/components/about/AboutUs";
import ServiceList from "@/components/services/ServiceList";
import Finance from "@/components/finance/Finance";
import Feedback from "@/components/customerFeedback/feedback";
import Announcements from "@/components/announcement/Announcement";
import ContactPage from "@/components/contact/Contact";

export default function Home() {


  return (
    <>
      <Carousel />
      <MiddleComponent />
      <KeyServices />
      <AboutUs />
      <ServiceList />
      <Finance />
      <Feedback />
      <Announcements />
      <ContactPage />
    </>
  );
}
