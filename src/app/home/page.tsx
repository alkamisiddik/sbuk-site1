import AboutUs from "@/components/home/about/AboutUs";
import Announcements from "@/components/home/announcement/Announcement";
import ContactPage from "@/components/home/contact/Contact";
import Feedback from "@/components/home/customerFeedback/FeedbackTemp";
import Finance from "@/components/home/finance/Finance";
import Carousel from "@/components/home/Carousel";
import MiddleComponent from "@/components/home/MiddleComponent";
import KeyServices from "@/components/home/keyServices/KeyService";
import ServiceList from "@/components/home/services/ServiceList";
import siteData from '../../../public/siteData.json';

export default function HomePage() {
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
    )
}