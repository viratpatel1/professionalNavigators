'use client';

import { useEffect, useRef, useState } from 'react';
import { FaUserTie } from 'react-icons/fa6';

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

    const scrollRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [index, setIndex] = useState(0);
    const [expanded, setExpanded] = useState<boolean[]>(Array(testimonials.length).fill(false));

    // Helper to shorten text
    const getShortText = (text: string, maxChars = 150) => {
        if (text.length <= maxChars) return text;
        return text.substring(0, maxChars) + "...";
    };

    // Auto-scroll function
    const startAutoScroll = () => {
        if (intervalRef.current) return; // already running
        const container = scrollRef.current;
        if (!container) return;

        intervalRef.current = setInterval(() => {
            if (!container) return;
            const card = container.querySelector("div");
            if (!card) return;

            const cardWidth = (card as HTMLElement).offsetWidth + 16;
            const newIndex = (index + 1) % testimonials.length;

            container.scrollTo({
                left: cardWidth * newIndex,
                behavior: "smooth",
            });

            setIndex(newIndex);
        }, 2500);
    };

    const stopAutoScroll = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        startAutoScroll();
        return () => stopAutoScroll();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index]);

    // Handle manual scroll to update index for auto-scroll continuity
    const handleManualScroll = () => {
        const container = scrollRef.current;
        if (!container) return;

        const card = container.querySelector("div");
        if (!card) return;

        const cardWidth = (card as HTMLElement).offsetWidth + 16;
        const scrollLeft = container.scrollLeft;
        const newIndex = Math.round(scrollLeft / cardWidth);

        setIndex(newIndex);
    };

    return (
        <section id="success" className="scroll-pt-0 pb-15 px-4 lg:px-35 bg-white relative overflow-hidden">
            <div className="text-center mb-25">
                <h2 className="text-4xl font-extrabold text-black mb-12">Testimonials</h2>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
                {/* Left Side Text */}
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                        What our students <br /> have to say
                    </h2>
                    <p className="text-gray-700 text-lg">
                        Hear directly from our students about their journey with SPC! With expert guidance, innovative teaching methods, and a student-first approach, we have helped shape countless CA aspirants into future professionals.
                    </p>
                </div>

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    className="lg:w-1/2 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth"
                    onMouseEnter={stopAutoScroll}
                    onMouseLeave={startAutoScroll}
                    onTouchStart={stopAutoScroll}
                    onTouchEnd={startAutoScroll}
                    onScroll={handleManualScroll}
                >
                    {testimonials.map((item, i) => (
                        <div
                            key={i}
                            className="
        bg-gray-50 rounded-xl shadow-md p-6
        flex-shrink-0 snap-center
        w-[90vw] sm:w-[300px] md:w-[350px]
        box-border
      "
                        >
                            <div className="flex flex-col gap-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center self-center">
                                    <FaUserTie className="text-3xl text-gray-600" />
                                </div>

                                <p className="text-gray-800 text-sm break-words">
                                    {expanded[i] ? item.feedback : getShortText(item.feedback)}
                                </p>

                                {item.feedback.length > 150 && (
                                    <button
                                        onClick={() => {
                                            const newExpanded = [...expanded];
                                            newExpanded[i] = !newExpanded[i];
                                            setExpanded(newExpanded);
                                        }}
                                        className="text-gray-600 text-sm font-medium underline self-start cursor-pointer hover:text-gray-800"
                                    >
                                        {expanded[i] ? "Read Less" : "Read More"}
                                    </button>
                                )}

                                <p className="text-gray-900 font-semibold">{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
