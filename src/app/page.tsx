'use client';

import KeyServices from "@/components/keyServices/KeyService";
import siteData from '../../public/siteData.json';
import Carousel from "@/components/home/Carousel";
import MiddleComponent from "@/components/home/MiddleComponent";
import AboutUs from "@/components/about/AboutUs";
import ServiceList from "@/components/services/ServiceList";
import Finance from "@/components/finance/Finance";
import Feedback from "@/components/customerFeedback/FeedbackTemp";
import Announcements from "@/components/announcement/Announcement";
import ContactPage from "@/components/contact/Contact";

export default function Home() {

  return (
    <>
      <Carousel slides={siteData.carousel} />
      <MiddleComponent middleComponent={siteData.middleComponent} />
      <KeyServices keyServices={siteData.keyServices} />
      <AboutUs aboutUs={siteData.aboutUs} />
      <ServiceList serviceList={siteData.serviceList} />
      <Finance finances={siteData.finances} />
      <Feedback feedbacks={siteData.feedbacks} />
      <Announcements announcementData={siteData.announcementData} />
      <ContactPage contactData={siteData.contactData} />
    </>
  );
}
