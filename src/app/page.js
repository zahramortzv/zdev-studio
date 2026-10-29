import Navbar from "@/features/home/Navbar";
import LandingPage from "@/features/home/LandingPage";
import ServicesPage from "@/features/services/ServicesPage";
import ProjectPage from "@/features/projects/ProjectPage";
import WorkflowPage from "@/features/workflow/WorkflowPage";
import AboutPage from "@/features/about/AboutPage";
import OrderForm from "@/features/order/Order";
import FaqPage from "@/features/faq/FaqPage";
import ContactUs from "@/features/contact-us/ContactUs";
import Footer from "@/features/home/Footer";
import Marquee from "@/features/home/Marquee";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <LandingPage />
        <Marquee />
        <ServicesPage />
        {/* <ProjectPage /> */}
        <WorkflowPage />
        <AboutPage />
        <OrderForm />
        <FaqPage />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
