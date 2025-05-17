
import React from 'react'
import Header from '../components/Header'
import CourseBanner from '../components/Banner'
import ModeOfTeaching from '../components/ModeOfTeaching'
import CACoachingBanner from '../components/Coaching'
import TestimonialSection from '../components/Testimonial'
import FaqSection from '../components/FaqSection'
import Footer from '../components/Footer'

export default function Dashboard() {
    return (
        <>
            <section className='scroll-smooth'>
                <Header />
                <CourseBanner />
                <ModeOfTeaching />
                <CACoachingBanner />
                {/* <AchievementSection /> */}
                <TestimonialSection />
                {/* <TopRankers /> */}
                <FaqSection />
                <Footer />
            </section>
        </>
    )
}
