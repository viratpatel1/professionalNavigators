import Image from "next/image";
import Header from "./components/Header";
import CourseBanner from "./components/Banner";
import ModeOfTeaching from "./components/ModeOfTeaching";
import CACoachingBanner from "./components/Coaching";
import AchievementSection from "./components/Achievement";
import TestimonialSection from "./components/Testimonial";
import TopRankers from "./components/TopRankers";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import LoginPage from "./auth/page";
import Dashboard from "./auth/Dashboard";

export default function Home() {
  return (
    <>
    <Header />
    <CourseBanner />
    <ModeOfTeaching />
    <CACoachingBanner />
    <AchievementSection />
    <TestimonialSection />
    <TopRankers />
    <FaqSection />
    <Footer />

    {/* <Dashboard /> */}

    {/* <LoginPage /> */}
    {/* <RegisterPage /> */}

    </>
  );
}