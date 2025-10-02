'use client';

import { useEffect, useRef, useState } from 'react';
import { FaUserTie } from 'react-icons/fa6';

export default function TestimonialSection() {
    const testimonials = [
        { name: "Aakarsh Shukla – CA Final Student", feedback: "I joined Professional Navigator’s mentorship for my CA Final and it was truly a game-changer. Prachi Ma’am ensured accountability with regular follow-ups, which kept me focused every single day. Writing full-length test papers helped me improve speed and attempt papers completely. With her structured schedule and planned revisions, I was able to cover everything systematically and study 10+ hours daily without wasting time. This was undoubtedly my best attempt, and I’ll always be grateful for her constant guidance and support." },
        { name: "Ayush Jain – CA Final Student", feedback: "Professional Navigator’s mentorship was really a great step for me in CA Final prep. Prachi Ma’am’s follow-ups kept me accountable, and the test papers improved both my speed and confidence. Her planned schedule made studying so much easier. This was my best attempt till now, and I’m truly grateful for her guidance." },
        { name: "Nikhil Mehra – CA Final Student", feedback: "The mock tests were game-changing. I used to avoid them, but here they were regular and part of the routine. That helped me build exam stamina and understand my weak areas." },
        { name: "Riya Sharma – CA Intermediate Student", feedback: "I joined for the 10-day trial just to see how it works and I ended up staying the entire journey. The daily targets and follow-ups kept me super consistent. I finally stopped procrastinating and started studying with a proper plan." },
        { name: "Ravi Gupta – CA Foundation Student", feedback: "What helped me most was the structure. I didn't have to think 'what should I do today?' It was already planned for me. Daily goals, consistent follow-ups, and quick doubt-solving made all the difference." },
        { name: "Meenal Deshpande – CS Executive Student", feedback: "The team didn’t just guide me—they kept checking in on my progress. Even during exams, they were there to motivate me. It felt like I had someone walking beside me, not just giving instructions from afar." },
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
                            className="bg-gray-50 rounded-xl shadow-md p-6 w-full sm:min-w-[300px] sm:max-w-[350px] flex-shrink-0 snap-center"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center self-center">
                                    <FaUserTie className="text-3xl text-gray-600" />
                                </div>

                                <p className="text-gray-800 text-sm">
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
