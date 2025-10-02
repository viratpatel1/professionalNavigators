'use client';

import { useState } from 'react';
import { FaUserTie, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export default function TestimonialSection() {
    const testimonials = [
        { name: "Aakarsh Shukla – CA Final Student", feedback: "I joined Professional Navigator’s mentorship for my CA Final and it was truly a game-changer. Prachi Ma’am ensured accountability with regular follow-ups, which kept me focused every single day. Writing full-length test papers helped me improve speed and attempt papers completely. With her structured schedule and planned revisions, I was able to cover everything systematically and study 10+ hours daily without wasting time. This was undoubtedly my best attempt, and I’ll always be grateful for her constant guidance and support." },
        // { name: "Aakarsh Shukla – CA Intermediate Student", feedback: "I had taken Professional Navigator’s Mentorship program for my CA Final exams of May 25. Prachi Maam was guiding me throughout the journey till my last exam. I can pinpoint various key factors that helped me give my best in this attempt.I can honestly tell this was my best attempt. 1.Accountability is what really helped me in this program.I was being accountable for every hour through constant follow up by Prachi Maam. Just by realizing that she’s gonna call me after every 2-3 hrs to check up on me about my study status, It kept me on my toes and my mind would wander less on unnecessary things. It helped me cut down on my unnecessary breaks and even while studies used to slow down sometimes for any reason I was still on track. 2.Test paper writing- I was able to write 3 to 4 full portion test paper that I had never written before in any attempts.I had written a full portion test even a day before for IDT exams that helped me feel confident about my preparation. Test paper writing of 3 hrs helps you to work on your speed and helps you analyze your mistakes. My paper always used to be incomplete during the final exam. Test paper writing helped me bridge that gap this time. 3.Everyday schedule- I didn’t have to invest time in planning where to start from.Every day I knew what I had study and I used to go for it. Even while changing subjects, we invest time in planning how to go about a particular subject, which was easier and quicker with Prachi maam’s guidance. 4.Proper schedule- I was able to study for minimum 10 hrs every day because I knew what I had to study and how much time to invest on what topics. 5.Multiple revisions- I was a set number of days for revisions and after that test paper writing Used to be conducted.So because of this cycle I was able to revise atleast 2-3 times that helped me significantly improve my performance in exams. A feedback if I can give would be to simply ask questions to mentees and listen attentively on what help do they need, what they think is lacking in their preparation and then you focus your efforts in bridging that gap. Every mentee is different and they join mentorship to get their issues addressed.One method for all the mentees might not be effective. Thanks to Professional Navigators and Prachi Maam for her guidance.She has always been diligent in her approach of helping me move ahead.I’ll always remember her contribution in this preparation journey." },
        { name: "Ayush Jain – CA Final Student", feedback: "Professional Navigator’s mentorship was really a great step for me in CA Final prep. Prachi Ma’am’s follow-ups kept me accountable, and the test papers improved both my speed and confidence. Her planned schedule made studying so much easier. This was my best attempt till now, and I’m truly grateful for her guidance." },
        { name: "Nikhil Mehra – CA Final Student", feedback: "The mock tests were game-changing. I used to avoid them, but here they were regular and part of the routine. That helped me build exam stamina and understand my weak areas." },
        { name: "Riya Sharma – CA Intermediate Student", feedback: "I joined for the 10-day trial just to see how it works and I ended up staying the entire journey. The daily targets and follow-ups kept me super consistent. I finally stopped procrastinating and started studying with a proper plan." },
        { name: "Ravi Gupta – CA Foundation Student", feedback: "What helped me most was the structure. I didn't have to think 'what should I do today?' It was already planned for me. Daily goals, consistent follow-ups, and quick doubt-solving made all the difference." },
        { name: "Meenal Deshpande – CS Executive Student", feedback: "The team didn’t just guide me—they kept checking in on my progress. Even during exams, they were there to motivate me. It felt like I had someone walking beside me, not just giving instructions from afar." },
        // { name: "Aditi Verma – CMA Inter Student", feedback: "During the 10-day trial, I saw how serious they were about helping students. It wasn't just a test—it was real support. That trial gave me clarity and confidence to commit fully." },
        { name: "Shruti Shah – CS Professional Student", feedback: "What I loved was the personal attention. They remembered what I was working on, asked about my progress, and celebrated small wins. That kind of motivation kept me going, especially during tough phases." }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [expandedCards, setExpandedCards] = useState<boolean[]>(
        Array(testimonials.length).fill(false)
    );

    const toggleTestimonial = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const toggleCardExpand = (index: number) => {
        const newExpanded = [...expandedCards];
        newExpanded[index] = !newExpanded[index];
        setExpandedCards(newExpanded);
    };

    const getShortText = (text: string, maxChars = 200) => {
        if (text.length <= maxChars) return text;
        return text.substring(0, maxChars) + "...";
    };

    return (
        <section className="py-15 px-4 lg:px-35 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-black mb-6">Testimonials</h2>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
                {/* Left Text */}
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                        What our students <br />
                        have to say
                    </h2>
                    <p className="text-gray-700 text-lg">
                        Hear directly from our students about their journey with SPC! With expert guidance, innovative teaching methods, and a student-first approach, we have
                        helped shape countless CA aspirants into future professionals.
                    </p>
                </div>

                <div className="w-full lg:w-1/2">
                    {/* Mobile Carousel with Controls */}
                    <div className="lg:hidden">
                        <div className="bg-gray-50 rounded-xl shadow-md p-6 border border-gray-200">
                            <div className="flex flex-col gap-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center self-center">
                                    <FaUserTie className="text-3xl text-gray-600" />
                                </div>

                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {testimonials[currentIndex].feedback}
                                </p>

                                <p className="text-gray-900 font-semibold text-center">
                                    {testimonials[currentIndex].name}
                                </p>
                            </div>
                        </div>

                        {/* Carousel Controls */}
                        <div className="flex items-center justify-between mt-4">
                            <button
                                onClick={prev}
                                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                            >
                                <FaChevronLeft className="text-gray-700" />
                            </button>

                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-gray-700' : 'bg-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={next}
                                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                            >
                                <FaChevronRight className="text-gray-700" />
                            </button>
                        </div>
                    </div>

                    {/* Desktop Horizontal Scroll */}
                    <div className="hidden lg:flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl shadow-md p-6 flex-shrink-0 w-[400px] hover:shadow-lg transition-shadow duration-300 flex flex-col"
                            >
                                <div className="flex flex-col gap-4 h-full">
                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center self-center bg-white shadow-sm">
                                        <FaUserTie className="text-2xl text-gray-600" />
                                    </div>

                                    {/* Feedback Text with Read More */}
                                    <div className="flex-grow">
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            {expandedCards[index] ? item.feedback : getShortText(item.feedback)}
                                        </p>
                                        {item.feedback.length > 200 && (
                                            <button
                                                onClick={() => toggleCardExpand(index)}
                                                className="text-blue-600 text-sm font-medium mt-2 hover:text-blue-800 transition-colors"
                                            >
                                                {expandedCards[index] ? "Read Less" : "Read More"}
                                            </button>
                                        )}
                                    </div>

                                    {/* Name */}
                                    <div className="mt-auto pt-3 border-t border-gray-200">
                                        <p className="text-gray-900 font-semibold text-sm">
                                            {item.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}